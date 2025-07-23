"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function DonationForm() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [amount, setAmount] = useState<number | null>(150)
  const [customAmount, setCustomAmount] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const finalAmount = amount || (customAmount ? Number.parseFloat(customAmount) : 0)
    console.log("Donation submitted:", {
      type: donationType,
      amount: finalAmount,
    })
    // Here you would typically redirect to a payment processor
    alert(`Thank you for your ${donationType} donation of $${finalAmount}!`)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">HELP FEED A CHILD BEFORE THEIR TIME RUNS OUT</h2>

      {/* Donation Type Toggle */}
      <div className="grid grid-cols-2 gap-0 mb-6">
        <button
          className={cn(
            "py-3 text-center font-bold transition-colors",
            donationType === "one-time" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300",
          )}
          onClick={() => setDonationType("one-time")}
        >
          ONE-TIME
        </button>
        <button
          className={cn(
            "py-3 text-center font-bold transition-colors",
            donationType === "monthly" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300",
          )}
          onClick={() => setDonationType("monthly")}
        >
          MONTHLY
        </button>
      </div>

      {/* Amount Selection */}
      <div className="grid grid-cols-4 gap-0 mb-6">
        {[67, 100, 150, 300].map((value) => (
          <button
            key={value}
            className={cn(
              "py-3 text-center font-bold border transition-colors",
              amount === value
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100",
            )}
            onClick={() => {
              setAmount(value)
              setCustomAmount("")
            }}
          >
            ${value}
          </button>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4">
        $150 can provide 2 families with food parcels containing canned beans, olive oil, bottles of water and more.
      </p>

      {/* Custom Amount */}
      <div className="mb-6">
        <div className="flex">
          <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 border-gray-300">
            <span className="text-gray-500">$</span>
          </div>
          <Input
            type="text"
            placeholder="Enter other amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value)
              setAmount(null)
            }}
            className="rounded-l-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button onClick={handleSubmit} className="w-full py-6 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg">
        ❤️ DONATE NOW
      </Button>

      {/* Payment Methods & Security */}
      <div className="mt-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <div className="relative w-10 h-6">
            <Image src="/images/visa.png" alt="Visa" fill className="object-contain" />
          </div>
          <div className="relative w-10 h-6">
            <Image src="/images/mastercard.png" alt="Mastercard" fill className="object-contain" />
          </div>
          <div className="relative w-10 h-6">
            <Image src="/images/paypal.png" alt="PayPal" fill className="object-contain" />
          </div>
        </div>
        <p className="text-xs text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Your donation is processed securely
        </p>
      </div>
    </div>
  )
}
