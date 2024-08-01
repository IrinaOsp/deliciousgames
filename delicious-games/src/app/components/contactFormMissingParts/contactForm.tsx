"use client";

import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "./validation/schema";
import { useProducts } from "@/hooks/useProducts";
import { GAMES } from "@/data/gamesData";

export function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isSending, setIsSending] = useState<boolean>(false);
  const games = useProducts("none");

  const contactForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      username: "",
      email: "",
      shippingAddress: "",
      country: "",
      reasonOfSalesReturn: "",
      boardgameName: "",
      detailInfo: "",
      image: undefined,
      privacyPolicy: false,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSending(true);

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("shippingAddress", data.shippingAddress);
    formData.append("country", data.country);
    formData.append("reasonOfSalesReturn", data.reasonOfSalesReturn);
    formData.append("boardgameName", data.boardgameName);
    formData.append("detailInfo", data.detailInfo);
    if (data.image) formData.append("image", data.image);
    formData.append("privacyPolicy", data.privacyPolicy.toString());

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setIsSending(false);
        contactForm.reset();
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
    <Form {...contactForm}>
      <form
        onSubmit={contactForm.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl"
      >
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base inline-block max-w-24 min-[500px]:max-w-[150px] w-full">
                Username*
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
          name="shippingAddress"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
                Shipping address*
              </FormLabel>
              <FormControl className="w-min">
                <Input
                  placeholder="Your shipping address"
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
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
                Country*
              </FormLabel>
              <FormControl className="w-min">
                <Input
                  placeholder="Your country"
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
          name="reasonOfSalesReturn"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
                Reason of sales return*
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-min grow">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="grow max-w-[500px] min-w-9 rounded-sm ">
                  <SelectGroup>
                    <SelectItem value="Missing parts">Missing parts</SelectItem>
                    <SelectItem value="Damaged parts">Damaged parts</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage className="block w-full" />
            </FormItem>
          )}
        />

        <FormField
          name="boardgameName"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
                Boardgame name*
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-min grow">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a game" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {(games ? games : GAMES).map((game) => (
                    <SelectItem key={game.title} value={game.title}>
                      {game.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="block w-full" />
            </FormItem>
          )}
        />

        <FormField
          name="detailInfo"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-baseline gap-2.5">
              <FormLabel className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
                Detail information*
              </FormLabel>
              <FormControl className="w-min">
                <Textarea
                  placeholder="Details of sales return"
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
          name="image"
          render={({ field }) => {
            const handleClick = () => {
              document.getElementById("fileInput")?.click();
            };
            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newFile = e.target.files?.[0];
              console.log(e.target.files?.[0]);
              if (newFile) {
                setFile(newFile);
                field.onChange(file);
                contactForm.trigger("image");
              }
            };
            return (
              <FormItem className="flex flex-wrap items-baseline gap-2.5">
                <FormLabel className="text-base block max-w-24 min-[500px]:max-w-[150px] w-full">
                  Image of damaged parts
                </FormLabel>
                <FormControl>
                  <button
                    type="button"
                    className="inline-block w-max text-white text-sm uppercase p-3.5 bg-sky-800"
                    onClick={handleClick}
                  >
                    <FontAwesomeIcon icon={faUpload} className="mr-1.5" />
                    Upload file
                    <Input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      onChange={handleChange}
                    />
                  </button>
                </FormControl>
                <FormMessage className="block w-full" />
              </FormItem>
            );
          }}
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
            ref={recaptchaRef}
            size="normal"
          />
        </div>

        <Button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
