import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Heart, Users, Calendar } from "lucide-react"

export default function HomePage() {
  const categories = [
    {
      title: "Weddings",
      description: "Timeless memories of your special day",
      image: "/generated/wedding-hero-1.png",
      href: "/portfolio#weddings"
    },
    {
      title: "Maternity",
      description: "Celebrating the beauty of new beginnings",
      image: "/generated/maternity-hero-1.png",
      href: "/portfolio#maternity"
    },
    {
      title: "Family",
      description: "Capturing the love that binds you together",
      image: "/generated/family-hero-1.png",
      href: "/portfolio#family"
    }
  ]

  const testimonials = [
    {
      quote: "Kimberly captured our wedding day perfectly. Every photo tells a story and brings back the emotions of that beautiful day.",
      author: "Sarah & Michael",
      session: "Wedding 2024"
    },
    {
      quote: "The maternity photos exceeded our expectations. Kimberly made us feel comfortable and the results are stunning.",
      author: "Emma Rodriguez",
      session: "Maternity Session"
    },
    {
      quote: "Our family portraits are absolutely beautiful. Kimberly's patience with the kids and eye for detail is remarkable.",
      author: "The Johnson Family",
      session: "Fall Family Session"
    }
  ]

  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Full day coverage capturing every precious moment from getting ready to your first dance"
    },
    {
      icon: Users,
      title: "Family Sessions",
      description: "Professional portraits that celebrate your family's unique story and connection"
    },
    {
      icon: Camera,
      title: "Maternity Photography",
      description: "Artistic and elegant photos celebrating the beauty of expecting mothers"
    },
    {
      icon: Calendar,
      title: "Flexible Packages",
      description: "Customizable packages designed to fit your needs and budget"
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/wedding-hero-1.png"
            alt="Elegant wedding photography by Kimberly Archambault"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fade-in-up text-white-force">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-tight">
            Capturing Life's Most
            <br />
            Precious Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Wedding, Maternity & Family Photography
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-lg px-8">
              <Link href="/portfolio" className="button-text-white">View Portfolio</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
              <Link href="/booking" className="button-text-white">Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 animate-fade-in">
            Artistic Vision, Professional Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Hi, I'm Kimberly Archambault. I specialize in capturing authentic emotions and timeless moments
            that tell your unique story. Whether it's your wedding day, maternity journey, or family milestones,
            I'm here to create beautiful images you'll treasure forever.
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/booking">Let's Connect</Link>
          </Button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
            Photography Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                href={category.href}
                className="photo-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="image-overlay text-white-force">
                    <div>
                      <h3 className="text-2xl font-serif mb-2">{category.title}</h3>
                      <p className="text-sm">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
            What I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="border-border hover-lift">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
            Kind Words from Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.session}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-sage text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Create Beautiful Memories?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss your vision and create stunning images you'll cherish forever.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link href="/booking">Book Your Session</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
