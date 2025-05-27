import { useRef, useEffect } from "react";

const Payment = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!formRef.current) return;

    // Remove existing scripts if any (prevent duplicates on re-render)
    const existingScript = formRef.current.querySelector("script[data-payment_button_id]");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", "pl_QYpIJ0Ono05TOV");
    script.setAttribute("data-button_text", "Pay Now");
    formRef.current.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <form ref={formRef}></form>
    </div>
  );
};

export default Payment;