
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

// Service packages data
const servicePackages = [
  {
    id: "academic",
    name: "Academic Tutoring",
    price: 300,
    features: [
      "2 sessions per week",
      "Personalized curriculum",
      "Monthly progress reports",
      "Direct teacher communication",
    ],
    recommended: false,
    color: "#00bfa6",
  },
  {
    id: "career",
    name: "Career Counseling",
    price: 500,
    features: [
      "3 counseling sessions",
      "Aptitude assessment",
      "Career roadmap planning",
      "Industry expert consultation",
      "Follow-up session",
    ],
    recommended: true,
    color: "#2d9cdb",
  },
  {
    id: "international",
    name: "Study Abroad Package",
    price: 1200,
    features: [
      "University selection guidance",
      "Application assistance for 5 universities",
      "SOP and essay review",
      "Interview preparation",
      "Visa application support",
      "Pre-departure orientation",
    ],
    recommended: false,
    color: "#f0e6d2",
  },
  {
    id: "ielts",
    name: "IELTS Preparation",
    price: 400,
    features: [
      "8 live training sessions",
      "Practice test materials",
      "One-on-one speaking practice",
      "Writing assessment and feedback",
      "Test day preparation",
    ],
    recommended: false,
    color: "#e0e0e0",
  },
];

const BookConsultation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form states
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: undefined as Date | undefined,
    time: "",
    message: "",
    paymentMethod: "card",
  });
  
  // Package selection state
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Available time slots
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle date selection
  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, date }));
  };
  
  // Handle package selection
  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    setFormData(prev => ({ ...prev, service: packageId }));
  };

  // Move to next step
  const nextStep = () => {
    if (step === 1) {
      // Validate personal info
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 2) {
      // Validate service selection
      if (!selectedPackage) {
        toast({
          title: "Service Selection Required",
          description: "Please select a service package",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 3) {
      // Validate date and time
      if (!formData.date || !formData.time) {
        toast({
          title: "Scheduling Information Required",
          description: "Please select both date and time for your consultation",
          variant: "destructive",
        });
        return;
      }
    }
    
    setStep(current => current + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Go back to previous step
  const prevStep = () => {
    setStep(current => current - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Handle payment submission
  const handlePayment = () => {
    setIsLoading(true);
    
    // Simulating Razorpay integration
    setTimeout(() => {
      // In a real app, you would open Razorpay here
      const razorpayOptions = {
        key: "rzp_test_yourkeyhere",
        amount: getSelectedPackagePrice() * 100, // amount in paisa
        currency: "INR",
        name: "GGS Global Education",
        description: `Booking for ${getSelectedPackageName()}`,
        handler: function() {
          // This would be called on successful payment
          navigate('/payment-success', { 
            state: { 
              package: getSelectedPackageName(),
              date: formData.date ? format(formData.date, "EEEE, MMMM d, yyyy") : "",
              time: formData.time
            }
          });
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#00bfa6"
        }
      };

      // Instead of actually loading Razorpay (which would need the script),
      // we'll just simulate the success for this demo
      setTimeout(() => {
        if (document && document.getElementById('simulation-payment-button')) {
          // Using a different approach to avoid TypeScript error
          const element = document.getElementById('simulation-payment-button');
          if (element) {
            // TypeScript knows element is not null here
            (element as HTMLElement).click(); // Using type assertion
          }
        }
      }, 1000);
    }, 1500);
  };

  // Helper to get selected package price
  const getSelectedPackagePrice = (): number => {
    if (!selectedPackage) return 0;
    const pkg = servicePackages.find(p => p.id === selectedPackage);
    return pkg ? pkg.price : 0;
  };
  
  // Helper to get selected package name
  const getSelectedPackageName = (): string => {
    if (!selectedPackage) return "";
    const pkg = servicePackages.find(p => p.id === selectedPackage);
    return pkg ? pkg.name : "";
  };

  // Simulate payment success (for demo purposes)
  const simulatePaymentSuccess = () => {
    navigate('/payment-success', { 
      state: { 
        package: getSelectedPackageName(),
        date: formData.date ? format(formData.date, "EEEE, MMMM d, yyyy") : "",
        time: formData.time
      }
    });
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-[#f0e6d2] mb-4">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#e0e0e0]">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="bg-[#1a1a1a]/80 border-[#2d2d2d] focus-visible:border-[#00bfa6] focus-visible:ring-[#00bfa6]/10 text-[#e0e0e0]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#e0e0e0]">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="bg-[#1a1a1a]/80 border-[#2d2d2d] focus-visible:border-[#00bfa6] focus-visible:ring-[#00bfa6]/10 text-[#e0e0e0]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#e0e0e0]">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="bg-[#1a1a1a]/80 border-[#2d2d2d] focus-visible:border-[#00bfa6] focus-visible:ring-[#00bfa6]/10 text-[#e0e0e0]"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button 
                onClick={nextStep}
                className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white"
              >
                Continue
              </Button>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-[#f0e6d2] mb-4">Select Service Package</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicePackages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className={`fancy-border cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                    selectedPackage === pkg.id ? 'ring-2 ring-[#00bfa6] ring-opacity-70' : ''
                  }`}
                  style={{ "--glow-color": `${pkg.color}80` } as React.CSSProperties}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  <div className="p-6 relative">
                    {pkg.recommended && (
                      <div className="absolute -top-3 -right-3 bg-[#00bfa6] text-white text-xs px-3 py-1 rounded-full z-10">
                        Recommended
                      </div>
                    )}
                    <h4 className="text-lg font-semibold text-[#f0e6d2] mb-2">{pkg.name}</h4>
                    <div className="flex items-end mb-4">
                      <span className="text-2xl font-bold text-[#00bfa6]">${pkg.price}</span>
                      <span className="text-[#a0a0a0] ml-1">/package</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#00bfa6] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-[#e0e0e0] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                onClick={prevStep}
                variant="outline"
                className="border-[#2d2d2d] text-[#e0e0e0] hover:bg-[#2d2d2d]/10"
              >
                Back
              </Button>
              <Button 
                onClick={nextStep}
                className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white"
              >
                Continue
              </Button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-[#f0e6d2] mb-4">Schedule Your Consultation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="fancy-border overflow-visible p-6">
                <Label className="text-[#e0e0e0] mb-4 block">Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-[#1a1a1a]/80 border-[#2d2d2d]",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : <span>Select Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-[#1a1a1a] border-[#2d2d2d]">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateChange}
                      initialFocus
                      disabled={(date) => {
                        // Disable past dates and weekends
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const day = date.getDay();
                        return date < today || day === 0 || day === 6;
                      }}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="fancy-border p-6">
                <Label className="text-[#e0e0e0] mb-4 block">Select Time</Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => handleSelectChange("time", value)}
                >
                  <SelectTrigger className="bg-[#1a1a1a]/80 border-[#2d2d2d] focus:ring-[#00bfa6]/10">
                    <SelectValue placeholder="Select Time Slot" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#2d2d2d]">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time} className="focus:bg-[#2d2d2d]/20">
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="fancy-border p-6 mt-6">
              <Label htmlFor="message" className="text-[#e0e0e0] mb-4 block">Additional Information (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know if you have any specific requirements or questions"
                className="bg-[#1a1a1a]/80 border-[#2d2d2d] focus-visible:border-[#00bfa6] focus-visible:ring-[#00bfa6]/10 min-h-[120px] text-[#e0e0e0]"
              />
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                onClick={prevStep}
                variant="outline"
                className="border-[#2d2d2d] text-[#e0e0e0] hover:bg-[#2d2d2d]/10"
              >
                Back
              </Button>
              <Button 
                onClick={nextStep}
                className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white"
              >
                Continue to Payment
              </Button>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-[#f0e6d2] mb-4">Review & Payment</h3>
            
            <div className="fancy-border p-6">
              <h4 className="text-lg font-semibold text-[#00bfa6] mb-4">Booking Summary</h4>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Service Package:</span>
                  <span className="text-[#e0e0e0] font-medium">{getSelectedPackageName()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Date:</span>
                  <span className="text-[#e0e0e0]">
                    {formData.date ? format(formData.date, "EEEE, MMMM d, yyyy") : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Time:</span>
                  <span className="text-[#e0e0e0]">{formData.time || "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Name:</span>
                  <span className="text-[#e0e0e0]">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Contact:</span>
                  <span className="text-[#e0e0e0]">{formData.email} / {formData.phone}</span>
                </div>
              </div>
              
              <div className="border-t border-[#2d2d2d] my-6 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-[#f0e6d2]">Total Amount:</span>
                  <span className="text-[#00bfa6]">${getSelectedPackagePrice()}</span>
                </div>
              </div>
            </div>
            
            <div className="fancy-border p-6">
              <h4 className="text-lg font-semibold text-[#00bfa6] mb-4">Payment Method</h4>
              
              <Tabs defaultValue="card" onValueChange={(value) => handleSelectChange("paymentMethod", value)}>
                <TabsList className="grid grid-cols-2 bg-[#1a1a1a]">
                  <TabsTrigger value="card" className="data-[state=active]:bg-[#00bfa6] data-[state=active]:text-white">
                    Credit/Debit Card
                  </TabsTrigger>
                  <TabsTrigger value="upi" className="data-[state=active]:bg-[#00bfa6] data-[state=active]:text-white">
                    UPI / Netbanking
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="mt-4">
                  <Card className="bg-[#1a1a1a]/80 border-[#2d2d2d]">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input 
                            id="cardNumber" 
                            placeholder="1234 5678 9012 3456"
                            className="bg-[#212121] border-[#2d2d2d]"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input 
                              id="expiryDate" 
                              placeholder="MM/YY"
                              className="bg-[#212121] border-[#2d2d2d]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input 
                              id="cvv" 
                              placeholder="123"
                              className="bg-[#212121] border-[#2d2d2d]"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input 
                            id="cardName" 
                            placeholder="Name as on card"
                            className="bg-[#212121] border-[#2d2d2d]"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="upi" className="mt-4">
                  <Card className="bg-[#1a1a1a]/80 border-[#2d2d2d]">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="upiId">UPI ID</Label>
                          <Input 
                            id="upiId" 
                            placeholder="yourname@upi"
                            className="bg-[#212121] border-[#2d2d2d]"
                          />
                        </div>
                        
                        <p className="text-[#a0a0a0] text-sm">
                          You'll receive a payment request on your UPI app. Please complete the payment there.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                onClick={prevStep}
                variant="outline"
                className="border-[#2d2d2d] text-[#e0e0e0] hover:bg-[#2d2d2d]/10"
              >
                Back
              </Button>
              <Button 
                onClick={handlePayment}
                className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Complete Payment"}
              </Button>
              
              {/* Hidden button for simulation purposes only */}
              <button 
                id="simulation-payment-button"
                className="hidden"
                onClick={simulatePaymentSuccess}
              >
                Simulate
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#f0e6d2] mb-4">Book Your Consultation</h1>
            <div className="h-1 w-20 bg-[#00bfa6] mx-auto mb-6"></div>
            <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto">
              Schedule a personalized consultation with our education experts and take the first step towards academic excellence.
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex justify-between items-center relative">
              {/* Progress bar */}
              <div className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-[#2d2d2d] w-full"></div>
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-[#00bfa6] transition-all duration-500"
                style={{ width: `${(step - 1) * 33.3}%` }}
              ></div>
              
              {/* Steps */}
              {[1, 2, 3, 4].map((stepNum) => (
                <div 
                  key={stepNum}
                  className={`relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                    step >= stepNum 
                      ? 'border-[#00bfa6] bg-[#00bfa6] text-white' 
                      : 'border-[#2d2d2d] bg-[#1a1a1a] text-[#a0a0a0]'
                  }`}
                >
                  {stepNum}
                </div>
              ))}
            </div>
            
            {/* Step labels */}
            <div className="flex justify-between mt-2 text-xs text-[#a0a0a0]">
              <span className={step >= 1 ? 'text-[#00bfa6]' : ''}>Personal Info</span>
              <span className={step >= 2 ? 'text-[#00bfa6]' : ''}>Service</span>
              <span className={step >= 3 ? 'text-[#00bfa6]' : ''}>Schedule</span>
              <span className={step >= 4 ? 'text-[#00bfa6]' : ''}>Payment</span>
            </div>
          </div>
          
          {/* Form Content */}
          <div className="fancy-border p-8">
            {renderStepContent()}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookConsultation;
