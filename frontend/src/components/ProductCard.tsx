import { Link } from "react-router-dom";
import { Package, Eye, PhoneCall, ShoppingCart } from "lucide-react";
import type { Product } from "@/hooks/useProducts";

interface Props {
  product: Product;
  onInquiry?: (product: Product) => void;
  onBuy?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
}

const ProductCard = ({ product, onInquiry, onBuy }: Props) => (
  <div className="bg-white border border-slate-200 rounded-xl group hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
    {/* Image */}
    <div className="aspect-[3/2] sm:aspect-[4/3] bg-slate-100 flex items-center justify-center relative overflow-hidden flex-shrink-0">
      {(product.image_url || (product as any).images?.[0]) ? (
        <img
          src={product.image_url || (product as any).images?.[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Package className="h-10 w-10 sm:h-16 sm:w-16 text-slate-300" />
      )}
      <span
        className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-heading font-bold tracking-wider rounded ${
          product.category === "Trading"
            ? "bg-slate-900 text-white"
            : "bg-primary text-primary-foreground shadow-sm"
        }`}
      >
        {product.category.toUpperCase()}
      </span>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
      <div className="flex-grow">
        <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-[11px] sm:text-xs text-slate-500 mb-3 line-clamp-2 overflow-hidden leading-relaxed">
          {product.description}
        </p>

        {product.category === "Manufacturing" && product.price ? (
          <p className="font-heading text-base sm:text-lg font-bold text-primary mb-3">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </p>
        ) : (
          <p className="font-heading text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
            Price on Quotation
          </p>
        )}
      </div>

      <div className="flex gap-2 mt-auto pt-2 border-t border-slate-100">
        <Link
          to={`/product/${product.slug}`}
          className="flex-1 py-2 sm:py-2.5 rounded-lg border border-slate-200 text-slate-700 font-heading text-[10px] sm:text-xs font-semibold tracking-wider hover:border-primary hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-1 sm:gap-1.5"
        >
          <Eye className="h-3.5 w-3.5" />
          <span>DETAILS</span>
        </Link>

        {product.category === "Trading" ? (
          <button
            onClick={() => onInquiry?.(product)}
            className="flex-1 py-2 sm:py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 font-heading text-[10px] sm:text-xs font-bold tracking-wider hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-1.5"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>QUOTE</span>
          </button>
        ) : (
          <button
            onClick={() => onBuy?.(product)}
            className="flex-1 py-2 sm:py-2.5 rounded-lg bg-primary text-primary-foreground font-heading text-[10px] sm:text-xs font-bold tracking-wider hover:bg-primary/90 shadow-sm transition-all flex items-center justify-center gap-1.5"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span>BUY NOW</span>
          </button>
        )}
      </div>
    </div>
  </div>
);

export default ProductCard;