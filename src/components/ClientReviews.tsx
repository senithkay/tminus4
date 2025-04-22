"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Extended review data with project screenshots
const reviews = [
  {
    id: 1,
    name: "Neranjana Dharmapriya",
    role: "CEO",
    company: "Nawanjana International",
    image: "/placeholder.svg?height=80&width=80",
    projectImage: "",
    rating: 5,
    text: `From the very beginning, t-4 team demonstrated a deep understanding of our business needs and worked closely with us to design a solution that was not only efficient but also tailored to our specific requirements. The system they delivered has drastically improved our ability to manage inventory, reducing errors and streamlining our processes. What impressed us most was their commitment to quality and their willingness to go above and beyond to ensure that the software integrated seamlessly with our existing operations. The customer support provided post-implementation has been exceptional, with their team always ready to assist whenever we've had questions or needed adjustments. We couldn't be happier with the results, and we look forward to continuing our partnership for future projects.`,
  },
  {
    id: 2,
    name: "Turtle Beach Resort Oman",
    role: "Product Manager",
    company: "Turtle Beach Resort Oman",
    image: "",
    projectImage: "/images/Oman.jpg",
    rating: 5,
    text: `Our resort management processes have become far more streamlined, allowing us to efficiently manage everything from guest reservations to inventory and financial tracking all in one place. The team at t minus 4 took the time to understand the unique challenges we face in the hospitality industry and delivered a solution that perfectly fits our needs. The integration of various modules into a single platform has saved us time and reduced the risk of errors, leading to a smoother experience for both our staff and our guests. What sets t minus 4 apart is their dedication to delivering a high-quality product and their exceptional support throughout the implementation process. They've been responsive and proactive in addressing any issues, ensuring that our system runs flawlessly. We're extremely satisfied with the ERP system and would highly recommend t minus 4 to any business looking for a robust and reliable software solution.`,
  },
  {
    id: 3,
    name: "Indeez Bathik",
    role: "Startup Founder",
    company: "Indeez Bathik",
    image: "/placeholder.svg?height=80&width=80",
    projectImage: "/placeholder.svg?height=400&width=600",
    rating: 4,
    text: `Working with T Minus 4 has been a transformative experience for Indeez Bathik. Their team delivered an exceptional e-commerce solution that perfectly aligns with our business needs, enabling us to manage our online store efficiently and enhance our customer experience. The e-commerce platform is user-friendly, feature-rich, and seamlessly integrates with our existing systems. We've seen a significant improvement in sales and customer satisfaction since its launch. Additionally, the business analytics and reporting tool provided by T Minus 4 has been invaluable. It offers in-depth insights into our sales data and customer behavior, allowing us to make informed decisions and drive our business strategy with confidence. The professionalism, expertise, and dedication of the T Minus 4 team were evident throughout the project. They were responsive, collaborative, and committed to delivering a solution that exceeded our expectations. We highly recommend T Minus 4 to any business looking for innovative software solutions.`,
  },
]

export default function ClientReviews() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <motion.section
      ref={containerRef}
      className="py-20 px-10 bg-black relative overflow-hidden"
      // style={{ opacity, scale }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2
            className="text-5xl tracking-tight sm:text-6xl md:text-7xl font-extrabold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="max-w-[800px] mx-auto text-gray-300 text-lg lg:text-xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           {`" Don't just take our word for it. Here's what clients have to say about working with us."`}
          </motion.p>
        </motion.div>

        {/* Featured Testimonial Slider */}
        <TestimonialSlider reviews={reviews} />

        <div className="mt-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function TestimonialSlider({ reviews }: { reviews: Review[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const sliderRef = useRef(null)
  const isInView = useInView(sliderRef, { once: true, amount: 0.3 })

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  // Auto-advance the slider
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 8000)
    return () => clearTimeout(timer)
  }, [currentIndex])

  const currentReview = reviews[currentIndex]

const slideVariants: {
    enter: (direction: number) => { x: number; opacity: number };
    center: { x: number; opacity: number };
    exit: (direction: number) => { x: number; opacity: number };
} = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
    }),
};

  return (
    <motion.div
      ref={sliderRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto mb-20 bg-white rounded-3xl overflow-hidden shadow-2xl"
    >
      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full md:w-1/2 bg-gradient-to-br from-black to-gray-700 p-4"
            >
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={currentReview.projectImage || "/placeholder.svg"}
                  alt={`${currentReview.company} project`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              key={`content-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5 mr-1",
                        i < currentReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                      )}
                    />
                  ))}
                  <span className="ml-auto text-5xl font-light text-gray-200">0{currentIndex + 1}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-6">{currentReview.company}</h3>
                <p className="text-gray-700 line-clamp-4 md:line-clamp-6">{currentReview.text}</p>
              </div>

              <div className="flex items-center mt-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                  <Image
                    src={currentReview.image || "/placeholder.svg"}
                    alt={currentReview.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{currentReview.name}</h4>
                  <p className="text-sm text-gray-600">
                    {currentReview.role}, {currentReview.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

type Review = {
  id: number
  name: string
  role: string
  company: string
  image: string
  projectImage?: string
  rating: number
  text: string
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })
  const [isExpanded, setIsExpanded] = useState(false)

  // Calculate if text needs to be truncated (more than 150 characters)
  const needsTruncation = review.text.length > 150
  const truncatedText = needsTruncation ? `${review.text.substring(0, 150)}...` : review.text

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
        y: -5,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-white rounded-xl shadow-xl p-6 relative overflow-hidden group"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <Quote className="text-gray-300 w-10 h-10 mb-4 absolute top-6 right-6 z-10" />
      </motion.div>

      <div className="flex items-center mb-4">
        <motion.div
          className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-100"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
        >
          <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
        </motion.div>
        <div>
          <motion.h4
            className="font-semibold text-gray-900 text-base md:text-base lg:text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          >
            {review.name}
          </motion.h4>
          <motion.p
            className="text-gray-600 text-sm md:text-base lg:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          >
            {review.role}, {review.company}
          </motion.p>
        </div>
      </div>

      <motion.div
        className="flex mb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 10 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + i * 0.05 }}
          >
            <Star
              className={cn("w-4 h-4 mr-1", i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300")}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 text-sm md:text-base lg:text-base mb-4">{review.text}</p>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 text-sm md:text-base lg:text-base mb-4">
                {needsTruncation ? truncatedText : review.text}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {needsTruncation && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors duration-200 mt-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
          >
            {isExpanded ? (
              <>
                Read less <ChevronUp className="ml-1 w-4 h-4" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="ml-1 w-4 h-4" />
              </>
            )}
          </motion.button>
        )}
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
        className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 absolute bottom-0 left-0"
      />
    </motion.div>
  )
}
