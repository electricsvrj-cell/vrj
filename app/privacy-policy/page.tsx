import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | VRJ Electrics',
  description: 'Privacy Policy for VRJ Electrics (ACN 19 678 394 351). Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen">
        {/* Header Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden border-b border-border/50">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
          
          <div className="container-premium relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              VRJ Electrics (ACN 19 678 394 351) is committed to protecting your privacy and handling your personal information with transparency and integrity.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container-premium max-w-4xl px-4 md:px-8">
            <div className="space-y-12">
              <div className="pb-12 border-b border-border">
                <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
                  VRJ ELECTRICS (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or interact with our services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">01.</span> Consent
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                  <p>
                    By using our website or providing us with your personal information, you consent to the practices described in this Privacy Policy and agree to its terms.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">02.</span> Information We Collect
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                  <p>
                    We collect personal information only when it is reasonably necessary for our business activities or required by law.
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground font-serif italic underline decoration-primary/20 underline-offset-4">Information you provide directly</h3>
                    <p>We may collect personal information when you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact us via phone or email</li>
                      <li>Submit a quote request or contact form</li>
                      <li>Register for an account or portal access</li>
                      <li>Use our solar monitoring or maintenance services</li>
                    </ul>
                    <p>This may include your name, company name, address, email address, telephone number, and any additional information you choose to provide.</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground font-serif italic underline decoration-primary/20 underline-offset-4">Information collected automatically</h3>
                    <p>
                      When you visit our website, we may automatically collect non-identifiable information such as your IP address, browser type, Internet Service Provider (ISP), date and time of visit, referring and exit pages, and general usage patterns. This information is used for analytics and website performance and is not linked to personally identifiable information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">03.</span> How We Use Your Information
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                  <p>We may use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalise, and enhance user experience</li>
                    <li>Understand how visitors use our website</li>
                    <li>Develop new features, services, and functionality</li>
                    <li>Communicate with you for customer support, updates, or marketing</li>
                    <li>Send emails and service notifications</li>
                    <li>Detect, prevent, and respond to fraud or security issues</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">04.</span> Log Files
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed">
                  <p>
                    VRJ ELECTRICS follows standard industry practices by using log files. These files record basic visitor information for analytics and site administration. This data is not personally identifiable.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">05.</span> Cookies and Tracking Technologies
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We may use cookies and similar technologies to improve your browsing experience. Cookies are stored on your device for record-keeping and tracking purposes. You may manage or disable cookies through your browser settings; however, some website features may not function properly if cookies are disabled.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">06.</span> Third-Party Services
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Our Privacy Policy does not apply to external websites or advertisers. We encourage you to review the Privacy Policies of any third-party services you interact with, as they may have different data handling practices.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">07.</span> Disclosure of Personal Information
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                  <p>We may disclose your personal information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers assisting with website operations, analytics, or communications</li>
                    <li>Regulatory authorities when required by law</li>
                    <li>Other third parties with your consent</li>
                  </ul>
                  <p>We do not sell personal information. Where your personal information is transferred overseas, we will take reasonable steps to ensure the recipient complies with the Australian Privacy Principles.</p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">08.</span> Data Security
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We implement appropriate data collection, storage, and processing practices, along with security measures, to protect your personal information from misuse, loss, and unauthorised access. However, no method of online transmission or storage is completely secure.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">09.</span> Access to and Correction of Personal Information
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                  <p>Under the Australian Privacy Principles, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request corrections if you believe the information is inaccurate, incomplete, or outdated</li>
                  </ul>
                  <p>
                    To verify your identity, we may ask you to provide identification before releasing any information. We will respond to your request within a reasonable timeframe, typically within 30 days. Contact our Privacy Officer at <strong className="text-foreground">venkat@vrjelectrics.com.au</strong> for such requests.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">10.</span> Children&apos;s Privacy
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Our services are not directed toward children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">11.</span> Changes to This Privacy Policy
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to ensure compliance with the Privacy Law or to reflect changes in our practices. Any updates will be posted on this page with an updated revision date.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">12.</span> Complaints and Privacy Concerns
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                  <p>
                    If you have a concern or wish to make a complaint about how we handle your personal information, please contact us with your name, contact details, and a description of your concern. We will acknowledge your complaint and aim to respond within 30 days.
                  </p>
                  <p>
                    If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) for independent advice.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <span className="text-primary/40">13.</span> Contact Us
                </h2>
                <div className="bg-secondary/10 p-8 md:p-12 rounded-3xl border border-border/50">
                  <p className="text-lg text-muted-foreground mb-8">
                    If you have questions, concerns, or wish to exercise your privacy rights, please reach out to our dedicated team:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Business Entity</p>
                      <p className="text-xl font-serif font-bold text-foreground">VRJ ELECTRICS</p>
                      <p className="text-muted-foreground font-medium">ACN 19 678 394 351</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Primary Contact</p>
                      <a href="mailto:venkat@vrjelectrics.com.au" className="text-xl font-serif font-bold text-foreground hover:text-primary transition-colors block underline decoration-primary/30 underline-offset-8">
                        venkat@vrjelectrics.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
