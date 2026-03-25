'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/lib/utils'
import { CheckCircle, ArrowRight } from 'lucide-react'

interface LeadFormProps {
  variant?: 'default' | 'compact' | 'dark'
  title?: string
  description?: string
  className?: string
}

export function LeadForm({
  variant = 'default',
  title = 'Get Your Free Quote',
  description = 'Join thousands of Victorians saving money with solar. Our experts will design the perfect system for your home.',
  className,
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '', // Residential, Commercial
    phaseType: '', // Single Phase, Three Phase
    stories: '', // Single story, double story
    houseNumber: '',
    streetName: '',
    suburb: '',
    state: 'Victoria',
    postcode: '',
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation for postcode
    if (formData.postcode && !/^[0-9]{4}$/.test(formData.postcode)) {
      alert("Please enter a valid 4-digit postcode.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        alert(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to send request. Please check your internet connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div
        className={cn(
          'p-8 rounded-2xl text-center',
          variant === 'dark' ? 'bg-card/10 border border-card/20' : 'bg-card border border-border shadow-xl',
          className
        )}
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className={cn(
          'text-2xl font-serif font-bold mb-3',
          variant === 'dark' ? 'text-card' : 'text-foreground'
        )}>
          Thank You!
        </h3>
        <p className={cn(
          'mb-6',
          variant === 'dark' ? 'text-card/80' : 'text-muted-foreground'
        )}>
          Your quote request has been received. One of our solar experts will contact you within 24 hours.
        </p>
        <p className={cn(
          'text-sm',
          variant === 'dark' ? 'text-card/60' : 'text-muted-foreground'
        )}>
          Check your email for a confirmation and helpful solar resources.
        </p>
      </div>
    )
  }

  const inputClass = cn(
    'h-12 text-base',
    variant === 'dark' && 'bg-card/10 border-card/20 text-card placeholder:text-card/50 focus:border-primary'
  )

  const labelClass = cn(
    'text-sm font-medium',
    variant === 'dark' ? 'text-card/80' : 'text-foreground'
  )

  return (
    <div
      className={cn(
        'p-6 md:p-8 rounded-2xl',
        variant === 'dark'
          ? 'bg-card/5 border border-card/10 backdrop-blur-sm'
          : 'bg-card border border-border shadow-xl',
        className
      )}
    >
      {title && (
        <h3
          className={cn(
            'text-2xl md:text-3xl font-serif font-bold mb-2',
            variant === 'dark' ? 'text-card' : 'text-foreground'
          )}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          className={cn(
            'mb-6',
            variant === 'dark' ? 'text-card/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className={labelClass}>Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Smith"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
            />
          </div>
          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email" className={labelClass}>Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className={labelClass}>Phone Number (Australia +61) *</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium border-r pr-2 h-6 flex items-center">+61</span>
              <Input
                id="phone"
                type="tel"
                placeholder="0400 000 000"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={cn(inputClass, 'pl-16')}
              />
            </div>
          </div>
          {/* Property Type */}
          <div className="space-y-2">
            <Label htmlFor="propertyType" className={labelClass}>Property Type *</Label>
            <Select
              value={formData.propertyType}
              onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
            >
              <SelectTrigger className={cn(inputClass, 'w-full')}>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phase Type */}
          <div className="space-y-2">
            <Label htmlFor="phaseType" className={labelClass}>Phase Type *</Label>
            <Select
              value={formData.phaseType}
              onValueChange={(value) => setFormData({ ...formData, phaseType: value })}
            >
              <SelectTrigger className={cn(inputClass, 'w-full')}>
                <SelectValue placeholder="Select phase type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Phase</SelectItem>
                <SelectItem value="three">Three Phase</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Number of Stories */}
          <div className="space-y-2">
            <Label htmlFor="stories" className={labelClass}>Number of Stories *</Label>
            <Select
              value={formData.stories}
              onValueChange={(value) => setFormData({ ...formData, stories: value })}
            >
              <SelectTrigger className={cn(inputClass, 'w-full')}>
                <SelectValue placeholder="Select story count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single story</SelectItem>
                <SelectItem value="double">Double story</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Address Group */}
        <div className="pt-4 border-t border-border mt-4">
          <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-widest">Address Details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="houseNumber" className={labelClass}>House Number *</Label>
              <Input
                id="houseNumber"
                type="text"
                placeholder="1/A"
                required
                value={formData.houseNumber}
                onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="streetName" className={labelClass}>Street Name *</Label>
              <Input
                id="streetName"
                type="text"
                placeholder="Main Street"
                required
                value={formData.streetName}
                onChange={(e) => setFormData({ ...formData, streetName: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="suburb" className={labelClass}>Suburb *</Label>
              <Input
                id="suburb"
                type="text"
                placeholder="Sunnyvale"
                required
                value={formData.suburb}
                onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state" className={labelClass}>State</Label>
              <Input
                id="state"
                type="text"
                value={formData.state}
                readOnly
                className={cn(inputClass, 'bg-muted/50 cursor-not-allowed')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode" className={labelClass}>Postcode *</Label>
              <Input
                id="postcode"
                type="text"
                placeholder="3000"
                required
                maxLength={4}
                value={formData.postcode}
                onChange={(e) => setFormData({ ...formData, postcode: e.target.value.replace(/[^0-9]/g, '') })}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-4">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            className={cn(
              'mt-0.5',
              variant === 'dark' && 'border-card/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary'
            )}
          />
          <Label
            htmlFor="consent"
            className={cn(
              'text-sm leading-relaxed cursor-pointer',
              variant === 'dark' ? 'text-card/70' : 'text-muted-foreground'
            )}
          >
            I agree to receive communications from VRJ Electrics. We respect your privacy and will never share your information.
          </Label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !formData.consent}
          className="w-full h-14 text-base font-semibold btn-premium bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Spinner className="w-5 h-5" />
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Get My Free Solar Quote
              <ArrowRight className="w-5 h-5" />
            </span>
          )}
        </Button>

        <p
          className={cn(
            'text-center text-sm',
            variant === 'dark' ? 'text-card/50' : 'text-muted-foreground'
          )}
        >
          No obligation • 100% free • Response within 24 hours
        </p>
      </form>
    </div>
  )
}
