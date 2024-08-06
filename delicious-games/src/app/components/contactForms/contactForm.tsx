"use client";

import { useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { shortFormSchema } from "./validation/schema";
import { useProducts } from "@/hooks/useProducts";

type FormData = z.infer<typeof shortFormSchema>;

export function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const shortContactForm = useForm<FormData>({
    resolver: zodResolver(shortFormSchema),
    mode: "onTouched",
    defaultValues: {
      username: "",
      email: "",
      message: "",
      privacyPolicy: false,
    },
  });

  async function onSubmit(data: FormData) {
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    setIsSending(true);
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("privacyPolicy", data.privacyPolicy.toString());

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setIsSending(false);
        shortContactForm.reset();
        alert("Email submitted successfully");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setIsSending(false);
      console.error("Error submitting form", error);
      alert("Error submitting form. Please try again later.");
    }
  }

  return (
    <Form {...shortContactForm}>
      <form
        onSubmit={shortContactForm.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl"
      >
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base inline-block max-w-24 min-[500px]:max-w-[150px] w-full">
                Your name & surname*
              </FormLabel>
              <FormControl className="w-min">
                <Input
                  placeholder="Your name & surname"
                  className="grow max-w-[500px] min-w-9 rounded-sm 
                    border border-zinc-300 focus-visible:ring-0 focus-visible:border-slate-500 focus-within:border-slate-500"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage className="block w-full text-xs" />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
                Email*
              </FormLabel>
              <FormControl className="w-min">
                <Input
                  placeholder="Your email"
                  className="grow max-w-[500px] min-w-9 rounded-sm 
                    border border-zinc-300 focus-visible:ring-0 focus-visible:border-slate-500 focus-within:border-slate-500"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage className="block w-full" />
            </FormItem>
          )}
        />

        <FormField
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
                Message*
              </FormLabel>
              <FormControl className="w-min">
                <Textarea
                  placeholder="Message"
                  className="grow min-w-9 w-auto px-3 py-1.5 text-sm border rounded-sm border-zinc-300
                            active:border-slate-500 focus:border-slate-500 focus-within:border-slate-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="block w-full" />
            </FormItem>
          )}
        />

        <FormField
          name="privacyPolicy"
          render={({ field }) => (
            <FormItem className="space-y-0 flex flex-wrap items-center gap-2.5">
              <FormLabel className="text-base block w-max">
                I have read and understand the Privacy Policy*
              </FormLabel>
              <FormControl className="w-max">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                  className="inline-block size-4"
                  {...field}
                />
              </FormControl>
              <FormMessage className="block w-full" />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap gap-5 justify-start items-center">
          <span className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
            Please complete the captcha validation*
          </span>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY as string}
            size="normal"
            ref={recaptchaRef}
            onError={(e) => console.log(e)}
          />
        </div>

        <Button
          type="submit"
          disabled={isSending}
          className="mt-5 w-full p-[13px] bg-pink-600 text-white hover:bg-slate-500 uppercase text-sm leading-[14px]"
        >
          {isSending ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
