import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const username = formData.get("username")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();
    const shippingAddress = formData.get("shippingAddress")?.toString();
    const country = formData.get("country")?.toString();
    const reasonOfSalesReturn = formData.get("reasonOfSalesReturn")?.toString();
    const boardgameName = formData.get("boardgameName")?.toString();
    const detailInfo = formData.get("detailInfo")?.toString();
    const image = formData.get("image");

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MY_EMAIL,
        pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
      },
    });

    let attachment: Mail.Attachment | null = null;
    if (image instanceof File) {
      const buffer = await image.arrayBuffer();
      attachment = {
        filename: image.name,
        content: Buffer.from(buffer),
        contentType: image.type,
      };
    }

    const mailOptions: Mail.Options = {
      from: process.env.NEXT_PUBLIC_MY_EMAIL,
      to: process.env.NEXT_PUBLIC_MY_EMAIL,
      subject: `Email from ${username} (${email})`,
      text: `Email from ${username} (${email}) at ${new Date()}: 
      ${message ? `\n\n Message: ${message}` : ""} 
      ${shippingAddress ? `\n\n Shipping address: ${shippingAddress}` : ""} 
      ${country ? `\n\n Country: ${country}` : ""}
      ${
        reasonOfSalesReturn
          ? `\n\n Reason of sales return: ${reasonOfSalesReturn}`
          : ""
      }
      ${boardgameName ? `\n\n Boardgame name: ${boardgameName}` : ""}
      ${detailInfo ? `\n\n Detail information: ${detailInfo}` : ""}`,
      attachments: attachment ? [attachment] : [],
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve("Email sent " + info.response);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ ok: true, message: "Email sent" });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}
