'use client';
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

export function CustomerReviews() {
  return (
    <section className="w-full ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Recent Customers Are Saying</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers and see what they love about our products.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12">
          <div className="grid gap-6 grid-cols-1">
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Sarah's Image" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Nawanjana International</h3>
                <p className="text-muted-foreground text-sm">
                  {` "From the very beginning, t-4 team demonstrated a deep understanding of our business needs and worked closely with us to design a solution that was not only efficient but also tailored to our specific requirements.

The system they delivered has drastically improved our ability to manage inventory, reducing errors and streamlining our processes. What impressed us most was their commitment to quality and their willingness to go above and beyond to ensure that the software integrated seamlessly with our existing operations.

The customer support provided post-implementation has been exceptional, with their team always ready to assist whenever we've had questions or needed adjustments. We couldn't be happier with the results, and we look forward to continuing our partnership for future projects."`}
                </p>
                <p>{`— Neranjana Dharmapriya`}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Michael's Image" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Turtle Beach Resort Oman</h3>
                <p className="text-muted-foreground text-sm">
                  {`   Our resort management processes have become far more streamlined, allowing us to efficiently manage everything from guest reservations to inventory and financial tracking all in one place.

The team at t minus 4 took the time to understand the unique challenges we face in the hospitality industry and delivered a solution that perfectly fits our needs. The integration of various modules into a single platform has saved us time and reduced the risk of errors, leading to a smoother experience for both our staff and our guests.

What sets t minus 4 apart is their dedication to delivering a high-quality product and their exceptional support throughout the implementation process. They've been responsive and proactive in addressing any issues, ensuring that our system runs flawlessly.

We're extremely satisfied with the ERP system and would highly recommend t minus 4 to any business looking for a robust and reliable software solution."`}

                </p>
                <p>{`— Turtle Beach Resort Oman`}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Emily's Image" />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Indeez Bathik</h3>
                <p className="text-muted-foreground text-sm">
                  {` "Working with T Minus 4 has been a transformative experience for Indeez Bathik. Their team delivered an exceptional e-commerce solution that perfectly aligns with our business needs, enabling us to manage our online store efficiently and enhance our customer experience.

The e-commerce platform is user-friendly, feature-rich, and seamlessly integrates with our existing systems. We’ve seen a significant improvement in sales and customer satisfaction since its launch.

Additionally, the business analytics and reporting tool provided by T Minus 4 has been invaluable. It offers in-depth insights into our sales data and customer behavior, allowing us to make informed decisions and drive our business strategy with confidence.

The professionalism, expertise, and dedication of the T Minus 4 team were evident throughout the project. They were responsive, collaborative, and committed to delivering a solution that exceeded our expectations. We highly recommend T Minus 4 to any business looking for innovative software solutions."`}

                </p>
                <p>{`— Indeez Bathik`}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
