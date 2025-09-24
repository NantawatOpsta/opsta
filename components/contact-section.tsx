import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Building } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-balance mb-6">
            Ready to <span className="text-primary">Transform</span> Your Organization?
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Let's discuss how we can help accelerate your DevSecOps journey and build scalable, secure platforms for
            your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Company</h4>
                  <p className="text-muted-foreground">
                    Opsta (Thailand) Co.,Ltd.
                    <br />
                    Tax ID: 0105559166030
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-muted-foreground">
                    220/8 Soi Ladprao 1, Chomphon
                    <br />
                    Chatuchak, Bangkok, 10900
                    <br />
                    Thailand
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+66 61 123 4089</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">contact@opsta.co.th</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Start Your Transformation</CardTitle>
              <CardDescription>
                Ready to modernize your infrastructure and accelerate your development process?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our expert team is ready to help you implement DevSecOps best practices, migrate to cloud-native
                architectures, and build scalable platforms that drive business growth.
              </p>
              <div className="space-y-3">
                <Button className="w-full" asChild>
                  <a href="mailto:contact@opsta.co.th">Send Email</a>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="tel:+6661123408">Call Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
