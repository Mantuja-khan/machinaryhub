import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/services/api";

import { allProducts, featuredProducts, type Product as DemoProduct } from "@/data/products";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "Trading" | "Manufacturing";
  description: string;
  specifications: Record<string, string>;
  price: number | null;
  image_url: string | null;
  images?: string[];
  stock: number;
  featured: boolean;
  rating?: number;
  numReviews?: number;
  created_at?: string;
  updated_at?: string;
}

const mapDemoToHookProduct = (p: DemoProduct): Product => ({
  id: p.id,
  name: p.name,
  slug: p.slug,
  category: p.category,
  description: p.description,
  specifications: p.specifications,
  price: p.price ?? null,
  image_url: p.image_url || (p.images && p.images[0]) || null,
  images: p.images || [p.image_url].filter(Boolean) as string[],
  stock: p.stock,
  featured: p.featured,
  rating: p.rating ?? 4.8,
  numReviews: p.numReviews ?? 15,
  created_at: p.created_at || new Date().toISOString(),
  updated_at: p.updated_at || new Date().toISOString(),
});

const defaultDemoProducts: Product[] = allProducts.map(mapDemoToHookProduct);
const defaultFeaturedDemoProducts: Product[] = featuredProducts.map(mapDemoToHookProduct);

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => defaultDemoProducts,
    initialData: defaultDemoProducts,
  });

export const useFeaturedProducts = () =>
  useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => defaultFeaturedDemoProducts,
    initialData: defaultFeaturedDemoProducts,
  });


// ================= REVIEWS =================

export const useReviews = (productId: string) =>
  useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => api.getProductReviews(productId),
    enabled: !!productId,
  });

export const useAddReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, data }: { productId: string; data: any }) => {
      const token = localStorage.getItem("token");
      return api.addProductReview(productId, data, token || "");
    },
    onSuccess: (_, { productId }) => {
      // 🔥 Refresh reviews
      queryClient.invalidateQueries({ queryKey: ["reviews", productId] });

      // 🔥 Refresh product (rating update ke liye)
      queryClient.invalidateQueries({ queryKey: ["product"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, reviewId }: { productId: string; reviewId: string }) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated");
      return api.deleteReview(productId, reviewId, token);
    },
    onSuccess: (_, { productId }) => {
      queryClient.invalidateQueries({ queryKey: ["reviews", productId] });
      queryClient.invalidateQueries({ queryKey: ["product"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};


// 🔥 NEW — UPDATE REVIEW SUPPORT

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      productId,
      reviewId,
      data,
    }: {
      productId: string;
      reviewId: string;
      data: any;
    }) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated");

      return api.updateProductReview(productId, reviewId, data, token);
    },
    onSuccess: (_, { productId }) => {
      queryClient.invalidateQueries({ queryKey: ["reviews", productId] });
      queryClient.invalidateQueries({ queryKey: ["product"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
