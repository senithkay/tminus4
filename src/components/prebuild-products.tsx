import type { JSX, SVGProps } from "react"

export function PrebuildProducts() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 animate-text">
            Customizable Pre-Built Software Solutions
          </h2>
          <p className="mx-auto max-w-[700px] text-slate-300 text-lg md:text-xl">
            We offer a range of pre-built software solutions that can be easily customized to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productData.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-violet-300 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-slate-300 mb-6">{product.description}</p>

                <div className="space-y-5">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                    >
                      <div className="p-2.5 rounded-xl bg-violet-500/20 text-violet-300 group-hover:bg-violet-500/30 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{feature.name}</h4>
                        <p className="text-sm text-slate-400">{feature.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  {/* <button className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                    Learn More
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
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
    ],
  },
  {
    title: "Report and Document Generator Tool",
    description: "Generates reports using JasperReports, easily integrates with business databases.",
    features: [
      { name: "Data Integration", detail: "Populates data into templates.", icon: <LightbulbIcon /> },
      { name: "Easy Integration", detail: "Smooth operation within workflow.", icon: <PaletteIcon /> },
      { name: "Multi-Format Output", detail: "Generates PDF, Excel, Word.", icon: <TimerIcon /> },
      { name: "Customization", detail: "Align reports with brand needs.", icon: <WifiIcon /> },
    ],
  },
  {
    title: "Email Marketing Solution",
    description: "Connect with your audience via personalized email campaigns.",
    features: [
      { name: "Automation", detail: "Automated workflows for campaigns.", icon: <LightbulbIcon /> },
      { name: "Scheduled Campaigns", detail: "Send at optimal times.", icon: <PaletteIcon /> },
      { name: "Integration Capabilities", detail: "Streamlined marketing processes.", icon: <TimerIcon /> },
      { name: "Compliance & Security", detail: "Secure data handling.", icon: <WifiIcon /> },
    ],
  },
]

function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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
  )
}

function TimerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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
  )
}

function WifiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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
  )
}

function LightbulbIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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
  )
}

// Add this to your globals.css or tailwind.config.js
// @keyframes text {
//   0%, 100% {
//     background-size: 200% 200%;
//     background-position: left center;
//   }
//   50% {
//     background-size: 200% 200%;
//     background-position: right center;
//   }
// }
