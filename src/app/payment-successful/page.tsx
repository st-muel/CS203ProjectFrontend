"use client";

export const PaymentSuccessful = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-900">
      <div className="flex flex-col items-center gap-4">
        <div className="text-5xl font-bold text-white">Payment Successful!</div>
        <div className="text-2xl font-bold text-white">
          Thank you for your purchase!
        </div>
        <div className="text-2xl font-bold text-white">
          Your tickets will be sent to your email shortly.
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
