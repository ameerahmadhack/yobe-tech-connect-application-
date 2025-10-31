"use client"

import type React from "react"

import { Upload, File, X } from "lucide-react"
import { useState } from "react"

interface FileUploaderProps {
  label: string
  field: string
  onFileChange: (field: string, file: File | null) => void
  file: File | null
}

export default function FileUploader({ label, field, onFileChange, file }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      onFileChange(field, files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      onFileChange(field, files[0])
    }
  }

  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>

      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer ${
            isDragging ? "border-primary bg-primary/10" : "border-border hover:border-primary"
          }`}
        >
          <input type="file" onChange={handleFileSelect} className="hidden" id={`file-${field}`} />
          <label htmlFor={`file-${field}`} className="cursor-pointer block">
            <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">
              {isDragging ? "Drop your file here" : "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF (Max. 10MB)</p>
          </label>
        </div>
      ) : (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <File className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">{file.name}</p>
              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button
            onClick={() => onFileChange(field, null)}
            className="p-1 hover:bg-primary/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground hover:text-primary" />
          </button>
        </div>
      )}
    </div>
  )
}
