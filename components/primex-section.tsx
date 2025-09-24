import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Database, Settings, Shield, Users, BarChart3 } from "lucide-react"
import Image from "next/image"

export function PrimeXSection() {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Platform Connectivity",
      description: "Connect and manage Huawei Cloud Stack, VMware vSphere, Nutanix Prism, Microsoft Hyper-V, and more.",
    },
    {
      icon: Database,
      title: "Inventory & Resource Management",
      description: "Comprehensive cluster, host, datastore, and VM instance management with detailed resource views.",
    },
    {
      icon: Settings,
      title: "Provisioning & Life-cycle",
      description: "Provision VM templates, clone, resize, migrate with automated life-cycle management.",
    },
    {
      icon: Shield,
      title: "RBAC & Security",
      description: "Role-based access control with audit logs, policy engine, and multi-tenant security.",
    },
    {
      icon: Users,
      title: "Service Catalog",
      description: "Backstage-style service catalog with component management and self-service provisioning.",
    },
    {
      icon: BarChart3,
      title: "Monitoring & Analytics",
      description: "Comprehensive metrics dashboard with Prometheus integration and usage reporting.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Infrastructure Management Platform
          </Badge>
          <div className="flex justify-center mb-6">
            <Image src="/primex-logo.svg" alt="PrimeX Platform" width={120} height={120} className="h-20 w-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">PrimeX Platform</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive multi-platform infrastructure management and orchestration platform that unifies hybrid
            cloud environments with advanced automation, monitoring, and service catalog capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose PrimeX?</h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                PrimeX unifies your hybrid infrastructure with explorer-style management, automated provisioning, and
                comprehensive monitoring across multiple platforms and cloud providers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Multi-platform connectivity & management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Automated provisioning & orchestration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Service catalog with self-service portal</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Comprehensive monitoring & reporting</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Request Demo</Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 border border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Platform Coverage</span>
                    <span className="text-sm font-medium">Multi-Cloud</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Automation Level</span>
                    <span className="text-sm font-medium">Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Monitoring</span>
                    <span className="text-sm font-medium">Real-time</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
