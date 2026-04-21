import Image from 'next/image'
import Link from 'next/link'
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const packages = [
  { title: '6.6KW Solar System', href: '/6-6kw-solar' },
  { title: '10.1KW Solar System', href: '/10-1kw-solar' },
  { title: '13.2KW Solar System', href: '/13-2kw-solar' },
  { title: 'Solar Battery Installation', href: '/solar-battery-installation' },
  { title: 'Heat Pump Installation', href: '/heat-pump-installation' },
  { title: 'Aircon Service', href: '/aircon-service' },
]

const batteryServices = [
  { title: 'Fox ESS Battery', href: '/fox-ess-battery' },
  { title: 'Sungrow Battery', href: '/sungrow-battery' },
]

const company = [
  { title: 'About Us', href: '/about' },
  { title: 'Our Projects', href: '/projects' },
  { title: 'Our Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
  { title: 'Careers', href: '/contact' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Terms of Service', href: '/contact' },
]

const locations = [
  'Victoria',
]

export function Footer() {
  return (
    <footer className="bg-[#050b1a] text-white overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      {/* Main Footer */}
      <div className="container-premium section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="VRJ Electrics Logo"
                width={180}
                height={50}
                className="h-10 w-auto brightness-0 invert"
                style={{ minHeight: '40px', display: 'block' }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Australia's premium electrical and solar installation company. Transforming homes and businesses
              with sustainable energy solutions since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Vrj-Electrics/61576492528901/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-primary hover:text-primary-foreground transition-all border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/vrjelectrics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-primary hover:text-primary-foreground transition-all border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/vrjelectrics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-primary hover:text-primary-foreground transition-all border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 underline underline-offset-8 decoration-primary/30">
              Our Offerings
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">Solar Packages</h4>
                <ul className="space-y-3">
                  {packages.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">Solar Batteries</h4>
                <ul className="space-y-3">
                  {batteryServices.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 underline underline-offset-8 decoration-primary/30">
              Company
            </h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 underline underline-offset-8 decoration-primary/30">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:0479074555"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-primary transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="mt-1.5">0479074555</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vrjelectrics.com.au"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-primary transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="mt-1.5">info@vrjelectrics.com.au</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="mt-1.5">86 Hotham St, Preston VIC 3072</span>
              </li>
            </ul>
            <div className="mt-10 pt-6 border-t border-white/5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
                Serving Victoria
              </h4>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="text-[10px] px-2.5 py-1 bg-white/5 rounded-md text-white/60 border border-white/10"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-premium py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40 tracking-wider">
            <p>
              © {new Date().getFullYear()} VRJ Electrics. All rights reserved. | Powered by <a href="https://fubit.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">FUBIT IT SOLUTIONS</a>
            </p>
            <div className="flex items-center gap-4">
              <span className="hover:text-white/60 transition-colors cursor-default">Clean Energy Council Approved Retailer</span>
              <span className="text-primary/30">•</span>
              <span className="hover:text-white/60 transition-colors cursor-default">CEC Accredited Installers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
