import { TextAnimate } from "@/components/magicui/text-animate";
import { Form, Input, Textarea, Button, addToast } from "@heroui/react";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("name", lastName);
    formData.append("email", email);
    formData.append("message", text);

    const res = await fetch("https://formspree.io/f/xldnnyag", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      addToast({
        title: "Mensaje enviado correctamente",
        description: "Nos pondremos en contacto.",
        color: "success",
      });
    } else {
      addToast({
        title: "Mensaje no enviado",
        description: "Algo ha fallado.",
        color: "danger",
      });
    }
  };
  return (
    <div className="w-full rounded-xl mt-[60px] sm:mt-0">
      <section className="w-full h-[calc(100%-100px)]">
        <TextAnimate className="text-xl font-semibold text-center pt-2">
          Contacta con nosotros
        </TextAnimate>
        <section className="flex flex-col md:flex-row px-4 gap-6 py-4 justify-center">
          <Form className="md:w-[65%]" onSubmit={onSubmit}>
            <Input
              isRequired
              errorMessage="Introduzca un nombre"
              label="Nombre"
              labelPlacement="outside"
              type="text"
              size="sm"
              placeholder="Nombre"
              value={name}
              onValueChange={setName}
            />

            <Input
              isRequired
              errorMessage="Introduzca un apellido"
              label="Apellido"
              labelPlacement="outside"
              placeholder="Apellido"
              type="text"
              size="sm"
              value={lastName}
              onValueChange={setLastName}
            />

            <Input
              isRequired
              errorMessage="Introduzca un correo electrónico"
              label="email"
              labelPlacement="outside"
              placeholder="Correo electrónico"
              type="email"
              size="sm"
              value={email}
              onValueChange={setEmail}
            />

            <Textarea
              isRequired
              errorMessage="Introduzca un mensaje"
              label="Mensaje"
              labelPlacement="outside"
              placeholder="Cuerpo del mensaje"
              size="sm"
              value={text}
              onValueChange={setText}
            />

            <section className="flex gap-6">
              <Button
                radius="full"
                variant="ghost"
                color="default"
                as={"a"}
                href="/"
              >
                Volver
              </Button>
              <Button
                radius="full"
                variant="shadow"
                color="primary"
                type="submit"
              >
                Enviar
              </Button>
            </section>
          </Form>
        </section>
      </section>
    </div>
  );
};
