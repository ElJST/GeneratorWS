import { Link } from "react-router-dom";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import plantilla1 from "../assets/plantilla_1.png";
import plantilla2 from "../assets/plantilla_2.png";
import plantilla3 from "../assets/plantilla_3.png";
import { useState } from "react";
import { motion } from "motion/react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useFormStore } from "@/store/useFormStore";
import { plantilla1G } from "./plantilla1G";
import { plantilla2G } from "./plantilla2G";
import { plantilla3G } from "./plantilla3G";

const downloadZip = async (template: number) => {
  const {
    nombreEmpresa,
    direccion,
    estrategia,
    mision,
    solucion,
    email,
    telefono,
    descripcionCorta,
    descripcionLarga,
  } = useFormStore.getState();

  console.log({
  nombreEmpresa,
  direccion,
  estrategia,
  mision,
  solucion,
  email,
  telefono,
  descripcionCorta,
  descripcionLarga,
});


  const zip = new JSZip();
  let htmlContent: string = '';

  if (template == 1) {
    htmlContent = plantilla1G(
      nombreEmpresa,
      email,
      direccion,
      telefono,
      estrategia,
      solucion,
      descripcionLarga,
      mision,
      descripcionCorta
    );
  } 
  
  if (template == 2) {
    htmlContent = plantilla2G(
      nombreEmpresa,
      email,
      direccion,
      telefono,
      estrategia,
      solucion,
      descripcionLarga,
      mision,
      descripcionCorta
    );
  } 
  
  
  if (template == 3){
    htmlContent = plantilla3G(
      nombreEmpresa,
      email,
      direccion,
      telefono,
      estrategia,
      solucion,
      descripcionLarga,
      mision,
      descripcionCorta
    );
  }

  zip.file("index.html", htmlContent);
  zip.file(
    "README.txt",
    `Proyecto generado para ${nombreEmpresa} con plantilla ${template}`
  );

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, `plantilla_${template}_${nombreEmpresa}.zip`);
};

const templates = [
  {
    id: 1,
    name: "plantilla 1",
    img: plantilla1,
    preview: plantilla1,
  },
  {
    id: 2,
    name: "plantilla 2",
    img: plantilla2,
    preview: plantilla2,
  },
  {
    id: 3,
    name: "plantilla 3",
    img: plantilla3,
    preview: plantilla3,
  },
];

export const Plantillas = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handlePreview = (id: number) => {
    setSelectedTemplate(id);
    setIsPreviewOpen(true);
  };

  const handleSelect = (id: number) => {
    setSelectedTemplate(id);
  };

  return (
    <div className="w-full h-full rounded-xl">
      <section className="w-full h-[calc(100%-100px)] overflow-y-scroll">
        <TextAnimate className="text-xl font-semibold text-center pt-2">
          Elije plantilla
        </TextAnimate>
        <section className="flex flex-col md:flex-row px-4 gap-6 py-4 justify-center">
          {templates.map((tpl) => (
            <Card
              key={tpl.id}
              isFooterBlurred
              className={`border-none cursor-pointer hover:scale-105 ${
                selectedTemplate === tpl.id ? "ring-2 ring-blue-500" : ""
              }`}
              radius="lg"
            >
              <Image
                alt={tpl.name}
                className="object-cover"
                height={250}
                src={tpl.img}
                width={300}
                onClick={() => handleSelect(tpl.id)}
                style={{ cursor: "pointer" }}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p 
                className="text-tiny text-black/80" 
                style={{
                  textTransform: "capitalize"
                }}
                >
                  {tpl.name}
                </p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                  onPress={() => handlePreview(tpl.id)}
                >
                  preview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
        <TextAnimate className="text-base font-light text-center pt-2 px-4">
          En caso de querer personalizar mas tu web ponte en contacto con
          nosotros.
        </TextAnimate>
      </section>
      <section className="w-full h-20 flex justify-around items-center ">
        <Link to={"/generator/step-3"}>
          <ShinyButton>Volver</ShinyButton>
        </Link>
        <ShinyButton
          onClick={() => selectedTemplate && downloadZip(selectedTemplate)}
        >
          Descargar zip
        </ShinyButton>
      </section>

      {isPreviewOpen && selectedTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 rounded-2xl">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg max-w-3xl w-full"
          >
            <section className="flex justify-between">
              <h2 className="text-xl font-bold mb-4">
                Vista previa de la plantilla
              </h2>
              <Button onPress={() => setIsPreviewOpen(false)} color="danger" radius="full">
                Cerrar
              </Button>
            </section>
            <img
              src={
                templates.find((tpl) => tpl.id === selectedTemplate)?.preview
              }
              alt="preview plantilla"
              className="rounded-lg mb-4"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};
