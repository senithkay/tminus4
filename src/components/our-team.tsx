
export function OurTeam() {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of experts is dedicated to delivering exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4">
            <div className={'w-[120px] h-[120px] rounded-[60px] overflow-hidden'}>
              <img
                  src="/images/me2.png"
                  alt="Senith Uthsara"
                  className="rounded-full w-full h-full"
                  style={{objectFit: "cover"}}
              />
            </div>
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-semibold">Senith Uthsara</h3>
              <p className="text-muted-foreground">Deployment and Customer Interaction</p>
              <p className="text-sm text-muted-foreground">
                Senith ensures that all deployments run smoothly and that our customers receive the best possible
                experience. He is the key point of contact for client queries and support.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className={'w-[120px] h-[120px] rounded-[60px] overflow-hidden'}>
              <img
                  src="/images/samitha.png"
                  alt="Samitha Rathnayake"
                  className="rounded-full w-full h-full"
                  style={{objectFit: "cover"}}
              />
            </div>
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-semibold">Samitha Rathnayake</h3>
              <p className="text-muted-foreground">Strategic Lead</p>
              <p className="text-sm text-muted-foreground">
                {` Samitha drives our company's strategic initiatives. He also plays a crucial role in maintaining strong relationships with our customers.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className={'w-[120px] h-[120px] rounded-[60px] overflow-hidden'}>
              <img
                  src="/images/kavinda.png"
                  alt="Kavinda Medagoda"
                  className="rounded-full w-full h-full"
                  style={{objectFit: "cover"}}
              />
            </div>
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-semibold">Kavinda Medagoda</h3>
              <p className="text-muted-foreground">UI/UX</p>
              <p className="text-sm text-muted-foreground">
                Sureshsri is the creative force behind our user interfaces, ensuring that our products are not only
                functional but also visually appealing and user-friendly.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className={'w-[120px] h-[120px] rounded-[60px] overflow-hidden'}>
              <img
                  src="/images/lahiru.png"
                  alt="Lahiru Sanjana"
                  className="rounded-full w-full h-full"
                  style={{objectFit: "cover"}}
              />
            </div>
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-semibold">Lahiru Sanjana</h3>
              <p className="text-muted-foreground">Backend Applications and Quality</p>
              <p className="text-sm text-muted-foreground">
                Lahiru is responsible for the robustness and quality of our backend applications. His attention to
                detail ensures that our systems are reliable and efficient.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className={'w-[120px] h-[120px] rounded-[60px] overflow-hidden'}>
              <img
                  src="/images/suresh.png"
                  alt="Sureshsri Dasanayaka"
                  className="rounded-full w-full h-full"
                  style={{objectFit: "cover"}}
              />
            </div>
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-semibold">Sureshsri Dasanayaka</h3>
              <p className="text-muted-foreground">Marketing</p>
              <p className="text-sm text-muted-foreground">
                Sureshsri leads our marketing efforts, driving brand growth and visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
