import { Navigation } from "@/components/navigation"
import { OpstellaSection } from "@/components/opstella-section"
import { PrimeXSection } from "@/components/primex-section"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and optimize your development
              operations.
            </p>
          </div>
        </section>
        <OpstellaSection />
        <PrimeXSection />
      </div>
      <Footer />
    </main>
  )
}
