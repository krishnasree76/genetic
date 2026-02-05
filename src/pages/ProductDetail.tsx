import { useParams } from "react-router-dom";
import { ArrowLeft, FlaskConical, CheckCircle, Syringe, Box, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HashLink } from "react-router-hash-link";

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
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-contain p-8"
                />
              </div>
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

                {/* Presentation */}
                <div className="bg-card rounded-xl p-6 shadow-card border border-muted/50 space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Box className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Presentation</h3>
                  </div>

                  <p className="text-muted-foreground text-sm">{product.presentation}</p>

                  <a
                    href={`https://wa.me/918143645716?text=Hello Geneticbio Solutions, I would like to enquire about the product: ${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                      Enquire on WhatsApp
                    </Button>
                  </a>
                </div>

                {/* Storage */}
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
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918143645716?text=Hello Geneticbio Solutions, I want to know more about your products."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-white">
            <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.646.863 5.09 2.327 7.071L4.12 29l7.132-2.167a11.936 11.936 0 0 0 4.749.968h.001C22.627 27.801 28 22.428 28 15.801 28 9.173 22.627 3.8 16.001 3.8zm0 21.801c-1.99 0-3.842-.617-5.379-1.674l-.384-.249-4.232 1.287 1.314-4.125-.25-.399A9.84 9.84 0 0 1 6.16 15c0-5.429 4.412-9.841 9.841-9.841 5.43 0 9.841 4.412 9.841 9.841s-4.412 9.841-9.841 9.841z"/>
          </svg>
        </div>
      </a>

      <Footer />
    </div>
  );
};

export default ProductDetail;
