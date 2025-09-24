import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Container, Monitor, Cloud, Lock, Settings, Gauge, Users } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "DevSecOps Platform",
      description:
        "Transform your organization with enterprise DevSecOps platform for incredible speed and agility across developer, operation, and security teams.",
    },
    {
      icon: Container,
      title: "Kubernetes Service Provider",
      description:
        "Comprehensive Kubernetes support, consulting, professional services and training for organizations embarking on their Kubernetes journey.",
    },
    {
      icon: Monitor,
      title: "Centralized Monitoring",
      description:
        "Build centralized monitoring with automated CNCF open-source software for real-time performance visibility and early problem detection.",
    },
    {
      icon: Cloud,
      title: "Hybrid Multicloud",
      description:
        "On-demand self-service enterprise hybrid-cloud infrastructure with rapid elasticity and scalability through automation.",
    },
    {
      icon: Lock,
      title: "Security Automation",
      description:
        "Early vulnerability identification through security automation integrating enterprise and open-source software from development day one.",
    },
    {
      icon: Settings,
      title: "Operation as a Service",
      description:
        "Comprehensive operational support and management services to maintain your infrastructure and applications.",
    },
    {
      icon: Gauge,
      title: "Performance Load Testing",
      description:
        "Real user simulation and system bottleneck analysis using K6, JMeter, and Locust for optimal performance.",
    },
    {
      icon: Users,
      title: "Site Reliability Engineering (SRE)",
      description: "Implement SRE practices to improve system reliability, availability, and performance at scale.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-balance mb-6">
            Professional <span className="text-primary">Solutions & Services</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            We provide comprehensive professional services across multiple domains to accelerate your digital
            transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 bg-transparent shadow-none hover:shadow-none transition-shadow h-full"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
