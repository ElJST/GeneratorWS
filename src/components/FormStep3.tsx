import { Link, useNavigate } from "react-router-dom";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Form, Input, Textarea } from "@heroui/react";
import { useFormStore } from "@/store/useFormStore";
import { useState } from "react";

export const FormStep3 = () => {
  type Fields = {
    mision: string;
    descCorta: string;
  };

  const [fields, setFields] = useState<Fields>({
    mision: "",
    descCorta: "",
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

  const [errorsMision, setErrorsMision] = useState<string[]>([]);
  const [errorsDescCorta, setErrorsDescCorta] = useState<string[]>([]);

  const handleSubmit = () => {
    const { mision, descCorta } = fields;

    const newErrorsMision: string[] = [];
    const newErrorsDescCorta: string[] = [];

    const firstMayus = (value: string) => /^[A-Z].*$/.test(value);

    if (mision.length == 0) {
      newErrorsMision.push("introduce alguna misión para tu empresa");
    } else if (!firstMayus(mision)) {
      newErrorsMision.push("La primera letra debe ser en Mayusculas.");
    } else if (mision.length <= 30) {
      newErrorsMision.push("Minimo debes tener 30 digitos.");
    }

    if (descCorta.length == 0) {
      newErrorsDescCorta.push(
        "introduce alguna breve descripción para tu empresa"
      );
    } else if (!firstMayus(descCorta)) {
      newErrorsDescCorta.push("La primera letra debe ser en Mayusculas.");
    } else if (descCorta.length <= 35) {
      newErrorsMision.push("Minimo debes tener 35 digitos.");
    }

    setErrorsMision(newErrorsMision);
    setErrorsDescCorta(newErrorsDescCorta);

    if (newErrorsMision.length === 0 && newErrorsDescCorta.length === 0) {
      setField("mision", mision);
      setField("descripcionCorta", descCorta);

      navigate("/generator/plantillas");
    } else {
      debugger;
      console.log("algo ca mal");
    }
  };

  return (
    <div className="w-full h-full rounded-xl">
      <section className="w-full h-[calc(100%-100px)]">
        <TextAnimate className="text-xl font-semibold text-center pt-2">
          Contacto
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
                  {errorsMision.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsMision.length > 0}
              label="Misión"
              labelPlacement="outside"
              name="mision"
              value={fields.mision}
              onValueChange={handleChange("mision")}
              placeholder="Misión de tu empresa"
              type="text"
              size="sm"
              maxLength={60}
            />

            <Textarea
              isRequired
              label="Descripción corta"
              labelPlacement="outside"
              errorMessage={() => (
                <ul>
                  {errorsDescCorta.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsDescCorta.length > 0}
              name="shortDescription"
              value={fields.descCorta}
              onValueChange={handleChange("descCorta")}
              placeholder="Breve descripción"
              rows={2}
              maxRows={3}
              maxLength={120}
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
