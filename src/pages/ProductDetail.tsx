import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FlaskConical, CheckCircle, Syringe, Box, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HashLink } from "react-router-hash-link";
// ❌ REMOVED: import productImage from "@/assets/product-placeholder.jpg";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <HashLink smooth to="/#products">
  <Button variant="default">
    <ArrowLeft className="mr-2 h-4 w-4" />
    Back to Products
  </Button>
</HashLink>

          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <HashLink smooth to="/#products" className="inline-block mb-8">
  <Button variant="ghost" className="gap-2">
    <ArrowLeft className="h-4 w-4" />
    Back to Products
  </Button>
</HashLink>

          <div className="grid lg:grid-cols-2 gap-12 animate-fade-in">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-card rounded-2xl overflow-hidden shadow-elevated border border-muted">
                <img
                  src={product.image} // ✅ CHANGED: Now uses the actual product image
                  alt={product.name}
                  className="w-full aspect-square object-contain p-8" // Added p-8 and object-contain for a cleaner product look
                />
              </div>
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-full shadow-lg">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {product.shortDescription}
              </p>

              {/* Info Cards */}
              <div className="space-y-6">
                {/* Composition */}
                <div className="bg-card rounded-xl p-6 shadow-card border border-muted/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FlaskConical className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Composition</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {product.composition}
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-card rounded-xl p-6 shadow-card border border-muted/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Benefits</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dosage */}
                <div className="bg-card rounded-xl p-6 shadow-card border border-muted/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Syringe className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Dosage</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.dosage}
                  </p>
                </div>

                {/* Presentation & Storage Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-6 shadow-card border border-muted/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Box className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Presentation</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{product.presentation}</p>
                  </div>

                  {product.storage && (
                    <div className="bg-card rounded-xl p-6 shadow-card border border-muted/50">
                      <div className="flex items-center gap-3 mb-3">
                        <Thermometer className="h-5 w-5 text-orange-500" />
                        <h3 className="font-semibold text-foreground">Storage</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{product.storage}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;