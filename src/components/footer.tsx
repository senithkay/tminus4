
import Link from "next/link"
import { JSX, SVGProps } from "react"

export function Footer() {
  return (
      <footer className="bg-muted py-12 md:py-16 w-full bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-4">
            <Link href="#" prefetch={false}>
              <MountainIcon className="h-8 w-8"/>
            </Link>
            <div>
              <h3 className="font-medium">T - 4</h3>
              <p className="text-muted-foreground">&copy; 2024 tminus4. All rights reserved.</p>
            </div>
          </div>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
          </nav>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="flex items-center gap-2 hover:underline underline-offset-4">
              <MailIcon className="w-5 h-5"/>
              <span>info@tminus4.com</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:underline underline-offset-4">
              <PhoneIcon className="w-5 h-5"/>
              <span>+94 (76) 8510403</span>
            </a>
          </div>
        </div>
      </footer>
  )
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
