import Image from "next/image";

export default function Home() {
  return (
    <main>
    <div>
    {/* ----------------------- */}

    <div className="fixed bottom-0 w-full z-40">
      <div className="bg-linear-btn max-w-md mx-auto pb-2.5 pt-6 flex justify-center">
        <div>
          <div className="bg-linear-pink p-px rounded-lg mb-2">
            <button className="bg-linear-pink-purple rounded-lg p-4 text-lg font-bold leading-6 text-white w-[320px]">Join
              the waitlist</button>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <span className="bg-linear-line h-px w-[50px] rotate-180 transform relative">
              <span className="inline-block bg-[#C5C5C5] w-1 h-1 absolute -top-[1.6px] -left-1 rotate-45 transform"></span>
            </span>
            <p className="text-xs font-medium leading-4 text-white">The most rewarding account</p>
            <span className="bg-linear-line h-px w-[50px] relative">
              <span className="inline-block bg-[#C5C5C5] w-1 h-1 absolute -top-[1.5px] -left-1 rotate-45 transform"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* -------------------------- */}
      <div className="max-w-md mx-auto bg-[#000000]">
        <section className="relative pt-5 text-center">
        <img src="/assets/images/live-the-peak.png"className="w-full h-auto" />
        <span style={{ backgroundImage: "url(/assets/logo/jupiter-select-logo.png)" }} className="bg-no-repeat bg-contain w-[130px] h-12 absolute inline-block top-28 left-[110px]"></span>
        <div className="flex gap-3 items-center justify-center mb-[30px]">
        <span style={{ backgroundImage: "url(/assets/icons/left-leavs.png)" }} className="bg-no-repeat bg-contain w-[30px] h-16"></span>
        <div>
          <p className="text-sm font-bold leading-[19px] text-[#E1E1E1]"> 
          <span className="text-2xl font-bold leading-[34px]">3%</span>  cashback on UPI

          <span style={{ backgroundImage: "url(/assets/icons/upi-icon.png)" }} className="bg-no-repeat bg-contain w-6 h-6 inline-block align-middle pl-[4px]"></span>
          </p>
          <div className="h-px w-48 mx-auto bg-linear-gray mt-1 mb-2"></div>
          <p className="text-xs font-medium text-white/50">on top 10 brands and bill payments</p>
        </div>
        <span style={{ backgroundImage: "url(/assets/icons/right-leavs.png)" }} className="bg-no-repeat bg-contain w-[30px] h-16"></span>
        </div>
        <span style={{ backgroundImage: "url(/assets/images/top-10-brands.png)" }} className="bg-no-repeat bg-contain w-[236px] h-[62px] inline-block mb-2"></span>
        {/* <div className="p-px rounded-lg">
          <button className="custom-gradient rounded-lg p-4 text-lg font-bold leading-6 text-white w-[312px] mb-2">
          Join the waitlist
          </button>
          <p className="text-xs font-medium text-white">The most rewarding account</p>
        </div> */}
      
        </section>
        <section className="bg-no-repeat bg-cover w-full h-[566px] inline-block text-center py-[56px] px-5" style={{ backgroundImage: "url(/assets/images/boat-bg.png)" }}>
        <h2 className="text-[38px] font-bold leading-[42px] tracking-[-0.04em] text-linear-gray mb-4">Pay around the<br/>world for less</h2>
        <p className="text-base font-normal leading-5 text-white">Zero Forex Fee </p>
        </section>
        <section className="py-[52px] px-5 relative">
        <span style={{ backgroundImage: "url(/assets/images/bg-light-shape.webp)" }} className="bg-no-repeat bg-cover w-full h-[568px] absolute inline-block top-0 left-0"></span>
        <div className="text-center relative z-10">
          <h2 className="text-[38px] font-bold leading-[42px] tracking-[-0.04em] text-linear-gray mb-[50px]">It’s rewarding <br />up here</h2>
          <div className="bg-white/[0.04] border backdrop-blur text-left px-4 py-5 rounded-lg flex gap-2 items-center mb-2">
          <span className="bg-no-repeat bg-contain w-12 h-12 inline-block" style={{ backgroundImage: "url(/assets/icons/Insights-monthly-expenses.png);"}}></span>
          <p className="text-[#FFFFFF99]">Insights on all your monthly <br />expenses</p>
          </div>
          <div className="bg-white/[0.04] border backdrop-blur text-left px-4 py-5 rounded-lg flex gap-2 items-center mb-2">
          <span className="bg-no-repeat bg-contain w-12 h-12 inline-block" style={{ backgroundImage: "url(/assets/icons/track-monthly-cash.png);"}}></span>
          <p className="text-[14px] font-normal leading-[18px] text-[#FFFFFF99]">Track monthly Cash Flow<br /> & Net Worth </p>
          </div>
          <div className="bg-white/[0.04] border backdrop-blur text-left px-4 py-5 rounded-lg flex gap-2 items-center mb-2">
          <span className="bg-no-repeat bg-contain w-12 h-12 inline-block" style={{ backgroundImage: "url(/assets/icons/invest-daily.png);"}}></span>
          <p className="text-[14px] font-normal leading-[18px] text-[#FFFFFF99]">Invest daily, weekly, or  <br />monthly with No-Penalty SIPs</p>
          </div>
          <div className="bg-white/[0.04] border backdrop-blur text-left px-4 py-5 rounded-lg flex gap-2 items-center">
          <span className="bg-no-repeat bg-contain w-12 h-12 inline-block" style={{ backgroundImage: "url(/assets/icons/instant-loan.png);"}}></span>
          <p className="text-[14px] font-normal leading-[18px] text-[#FFFFFF99]">Instant loans starting
           <br />at 0% interest</p>
          </div>
          <div className="h-px w-[148px] bg-linear-gray mt-9 mx-auto"></div>
        </div>
        </section>
        <section className="py-[30px] px-5 text-center">
        <h2 className="text-[38px] font-bold leading-[42px] tracking-[-0.04em] text-linear-gray mb-[50px]">See if you  <br />make the cut</h2>
        <p className="text-sm font-normal leading-[18px] text-[#8C8C8C] mb-7">Open an All-in-1 <br /><span className="text-white">Savings Account</span></p>
        <span className="bg-no-repeat bg-contain w-12 h-12 inline-block ml-[44px] mb-1" style={{ backgroundImage: "url(/assets/icons/doted-line.png);"}}></span>
        <p className="text-sm font-normal leading-[18px] text-[#8C8C8C] mb-[100px]">Maintain <span className="text-white">₹25,000</span> as your <br />average account balance <br />every month</p>
       {/* <div className="p-px rounded-lg">
          <button className="custom-gradient rounded-lg p-4 text-lg font-bold leading-6 text-white w-full mb-2">
          Get Jupiter Select
          </button>
          <p className="text-xs font-medium text-white">The most rewarding account</p>
        </div> */}
        </section>
      </div>
    </div>   

    </main>
  );
}
