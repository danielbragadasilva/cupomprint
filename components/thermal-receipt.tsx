'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ThermalReceipt() {
  const [formData, setFormData] = useState({
    url: 'https://example.com',
    message: 'Visit us for the best deals in town! Get 10% off on your next purchase when you show this receipt.',
    phone: '+1 (555) 123-4567',
    name: 'Sample Store'
  })

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-4xl mx-auto">
      {/* Form Section */}
      <Card className="flex-1 p-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url" className='font-bold'>Digite seu site</Label>
            <Input
              id="url"
              value={formData.url}
              onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
              placeholder="Enter URL for QR code"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Advertising Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Enter your advertising message"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="Enter phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Establishment Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter establishment name"
            />
          </div>

          <Button onClick={handlePrint} className="w-full">
            Print Receipt
          </Button>
        </div>
      </Card>

      {/* Preview Section */}
      <Card className="flex-1 p-4">
        <div className="text-center mb-4">Preview</div>
        <div className="receipt-preview w-[302px] mx-auto p-4 border rounded-lg">
          <div className="flex justify-center mb-6">
            <QRCodeSVG
              value={formData.url}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>

          <div className="text-center mb-6 whitespace-pre-wrap">
            {formData.message}
          </div>

          <div className="text-center border-t pt-4">
            <div className="font-bold mb-2">{formData.name}</div>
            <div>{formData.phone}</div>
          </div>
        </div>
      </Card>

      {/* Print-only styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .receipt-preview, .receipt-preview * {
            visibility: visible;
          }
          .receipt-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 80mm !important;
            border: none !important;
          }
        }
      `}</style>
    </div>
  )
}

