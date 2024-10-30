import React, { JSX, SVGProps } from "react"
import Image from "next/image";
import TechStackScroll from "@/components/techStack";
import AutoplayVideo from "@/components/video-component";
import {Compare} from "@/components/ui/compare";

export function AboutUs() {
  return (
      <div className="">
        <section className={'w-full '}>
          <div
              className={'w-full px-[300px]  bg-black text-white text-4xl text-bold flex flex-col justify-center items-center gap-[100px]'}>

            <div className={'flex gap-3 items-center'}>
              <div>
                <h2 className={'text-8xl text-gray-400'}>Design To Code</h2>
                <p className={'max-w-[600px] text-gray-400 text-2xl text-justify'}>
                  {` Transforming design into clean, efficient code is at the heart of what we do. Our approach bridges
                  creativity and functionality, ensuring that every design element is seamlessly brought to life with
                  pixel-perfect accuracy. From user interface concepts to fully responsive web solutions, we turn your
                  vision into a digital reality with the latest development technologies`}
                </p>
              </div>
              <Compare
                  firstImage="/images/evento.png"
                  secondImage="https://assets.aceternity.com/code-problem.png"
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                  slideMode="hover"
              />
            </div>
          </div>
        </section>
        <section className={'w-full '}>

          <AutoplayVideo/>
        </section>
        <section className={'w-full '}>
          <div
              className={'w-full px-[300px] h-screen bg-black text-white text-4xl text-bold flex flex-col justify-center items-center gap-[100px]'}>
            <h2 className={'text-8xl text-gray-400'}>Tech Stack</h2>
            <TechStackScroll/>
          </div>
        </section>
        {/* <section className="w-full ">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex justify-center order-2 lg:order-1 bg-blue-500">
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
                At T - 4, we are guided by a set of core values that shape our culture and drive our
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
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 ">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Goals and
                Achievements</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At T minus 4, we are driven by a relentless pursuit of excellence. Our goals are
                ambitious,
                and we are proud to have achieved significant milestones that showcase our expertise and commitment to
                our
                clients.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold"> 10+ Customers Worldwide</h3>
                    <p className="text-muted-foreground">
                      {`We are proud to have partnered with over 15 businesses, both locally and internationally. Our global client base is a testament to the quality and reliability of our services.`}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">Strong Retention and Repeat Business</h3>
                    <p className="text-muted-foreground">
                      {`Over 80% of our clients return for additional services, highlighting the trust and value we provide in long-term partnerships.`}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 text-primary"/>
                  <div>
                    <h3 className="text-lg font-semibold">{`Launched Innovative Products`}</h3>
                    <p className="text-muted-foreground">
                      {`Introduced innovative software products with strong potential to become market leaders in their respective niches.`}
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
        </section> */}
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
