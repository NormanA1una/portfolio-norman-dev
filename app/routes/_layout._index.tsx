import { json, type ActionFunction, type MetaFunction } from "@remix-run/node";
import { Contact } from "~/layouts/contact";
import { Home } from "~/layouts/home";
import { Projects } from "~/layouts/projects";
import { Skills } from "~/layouts/skills";

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

  const formDataObject = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    address: formData.get("address"),
  };

  console.log(formDataObject);

  return json({ success: true });
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
