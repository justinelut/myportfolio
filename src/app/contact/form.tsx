"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { SendEmail } from "@/app/actions/sendemail";
import { GreenAlert } from "@/components/alert/greenalert";
import { cn } from "@/lib/utils";

// Define Zod schema for form validation
export const ContactSchema = z.object({
  firstname: z.string().nonempty(),
  lastname: z.string().nonempty(),
  email: z.string().email(),
  phonenumber: z.string().min(6), // Adjust min as needed
  organization: z.string().nonempty(),
  website: z.string().url(),
  message: z.string().nonempty(),
  subject: z.string().nonempty(),
});

type FormValues = z.infer<typeof ContactSchema>;

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulating API call
    try {
      // Here, you would send your form data to the backend
     
      await SendEmail({
        subject: data.subject,
        organization: data.organization,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        message: data.message,
        phonenumber: data.phonenumber,
        website: data.website,
      });
      // Simulating success response
      setIsSubmitting(false);
      setIsSuccess(true);
      reset()
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  return (
   
       <>
         
         
  
          <form className="my-8 mt-20" onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer className="pb-6">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="What does it take to integrate payments to my site"
                type="text"
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-xs text-red-500">
                  {errors.subject.message}
                </span>
              )}
            </LabelInputContainer>

            
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="info@pixelayout.com"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </LabelInputContainer>
          
            
            
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="I need payment integrated to my website"
                {...register("message")}
              />
              {errors.message && (
                <span className="text-xs text-red-500">
                  {errors.message.message}
                </span>
              )}
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-secondary to-primary font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <div className="flex items-center justify-center gap-x-6">
                  <span>Send Message</span> <ArrowRight size={20} />
                </div>
              )}
              <BottomGradient />
            </button>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          </form>
          {isSuccess && (
            <GreenAlert title="Message sent" message="">
              <p>
                Your message has been delivered, please wait for a response
                shortly
              </p>
            </GreenAlert>
          )}
        </>
        
     
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
