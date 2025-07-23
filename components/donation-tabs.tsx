"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { CreditCard, Heart } from "lucide-react"

export default function DonationTabs() {
  return (
    <Tabs defaultValue="one-time" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
        <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
      </TabsList>
      <TabsContent value="one-time">
        <DonationForm type="one-time" />
      </TabsContent>
      <TabsContent value="monthly">
        <DonationForm type="monthly" />
      </TabsContent>
    </Tabs>
  )
}

function DonationForm({ type }) {
  const [amount, setAmount] = useState(type === "one-time" ? 100 : 35)
  const [customAmount, setCustomAmount] = useState("")
  const [step, setStep] = useState(1)

  const handleAmountSelect = (value) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setAmount(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Process donation
      const finalAmount = amount || (customAmount ? Number.parseFloat(customAmount) : 0)
      alert(`Thank you for your ${type} donation of $${finalAmount}!`)
      // Reset form
      setStep(1)
      setAmount(type === "one-time" ? 100 : 35)
      setCustomAmount("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 ? (
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-medium mb-4 block">Select Amount</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(type === "one-time" ? [50, 100, 250, 500] : [19, 35, 50, 100]).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={cn(
                    "flex items-center justify-center h-16 rounded-lg border-2 font-bold text-lg transition-all",
                    amount === value
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-gray-200 hover:border-red-200 hover:bg-red-50",
                  )}
                  onClick={() => handleAmountSelect(value)}
                >
                  ${value}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="custom-amount">Custom Amount</Label>
            <div className="flex mt-1">
              <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 border-gray-300 rounded-l-md">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="custom-amount"
                type="text"
                placeholder="Enter amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="rounded-l-none"
              />
            </div>
          </div>

          <div>
            <Label className="text-lg font-medium mb-4 block">Donation will support</Label>
            <RadioGroup defaultValue="where-needed">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="where-needed" id="where-needed" />
                <Label htmlFor="where-needed">Where Most Needed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gaza" id="gaza" />
                <Label htmlFor="gaza">Gaza Emergency</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ukraine" id="ukraine" />
                <Label htmlFor="ukraine">Ukraine Response</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hunger" id="hunger" />
                <Label htmlFor="hunger">Global Hunger Crisis</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full py-6 text-lg bg-red-600 hover:bg-red-700">
            Continue <Heart className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Your Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" type="tel" />
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-bold mb-4">Payment Information</h3>

            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <div className="flex">
                <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 border-gray-300 rounded-l-md">
                  <CreditCard className="h-4 w-4 text-gray-500" />
                </div>
                <Input id="card-number" placeholder="1234 5678 9012 3456" className="rounded-l-none" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiration Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" required />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="cover-fees"
              className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <Label htmlFor="cover-fees" className="text-sm">
              I'd like to cover the transaction fees so 100% of my donation goes to Save the Children
            </Label>
          </div>

          <Button type="submit" className="w-full py-6 text-lg bg-red-600 hover:bg-red-700">
            Complete Donation <Heart className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Your donation is secure and encrypted. By proceeding, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      )}
    </form>
  )
}
