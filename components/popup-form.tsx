'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/lead-form"
import { Sparkles } from "lucide-react"

interface PopupFormProps {
  trigger?: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export function PopupForm({
  trigger,
  title = "Start Your Solar Journey",
  description = "Fill out the form below to receive a personalised solar quote for your property.",
  className,
}: PopupFormProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90">
            <Sparkles className="mr-2 w-5 h-5 text-primary-foreground/80" />
            Request Free Quote
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none bg-transparent">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="max-h-[90vh] overflow-y-auto">
          <LeadForm 
            title={title}
            description={description}
            className="shadow-none border-none rounded-none" 
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
