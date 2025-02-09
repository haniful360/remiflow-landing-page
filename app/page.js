import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex justify-center bg-gradient-to-b from-white to-gray-100 py-10 px-6">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-500 text-sm">we don’t just transfer money – we maximize your savings.</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Send Money to India with the <span className="text-orange-500">Best Exchange Rates</span> & <span className="text-blue-500">Zero Fees</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-lg">
            We offer better rates than banks, Google, and Remitly with zero transaction fees and a seamless process that lets you send money in just a few taps.
          </p>
          <p className="text-gray-600 mt-2">First-time user? Verify your identity with KYC in just 1 minute to proceed.</p>
          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold">Complete KYC</button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">Send Money</button>
          </div>
        </div>
        
        {/* Right Content - Images */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img src="/images/1.jpg" alt="People using app" className="rounded-lg w-full h-auto" />
          <img src="/images/2.jpg" alt="People using app" className="rounded-lg w-full h-auto" />
          <img src="/images/3.jpg" alt="People using app" className="rounded-lg w-full h-auto" />
          <img src="/images/4.jpg" alt="People using app" className="rounded-lg w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
