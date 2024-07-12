import type { MetaFunction } from "@remix-run/node";
import { Home } from "~/layouts/home";

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

export default function Index() {
  return (
    <>
      <Home />
    </>
  );
}
