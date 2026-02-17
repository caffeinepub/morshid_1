import { MorshidCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/MorshidCard";
import { MorshidButton } from "@/components/MorshidButton";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-morshid-text mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* WhatsApp Card */}
          <MorshidCard className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-morshid-primary flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg font-semibold text-morshid-text">
                +212 623 237 732
              </p>
              <MorshidButton 
                asChild
                className="w-full bg-morshid-primary hover:bg-morshid-primary/90 text-white"
              >
                <a href="https://wa.me/212623237732" target="_blank" rel="noopener noreferrer">
                  Message Us
                </a>
              </MorshidButton>
              <CardDescription className="text-sm italic">
                Fastest way to reach us!
              </CardDescription>
            </CardContent>
          </MorshidCard>

          {/* Email Card */}
          <MorshidCard className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg font-semibold text-morshid-text">
                hello@tmu.ai
              </p>
              <MorshidButton 
                asChild
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                <a href="mailto:hello@tmu.ai">
                  Send Email
                </a>
              </MorshidButton>
              <CardDescription className="text-sm italic">
                For partnerships & inquiries
              </CardDescription>
            </CardContent>
          </MorshidCard>

          {/* Location Card */}
          <MorshidCard className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg font-semibold text-morshid-text">
                Rabat, Morocco
              </p>
              <div className="h-10"></div>
              <CardDescription className="text-sm italic">
                TMU SARL
              </CardDescription>
            </CardContent>
          </MorshidCard>
        </div>

        {/* Response Time Note */}
        <div className="text-center">
          <p className="text-gray-600">
            Response time: Usually within 1 hour on WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}
