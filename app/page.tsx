"use client"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-background to-secondary flex items-center justify-center p-4">
      <div className="animate-slide-up max-w-md w-full">
        <div className="bg-card rounded-lg shadow-2xl p-8 border border-border">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250826-WA0248-CxNWOoCbOM92xuYkpu9UhzrOFlR3lY.jpg"
              alt="YOBE TECH CONNECT"
              width={120}
              height={120}
              className="rounded-full shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-primary">Registration Closed</h1>

            <p className="text-lg text-foreground font-semibold">Thank you for your interest in YOBE TECH CONNECT</p>

            <div className="bg-secondary/10 border border-secondary rounded-lg p-4 my-6">
              <p className="text-foreground text-base">
                Registration has been closed. Please contact admin for support.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">For assistance, please reach out to:</p>
              <a
                href="https://wa.me/2349014480971?text=%23%23%23%23%23A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Contact Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
