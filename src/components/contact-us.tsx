'use client';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button as CustomButton } from "@/components/ui/button"

import React, {JSX, SVGProps, useState} from "react"
import axios from "axios";

import {notification} from "antd";

interface FormData {
    name: string;
    email: string;
    message: string;
}



export function ContactUs() {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',

    })

    const [disableBtn, setDisableBtn] = useState<boolean>(false);



    const handleClick = async (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setDisableBtn(true)
        if (formData.name.length <=0 || formData.email.length <=0 || formData.message.length <=0) {
            openEmptyInputNotification()
            setDisableBtn(false)
            return;
        }
        await axios.post('https://server.tminus4.com/sendEmail', formData).then((res)=>{
            opensSuccessInputNotification()
        })
            .catch(err=>{
                opensErrorInputNotification()
            })
            .finally(()=>{
                setDisableBtn(false)
            })

    }
    const [api, contextHolder] = notification.useNotification();

    const openEmptyInputNotification = () => {
        api.warning({
            message: 'Invalid Input',
            description:
                'Please fill out all the fields in the form.',
            duration: 0,
        });
    };

    const opensSuccessInputNotification = () => {
        api.success({
            message: 'Notified our team',
            description:
                'Your message has been successfully sent. We will get back to you shortly.',
            duration: 0,
        });
    };

    const opensErrorInputNotification = () => {
        api.error({
            message: 'Submission Failed',
            description:
                'Oops! Something went wrong while submitting your message. Please try again later or contact us directly if the issue persists.',
            duration: 0,
        });
    };

  return (
      <div className={' flex items-center justify-center'}>
          {contextHolder}

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-white">
          <div className="container  px-4 md:px-6 ">
            <div className={''}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in touch</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                {` Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.`}
              </p>
              <form className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input required={true} onChange={(event)=> {
                        setFormData({...formData, name: event.target.value})
                    }} className={'bg-transparent'} id="name" placeholder="Enter your name"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input required={true} onChange={(event)=> {
                        setFormData({...formData, email: event.target.value})
                    }}  className={'bg-transparent'} id="email" type="email" placeholder="Enter your email"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea required={true} onChange={(event)=> {
                      setFormData({...formData, message: event.target.value})
                  }}  id="message" placeholder="Enter your message" className="min-h-[150px] bg-transparent"/>
                </div>
                <CustomButton onClick={handleClick} type="submit" className="w-full sm:w-auto" variant={'outline'} disabled={disableBtn}>
                  Submit
                </CustomButton>
              </form>
            </div>

          </div>
        </section>
      </div>
  )
}

function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path
            d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"/>
      </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
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
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
  )
}


function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
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
        <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
