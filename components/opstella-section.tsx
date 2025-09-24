import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Gauge, Lock, Layers, GitBranch } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function OpstellaSection() {
  return (
    <section id="opstella" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image src="/opstella.svg" alt="Opstella Platform" width={300} height={60} className="h-16 w-auto" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-balance mb-6">
            Meet <span className="text-primary">Opstella Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
            An Internal Developer Portal (IDP) designed to simplify the development process and operations. It
            accelerates and scales applications quickly, ensuring standard security compliance.
          </p>
          <Button size="lg" asChild>
            <Link href="https://www.opstella.com" target="_blank" rel="noopener noreferrer">
              Visit Opstella Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Gauge,
              title: "Performance",
              description: "Accelerate application delivery with optimized workflows and automated processes.",
            },
            {
              icon: Lock,
              title: "Security",
              description: "Built-in security compliance and governance with automated policy enforcement.",
            },
            {
              icon: Layers,
              title: "Scalability",
              description:
                "Scale applications effortlessly with cloud-native architecture and container orchestration.",
            },
            {
              icon: GitBranch,
              title: "Integration",
              description: "Centralize and optimize DevSecOps practices with seamless tool integration.",
            },
          ].map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Significantly reduce costs by centralizing and optimizing DevSecOps and Platform Engineering practices.
          </p>
        </div>
      </div>
    </section>
  )
}
