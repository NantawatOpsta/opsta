import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CardSwap } from "@/components/card-swap";
import {
    Cloud,
    Database,
    Settings,
    Shield,
    Users,
    BarChart3,
    Check,
    Workflow,
    Lock,
    Globe,
    Zap,
} from "lucide-react";
import Image from "next/image";

export default function PrimeXPage() {
    const features = [
        {
            icon: Cloud,
            title: "Multi-Platform Connectivity",
            description:
                "Unified management across Huawei Cloud Stack, VMware vSphere, Nutanix Prism, Microsoft Hyper-V, OpenStack, and public cloud connectors.",
            details: [
                "Explorer-style connection management",
                "Platform-agnostic resource views",
                "Unified compute cluster management",
                "Cross-platform migration support",
            ],
        },
        {
            icon: Database,
            title: "Inventory & Resource Management",
            description:
                "Comprehensive resource discovery and management with detailed cluster, host, datastore, and VM tracking.",
            details: [
                "Real-time resource inventory",
                "VM instance lifecycle tracking",
                "Storage and network mapping",
                "Resource utilization monitoring",
            ],
        },
        {
            icon: Settings,
            title: "Provisioning & Orchestration",
            description:
                "Automated provisioning with template management, quota controls, and workflow orchestration across platforms.",
            details: [
                "VM template CRUD operations",
                "Automated provisioning workflows",
                "Quota mapping and reservations",
                "Policy-driven resource allocation",
            ],
        },
        {
            icon: Shield,
            title: "RBAC & Security",
            description:
                "Enterprise-grade security with role-based access control, audit trails, and comprehensive policy management.",
            details: [
                "Multi-role access control",
                "Comprehensive audit logging",
                "Policy engine for compliance",
                "Multi-tenant security isolation",
            ],
        },
        {
            icon: Users,
            title: "Service Catalog",
            description:
                "Backstage-inspired service catalog with self-service provisioning and component lifecycle management.",
            details: [
                "Self-service portal",
                "Component catalog management",
                "Service definition templates",
                "Automated service publishing",
            ],
        },
        {
            icon: BarChart3,
            title: "Monitoring & Analytics",
            description:
                "Advanced monitoring with Prometheus integration, usage analytics, and comprehensive reporting capabilities.",
            details: [
                "Real-time metrics dashboard",
                "Prometheus/OpenTelemetry integration",
                "Usage and billing reports",
                "Custom alerting and notifications",
            ],
        },
    ];

    const dashboardImages = [
        {
            src:
                process.env.NODE_ENV === "production"
                    ? "/opsta/primex-dashboard-main.png"
                    : "/primex-dashboard-main.png",
            alt: "PrimeX Main Dashboard",
            title: "Main Dashboard",
        },
        {
            src:
                process.env.NODE_ENV === "production"
                    ? "/opsta/primex-user-management.png"
                    : "/primex-user-management.png",
            alt: "User Management Dashboard",
            title: "User Management",
        },
        {
            src:
                process.env.NODE_ENV === "production"
                    ? "/opsta/primex-vm-instances.png"
                    : "/primex-vm-instances.png",
            alt: "VM Instances Dashboard",
            title: "VM Instances",
        },
        {
            src:
                process.env.NODE_ENV === "production"
                    ? "/opsta/primex-billing.png"
                    : "/primex-billing.png",
            alt: "Billing & Cost Management",
            title: "Billing & Cost Management",
        },
        {
            src:
                process.env.NODE_ENV === "production"
                    ? "/opsta/primex-monitoring.png"
                    : "/primex-monitoring.png",
            alt: "Monitoring Dashboard",
            title: "Monitoring Dashboard",
        },
        {
            src:
                process.env.NODE_ENV === "production"
                    ? "/opsta/primex-storage.png"
                    : "/primex-storage.png",
            alt: "Storage Management",
            title: "Storage Management",
        },
        {
            src:
                process.env.NODE_ENV === "production"
                    ? "/opsta/primex-infrastructure.png"
                    : "/primex-infrastructure.png",
            alt: "Infrastructure Connections",
            title: "Infrastructure Connections",
        },
    ];

    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <Badge variant="secondary" className="mb-4">
                                Infrastructure Management Platform
                            </Badge>
                            <div className="flex items-center gap-4 mb-6">
                                <Image
                                    src={
                                        process.env.NODE_ENV === "production"
                                            ? "/opsta/primex-logo.svg"
                                            : "/primex-logo.svg"
                                    }
                                    alt="PrimeX Logo"
                                    width={80}
                                    height={80}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                                <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
                                    PrimeX Platform
                                </h1>
                            </div>
                            <p className="text-xl text-muted-foreground mb-8 text-pretty">
                                Unify your hybrid infrastructure with
                                comprehensive multi-platform management,
                                automated provisioning, and intelligent
                                orchestration across cloud and on-premises
                                environments.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="text-lg px-8">
                                    Start Free Trial
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg px-8 bg-transparent"
                                >
                                    Schedule Demo
                                </Button>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <CardSwap
                                images={dashboardImages}
                                interval={4000}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Comprehensive Platform Features
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to manage and orchestrate your
                            hybrid infrastructure
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="border-border hover:shadow-lg transition-shadow"
                            >
                                <CardHeader>
                                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                                    <CardTitle className="text-2xl">
                                        {feature.title}
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {feature.details.map((detail, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-3"
                                            >
                                                <Check className="h-4 w-4 text-primary" />
                                                <span className="text-sm">
                                                    {detail}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advanced Capabilities Section */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Advanced Capabilities
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Enterprise-grade features for complex infrastructure
                            requirements
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center">
                            <CardHeader>
                                <Workflow className="h-12 w-12 text-primary mx-auto mb-4" />
                                <CardTitle className="text-lg">
                                    Automation & Orchestration
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Workflow orchestration with Ansible
                                    integration and automated job queues
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                                <CardTitle className="text-lg">
                                    Security & Compliance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    SSO integration, audit trails, and
                                    comprehensive security controls
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                                <CardTitle className="text-lg">
                                    API & Integrations
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    REST APIs, webhooks, and ITSM integrations
                                    for seamless workflows
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                                <CardTitle className="text-lg">
                                    Developer Experience
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Plugin system, developer docs, and
                                    Backstage-like create workflows
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
