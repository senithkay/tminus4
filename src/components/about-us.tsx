import { JSX, SVGProps } from "react"

export function AboutUs() {
  return (
      <div>
        <section className="w-full bg-primary">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
                About T - Minus 4
              </h1>
              <p className="max-w-[600px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {` Our vision is to empower businesses with cutting-edge software solutions that drive innovation and
              success. We are committed to delivering exceptional products and services that exceed our customers'
              expectations.`}
              </p>
              <p className="max-w-[600px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to be the trusted partner of choice for organizations seeking to transform their
                operations
                and unlock new opportunities through the power of technology.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                  src="/images/engineering_team.svg"
                  width="500"
                  height="500"
                  alt="About Us"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full ">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex justify-center order-2 lg:order-1">
              <img
                  src="/images/core-values.svg"
                  width="500"
                  height="500"
                  alt="Core Values"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Values</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Acme Software Solutions, we are guided by a set of core values that shape our culture and drive our
                success. These values are the foundation upon which we build lasting relationships with our clients and
                foster a collaborative, innovative, and customer-centric environment.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">Integrity</h3>
                    <p className="text-muted-foreground">
                      We are committed to the highest standards of ethics and transparency in all our dealings.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">Innovation</h3>
                    <p className="text-muted-foreground">
                      {`We continuously strive to push the boundaries of technology, delivering cutting-edge solutions that
                    transform our clients' businesses.`}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">Customer Focus</h3>
                    <p className="text-muted-foreground">
                      {` Our clients' success is our top priority, and we work tirelessly to understand their unique needs
                    and exceed their expectations.`}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">Collaboration</h3>
                    <p className="text-muted-foreground">
                      We believe in the power of teamwork and foster a collaborative environment where diverse
                      perspectives converge to drive exceptional results.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full  bg-muted md:mt-1 mt-[30px]">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Goals and
                Achievements</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Acme Software Solutions, we are driven by a relentless pursuit of excellence. Our goals are
                ambitious,
                and we are proud to have achieved significant milestones that showcase our expertise and commitment to
                our
                clients.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">Serving 500+ Clients Worldwide</h3>
                    <p className="text-muted-foreground">
                      We have successfully delivered innovative software solutions to a diverse range of clients across
                      various industries, helping them achieve their business objectives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">Achieving 98% Customer Satisfaction</h3>
                    <p className="text-muted-foreground">
                      Our unwavering commitment to customer service has earned us the trust and loyalty of our clients,
                      with a consistently high satisfaction rate.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">Recognized as a Top Software Provider</h3>
                    <p className="text-muted-foreground">
                      Our industry-leading solutions and exceptional service have earned us numerous awards and
                      accolades,
                      solidifying our reputation as a trusted partner in the software industry.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                  src="/images/goals.svg"
                  width="500"
                  height="500"
                  alt="Goals and Achievements"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
      </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
