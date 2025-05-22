
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, Package, Home } from "lucide-react";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state || {};

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Confetti effect
    const createConfetti = () => {
      const confettiContainer = document.getElementById('confetti-container');
      if (!confettiContainer) return;
      
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'absolute rounded-full';
        
        // Random size between 5px and 8px
        const size = Math.random() * 3 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random colors
        const colors = ['#00bfa6', '#2d9cdb', '#f0e6d2', '#e0e0e0', '#00BFA6'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = color;
        
        // Random position
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '-20px';
        
        // Random animation duration
        const animationDuration = Math.random() * 3 + 2;
        confetti.style.animation = `confetti ${animationDuration}s ease-in forwards`;
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation completes
        setTimeout(() => {
          if (confetti.parentNode === confettiContainer) {
            confettiContainer.removeChild(confetti);
          }
        }, animationDuration * 1000);
      }
    };
    
    createConfetti();
    const interval = setInterval(createConfetti, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-outfit">
      {/* Confetti container */}
      <div id="confetti-container" className="fixed inset-0 overflow-hidden pointer-events-none z-50"></div>
      
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="fancy-border p-8 md:p-12 text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#00bfa6]/20 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-[#00bfa6] animate-float" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#f0e6d2] mb-3">Payment Successful!</h1>
            <p className="text-lg text-[#a0a0a0] mb-8">
              Your consultation has been successfully booked. We look forward to helping you achieve your educational goals.
            </p>
            
            <div className="bg-[#1a1a1a] rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-[#00bfa6] mb-4">Booking Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 rounded-lg bg-[#212121]">
                  <Package className="h-8 w-8 text-[#00bfa6] mb-3" />
                  <span className="text-[#a0a0a0] text-sm">Service</span>
                  <span className="font-medium text-[#e0e0e0]">{bookingDetails.package || "Consultation Service"}</span>
                </div>
                
                <div className="flex flex-col items-center p-4 rounded-lg bg-[#212121]">
                  <Calendar className="h-8 w-8 text-[#00bfa6] mb-3" />
                  <span className="text-[#a0a0a0] text-sm">Date</span>
                  <span className="font-medium text-[#e0e0e0]">{bookingDetails.date || "Not specified"}</span>
                </div>
                
                <div className="flex flex-col items-center p-4 rounded-lg bg-[#212121]">
                  <Clock className="h-8 w-8 text-[#00bfa6] mb-3" />
                  <span className="text-[#a0a0a0] text-sm">Time</span>
                  <span className="font-medium text-[#e0e0e0]">{bookingDetails.time || "Not specified"}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <p className="text-[#a0a0a0]">
                A confirmation email has been sent to your registered email address with all the details.
              </p>
              <p className="text-[#a0a0a0]">
                If you have any questions, please contact us at <span className="text-[#00bfa6]">support@ggsglobaledu.com</span>
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/')}
                className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => navigate('/book-consultation')}
                className="border-[#2d9cdb] text-[#2d9cdb] hover:bg-[#2d9cdb]/10"
              >
                Book Another Consultation
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
