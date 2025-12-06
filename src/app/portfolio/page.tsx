import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LightboxGallery } from "@/components/lightbox-gallery"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortfolioPage() {
  const weddingImages = [
    { src: "/generated/wedding-hero-1.png", alt: "Bride and groom ceremony portrait" },
    { src: "/generated/wedding-2.png", alt: "Bride getting ready details" },
    { src: "/generated/wedding-3.png", alt: "First dance reception" },
    { src: "/generated/wedding-hero-1.png", alt: "Wedding ceremony outdoor" },
    { src: "/generated/wedding-2.png", alt: "Bridal details" },
    { src: "/generated/wedding-3.png", alt: "Reception celebration" },
  ]

  const maternityImages = [
    { src: "/generated/maternity-hero-1.png", alt: "Maternity sunset portrait" },
    { src: "/generated/maternity-hero-1.png", alt: "Expecting mother outdoor session" },
    { src: "/generated/maternity-hero-1.png", alt: "Maternity field photoshoot" },
  ]

  const familyImages = [
    { src: "/generated/family-hero-1.png", alt: "Multi-generational family portrait" },
    { src: "/generated/family-2.png", alt: "Young family playing outdoors" },
    { src: "/generated/family-hero-1.png", alt: "Fall family session" },
    { src: "/generated/family-2.png", alt: "Candid family moment" },
  ]

  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Portfolio</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A collection of my favorite moments captured through the lens. Each image tells a unique story
            of love, joy, and connection.
          </p>
        </div>
      </section>

      {/* Weddings Section */}
      <section id="weddings" className="py-16 px-6 bg-background scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-serif mb-4">Weddings</h2>
            <p className="text-muted-foreground max-w-2xl">
              From intimate ceremonies to grand celebrations, I capture every precious moment of your wedding day
              with artistry and care.
            </p>
          </div>

          <LightboxGallery images={weddingImages} columns={3} />
        </div>
      </section>

      {/* Maternity Section */}
      <section id="maternity" className="py-16 px-6 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-serif mb-4">Maternity</h2>
            <p className="text-muted-foreground max-w-2xl">
              Celebrating the beauty and anticipation of motherhood through elegant and timeless portraits.
            </p>
          </div>

          <LightboxGallery images={maternityImages} columns={3} />
        </div>
      </section>

      {/* Family Section */}
      <section id="family" className="py-16 px-6 bg-background scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-serif mb-4">Family</h2>
            <p className="text-muted-foreground max-w-2xl">
              Natural, joyful portraits that capture the unique bonds and personalities of your family.
            </p>
          </div>

          <LightboxGallery images={familyImages} columns={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-sage text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Love What You See?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create beautiful images together. Book your session today.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link href="/booking">Book a Session</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
