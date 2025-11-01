"use client"

import FileUploader from "../file-uploader"

interface StepTwoProps {
  formData: any
  onChange: (field: string, value: any) => void
  onFileChange: (field: string, file: File | null) => void
}

export default function StepTwo({ formData, onChange, onFileChange }: StepTwoProps) {
  const expertiseOptions = [
    "Software Development",
    "Graphics Design",
    "Digital Marketing",
    "Business Management",
    "Data Analysis",
    "UI/UX Design",
    "Content Writing",
    "Video Production",
    "Web Development",
    "Mobile Development",
    "Cloud Computing",
    "Cybersecurity",
    "Machine Learning",
    "Artificial Intelligence",
    "Blockchain Development",
    "DevOps",
    "Database Administration",
    "System Administration",
    "Network Engineering",
    "IT Support",
    "Copywriting",
    "Graphic Animation",
    "Social Media Management",
    "SEO/SEM",
    "Email Marketing",
    "Project Management",
    "Accounting",
    "Finance",
    "Human Resources",
    "Sales",
    "Customer Service",
    "Other",
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">💼 Step 2: Experience & Skills</h2>
        <p className="text-muted-foreground">Tell us about your expertise and capabilities</p>
      </div>

      {/* Field of Expertise */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Field of Expertise *</label>
        <select
          value={formData.fieldOfExpertise}
          onChange={(e) => onChange("fieldOfExpertise", e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        >
          <option value="">Select your field</option>
          {expertiseOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Years of Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Years of Experience *</label>
          <select
            value={formData.yearsOfExperience}
            onChange={(e) => onChange("yearsOfExperience", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Select range</option>
            <option value="0-1">Less than 1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Portfolio / Social Handle</label>
          <input
            type="text"
            value={formData.portfolio}
            onChange={(e) => onChange("portfolio", e.target.value)}
            placeholder="GitHub, LinkedIn, Instagram..."
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Skills Summary */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Skills Summary *</label>
        <textarea
          value={formData.skillsSummary}
          onChange={(e) => onChange("skillsSummary", e.target.value)}
          placeholder="Describe what you can do, your key skills and competencies..."
          rows={5}
          className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
        />
      </div>

      {/* Certificates */}
      <FileUploader
        label="Certificates (Optional)"
        field="certificates"
        onFileChange={onFileChange}
        file={formData.certificates}
      />
    </div>
  )
}
