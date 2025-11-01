"use client"

import { CheckCircle, ArrowRight } from "lucide-react"

interface SuccessScreenProps {
  onPaymentComplete?: () => void
}

export default function SuccessScreen({ onPaymentComplete }: SuccessScreenProps) {
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
                <span className="font-semibold">Ready for payment</span> - Complete registration
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Proceed to the payment page to complete your registration.
          </p>

          <button
            onClick={onPaymentComplete}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full justify-center"
          >
            Go to Payment <ArrowRight className="w-4 h-4" />
          </button>

          {/* Footer */}
          <p className="text-xs text-muted-foreground mt-4">Complete your payment to finalize registration.</p>
        </div>
      </div>
    </div>
  )
}
