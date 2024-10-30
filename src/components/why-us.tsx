import { JSX, SVGProps } from "react";

export function WhyUs() {
  return (
    <section className="w-full py-16 md:py-28 bg-gradient-to-br from-black to-gray-800">
      <div className="space-y-12">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-12">
            <h2 className="text-5xl tracking-tight sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">Why Choose Us?</h2>
            <p className="max-w-[800px] mx-auto text-gray-300 text-lg lg:text-xl">
              At our company, we are driven by a mission to empower businesses with cutting-edge technology and
              exceptional customer service. With several years of industry experience, we have honed our expertise to
              deliver innovative solutions that help our clients thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {reasonsData.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105 border-2 border-gray-600 hover:bg-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-900 rounded-md text-indigo-200">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
              </div>
              <p className="text-gray-300 text-base">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasonsData = [
  {
    title: "Industry-Leading Expertise",
    description: "Our team of seasoned professionals bring years of experience, ensuring your project is in expert hands.",
    icon: <AwardIcon />,
  },
  {
    title: "Innovative Technology",
    description: "We stay at the forefront of advancements, ensuring our solutions use the latest and most reliable tools.",
    icon: <RocketIcon />,
  },
  {
    title: "Customer-Centric Approach",
    description: "Our commitment to customer satisfaction is at the heart of everything we do, with tailored solutions.",
    icon: <UsersIcon />,
  },
  {
    title: "Years of Experience",
    description: "With years in the industry, we have the expertise to tackle even the most complex challenges.",
    icon: <ClockIcon />,
  },
  {
    title: "Committed to Quality and Security",
    description: "Quality and security are central, with rigorous testing and industry compliance.",
    icon: <TrophyIcon />,
  },
  {
    title: "Diverse Industry Experience",
    description: "We've worked across various industries, giving us a deep understanding of unique sector challenges.",
    icon: <BriefcaseIcon />,
  },
];

// SVG icon components remain unchanged


function AwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BriefcaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function TrophyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
