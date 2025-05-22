
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-[#00bfa6] mb-6">404</h1>
          <h2 className="text-3xl font-bold text-[#f0e6d2] mb-4">Page Not Found</h2>
          <p className="text-lg text-[#a0a0a0] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
