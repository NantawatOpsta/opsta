"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  HeadphonesIcon,
  MailIcon,
  MessageSquareIcon,
  ClockIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  PhoneIcon,
  FileTextIcon,
} from "lucide-react"

export function GetSupportSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    priority: "",
    category: "",
    subject: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integration with Service Desk ticket system would go here
    console.log("Support ticket submitted:", formData)
    alert("Support ticket submitted successfully! You will receive a confirmation email shortly.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Get <span className="text-primary">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our expert support team is here to help you with technical issues, questions, and guidance for all Opsta
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Support Options */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeadphonesIcon className="h-5 w-5 text-primary" />
                  Support Channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+66 61 234 089</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MailIcon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@opsta.co.th</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MessageSquareIcon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-primary" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <Separator className="my-3" />
                  <p className="text-sm text-muted-foreground">Emergency support available 24/7 for critical issues</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Priority Levels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Critical</Badge>
                  <span className="text-sm">System down - 1 hour response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">High</Badge>
                  <span className="text-sm">Major impact - 4 hours response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Medium</Badge>
                  <span className="text-sm">Minor impact - 1 business day</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Low</Badge>
                  <span className="text-sm">General inquiry - 2 business days</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Ticket Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileTextIcon className="h-5 w-5 text-primary" />
                  Submit Support Ticket
                </CardTitle>
                <CardDescription>
                  Create a support ticket and our team will get back to you based on the priority level.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level *</Label>
                      <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="critical">Critical - System Down</SelectItem>
                          <SelectItem value="high">High - Major Impact</SelectItem>
                          <SelectItem value="medium">Medium - Minor Impact</SelectItem>
                          <SelectItem value="low">Low - General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="opstella">Opstella Platform</SelectItem>
                          <SelectItem value="primex">PrimeX Platform</SelectItem>
                          <SelectItem value="devops">DevOps Services</SelectItem>
                          <SelectItem value="security">Security Services</SelectItem>
                          <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                          <SelectItem value="training">Training & Consulting</SelectItem>
                          <SelectItem value="billing">Billing & Account</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of the issue"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and any relevant context."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-2 p-4 bg-muted/50 rounded-lg">
                    <AlertCircleIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium mb-1">Before submitting:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Check our documentation and FAQ</li>
                        <li>• Include error messages and screenshots if applicable</li>
                        <li>• Provide steps to reproduce the issue</li>
                      </ul>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Support Ticket
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <FileTextIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">Comprehensive guides and API documentation</p>
                <Button variant="outline" size="sm">
                  View Docs
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageSquareIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community Forum</h3>
                <p className="text-sm text-muted-foreground mb-4">Connect with other users and share knowledge</p>
                <Button variant="outline" size="sm">
                  Join Forum
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircleIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Status Page</h3>
                <p className="text-sm text-muted-foreground mb-4">Check system status and maintenance updates</p>
                <Button variant="outline" size="sm">
                  View Status
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
