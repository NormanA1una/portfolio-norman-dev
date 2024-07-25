import { json, type ActionFunction, type MetaFunction } from "@remix-run/node";
import { Contact } from "~/layouts/contact";
import { Home } from "~/layouts/home";
import { Projects } from "~/layouts/projects";
import { Skills } from "~/layouts/skills";
import { sendEmail } from "~/utils/mailer.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Norman Aranda Luna" },
    {
      name: "description",
      content:
        "Welcome to my website! Here, you'll find a showcase of my skills and a glimpse into who I am as a developer.",
    },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  if ((formData.get("address") as string).toString().length > 0)
    return json({ success: false });

  const formDataObject = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  try {
    const messageService = await sendEmail(formDataObject).then((res) =>
      res.json()
    );
    return json({ success: true, message: messageService.message });
  } catch (error) {
    return json({ success: false, error });
  }
};

export default function Index() {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
