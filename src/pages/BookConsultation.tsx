
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Calendar, Video, CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Declare window with Razorpay property
declare global {
  interface Window {
    Razorpay: any;
  }
}

const BookConsultation = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Define consultation plans
  const consultationPlans = [
    {
      id: "academic",
      title: "Academic Consultation",
      price: 1999,
      features: [
        "45-minute personalized session",
        "Academic pathway planning",
        "Subject selection guidance",
        "1-week email support",
      ],
      color: "#00bfa6",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      id: "career",
      title: "Career Consultation",
      price: 2499,
      features: [
        "60-minute career planning session",
        "Industry insights and guidance",
        "Resume and portfolio review",
        "2-week email support",
      ],
      color: "#2d9cdb", 
      icon: <Video className="h-5 w-5" />
    },
    {
      id: "international",
      title: "International Education",
      price: 3999,
      features: [
        "90-minute comprehensive session",
        "Study abroad opportunities",
        "University application guidance",
        "Visa and documentation assistance",
        "1-month email support",
      ],
      color: "#f0e6d2",
      icon: <CreditCard className="h-5 w-5" />
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!selectedPlan) {
      toast({
        title: "Please select a consultation plan",
        variant: "destructive"
      });
      return false;
    }

    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      toast({
        title: "Please fill all required fields",
        description: "Name, email and phone are required",
        variant: "destructive"
      });
      return false;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email format",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const initiatePayment = () => {
    if (!validateForm()) return;

    setLoading(true);
    
    // Get selected plan details
    const plan = consultationPlans.find(p => p.id === selectedPlan);
    if (!plan) return;

    // Load Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      // Razorpay options
      const options = {
        key: "rzp_test_YOUR_KEY_HERE", // Replace with your actual test key
        amount: plan.price * 100, // Amount in smallest currency unit (paise for INR)
        currency: "INR",
        name: "GGS Global Education",
        description: `Booking for ${plan.title}`,
        image: "/lovable-uploads/cf86f43a-dfc9-45f0-9b64-e278a2bec9b6.png", // Replace with your logo
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#00bfa6",
        },
        handler: function (response: any) {
          // Payment success
          const paymentId = response.razorpay_payment_id;
          toast({
            title: "Payment Successful!",
            description: `Your consultation has been booked. Reference ID: ${paymentId.substring(0, 8)}...`,
          });
          
          // In a real app, you would send this data to your backend
          console.log("Payment successful:", response);
          console.log("Form data:", formData);
          console.log("Selected plan:", plan);
          
          // Navigate to success page or back to home
          setTimeout(() => {
            navigate("/payment-success");
          }, 2000);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            toast({
              title: "Payment Cancelled",
              description: "You can try again when you're ready.",
            });
          },
        },
      };

      // Initialize Razorpay
      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setLoading(false);
    };
    
    script.onerror = () => {
      setLoading(false);
      toast({
        title: "Payment gateway error",
        description: "Please try again later.",
        variant: "destructive"
      });
    };

    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0]">
      <Navbar />
      
      {/* Consultation Page Header */}
      <div className="pt-32 pb-16 bg-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0e6d2] mb-6">
              Book a Consultation
            </h1>
            <p className="text-lg text-[#a0a0a0]">
              Take the first step towards your educational transformation with our expert consultants.
            </p>
          </div>
        </div>
      </div>
      
      {/* Consultation Booking Form */}
      <section className="py-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="plans" className="mb-8">
              <TabsList className="grid grid-cols-2 bg-[#1F1F1F] p-1 mb-8">
                <TabsTrigger value="plans" className="data-[state=active]:bg-[#00bfa6] data-[state=active]:text-white">
                  Select a Plan
                </TabsTrigger>
                <TabsTrigger value="form" className="data-[state=active]:bg-[#00bfa6] data-[state=active]:text-white">
                  Your Information
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="plans" className="space-y-6 mt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f0e6d2] mb-8">Choose Your Consultation Package</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {consultationPlans.map((plan) => (
                    <Card 
                      key={plan.id}
                      className={`bg-gradient-to-br from-[#1a1a1a] to-[#252525] border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                        selectedPlan === plan.id 
                          ? `border-[${plan.color}] shadow-lg shadow-[${plan.color}]/20` 
                          : 'border-[#2d2d2d]'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <CardContent className="p-6 pt-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className={`p-2 rounded-md mb-4 inline-block`} style={{ backgroundColor: `${selectedPlan === plan.id ? plan.color : '#2d2d2d'}30` }}>
                              <div className="text-[#00bfa6]">{plan.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold text-[#f0e6d2] mb-1">{plan.title}</h3>
                          </div>
                          {selectedPlan === plan.id && (
                            <div className="bg-[#00bfa6] rounded-full p-1">
                              <Check className="h-4 w-4 text-black" />
                            </div>
                          )}
                        </div>
                        
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-[#e0e0e0]">₹{plan.price}</span>
                          <span className="text-[#a0a0a0] ml-1">one-time</span>
                        </div>
                        
                        <ul className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-4 w-4 text-[#00bfa6] mr-2 mt-1 shrink-0" />
                              <span className="text-[#a0a0a0]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          className={`w-full mt-8 ${
                            selectedPlan === plan.id 
                              ? 'bg-[#00bfa6] hover:bg-[#00bfa6]/80' 
                              : 'bg-[#2d2d2d] hover:bg-[#3d3d3d]'
                          } text-white`}
                          onClick={() => {
                            setSelectedPlan(plan.id);
                            document.querySelector('[data-state="inactive"][value="form"]')?.click();
                          }}
                        >
                          Select Plan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="form" className="space-y-6 mt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f0e6d2] mb-8">Complete Your Booking</h2>
                
                {selectedPlan ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-[#e0e0e0] mb-2">Full Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#1F1F1F] border border-[#2d2d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bfa6] text-[#e0e0e0]"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-[#e0e0e0] mb-2">Email Address <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#1F1F1F] border border-[#2d2d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bfa6] text-[#e0e0e0]"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-[#e0e0e0] mb-2">Phone Number <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#1F1F1F] border border-[#2d2d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bfa6] text-[#e0e0e0]"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-[#e0e0e0] mb-2">Country/Region</label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#1F1F1F] border border-[#2d2d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bfa6] text-[#e0e0e0]"
                        >
                          <option value="">Select Country</option>
                          <option value="Qatar">Qatar</option>
                          <option value="UAE">UAE</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-[#e0e0e0] mb-2">Additional Information</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#1F1F1F] border border-[#2d2d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bfa6] text-[#e0e0e0]"
                          placeholder="Tell us about your educational goals or any specific questions"
                        ></textarea>
                      </div>
                    </div>
                    
                    <div>
                      <Card className="bg-[#1F1F1F] border-[#2d2d2d]">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-[#f0e6d2] mb-4">Your Selection</h3>
                          
                          {selectedPlan && (() => {
                            const plan = consultationPlans.find(p => p.id === selectedPlan);
                            if (!plan) return null;
                            
                            return (
                              <div className="space-y-4">
                                <div className="flex justify-between">
                                  <span className="text-[#e0e0e0]">Consultation Type:</span>
                                  <span className="text-[#00bfa6] font-medium">{plan.title}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                  <span className="text-[#e0e0e0]">Price:</span>
                                  <span className="text-[#e0e0e0] font-medium">₹{plan.price}</span>
                                </div>
                                
                                <div className="border-t border-[#2d2d2d] my-4 pt-4">
                                  <div className="flex justify-between text-lg">
                                    <span className="text-[#e0e0e0] font-medium">Total:</span>
                                    <span className="text-[#00bfa6] font-bold">₹{plan.price}</span>
                                  </div>
                                </div>
                                
                                <div className="bg-[#121212] border border-[#2d2d2d] rounded-md p-4 mt-6">
                                  <h4 className="text-[#f0e6d2] font-medium mb-2">What happens next?</h4>
                                  <ul className="space-y-2">
                                    <li className="flex items-start text-sm text-[#a0a0a0]">
                                      <ArrowRight className="h-4 w-4 text-[#00bfa6] mr-2 mt-1 shrink-0" />
                                      Complete your payment securely via Razorpay
                                    </li>
                                    <li className="flex items-start text-sm text-[#a0a0a0]">
                                      <ArrowRight className="h-4 w-4 text-[#00bfa6] mr-2 mt-1 shrink-0" />
                                      Receive confirmation email with booking details
                                    </li>
                                    <li className="flex items-start text-sm text-[#a0a0a0]">
                                      <ArrowRight className="h-4 w-4 text-[#00bfa6] mr-2 mt-1 shrink-0" />
                                      Our team will contact you to schedule the consultation
                                    </li>
                                  </ul>
                                </div>
                                
                                <Button 
                                  onClick={initiatePayment}
                                  disabled={loading}
                                  className="w-full bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white mt-4 py-6"
                                  size="lg"
                                >
                                  {loading ? 'Processing...' : 'Proceed to Payment'}
                                </Button>
                                
                                <p className="text-xs text-center text-[#a0a0a0] mt-4">
                                  By proceeding, you agree to our Terms of Service and Privacy Policy
                                </p>
                              </div>
                            );
                          })()}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <h3 className="text-xl text-[#e0e0e0] mb-4">Please select a consultation plan first</h3>
                    <Button 
                      onClick={() => document.querySelector('[data-state="inactive"][value="plans"]')?.click()}
                      className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white"
                    >
                      Go to Plans
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default BookConsultation;
