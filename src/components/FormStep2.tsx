import { Link, useNavigate } from "react-router-dom";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Form, Input, Textarea } from "@heroui/react";
import { useFormStore } from "@/store/useFormStore";
import { useState } from "react";

export const FormStep2 = () => {
  type Fields = {
    estrategia: string;
    solucion: string;
    descLarga: string;
  };

  const [fields, setFields] = useState<Fields>({
    estrategia: "",
    solucion: "",
    descLarga: "",
  });

  const navigate = useNavigate();

  const setField = useFormStore((state) => state.setField);

  const handleChange =
    <K extends keyof Fields>(field: K) =>
    (value: Fields[K]) => {
      setFields((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const [errorsSolucion, setErrorsSolucion] = useState<string[]>([]);
  const [errorsEstrategia, setErrorsEstrategia] = useState<string[]>([]);
  const [errorsDescLarga, setErrorsDescLarga] = useState<string[]>([]);

  const handleSubmit = () => {
    const { solucion, estrategia, descLarga } = fields;

    const newErrorsSolucion: string[] = [];
    const newErrorsEstrategia: string[] = [];
    const newErrorsDescLarga: string[] = [];

    const firstMayus = (value: string) => /^[A-Z].*$/.test(value);

    if (estrategia.length == 0) {
      newErrorsEstrategia.push("Introduce alguna estrategia.");
    } else if (!firstMayus(estrategia)) {
      newErrorsEstrategia.push("La primera letra debe ser en Mayusculas.");
    } else if (estrategia.length <= 45) {
      newErrorsEstrategia.push("Minimo debes tener una estrategia de 45 digitos.");
    }

    if (solucion.length == 0) {
      newErrorsSolucion.push("Introduce alguna solucion.");
    } else if (!firstMayus(solucion)) {
      newErrorsSolucion.push("La primera letra debe ser en Mayusculas.");
    } else if (solucion.length <= 45) {
      newErrorsSolucion.push("Minimo debes tener una solución de 45 digitos.");
    }

    if (descLarga.length == 0) {
      newErrorsDescLarga.push("Introduce alguna descripción.");
    } else if (!firstMayus(descLarga)) {
      newErrorsDescLarga.push("La primera letra debe ser en Mayusculas.");
    } else if (descLarga.length <= 65) {
      newErrorsDescLarga.push("Minimo debes tener una descripción de 65 digitos.");
    }

    setErrorsSolucion(newErrorsSolucion);
    setErrorsEstrategia(newErrorsEstrategia);
    setErrorsDescLarga(newErrorsDescLarga);

    if (
      newErrorsSolucion.length === 0 &&
      newErrorsEstrategia.length === 0 &&
      newErrorsDescLarga.length === 0
    ) {
      setField("estrategia", estrategia);
      setField("solucion", solucion);
      setField("descripcionLarga", descLarga);

      navigate("/generator/step-3");
    }
  };

  return (
    <div className="w-full h-full rounded-xl">
      <section className="w-full h-[calc(100%-100px)]">
        <TextAnimate className="text-xl font-semibold text-center pt-2">
          Servicios
        </TextAnimate>
        <section className="flex flex-col md:flex-row px-4 gap-6 py-4 justify-center">
          <Form
            className="md:w-[65%]"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Input
              isRequired
              errorMessage={() => (
                <ul>
                  {errorsEstrategia.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsEstrategia.length > 0}
              label="Estrategia"
              labelPlacement="outside"
              name="estrategia"
              value={fields.estrategia}
              onValueChange={handleChange("estrategia")}
              placeholder="Estrategia de tu empresa"
              type="text"
              size="sm"
              maxLength={60}
            />

            <Input
              isRequired
              errorMessage={() => (
                <ul>
                  {errorsSolucion.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsSolucion.length > 0}
              label="Solución"
              labelPlacement="outside"
              name="solucion"
              value={fields.solucion}
              onValueChange={handleChange("solucion")}
              placeholder="Que solucion ofreces"
              type="text"
              size="sm"
              maxLength={60}
            />

            <Textarea
              isRequired
              isClearable
              errorMessage={() => (
                <ul>
                  {errorsDescLarga.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsDescLarga.length > 0}
              label="Descripción Larga"
              labelPlacement="outside"
              name="largeDescription"
              value={fields.descLarga}
              onValueChange={handleChange("descLarga")}
              placeholder="Descripcion de tu empresa"
              rows={2}
              maxRows={3}
              maxLength={220}
              size="sm"
            />
            <section className="w-full h-20 flex justify-around items-center ">
              <Link to={"/generator/step-1"}>
                <ShinyButton>Volver a empezar</ShinyButton>
              </Link>
              <ShinyButton onClick={handleSubmit}>Continuar</ShinyButton>
            </section>
          </Form>
        </section>
      </section>
    </div>
  );
};
