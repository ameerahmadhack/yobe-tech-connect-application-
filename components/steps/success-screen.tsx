"use client"

import { CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function SuccessScreen() {
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-primary via-background to-secondary">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center animate-slide-up">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-primary mb-2">Registration Submitted!</h1>

          {/* Message */}
          <p className="text-muted-foreground mb-2">Your registration has been successfully submitted to our team.</p>
          <p className="text-sm text-primary font-semibold mb-6">📧 You will receive a confirmation email shortly.</p>

          {/* Details */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 text-left space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">✓</span>
              <p className="text-sm text-foreground">
                <span className="font-semibold">All documents received</span> - Securely stored
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">✓</span>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Sent to Telegram</span> - Verification in progress
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">✓</span>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Redirecting to payment</span> - Completing registration
              </p>
            </div>
          </div>

          {/* Countdown */}
          <p className="text-sm text-muted-foreground mb-4">
            Redirecting to payment in <span className="font-bold text-primary">{countdown}s</span>...
          </p>

          {/* Button */}
          <a
            href="https://paystack.shop/pay/yobe_tech_connect"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full justify-center"
          >
            Go to Payment <ArrowRight className="w-4 h-4" />
          </a>

          {/* Footer */}
          <p className="text-xs text-muted-foreground mt-4">If you are not redirected, click the button above.</p>
        </div>
      </div>
    </div>
  )
}
