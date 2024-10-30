import { JSX, SVGProps } from "react";

export function PrebuildProducts() {
  return (
    <section className="w-full py-16 md:py-28 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="w-full grid items-center justify-center gap-16 px-6 md:px-8 ">
        <div className="space-y-4 text-center animate-fadeIn">
          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-gray-400">
            Customizable Pre-Build Software Solutions
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-lg">
            We offer a range of pre-built software solutions that can be easily customized to meet your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {productData.map((product, index) => (
            <div
              key={index}
              className="relative group transform transition-all duration-300 hover:scale-105 shadow-xl rounded-xl p-8 sm:px-10 bg-gray-800 border-2 border-gray-700 hover:bg-gray-700"
            >
              <div className="grid gap-6">
                <h3 className="text-2xl font-bold text-gray-200">{product.title}</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>
              <div className="grid gap-4 mt-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 group-hover:scale-105 transition-all duration-300"
                  >
                    <div className="p-3 bg-indigo-900 rounded-md text-indigo-200 hover:bg-indigo-700 transition duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100">{feature.name}</h4>
                      <p className="text-sm text-gray-400">{feature.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const productData = [
  {
    title: "Secure Attendance Management System",
    description: "A robust solution for accurate, secure attendance tracking in organizations.",
    features: [
      { name: "Fool-proof Attendance", detail: "Prevents proxy attendance.", icon: <LightbulbIcon /> },
      { name: "Real-Time Sync", detail: "Up-to-date records at all times.", icon: <PaletteIcon /> },
      { name: "Comprehensive Reporting", detail: "Customizable reports.", icon: <TimerIcon /> },
      { name: "Integration Capabilities", detail: "Seamless data flow with existing systems.", icon: <WifiIcon /> },
    ]
  },
  {
    title: "Report and Document Generator Tool",
    description: "Generates reports using JasperReports, easily integrates with business databases.",
    features: [
      { name: "Data Integration", detail: "Populates data into templates.", icon: <LightbulbIcon /> },
      { name: "Easy Integration", detail: "Smooth operation within workflow.", icon: <PaletteIcon /> },
      { name: "Multi-Format Output", detail: "Generates PDF, Excel, Word.", icon: <TimerIcon /> },
      { name: "Customization", detail: "Align reports with brand needs.", icon: <WifiIcon /> },
    ]
  },
  {
    title: "Email Marketing Solution",
    description: "Connect with your audience via personalized email campaigns.",
    features: [
      { name: "Automation", detail: "Automated workflows for campaigns.", icon: <LightbulbIcon /> },
      { name: "Scheduled Campaigns", detail: "Send at optimal times.", icon: <PaletteIcon /> },
      { name: "Integration Capabilities", detail: "Streamlined marketing processes.", icon: <TimerIcon /> },
      { name: "Compliance & Security", detail: "Secure data handling.", icon: <WifiIcon /> },
    ]
  }
];

// SVG icons remain unchanged


function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function SmartphoneIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function TimerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}

function WifiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function LightbulbIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
