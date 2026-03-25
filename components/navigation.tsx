'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu, Phone, Sun, ChevronDown, Sparkles } from 'lucide-react'
import { PopupForm } from '@/components/popup-form'

const packages = [
  {
    title: '6.6KW Solar System',
    href: '/6-6kw-solar',
    description: 'Perfect for small to medium Australian homes',
  },
  {
    title: '10.1KW Solar System',
    href: '/10-1kw-solar',
    description: 'High-output performance for large family homes',
  },
  {
    title: '13.2KW Solar System',
    href: '/13-2kw-solar',
    description: 'Maximum energy freedom for large estates and businesses',
  },
  {
    title: 'Solar Battery Installation',
    href: '/solar-battery-installation',
    description: 'Premium battery storage solutions for energy independence',
  },
  {
    title: 'Heat Pump Installation',
    href: '/heat-pump-installation',
    description: 'Energy-efficient hot water solutions for your home',
  },
  {
    title: 'Aircon Service',
    href: '/aircon-service',
    description: 'Expert air conditioning maintenance and repair',
  },
]

const batteryServices = [
  {
    title: 'Fox ESS Battery',
    href: '/fox-ess-battery',
    description: 'High-performance stackable modular battery systems',
  },
  {
    title: 'Sungrow Battery',
    href: '/sungrow-battery',
    description: 'Advanced high-voltage storage with emergency backup',
  },
]

const mainNavItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
          ? 'bg-background/90 backdrop-blur-lg border-b border-border/50 py-3 shadow-sm'
          : 'bg-background/40 backdrop-blur-sm lg:bg-transparent py-5'
        )}
      >
        <div className="container-premium">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="VRJ Electrics"
                width={200}
                height={60}
                className="h-10 w-auto md:h-12"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link
                      href="/"
                      className={cn(
                        'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none',
                        pathname === '/' ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        'bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent',
                        [...packages, ...batteryServices].some(s => pathname === s.href) ? 'text-primary' : ''
                      )}
                    >
                      Packages
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                        {packages.map((item) => (
                          <li key={item.title}>
                            <Link
                              href={item.href}
                              className={cn(
                                'block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50',
                                pathname === item.href && 'bg-accent/50'
                              )}
                            >
                              <div className="text-sm font-medium leading-none text-foreground">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {item.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        'bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent',
                        batteryServices.some(s => pathname === s.href) ? 'text-primary' : ''
                      )}
                    >
                      Solar Batteries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {batteryServices.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                'block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50',
                                pathname === item.href && 'bg-accent/50'
                              )}
                            >
                              <div className="text-sm font-medium leading-none text-foreground">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {item.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {mainNavItems.slice(1).map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none',
                          pathname === item.href ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0479074555"
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0479074555</span>
              </a>
              <PopupForm />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="tel:0479074555"
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="mb-8 pt-4">
                    <Image
                      src="/logo.png"
                      alt="VRJ Electrics"
                      width={150}
                      height={45}
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === '/' ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      Home
                    </Link>

                    <div>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        Packages
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform',
                            isMobileServicesOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="mt-3 ml-4 flex flex-col gap-3">
                          {packages.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                'text-sm transition-colors hover:text-primary',
                                pathname === item.href
                                  ? 'text-primary'
                                  : 'text-muted-foreground'
                              )}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        Solar Batteries
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform',
                            isMobileServicesOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="mt-3 ml-4 flex flex-col gap-3">
                          {batteryServices.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                'text-sm transition-colors hover:text-primary',
                                pathname === item.href
                                  ? 'text-primary'
                                  : 'text-muted-foreground'
                              )}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {mainNavItems.slice(1).map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname === item.href ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}

                    <div className="pt-6 border-t">
                      <PopupForm 
                        trigger={
                          <Button className="w-full btn-premium bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
                            <Sparkles className="mr-2 w-5 h-5 text-primary-foreground/80" />
                            Get Free Quote
                          </Button>
                        }
                      />
                      <a
                        href="tel:0479074555"
                        className="flex items-center justify-center gap-2 mt-4 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>0479074555</span>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>

      {/* Floating Call Button (Mobile) */}
      <a
        href="tel:0479074555"
        className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg animate-pulse-glow"
        aria-label="Call us now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  )
}
