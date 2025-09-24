import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Container, Shield, Gauge, GitBranch, Monitor } from "lucide-react"
import { AuroraBackground } from "./aurora-background"
import { AnimatedText } from "./animated-text"
import { FadeInSection } from "./fade-in-section"
import { StaggerGrid } from "./stagger-grid"

export function AboutSection() {
  const expertise = [
    {
      icon: Cloud,
      title: "Cloud Technologies",
      description: "Private, Public, and Hybrid Clouds including AWS, GCP, Azure, VMware, HWC",
    },
    {
      icon: Container,
      title: "Container Technologies",
      description: "Docker, Kubernetes, Tanzu, OpenShift for modern application deployment",
    },
    {
      icon: GitBranch,
      title: "Automation & GitOps",
      description: "Infrastructure as Code (IaC) with Ansible, Terraform, and GitOps workflows",
    },
    {
      icon: Gauge,
      title: "CI/CD Pipelines",
      description: "GitLab CI, Jenkins, Azure DevOps, GitHub Actions, ArgoCD implementation",
    },
    {
      icon: Shield,
      title: "Security Automation",
      description: "SAST, DAST, RASP, SCA, VA Scan, PAM, Container and Cloud Security",
    },
    {
      icon: Monitor,
      title: "Centralized Monitoring",
      description: "Prometheus, Thanos, LGTM Grafana Stack, ELK, EFK for comprehensive observability",
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AuroraBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText
            text="We Are Technology Experts"
            className="text-3xl sm:text-5xl font-bold text-balance mb-6"
            splitType="words"
            staggerDelay={80}
          />

          <FadeInSection delay={600} duration={1}>
            <p className="text-xl text-muted-foreground text-balance max-w-4xl mx-auto">
              We are the Enterprise Open Source Technical Consultant & Implementation Team that focuses on DevSecOps
              Transformation with our experienced professional teams to build high availability and scalable platforms.
            </p>
          </FadeInSection>
        </div>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" staggerDelay={100} duration={0.7}>
          {expertise.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/90 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </StaggerGrid>

        <FadeInSection delay={200} duration={1}>
          <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto">
              Help our customers increase business efficiency and reliability at incredible speed and agility through
              DevSecOps transformation and cloud-native technologies.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
