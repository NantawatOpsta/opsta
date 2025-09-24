import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Cloud } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "./animated-text"
import { FadeInSection } from "./fade-in-section"
import { StaggerGrid } from "./stagger-grid"
import { MetaBalls } from "./meta-balls"
import { DarkVeil } from "./dark-veil"

export function HeroSection() {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Integrated security automation from day one of development with enterprise-grade compliance.",
    },
    {
      icon: Zap,
      title: "Accelerated Delivery",
      description: "Streamline your development process with automated CI/CD pipelines and GitOps workflows.",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Kubernetes, containers, and hybrid-cloud infrastructure designed for scalability and reliability.",
    },
  ]

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      <MetaBalls />
      <DarkVeil />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          <AnimatedText
            text="Transform Your"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-2"
            splitType="words"
            staggerDelay={100}
          />
          <AnimatedText
            text="DevSecOps Journey"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary block mb-6"
            splitType="words"
            staggerDelay={100}
            delay={300}
          />

          <FadeInSection delay={800} duration={1}>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              We are Technology Expert Consultant Team specializing in DevSecOps Transformation, Cloud Native Solutions,
              and Platform Engineering for enterprise organizations.
            </p>
          </FadeInSection>

          <FadeInSection delay={1200} duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" asChild>
                <Link href="#opstella">
                  Discover Opstella Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>

        <StaggerGrid className="grid md:grid-cols-3 gap-8 mt-20" staggerDelay={150} duration={0.8}>
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
