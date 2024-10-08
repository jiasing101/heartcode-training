"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(10, {
    message: "Username must be below 11 characters."
  }),
  question1: z.coerce.number({
    required_error: "Number is required"
  }),
  question2: z.coerce.number({
    required_error: "Number is required"
  }),
  question3: z.coerce.string(),
})

export default function Quiz() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username here" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 1</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Answer here" {...field} />
              </FormControl>
              <FormDescription>
                In 2023, below what age were more than half of drug abusers arrested at?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 2</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Answer here" {...field} />
              </FormControl>
              <FormDescription>
                From 2022 to 2023, how much did the percentage of new abusers rise in Singapore?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 3</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Answer here" {...field} />
              </FormControl>
              <FormDescription>
                What Bureau reported this information?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}