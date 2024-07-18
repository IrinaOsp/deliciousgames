"use client";

import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface IFormInput {
  name: string;
  email: string;
  message: string;
  privacyPolicy: boolean;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }
    console.log("Form Data:", data);
    // TODO: Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-zinc-800">
      <div className="mb-2 flex flex-wrap gap-5 justify-start items-center">
        <label className="block max-w-24 min-[500px]:max-w-[150px] w-full">
          Your Name *
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Your Name"
          className="max-w-[500px] min-w-9 w-auto grow px-3 py-1.5 text-sm border rounded-sm border-zinc-300 outline-none
           active:border-slate-500 focus:border-slate-500 focus-within:border-slate-500"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-2 flex flex-wrap gap-5 justify-start items-center">
        <label className="block max-w-24 min-[500px]:max-w-[150px] w-full">
          Email *
        </label>
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", { required: "Email is required" })}
          className="max-w-[500px] min-w-9 w-auto grow px-3 py-1.5 text-sm border rounded-sm border-zinc-300 outline-none
           active:border-slate-500 focus:border-slate-500 focus-within:border-slate-500"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-2 flex flex-wrap gap-5 justify-start items-center">
        <label className="block max-w-24 min-[500px]:max-w-[150px] w-full">
          Message *
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Message"
          rows={5}
          className="min-w-9 w-auto grow px-3 py-1.5 text-sm border rounded-sm border-zinc-300 outline-none
           active:border-slate-500 focus:border-slate-500 focus-within:border-slate-500"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="mb-4 flex flex-wrap gap-5 justify-start items-center">
        <label className="block min-[500px]:max-w-[150px] w-full">
          Please complete the captcha validation below&nbsp;*
        </label>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY as string}
          ref={recaptchaRef}
          size="normal"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            {...register("privacyPolicy", {
              required: "You must agree to the privacy policy",
            })}
            className="mr-2"
          />
          <span>
            I have read and agree to the{" "}
            <a href="#" className="underline text-sky-900 hover:text-pink-600">
              Privacy Policy
            </a>
          </span>
        </label>
        {errors.privacyPolicy && (
          <p className="text-red-500 text-xs mt-1">
            {errors.privacyPolicy.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="mt-5 w-full p-[13px] bg-pink-600 text-white hover:bg-slate-500 uppercase text-sm leading-[14px]"
      >
        Submit <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </button>
    </form>
  );
}
