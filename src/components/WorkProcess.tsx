"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
}

// Function to handle tilt animation
function useTilt() {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return

    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    const rotateX = (y - 0.5) * -10
    const rotateY = (x - 0.5) * 10

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  return { ref, handleMouseMove, handleMouseLeave }
}

export default function WorkProcess() {
  const steps = [
    {
      title: "1. Meeting with You",
      desc: "We'll start with an Online Meeting to understand your ideas & goals for your project.",
      img: "/images/meeting.png",
    },
    {
      title: "2. Notion Setup",
      desc: "Next, I'll set up your Notion profile to access contracts, invoices and project progress easily.",
      img: "/images/notion.png",
    },
    {
      title: "3. Deep Research",
      desc: "Explore ideas and find the best ways to make your design unique and stand out.",
      img: "/images/Deep.png",
    },
    {
      title: "4. Design Magic",
      desc: "Using the ideas I've gathered, I'll design a useful, impactful and high-converting design.",
      img: "/images/Design.png",
    },
    {
      title: "5. Development",
      desc: "Next, the UI design will be converted to Framer or Elementor & responsive for all devices.",
      img: "/images/Development.png",
    },
    {
      title: "6. Launch & Feedback",
      desc: "Finally, I will launch your design and gather feedback from users to improve more.",
      img: "/images/Feedback.png",
    },
  ]

  return (
    <div className="w-full py-8 md:py-14 bg-gradient-to-br from-black to-gray-800 px-6 md:px-10 lg:px-32 ">
      <div className=" max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl tracking-tight sm:text-6xl md:text-7xl font-extrabold  text-white">WORK PROCESS</h2>
          <p className="max-w-[800px] mx-auto text-gray-300 text-lg lg:text-xl">
            Great designs come from a great process. Here's the simple step-by-step method I use to create user-friendly
            and excellent designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const { ref, handleMouseMove, handleMouseLeave } = useTilt()

            return (
                <motion.div
                key={index}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 will-change-transform hover:scale-105  hover:shadow-[0_20px_40px_rgba(254,105,38,0.4)]"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
              
                <div className="bg-[#fe6926] px-0 py-0 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={400}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
