import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, HardHat, User, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "@/hooks/useProducts";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/blog", label: "Blog" },
  { to: "/career", label: "Career" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products = [] } = useProducts();
  const [user, setUser] = useState<any>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setOpen(false);
    }
  };

  const filteredProducts = searchQuery.trim().length > 1
    ? products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5)
    : [];

  useEffect(() => {
    const checkUser = () => {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        setUser(JSON.parse(userStr));
      } else {
        setUser(null);
      }
    };

    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <HardHat className="h-6 w-6 text-primary" />
          </div>
          <span className="font-heading text-xl text-slate-900 tracking-wider">
            HEAVYBUILD <span className="text-primary font-black">PRO</span>
          </span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search heavy machinery & equipment..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-inner"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors">
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* Search Dropdown - Desktop */}
          <AnimatePresence>
            {searchQuery.trim().length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-12 left-0 right-0 bg-white border border-slate-200 rounded-lg shadow-2xl z-50 overflow-hidden"
              >
                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                      <button
                        key={product.id}
                        onClick={() => {
                          navigate(`/product/${product.slug}`);
                          setSearchQuery("");
                        }}
                        className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors text-left"
                      >
                        <div className="h-12 w-12 flex-shrink-0 bg-slate-100 rounded-md overflow-hidden border border-slate-200">
                          {product.image_url ? (
                            <img src={product.image_url} alt={product.name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-primary/10">
                              <HardHat className="h-5 w-5 text-primary" />
                            </div>
                          )}
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <p className="text-sm font-semibold text-slate-900 truncate">{product.name}</p>
                          <p className="text-xs text-primary font-heading font-medium tracking-wider uppercase">{product.category}</p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-sm text-slate-500 uppercase tracking-widest">No machinery found</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-heading text-sm tracking-wider font-semibold transition-colors hover:text-primary ${
                pathname === l.to ? "text-primary border-b-2 border-primary py-1" : "text-slate-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/profile" className="font-heading text-sm font-semibold text-slate-800 hover:text-primary transition-colors flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100">
                <User className="h-4 w-4 text-primary" /> PROFILE
              </Link>
            </div>
          ) : (
            <Link
              to="/auth"
              className="ml-2 flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wider rounded-md hover:bg-primary/90 shadow-sm transition-all"
            >
              <User className="h-4 w-4" /> SIGN IN
            </Link>
          )}
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-3 md:hidden">
          <button className="p-2 text-slate-700 hover:text-primary" onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-slate-700 hover:text-primary" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-slate-100 p-4 shadow-md"
          >
            <form onSubmit={handleSearch} className="relative">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-primary"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                <Search className="h-5 w-5" />
              </button>
            </form>

            {/* Mobile search results */}
            {searchQuery.trim().length > 1 && (
              <div className="mt-3 divide-y divide-slate-100 max-h-60 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <button
                      key={product.id}
                      onClick={() => {
                        navigate(`/product/${product.slug}`);
                        setSearchQuery("");
                        setSearchOpen(false);
                        setOpen(false);
                      }}
                      className="w-full flex items-center gap-3 py-2.5 text-left"
                    >
                      <div className="h-10 w-10 flex-shrink-0 bg-slate-100 rounded overflow-hidden">
                        {product.image_url ? (
                          <img src={product.image_url} alt={product.name} className="h-full w-full object-cover" />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-primary/10">
                            <HardHat className="h-4 w-4 text-primary" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow overflow-hidden">
                        <p className="text-sm font-medium text-slate-800 truncate">{product.name}</p>
                        <p className="text-xs text-primary font-medium uppercase">{product.category}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="py-3 text-center">
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Product not found</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`font-heading tracking-wider text-sm font-semibold py-2 px-3 rounded-md transition-colors ${
                    pathname === l.to ? "bg-primary/10 text-primary" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              {user ? (
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-800 rounded-md font-heading text-sm tracking-wider font-semibold"
                >
                  <User className="h-4 w-4 text-primary" /> PROFILE
                </Link>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-md font-heading text-sm tracking-wider font-semibold shadow-sm"
                >
                  <User className="h-4 w-4" /> SIGN IN
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
