import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MainLayout from "~/layouts/main-layout";

export const loader: LoaderFunction = async ({}) => {
  const pathNames = [
    { name: "Skills", nameSpanish: "Habilidades", pathName: "#skills" },
    { name: "Projects", nameSpanish: "Proyectos", pathName: "#projects" },
    { name: "Contact", nameSpanish: "Contáctame", pathName: "#contact" },
  ];

  return json({ pathNames });
};

export default function MainLayoutContainer() {
  const { pathNames } = useLoaderData<typeof loader>();

  return (
    <>
      <MainLayout pathNames={pathNames} />
    </>
  );
}
