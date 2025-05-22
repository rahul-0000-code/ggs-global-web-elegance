
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0e6d2] mb-4 text-center">Contact Us</h2>
          <div className="h-1 w-20 bg-[#00bfa6] mx-auto mb-8"></div>
          <p className="text-lg text-[#e0e0e0] mb-12 text-center max-w-2xl mx-auto">
            Have questions about our services? Get in touch with our team of experts today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Contact Options */}
            <div className="space-y-8">
              <div className="bg-[#1F1F1F] p-6 rounded-xl border border-[#2d2d2d] hover:border-[#00bfa6] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-[#121212] rounded-lg">
                    <Phone className="h-5 w-5 text-[#00bfa6] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f0e6d2] mb-2">Call Us</h3>
                    <p className="text-[#a0a0a0] text-sm">Qatar: +974-31188241</p>
                    <p className="text-[#a0a0a0] text-sm">India: +91-9743684250</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F1F1F] p-6 rounded-xl border border-[#2d2d2d] hover:border-[#00bfa6] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-[#121212] rounded-lg">
                    <Mail className="h-5 w-5 text-[#00bfa6] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f0e6d2] mb-2">Email Us</h3>
                    <p className="text-[#a0a0a0] text-sm">support@ggsglobaledu.com</p>
                    <p className="text-[#a0a0a0] text-sm">info@ggsglobaledu.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F1F1F] p-6 rounded-xl border border-[#2d2d2d] hover:border-[#00bfa6] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-[#121212] rounded-lg">
                    <MessageSquare className="h-5 w-5 text-[#00bfa6] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f0e6d2] mb-2">WhatsApp</h3>
                    <p className="text-[#a0a0a0] text-sm">Send us a message on WhatsApp</p>
                    <Button variant="outline" size="sm" className="mt-2 border-[#00bfa6] text-[#00bfa6] hover:bg-[#00bfa6]/10">
                      Chat Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-[#1F1F1F] rounded-xl border border-[#2d2d2d] p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#f0e6d2] mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#e0e0e0]">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-[#121212] border-[#2d2d2d] focus:border-[#00bfa6] focus:ring-[#00bfa6]/10 placeholder:text-[#6c6c6c] text-[#e0e0e0]"
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
                        placeholder="Your email address"
                        required
                        className="bg-[#121212] border-[#2d2d2d] focus:border-[#00bfa6] focus:ring-[#00bfa6]/10 placeholder:text-[#6c6c6c] text-[#e0e0e0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#e0e0e0]">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="bg-[#121212] border-[#2d2d2d] focus:border-[#00bfa6] focus:ring-[#00bfa6]/10 placeholder:text-[#6c6c6c] text-[#e0e0e0]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[#e0e0e0]">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Message subject"
                        className="bg-[#121212] border-[#2d2d2d] focus:border-[#00bfa6] focus:ring-[#00bfa6]/10 placeholder:text-[#6c6c6c] text-[#e0e0e0]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#e0e0e0]">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="w-full rounded-md bg-[#121212] border border-[#2d2d2d] focus:border-[#00bfa6] focus:ring-[#00bfa6]/10 placeholder:text-[#6c6c6c] text-[#e0e0e0] px-3 py-2"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="mt-16">
            <div className="bg-[#1F1F1F] rounded-xl border border-[#2d2d2d] p-4 h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8684786842638!2d51.528550475085796!3d25.286417077655736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c515df92a18d%3A0x9a408f436a3fc5d8!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1715611937942!5m2!1sen!2sus"
                className="w-full h-full rounded-lg"
                loading="lazy"
                style={{ filter: "invert(90%) hue-rotate(180deg)" }}
                referrerPolicy="no-referrer-when-downgrade"
                title="GGS Global Education Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
