import { IconCloud } from "@/components/magicui/icon-cloud";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Link } from "react-router-dom";
import { ShinyButton } from "@/components/magicui/shiny-button";

export const Inicio = () => {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "prisma",
    "amazonaws",
    "postgresql",
    "vercel",
    "docker",
    "github",
    "visualstudiocode",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center ">
      <section className="w-3/4 h-5/6 z-50 backdrop-blur-sm rounded-2xl border-1 border-black/30 flex items-center flex-col">
        <h1 className="text-2xl font-semibold m-4 text-center">
          <TextAnimate animation="blurIn" as="h1">
            Tu web en minutos
          </TextAnimate>
        </h1>
        <p className="hidden sm:block text-base text-gray-600 text-center max-w-3xl px-4">
          <TextAnimate animation="blurIn">
            Rellena el formulario con los datos de tu negocio y genera tu página
            web personalizada en solo unos minutos. ¡Rápido, fácil y sin
            complicaciones y con tecnologias modernas!
          </TextAnimate>
        </p>
        <p className="sm:hidden text-base text-gray-600 text-center max-w-3xl px-4">
          <TextAnimate animation="blurIn">
            Rellena el formulario con los datos de tu negocio y genera tu página
            web en solo unos minutos. ¡Con tecnologias modernas!
          </TextAnimate>
        </p>
        <div className="relative flex items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
        <div className="mb-4">
          <Link to={'/generator/step-1'} >
            <ShinyButton>Continuar</ShinyButton>
          </Link>
        </div>
      </section>
    </div>
  );
};
