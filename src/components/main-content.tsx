
import Link from "next/link"

export function MainContent() {
  return (
    <section className="w-full ">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
            Unlock Your Digital Potential
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our software solutions empower businesses to innovate, scale, and thrive in the digital age. Experience
            seamless integration, data-driven insights, and unparalleled performance.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
        <img
          src="/placeholder.svg"
          width="800"
          height="600"
          alt="Hero Image"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  )
}
