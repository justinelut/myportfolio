"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendEmail } from "@/app/actions/sendemail";
import Navigation from "@/components/navigation";
import { ProfileCard } from "@/components/profilecard";
import { MenuCard } from "@/components/menucard";
import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { ContentCard } from "@/components/contentcard";
import { motion } from "framer-motion";
export const formSchema = z.object({
  fullnames: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phonenumber: z.string().min(2, {
    message: "Phone bumber must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email({ message: "Please enter a valid email" }),
  website: z
    .string()
    .min(2, {
      message: "Website link must be at least 2 characters.",
    })
    .url({ message: "Please enter a valid website link" }),
  organization: z.string().min(2, {
    message: "Organization must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

export function ContanctForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullnames: "",
      phonenumber: "",
      email: "",
      website: "",
      organization: "",
      location: "",
      description: "",
    },
  });
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(values: any) {
    setSubmitting(true);
    SendEmail(values);
    setSubmitting(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 font-playfair"
      >
        <h3 className="text-4xl font-playfair font-extrabold mb-4">
          Contact Me
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4">
          <ContentCard className="pt-4">
            <FormField
              control={form.control}
              name="fullnames"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Names</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-6 transition-transform ease-out duration-300 delay-200 transform focus-visible:scale-110"
                      placeholder="Justine Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                     
                     
                      className="rounded-full p-6 transition-transform ease-out duration-300 delay-200 transform focus-visible:scale-110"
                      placeholder="254740455200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentCard>
          <ContentCard className="pt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-6 transition-transform ease-out duration-300 delay-200 transform focus-visible:scale-110"
                      placeholder="justinequartz@pixelayout.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-6 transition-transform ease-out duration-300 delay-200 transform focus-visible:scale-110"
                      placeholder="https://pixelayout.site"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentCard>

          <ContentCard className="pt-4">
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-6 transition-transform ease-out duration-300 delay-200 transform focus-visible:scale-110"
                      placeholder="Pixel Layout"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentCard>
          <ContentCard className="pt-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-6 transition-transform ease-out duration-300 delay-200 transform focus-visible:scale-110"
                      placeholder="Nakuru - Kenya"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentCard>
          <ContentCard className="pt-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I want to work with you on a certain webapp which lets user ...."
                      {...field}
                      className="min-h-20 transition-transform ease-out duration-300 delay-200 transform focus-visible:scale-110"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentCard>
          <ContentCard className="bg-slate-800 ring-green-500">
            <div className="flex p-20 rounded-lg">dfgdfg</div>
          </ContentCard>
        </div>

        <Button
          type="submit"
          className="w-full sticky bottom-0 text-md bg-green-500"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
