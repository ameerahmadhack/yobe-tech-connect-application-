"use client"

import { Copy, Check, ArrowLeft } from "lucide-react"
import { useState } from "react"

interface PaymentPageProps {
  formData: any
  onBack: () => void
}

export default function PaymentPage({ formData, onBack }: PaymentPageProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const bankDetails = {
    accountNumber: "6110238629",
    bank: "OPay",
    accountName: "AHMAD WAZIRI MUSA",
    amount: "1500",
  }

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  const handlePaymentComplete = async () => {
    try {
      // Send payment completion message to Telegram
      const messageText = `
<b>💳 PAYMENT COMPLETED - YOBE TECH CONNECT</b>

<b>👤 Registrant Information</b>
<b>Full Name:</b> ${formData.fullName}
<b>Email:</b> ${formData.email}
<b>Phone:</b> ${formData.phone}

<b>💰 Payment Details</b>
<b>Amount Paid:</b> ₦${bankDetails.amount}
<b>Bank:</b> ${bankDetails.bank}
<b>Status:</b> ✓ CONFIRMED

<i>Registration is now complete!</i>
      `.trim()

      await fetch(`https://api.telegram.org/bot7971028407:AAG6ScsaUOqLPFhkffGZEtGEfoIDOgcwEzo/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "6388682226",
          text: messageText,
          parse_mode: "HTML",
        }),
      })

      alert("Payment confirmed! Your registration is now complete. Check your email for confirmation.")
      window.location.href = "/"
    } catch (error) {
      console.error("Error confirming payment:", error)
      alert("Error confirming payment. Please try again.")
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-background to-secondary">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up">
          <h1 className="text-3xl font-bold text-primary mb-2">Complete Your Payment</h1>
          <p className="text-muted-foreground mb-8">
            Transfer the required amount to complete your YOBE TECH CONNECT registration.
          </p>

          {/* Payment Amount Box */}
          <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-8">
            <p className="text-muted-foreground mb-2">Amount to Pay</p>
            <p className="text-4xl font-bold text-accent">₦{bankDetails.amount}</p>
          </div>

          {/* Bank Details */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">Bank Details</h2>

            {/* Account Name */}
            <div className="border border-input rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                <p className="font-semibold text-foreground">{bankDetails.accountName}</p>
              </div>
              <button
                onClick={() => handleCopy(bankDetails.accountName, "accountName")}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                title="Copy account name"
              >
                {copied === "accountName" ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>

            {/* Bank Name */}
            <div className="border border-input rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Bank</p>
                <p className="font-semibold text-foreground">{bankDetails.bank}</p>
              </div>
              <button
                onClick={() => handleCopy(bankDetails.bank, "bank")}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                title="Copy bank name"
              >
                {copied === "bank" ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>

            {/* Account Number */}
            <div className="border border-input rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                <p className="font-semibold text-foreground font-mono">{bankDetails.accountNumber}</p>
              </div>
              <button
                onClick={() => handleCopy(bankDetails.accountNumber, "accountNumber")}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                title="Copy account number"
              >
                {copied === "accountNumber" ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-lg mb-8">
            <h3 className="font-semibold text-primary mb-2">How to Pay:</h3>
            <ol className="text-sm text-foreground space-y-1 list-decimal list-inside">
              <li>Open your bank app or visit your bank</li>
              <li>Use the account details above to make a transfer</li>
              <li>Transfer exactly ₦{bankDetails.amount} to complete registration</li>
              <li>Return here and click "Payment Done" button below</li>
            </ol>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-yellow-800">
              ⚠️ <span className="font-semibold">Important:</span> Please ensure you transfer the exact amount (₦
              {bankDetails.amount}) to avoid delays in registration confirmation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="flex-1 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handlePaymentComplete}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Payment Done
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            After clicking "Payment Done", we will send you a confirmation. Your registration will be fully activated.
          </p>
        </div>
      </div>
    </div>
  )
}
