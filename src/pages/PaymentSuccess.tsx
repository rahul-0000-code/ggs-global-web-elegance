
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, ArrowLeft } from "lucide-react";

const PaymentSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0]">
      <Navbar />
      
      {/* Success Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-[#1F1F1F] rounded-xl border border-[#2d2d2d] p-8 md:p-12">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-[#00bfa6]/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-[#00bfa6]" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0e6d2] mb-6">
              Payment Successful!
            </h1>
            
            <p className="text-lg text-[#a0a0a0] mb-8">
              Thank you for booking a consultation with GGS Global Education. 
              We have received your payment and our team will contact you shortly to schedule your session.
            </p>
            
            <div className="bg-[#121212] border border-[#2d2d2d] rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-[#f0e6d2] mb-4">What happens next?</h2>
              <ul className="space-y-4 text-left">
                <li className="flex items-center">
                  <div className="bg-[#00bfa6]/20 rounded-full p-2 mr-3">
                    <Calendar className="h-5 w-5 text-[#00bfa6]" />
                  </div>
                  <span>You will receive a confirmation email with your booking details</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#00bfa6]/20 rounded-full p-2 mr-3">
                    <Calendar className="h-5 w-5 text-[#00bfa6]" />
                  </div>
                  <span>Our consultant will reach out within 24-48 hours to schedule your session</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#00bfa6]/20 rounded-full p-2 mr-3">
                    <Calendar className="h-5 w-5 text-[#00bfa6]" />
                  </div>
                  <span>Prepare any documents or questions you'd like to discuss during your consultation</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-[#1F1F1F] border border-[#2d2d2d] hover:bg-[#252525] text-[#e0e0e0]">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Home
                </Link>
              </Button>
              
              <Button asChild className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white">
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
