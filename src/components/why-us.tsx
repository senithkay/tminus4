import { JSX, SVGProps } from "react"

export function WhyUs() {
  return (
      <section className="w-full ">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose US?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At our company, we are driven by a mission to empower businesses with cutting-edge technology
                and
                exceptional customer service. With several years of industry experience, we have honed our expertise to
                deliver innovative solutions that help our clients thrive.
              </p>
            </div>
          </div>
          <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1 card-shadow-primary-pink p-[10px] rounded-[20px] hover:scale-[1.03] transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <AwardIcon className="w-6 h-6 text-primary-foreground"/>
                </div>
                <h3 className="text-lg font-bold">Industry-Leading Expertise</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Our team of seasoned professionals bring decades of experience in the software industry, ensuring your
                project is in the hands of true experts.
              </p>
            </div>
            <div className="grid gap-1 card-shadow-primary-purple p-[10px] rounded-[20px] hover:scale-[1.03] transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <RocketIcon className="w-6 h-6 text-primary-foreground"/>
                </div>
                <h3 className="text-lg font-bold">Innovative Technology</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We stay at the forefront of technological advancements, ensuring our solutions are built on the latest
                and
                most reliable frameworks and tools.
              </p>
            </div>
            <div className="grid gap-1 card-shadow-primary-pink p-[10px] rounded-[20px] hover:scale-[1.03] transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-primary-foreground"/>
                </div>
                <h3 className="text-lg font-bold">Customer-Centric Approach</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Our unwavering commitment to customer satisfaction is at the heart of everything we do. We work closely
                with our clients to understand their unique needs and deliver tailored solutions.
              </p>
            </div>
            <div className="grid gap-1 card-shadow-primary-purple p-[10px] rounded-[20px] hover:scale-[1.03] transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-primary-foreground"/>
                </div>
                <h3 className="text-lg font-bold">Years of Experience</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                With over a decade of experience in the software industry, we have the knowledge and expertise to tackle
                even the most complex challenges.
              </p>
            </div>
            <div className="grid gap-1 card-shadow-primary-pink p-[10px] rounded-[20px] hover:scale-[1.03] transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <TrophyIcon className="w-6 h-6 text-primary-foreground"/>
                </div>
                <h3 className="text-lg font-bold">Awards and Recognition</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Our commitment to excellence has been recognized through numerous industry awards and accolades,
                solidifying our reputation as a trusted partner.
              </p>
            </div>
            <div className="grid gap-1 card-shadow-primary-purple p-[10px] rounded-[20px] hover:scale-[1.03] transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-primary-foreground"/>
                </div>
                <h3 className="text-lg font-bold">Diverse Industry Experience</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Our team has worked with clients across a wide range of industries, giving us a deep understanding of
                the
                unique challenges and requirements of various sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

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
