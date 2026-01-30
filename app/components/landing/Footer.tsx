import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#FCFCFD]"
      style={{
        minHeight: "380px",
        paddingTop: "80px",
        paddingRight: "40px",
        paddingBottom: "40px",
        paddingLeft: "40px",
        opacity: 1,
      }}
    >
      {/* Container */}
      <div className="mx-auto max-w-[1440px]">

        {/* Top content */}
       
<div className="flex flex-col md:flex-row justify-between gap-16">

  {/* Brand */}
  <div className="space-y-4 max-w-[300px]">
    <div className="flex items-center gap-2">
      <Image src="/images/logo-64.png" alt="Reppoo" width={28} height={28} />
      <span className="text-[18px] font-semibold text-[#23262F]">
        Reppoo
      </span>
    </div>

    <p className="text-[14px] leading-[160%] text-[#777E90]">
      Innovative health assistant app that leverages artificial
      intelligence to provide personalized wellness recommendations.
    </p>

    <p className="text-[14px] text-[#23262F]">
      hello@reppoo.com
    </p>
  </div>

  {/* Links group (ONE SECTION) */}
  <div className="flex gap-24">

    {/* Company */}
    <div className="space-y-4">
      <p className="text-[14px] font-semibold text-[#23262F]">
        Company
      </p>
      <ul className="space-y-3 text-[14px] text-[#777E90]">
        <li>Home</li>
        <li>Early Access</li>
        <li>404</li>
      </ul>
    </div>

    {/* App */}
    <div className="space-y-4">
      <p className="text-[14px] font-semibold text-[#23262F]">
        App
      </p>
      <ul className="space-y-3 text-[14px] text-[#777E90]">
        <li>Download for iOS</li>
        <li>Download for Android</li>
      </ul>
    </div>

    {/* Legal */}
    <div className="space-y-4">
      <p className="text-[14px] font-semibold text-[#23262F]">
        Legal Pages
      </p>
      <ul className="space-y-3 text-[14px] text-[#777E90]">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>

  </div>
</div>


        {/* Divider */}
        <div className="my-10 h-[1px] w-full bg-[#E6E8EC]" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-[14px] text-[#777E90]">
            © Copyright Reppoo
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <div className="w-[40px] h-[40px] rounded-full border border-[#E6E8EC] flex items-center justify-center">
              <Image src="/images/Social icon.png" alt="Facebook" width={18} height={18} />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#E6E8EC] flex items-center justify-center">
              <Image src="/images/Social icon (1).png" alt="Twitter" width={18} height={18} />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#E6E8EC] flex items-center justify-center">
              <Image src="/images/Social icon (2).png" alt="Instagram" width={18} height={18} />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#E6E8EC] flex items-center justify-center">
              <Image src="/images/Social icon (3).png" alt="LinkedIn" width={18} height={18} />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
