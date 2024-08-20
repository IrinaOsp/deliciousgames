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
import { useTranslation } from "react-i18next";
import Recaptcha from "../recaptcha/Recaptcha";

type FormData = z.infer<typeof shortFormSchema>;

export function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const { t } = useTranslation("contactUs");

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
      alert(t("captcha"));
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
        alert(t("alertSuccess"));
      } else {
        throw new Error(t("errorSubmit"));
      }
    } catch (error) {
      setIsSending(false);
      console.error("Error submitting form", error);
      alert(t("alertError"));
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
                {t("nameLabel")}*
              </FormLabel>
              <FormControl className="w-min">
                <Input
                  placeholder={t("namePlaceholder")}
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
                {t("emailLabel")}*
              </FormLabel>
              <FormControl className="w-min">
                <Input
                  placeholder={t("emailPlaceholder")}
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
                {t("messageLabel")}*
              </FormLabel>
              <FormControl className="w-min">
                <Textarea
                  placeholder={t("messagePlaceholder")}
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
                {t("privacyPolicy")}*
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
            {t("captcha")}*
          </span>
          <Recaptcha refCaptcha={recaptchaRef} />
        </div>

        <Button
          type="submit"
          disabled={isSending}
          className="mt-5 w-full p-[13px] bg-pink-600 text-white hover:bg-slate-500 uppercase text-sm leading-[14px]"
        >
          {isSending ? `${t("buttonSending")}...` : t("button")}
        </Button>
      </form>
    </Form>
  );
}
