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
      <div className={' flex items-center  justify-center'}>
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

