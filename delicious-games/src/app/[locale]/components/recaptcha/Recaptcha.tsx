import { LegacyRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Recaptcha({
  onCompleteChallenge,
  refCaptcha,
}: {
  refCaptcha: LegacyRef<ReCAPTCHA>;
  onCompleteChallenge?: (token: string | null) => void;
}) {
  return (
    <ReCAPTCHA
      ref={refCaptcha}
      sitekey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY as string}
      onChange={onCompleteChallenge}
      onClick={() => console.log("click")}
    />
  );
}
