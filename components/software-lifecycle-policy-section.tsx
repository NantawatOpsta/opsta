import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ShieldCheckIcon,
  ClockIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  InfoIcon,
  CalendarIcon,
  LifeBuoyIcon,
} from "lucide-react"

export function SoftwareLifecyclePolicySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Software <span className="text-primary">Lifecycle Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Understanding our commitment to software support, maintenance, and end-of-life procedures for all Opsta
            products and services.
          </p>
        </div>

        {/* Policy Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-primary" />
                Active Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Full feature updates, security patches, and technical support
              </p>
              <Badge variant="default">Current Version</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-orange-500" />
                Maintenance Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Security updates and critical bug fixes only</p>
              <Badge variant="secondary">Previous Version</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircleIcon className="h-5 w-5 text-destructive" />
                End of Life
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">No updates or support provided</p>
              <Badge variant="destructive">Deprecated</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Product Lifecycle Status */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              Current Product Status
            </CardTitle>
            <CardDescription>Current lifecycle status of all Opsta products and platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Opstella Platform</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                    <div>
                      <p className="font-medium">Version 3.2.x</p>
                      <p className="text-sm text-muted-foreground">Released: December 2024</p>
                    </div>
                    <Badge variant="default" className="bg-green-600">
                      Active Support
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                    <div>
                      <p className="font-medium">Version 3.1.x</p>
                      <p className="text-sm text-muted-foreground">EOL: June 2025</p>
                    </div>
                    <Badge variant="secondary" className="bg-orange-600">
                      Maintenance
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-4">PrimeX Platform</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                    <div>
                      <p className="font-medium">Version 2.8.x</p>
                      <p className="text-sm text-muted-foreground">Released: November 2024</p>
                    </div>
                    <Badge variant="default" className="bg-green-600">
                      Active Support
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                    <div>
                      <p className="font-medium">Version 2.7.x</p>
                      <p className="text-sm text-muted-foreground">EOL: May 2025</p>
                    </div>
                    <Badge variant="secondary" className="bg-orange-600">
                      Maintenance
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Phases */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LifeBuoyIcon className="h-5 w-5 text-primary" />
                Support Phases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Active Support (24 months)</p>
                    <p className="text-sm text-muted-foreground">
                      Full feature updates, security patches, bug fixes, and technical support
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangleIcon className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Maintenance Mode (12 months)</p>
                    <p className="text-sm text-muted-foreground">Security updates and critical bug fixes only</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircleIcon className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-medium">End of Life</p>
                    <p className="text-sm text-muted-foreground">No updates or support provided</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <InfoIcon className="h-5 w-5 text-primary" />
                Migration Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-2">We provide migration assistance for:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Version upgrades and migrations</li>
                    <li>• Data migration and backup services</li>
                    <li>• Configuration transfer assistance</li>
                    <li>• Training on new features</li>
                    <li>• Custom migration planning</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-sm">Migration Timeline</p>
                  <p className="text-sm text-muted-foreground">
                    We recommend upgrading within 6 months of a new major release to ensure continued support.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Updates */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheckIcon className="h-5 w-5 text-primary" />
              Security Update Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Critical Security Updates</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Released within 24-48 hours of discovery</li>
                  <li>• Applied to all supported versions</li>
                  <li>• Automatic deployment available</li>
                  <li>• Emergency support provided</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Regular Security Updates</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monthly security patch releases</li>
                  <li>• Vulnerability assessments</li>
                  <li>• Security advisory notifications</li>
                  <li>• Compliance updates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help with Lifecycle Management?</CardTitle>
            <CardDescription>
              Our support team is here to help you plan your software lifecycle and migrations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="font-medium">Technical Support</p>
                <p className="text-sm text-muted-foreground">support@opsta.co.th</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="font-medium">Migration Planning</p>
                <p className="text-sm text-muted-foreground">migrations@opsta.co.th</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="font-medium">Account Management</p>
                <p className="text-sm text-muted-foreground">accounts@opsta.co.th</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
