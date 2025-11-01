"use client"

import FileUploader from "../file-uploader"

interface StepThreeProps {
  formData: any
  onChange: (field: string, value: any) => void
  onFileChange: (field: string, file: File | null) => void
}

export default function StepThree({ formData, onChange, onFileChange }: StepThreeProps) {
  const qualifications = ["SSCE/WAEC", "NECO", "ND", "HND", "BSc", "Masters", "PhD", "Diploma", "Other"]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">🎓 Step 3: Educational Background</h2>
        <p className="text-muted-foreground">Provide your academic history</p>
      </div>

      {/* Primary School */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Primary School Name *</label>
          <input
            type="text"
            value={formData.primarySchool}
            onChange={(e) => onChange("primarySchool", e.target.value)}
            placeholder="School name"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Year Completed *</label>
          <input
            type="number"
            value={formData.primaryYear}
            onChange={(e) => onChange("primaryYear", e.target.value)}
            placeholder="YYYY"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Secondary School */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Secondary School Name *</label>
          <input
            type="text"
            value={formData.secondarySchool}
            onChange={(e) => onChange("secondarySchool", e.target.value)}
            placeholder="School name"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Year Completed *</label>
          <input
            type="number"
            value={formData.secondaryYear}
            onChange={(e) => onChange("secondaryYear", e.target.value)}
            placeholder="YYYY"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* University */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Higher Institution Name</label>
          <input
            type="text"
            value={formData.university}
            onChange={(e) => onChange("university", e.target.value)}
            placeholder="University name (if applicable)"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Course/Program</label>
          <input
            type="text"
            value={formData.course}
            onChange={(e) => onChange("course", e.target.value)}
            placeholder="Your course"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* University Year */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Year Completed</label>
          <input
            type="number"
            value={formData.universityYear}
            onChange={(e) => onChange("universityYear", e.target.value)}
            placeholder="YYYY"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Qualification Level *</label>
          <select
            value={formData.qualificationLevel}
            onChange={(e) => onChange("qualificationLevel", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Select qualification</option>
            {qualifications.map((qual) => (
              <option key={qual} value={qual}>
                {qual}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Education Document */}
      <FileUploader
        label="Educational Document (Optional)"
        field="educationDocument"
        onFileChange={onFileChange}
        file={formData.educationDocument}
      />
    </div>
  )
}
