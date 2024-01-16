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
import { useFormStatus } from "react-dom";

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

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full sticky bottom-0 text-md bg-green-500"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};
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

  function onSubmit(values: any) {
    // SendEmail(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 font-playfair"
      >
        <FormField
          control={form.control}
          name="fullnames"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Names</FormLabel>
              <FormControl>
                <Input placeholder="Justine Doe" {...field} />
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
                <Input placeholder="254740455200" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="justinequartz@pixelayout.com" {...field} />
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
                <Input placeholder="https://pixelayout.site" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization</FormLabel>
              <FormControl>
                <Input placeholder="Pixel Layout" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Nakuru - Kenya" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
