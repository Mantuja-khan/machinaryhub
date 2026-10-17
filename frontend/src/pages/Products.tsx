import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import ProductDetailModal from "@/components/ProductDetailModal";
import InquiryModal from "@/components/InquiryModal";
import { useProducts, type Product } from "@/hooks/useProducts";
import { toast } from "sonner";

// ── Replace with your actual asset import ──
// import heroCta from "@/assets/hero-bg.jpg";
const heroCta = "https://i.pinimg.com/1200x/8a/d0/1e/8ad01ec3d4a6cccdce109c327ab244eb.jpg";

type Filter = "All" | "Trading" | "Manufacturing";

const Products = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const { data: products = [], isLoading } = useProducts();

  const filtered = useMemo(() => {
    let result = products;

    // Filter by category
    if (filter !== "All") {
      result = result.filter((p) => p.category === filter);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.description.toLowerCase().includes(searchQuery) ||
          p.category.toLowerCase().includes(searchQuery)
      );
    }

    return result;
  }, [filter, products, searchQuery]);

  const navigate = useNavigate();

  const handleBuy = (product: Product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to buy products");
      navigate("/auth");
    } else {
      navigate(`/checkout/${product.slug}`);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Hero / Catalog Header with Clean Light Theme ── */}
        <section className="relative py-14 sm:py-16 bg-slate-50 border-b border-slate-200 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#0952b5_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 container mx-auto px-4 max-w-3xl"
          >
            <p className="font-heading text-xs sm:text-sm tracking-[0.3em] text-primary font-bold mb-2 uppercase">OUR EQUIPMENT CATALOG</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              {searchQuery ? (
                <>
                  SEARCH RESULTS FOR: <span className="text-primary">"{searchQuery.toUpperCase()}"</span>
                </>
              ) : (
                <>
                  HEAVY MACHINERY & <span className="text-primary">EQUIPMENT</span>
                </>
              )}
            </h1>
            <p className="max-w-xl mx-auto text-slate-600 text-sm sm:text-base mt-3">
              Explore our fleet of certified trading machinery and high-precision manufactured equipment backed by industry-standard warranties.
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {(["All", "Trading", "Manufacturing"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 font-heading text-xs tracking-wider transition-colors ${filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
                  }`}
              >
                {f.toUpperCase()}
                {f !== "All" && (
                  <span className="ml-2 opacity-60">
                    ({products.filter((p) => p.category === f).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Explore & Quote buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              to="/products"
              onClick={() => setFilter("All")}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-heading text-xs tracking-wider hover:bg-primary/90 transition-colors"
            >
              EXPLORE PRODUCTS
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 border border-primary text-primary font-heading text-xs tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              GET QUOTE
            </Link>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="flex"
                >
                  <ProductCard
                    product={product}
                    onInquiry={setInquiryProduct}
                    onBuy={handleBuy}
                    onViewDetails={setDetailProduct}
                  />
                </motion.div>
              ))}
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground mt-8">
            Showing {filtered.length} of {products.length} products
          </p>
        </div>
      </main>
      <Footer />

      {inquiryProduct && (
        <InquiryModal product={inquiryProduct} onClose={() => setInquiryProduct(null)} />
      )}
      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onInquiry={(p) => {
            setDetailProduct(null);
            setInquiryProduct(p);
          }}
          onBuy={handleBuy}
        />
      )}
    </>
  );
};

export default Products;