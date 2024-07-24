import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
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
    } catch (error) {
      console.log(error);
    }
  });

  return (
    /* Bg */
    <div className="bg-[#141414] py-10">
      {/* Card */}
      <div className="bg-[#292929] rounded-lg px-4 py-8 flex flex-col gap-10">
        {/* Title */}
        <div>
          <H1 style={{ color: "#FCFCFC" }}>Contact</H1>
        </div>

        {/* Form */}
        <fetcher.Form onSubmit={onSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              <Paragraph variant="form">Name</Paragraph>
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full pl-3 py-3 rounded focus:outline-none bg-[#1f1f1f] text-[#FCFCFC] font-medium"
            />
            <div>
              <Paragraph variant="form" style={{ color: "#bc3433" }}>
                {errors.name ? "Name fiel is required" : null}
              </Paragraph>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              <Paragraph variant="form">Email</Paragraph>
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              className="w-full pl-3 py-3 rounded focus:outline-none bg-[#1f1f1f] text-[#FCFCFC] font-medium"
            />
            <div>
              <Paragraph variant="form" style={{ color: "#bc3433" }}>
                {errors.email ? "Enter a valid email" : null}
              </Paragraph>
            </div>
          </div>

          <input {...register("address")} type="hidden" id="address" />

          <div className="flex flex-col gap-2">
            <label htmlFor="message">
              <Paragraph variant="form">Message</Paragraph>
            </label>
            <textarea
              {...register("message")}
              id="message"
              className="resize-none h-[90px] w-full pl-3 py-3 rounded focus:outline-none bg-[#1f1f1f] text-[#FCFCFC] font-medium"
            ></textarea>
          </div>

          <div>
            <Button type="submit" variant="contained">
              <Paragraph variant="form">SEND 📧</Paragraph>
            </Button>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
};
