"use client"

import FileUploader from "../file-uploader"

interface StepFourProps {
  formData: any
  onChange: (field: string, value: any) => void
  onFileChange: (field: string, file: File | null) => void
}

export default function StepFour({ formData, onChange, onFileChange }: StepFourProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">🧍‍♂️ Step 4: Profile & Confirmation</h2>
        <p className="text-muted-foreground">Upload your profile picture and confirm your details</p>
      </div>

      {/* Profile Picture */}
      <FileUploader
        label="Profile Picture *"
        field="profilePicture"
        onFileChange={onFileChange}
        file={formData.profilePicture}
      />

      {/* Summary */}
      <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">📋 Registration Summary</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between pb-2 border-b border-primary/10">
            <span className="font-medium text-foreground">Full Name:</span>
            <span className="text-muted-foreground">{formData.fullName || "—"}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-primary/10">
            <span className="font-medium text-foreground">Email:</span>
            <span className="text-muted-foreground">{formData.email || "—"}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-primary/10">
            <span className="font-medium text-foreground">Field of Expertise:</span>
            <span className="text-muted-foreground">{formData.fieldOfExpertise || "—"}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-primary/10">
            <span className="font-medium text-foreground">Experience:</span>
            <span className="text-muted-foreground">{formData.yearsOfExperience || "—"}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-primary/10">
            <span className="font-medium text-foreground">Qualification:</span>
            <span className="text-muted-foreground">{formData.qualificationLevel || "—"}</span>
          </div>
        </div>
      </div>

      {/* Confirmation Checkbox */}
      <div className="flex items-start gap-3 p-4 bg-accent/10 border border-accent/30 rounded-lg">
        <input
          type="checkbox"
          id="confirm"
          className="w-5 h-5 text-accent rounded focus:ring-2 focus:ring-accent mt-0.5 cursor-pointer"
        />
        <label htmlFor="confirm" className="text-sm text-foreground cursor-pointer">
          I confirm that all the information provided above is <span className="font-semibold">accurate and true</span>.
          I understand that any false information may result in rejection of my application.
        </label>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
        <p className="text-sm text-primary font-semibold mb-1">ℹ️ Next Steps</p>
        <p className="text-sm text-muted-foreground">
          After submitting this form, you will be redirected to a payment page to complete your registration. All your
          documents and information will be securely sent to our team for verification.
        </p>
      </div>
    </div>
  )
}
