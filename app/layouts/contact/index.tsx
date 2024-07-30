import "./style.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";
import { H3 } from "~/components/typography/h3";
import { Paragraph } from "~/components/typography/paragraph";
import { useRemixFetcher } from "~/hooks/use-remix-fetcher";
import { contactSchema } from "~/utils/schemas";

type FormProps = {
  name: string;
  email: string;
  message: string;
  address: string;
};

export const Contact = () => {
  const [emailSuccess, setEmailSuccess] = useState(false);

  const fetcher = useRemixFetcher({
    onError: (e) => console.log(e),
    onSuccess: () => console.log("Success!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      address: "",
    },
    mode: "onChange",
    resolver: yupResolver<FormProps | any>(contactSchema),
  });

  const onSubmit = handleSubmit((_data, e) => {
    try {
      fetcher.submit(e?.target, {
        method: "POST",
        encType: "multipart/form-data",
      });

      reset();
      setEmailSuccess(true);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    /* Bg */
    <div id="contact" className="contact-section-style">
      {/* Card */}
      <div className="container-contact">
        {emailSuccess ? (
          <div className={`alert-container`}>
            <div>
              <img
                src="/images/emailSent.gif"
                alt="Card sending animation"
                width={200}
                height={200}
              />
            </div>

            <div className="text-center">
              <H2 variant="primary" style={{ color: "#fff" }}>
                Email Sent!
              </H2>
              <H3 style={{ color: "#fff" }}>Thanks for contacting me!</H3>
            </div>
          </div>
        ) : (
          <div className={`form-container `}>
            {/* Title */}
            <div>
              <H1 style={{ color: "#FCFCFC" }}>Contact</H1>
            </div>

            {/* Form */}
            <fetcher.Form onSubmit={onSubmit} className="form-style">
              <div className="form-input-container">
                <label htmlFor="name">
                  <Paragraph variant="form">Name</Paragraph>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="input-text-style"
                />
                <div>
                  <Paragraph variant="form" style={{ color: "#bc3433" }}>
                    {errors.name ? "Name fiel is required" : null}
                  </Paragraph>
                </div>
              </div>

              <div className="form-input-container">
                <label htmlFor="email">
                  <Paragraph variant="form">Email</Paragraph>
                </label>
                <input
                  {...register("email")}
                  type="text"
                  id="email"
                  className="input-text-style"
                />
                <div>
                  <Paragraph variant="form" style={{ color: "#bc3433" }}>
                    {errors.email ? "Enter a valid email" : null}
                  </Paragraph>
                </div>
              </div>

              <input {...register("address")} type="hidden" id="address" />

              <div className="form-input-container">
                <label htmlFor="message">
                  <Paragraph variant="form">Message</Paragraph>
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  className="text-area-custom"
                ></textarea>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  className="flex items-center gap-2"
                >
                  <Paragraph variant="form">SEND</Paragraph>
                  <MdOutlineEmail color="#fff" className="text-xl" />
                </Button>
              </div>
            </fetcher.Form>
          </div>
        )}
      </div>
    </div>
  );
};
