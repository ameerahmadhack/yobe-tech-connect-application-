"use client"
import FileUploader from "../file-uploader"

interface StepOneProps {
  formData: any
  onChange: (field: string, value: any) => void
  onFileChange: (field: string, file: File | null) => void
}

export default function StepOne({ formData, onChange, onFileChange }: StepOneProps) {
  const states = ["Yobe"]

  const lgas: { [key: string]: string[] } = {
    Yobe: [
      "Bade",
      "Bursari",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Machina",
      "Nangere",
      "Nguru",
      "Potiskum",
      "Tarmuwa",
      "Yunusari",
      "Yusufari",
    ],
  }

  const currentLGAs = lgas[formData.state] || []

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">🧾 Step 1: Personal Information</h2>
        <p className="text-muted-foreground">Provide your verified personal details</p>
      </div>

      {/* Row 1: Full Name & DOB */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Full Name (as on NIN) *</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Date of Birth *</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 2: Gender & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Gender *</label>
          <select
            value={formData.gender}
            onChange={(e) => onChange("gender", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 3: Phone & Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+234..."
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Home Address *</label>
          <input
            type="text"
            value={formData.homeAddress}
            onChange={(e) => onChange("homeAddress", e.target.value)}
            placeholder="Enter your address"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 4: State & LGA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">State *</label>
          <select
            value={formData.state}
            onChange={(e) => onChange("state", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Local Government *</label>
          <select
            value={formData.localGovernment}
            onChange={(e) => onChange("localGovernment", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
          >
            <option value="">Select LGA</option>
            {currentLGAs && currentLGAs.length > 0 ? (
              currentLGAs.map((lga) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))
            ) : (
              <option disabled>No LGAs available</option>
            )}
          </select>
        </div>
      </div>

      {/* NIN */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">NIN Number *</label>
        <input
          type="text"
          value={formData.nin}
          onChange={(e) => onChange("nin", e.target.value)}
          placeholder="Enter your NIN"
          className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        />
      </div>

      {/* File Uploads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FileUploader
          label="Passport Photograph"
          field="passportPhoto"
          onFileChange={onFileChange}
          file={formData.passportPhoto}
        />
        <FileUploader
          label="Identification Document"
          field="identification"
          onFileChange={onFileChange}
          file={formData.identification}
        />
      </div>

      {/* Student & Occupation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Student Status</label>
          <select
            value={formData.studentStatus}
            onChange={(e) => onChange("studentStatus", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Select Status</option>
            <option value="Student">Current Student</option>
            <option value="Graduate">Graduate</option>
            <option value="Not Student">Not Student</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Occupation/Institution</label>
          <input
            type="text"
            value={formData.occupation}
            onChange={(e) => onChange("occupation", e.target.value)}
            placeholder="Your current role or school"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Emergency Contact Name</label>
          <input
            type="text"
            value={formData.emergencyContact}
            onChange={(e) => onChange("emergencyContact", e.target.value)}
            placeholder="Contact person name"
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Emergency Contact Phone</label>
          <input
            type="tel"
            value={formData.emergencyPhone}
            onChange={(e) => onChange("emergencyPhone", e.target.value)}
            placeholder="+234..."
            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>
    </div>
  )
}
