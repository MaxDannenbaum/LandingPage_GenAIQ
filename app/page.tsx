import {
  FolderOpen,
  MessageCircle,
  FileText,
  GitCompare,
  Twitter,
  Github,
  Mail,
  ArrowRight,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-g10">
      {/* Header */}
      <header className="border-b border-g30 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/genaiq-logo.png"
                alt="GenAIQ by BearingPoint"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-g50 hover:text-black transition-colors">
                Features
              </Link>
              <Link href="#clients" className="text-g50 hover:text-black transition-colors">
                Clients
              </Link>
              <Link href="#pricing" className="text-g50 hover:text-black transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-g50 hover:text-black transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:inline-flex text-g50 hover:text-black">
                Sign In
              </Button>
              <Button className="bg-bp-red hover:bg-r60 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#FFA3A8] to-[#FFA3A8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <Badge variant="secondary" className="mb-6 bg-r30 text-r60 border-2 border-black">
                🚀 AI-Powered Productivity
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Maximize Efficiency with <span className="text-bp-red">Generative AI</span>
              </h1>
              <p className="text-xl text-g50 mb-8 leading-relaxed">
                Integrate GenAIQ seamlessly into your daily workflows. Transform how you work with intelligent AI tools
                that adapt to your needs and amplify your productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3 bg-bp-red hover:bg-r60 text-white">
                  Contact Sales Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 border-bp-red text-bp-red hover:bg-r20"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Side - GIF Placeholder */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#FF787A] to-[#FF787A] rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="GenAIQ Features Demo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg border-2 border-white"
                />
                <div className="absolute -top-4 -right-4 bg-bp-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Live Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Document Intelligence Features</h2>
            <p className="text-xl text-g50 max-w-2xl mx-auto">
              Powerful document analysis and management tools powered by cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transition-all duration-300 group flex flex-col">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-r20 rounded-lg flex items-center justify-center mb-4">
                  <FolderOpen className="h-6 w-6" style={{ color: "#CC2931" }} />
                </div>
                <CardTitle className="text-black">Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-g50">
                    Your personal AI-powered library—upload, manage, and control exactly what your assistant knows.
                    Every feature builds on your selected documents for laser-focused results.
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-r60 hover:text-bp-red group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transition-all duration-300 group flex flex-col">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-r20 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6" style={{ color: "#CC2931" }} />
                </div>
                <CardTitle className="text-black">Document Chat</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-g50">
                    Ask anything and get pinpoint-accurate answers—no hallucinations, just facts. Switch effortlessly
                    between top-tier LLMs like GPT-4.1, GPT-4o, Mistral, Grok, Gemini, Sonar, and more.
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-r60 hover:text-bp-red group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transition-all duration-300 group flex flex-col">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-r20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6" style={{ color: "#CC2931" }} />
                </div>
                <CardTitle className="text-black">Document Summarizer</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-g50">
                    Turn dense PDFs into crystal-clear insights. Choose between a quick overview or a full
                    one-pager—ready to download and share in seconds.
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-r60 hover:text-bp-red group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transition-all duration-300 group flex flex-col">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-r20 rounded-lg flex items-center justify-center mb-4">
                  <GitCompare className="h-6 w-6" style={{ color: "#CC2931" }} />
                </div>
                <CardTitle className="text-black">Document Comparison</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-g50">
                    Compare up to three documents at once. Instantly spot content differences, topic overlaps, and
                    contradictions—with full citations at your fingertips.
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-r60 hover:text-bp-red group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transition-all duration-300 group flex flex-col">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-r20 rounded-lg flex items-center justify-center mb-4">
                  <GitCompare className="h-6 w-6" style={{ color: "#CC2931" }} />
                </div>
                <CardTitle className="text-black">Version Comparison</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-g50">
                    Catch every edit, from subtle word changes to major rewrites. Get side-by-side clarity with
                    section-based difference tracking—perfect for reviewing contracts, drafts, or revisions.
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-r60 hover:text-bp-red group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Trust Section */}
      <section id="clients" className="py-20 bg-g10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">These Clients Already Trust Us</h2>
            <p className="text-xl text-g50">Join industry leaders who are transforming their workflows with GenAIQ</p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 items-center">
            {/* UGG Logo */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/ugg-logo.png"
                alt="UGG - Unsere Grüne Glasfaser"
                width={160}
                height={80}
                className="hover:scale-110 transition-transform duration-300 object-contain"
              />
            </div>

            {/* Placeholder logos */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120`}
                  alt={`Client ${i + 1}`}
                  width={120}
                  height={60}
                  className="hover:scale-110 transition-transform duration-300 object-contain opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Enterprise-Grade AI Solutions</h2>
            <p className="text-xl text-g50">Custom pricing tailored to your organization's needs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-bp-red/20 shadow-2xl bg-gradient-to-br from-white to-g10/50 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-bp-red/10 to-r60/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-r30/20 to-bp-red/20 rounded-full translate-y-12 -translate-x-12"></div>

              <CardHeader className="text-center py-12 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bp-red rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-4xl mb-4 text-black font-bold">Custom Enterprise Solution</CardTitle>
                <CardDescription className="text-xl text-g50 leading-relaxed max-w-2xl mx-auto">
                  GenAIQ is designed for enterprise clients with custom integrations, dedicated support, and tailored AI
                  workflows that fit your specific business requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-g30/50">
                    <h4 className="font-bold text-xl mb-6 text-black">What's Included:</h4>
                    <ul className="space-y-4 text-g50">
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-r60 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="font-medium">Custom AI model training and fine-tuning</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-r60 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="font-medium">Dedicated implementation team</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-r60 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="font-medium">24/7 priority support and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-r60 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="font-medium">Enterprise security and compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-g30/50">
                    <h4 className="font-bold text-xl mb-6 text-black">Perfect For:</h4>
                    <ul className="space-y-4 text-g50">
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-r60 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="font-medium">Large enterprises (500+ employees)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-r60 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="font-medium">Organizations with complex workflows</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-r60 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="font-medium">Companies requiring custom integrations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-r60 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="font-medium">Teams needing specialized AI solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-12 pb-12 relative z-10">
                <Button size="lg" className="w-full text-lg py-4 bg-bp-red hover:bg-r60 text-white">
                  Contact Sales Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-g50">
              Interested in a demo?{" "}
              <Link href="#" className="text-bp-red hover:text-r60 font-semibold">
                Schedule a personalized walkthrough
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#99171d]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Workflow with AI?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join forward-thinking organizations who are already leveraging GenAIQ to maximize efficiency and unlock the
            full potential of generative AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-3 bg-white text-[#99171d] hover:bg-white/90"
            >
              Contact Sales
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-transparent text-white border-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-white/80 mt-4">Custom implementation • Enterprise support • ROI guaranteed</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/genaiq-logo.png"
                  alt="GenAIQ by BearingPoint"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-g30 mb-4">
                Maximize efficiency with generative AI. Integrate seamlessly into your daily workflows.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-g30 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-g30 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-g30 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-g30 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    AI Models
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-g30 hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-g50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-g30 text-sm">© {new Date().getFullYear()} GenAIQ. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-g30 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-g30 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-g30 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
