'use client';
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"


export function CustomerReviews() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full px-4 md:px-6 space-y-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-gray-400">What Our Recent Customers Are Saying</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-lg">
              Hear from our satisfied customers and see what they love about our products.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {reviewsData.map((review, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-gray-700 shadow-lg transition-transform duration-300 hover:scale-105">
              <Avatar className="border w-12 h-12">
                <AvatarImage src={review.image} alt={`${review.name}'s Image`} />
                <AvatarFallback>{review.initials}</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                <p className="text-gray-300 text-sm">{review.text}</p>
                <p className="text-gray-400 text-xs">{`— ${review.company}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviewsData = [
  {
    name: "Neranjana Dharmapriya",
    company: "Nawanjana International",
    text: `From the very beginning, t-4 team demonstrated a deep understanding of our business needs and worked closely with us to design a solution that was not only efficient but also tailored to our specific requirements. The system they delivered has drastically improved our ability to manage inventory, reducing errors and streamlining our processes. What impressed us most was their commitment to quality and their willingness to go above and beyond to ensure that the software integrated seamlessly with our existing operations. The customer support provided post-implementation has been exceptional, with their team always ready to assist whenever we've had questions or needed adjustments. We couldn't be happier with the results, and we look forward to continuing our partnership for future projects.`,
    initials: "SJ",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Turtle Beach Resort Oman",
    company: "Turtle Beach Resort Oman",
    text: `Our resort management processes have become far more streamlined, allowing us to efficiently manage everything from guest reservations to inventory and financial tracking all in one place. The team at t minus 4 took the time to understand the unique challenges we face in the hospitality industry and delivered a solution that perfectly fits our needs. The integration of various modules into a single platform has saved us time and reduced the risk of errors, leading to a smoother experience for both our staff and our guests. What sets t minus 4 apart is their dedication to delivering a high-quality product and their exceptional support throughout the implementation process. They've been responsive and proactive in addressing any issues, ensuring that our system runs flawlessly. We're extremely satisfied with the ERP system and would highly recommend t minus 4 to any business looking for a robust and reliable software solution.`,
    initials: "MR",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Indeez Bathik",
    company: "Indeez Bathik",
    text: `Working with T Minus 4 has been a transformative experience for Indeez Bathik. Their team delivered an exceptional e-commerce solution that perfectly aligns with our business needs, enabling us to manage our online store efficiently and enhance our customer experience. The e-commerce platform is user-friendly, feature-rich, and seamlessly integrates with our existing systems. We’ve seen a significant improvement in sales and customer satisfaction since its launch. Additionally, the business analytics and reporting tool provided by T Minus 4 has been invaluable. It offers in-depth insights into our sales data and customer behavior, allowing us to make informed decisions and drive our business strategy with confidence. The professionalism, expertise, and dedication of the T Minus 4 team were evident throughout the project. They were responsive, collaborative, and committed to delivering a solution that exceeded our expectations. We highly recommend T Minus 4 to any business looking for innovative software solutions.`,
    initials: "ES",
    image: "/placeholder-user.jpg"
  },
];
