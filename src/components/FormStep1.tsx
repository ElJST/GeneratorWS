import { Link, useNavigate } from "react-router-dom";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Form, Input } from "@heroui/react";
import { useState } from "react";
import { useFormStore } from "@/store/useFormStore";

export const FormStep1 = () => {
  type Fields = {
    name: string;
    email: string;
    directions: string;
    phone: string;
  };

  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    directions: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange =
    <K extends keyof Fields>(field: K) =>
    (value: Fields[K]) => {
      setFields((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const [errorsName, setErrorsName] = useState<string[]>([]);
  const [errorsEmail, setErrorsEmail] = useState<string[]>([]);
  const [errorsDirection, setErrorsDirection] = useState<string[]>([]);
  const [errorsPhone, setErrorsPhone] = useState<string[]>([]);

  const handleSubmit = () => {
    const { name, email, directions, phone } = fields;

    const newNameErrors: string[] = [];
    const newEmailErrors: string[] = [];
    const newDirectionsErrors: string[] = [];
    const newPhoneErrors: string[] = [];

    const isEmailValid = (value: string) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    const isPhoneValid = (value: string) => /^\+?\d{7,15}$/.test(value);
    const isNameValid = (value: string) => /^[A-Z].*$/.test(value);

    if (name.length == 0) {
      newNameErrors.push("Introduzca un nombre.");
    } else if (name.length < 2 || name.length > 14) {
      newNameErrors.push("El nombre debe tener entre 2 y 14 caracteres.");
    } else if (!isNameValid(name)) {
      newNameErrors.push("La primera letra del nombre debe ser Mayusculas.");
    }

    if (email.length == 0) {
      newEmailErrors.push("Introduzca un email.");
    } else if (!isEmailValid(email)) {
      newEmailErrors.push("Introduce un email válido.");
    }

    if (directions.length == 0) {
      newDirectionsErrors.push("Introduzca una dirección.");
    }

    if (phone.length == 0) {
      newPhoneErrors.push("Introduzca una numero de telefono.");
    } else if (!isPhoneValid(phone)) {
      newPhoneErrors.push(
        "Introduzca una telefono valido, entre 7 a 15 digitos ( Ejemplo: +34612345678, 612345678 )."
      );
    }

    setErrorsName(newNameErrors);
    setErrorsEmail(newEmailErrors);
    setErrorsDirection(newDirectionsErrors);
    setErrorsPhone(newPhoneErrors);

    if (
      newNameErrors.length === 0 &&
      newEmailErrors.length === 0 &&
      newDirectionsErrors.length === 0 &&
      newPhoneErrors.length === 0
    ) {
      useFormStore.getState().setFields({
        nombreEmpresa: name,
        email: email,
        direccion: directions,
        telefono: phone,
      });

      navigate("/generator/step-2");
    }
  };

  return (
    <div className="w-full h-full rounded-xl">
      <section className="w-full h-[calc(100%-100px)]">
        <TextAnimate className="text-xl font-semibold text-center pt-2">
          Informacion de tu empresa
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
                  {errorsName.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsName.length > 0}
              label="Nombre"
              labelPlacement="outside"
              name="name"
              type="text"
              size="sm"
              value={fields.name}
              onValueChange={handleChange("name")}
              placeholder="Nombre de la empresa"
            />

            <Input
              isRequired
              errorMessage={() => (
                <ul>
                  {errorsEmail.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsEmail.length > 0}
              label="Correo electronico"
              labelPlacement="outside"
              name="email"
              placeholder="Email"
              type="email"
              size="sm"
              value={fields.email}
              onValueChange={handleChange("email")}
            />

            <Input
              isRequired
              errorMessage={() => (
                <ul>
                  {errorsDirection.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsDirection.length > 0}
              label="Dirección"
              labelPlacement="outside"
              name="directions"
              placeholder="Direccion"
              type="text"
              size="sm"
              value={fields.directions}
              onValueChange={handleChange("directions")}
            />

            <Input
              isRequired
              errorMessage={() => (
                <ul>
                  {errorsPhone.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={errorsPhone.length > 0}
              label="Telefono"
              labelPlacement="outside"
              name="phone"
              placeholder="Numero de telefono"
              type="text"
              size="sm"
              value={fields.phone}
              onValueChange={handleChange("phone")}
            />

            <section className="w-full h-20 flex justify-around items-center ">
              <Link to={"/"}>
                <ShinyButton>Volver</ShinyButton>
              </Link>
              <ShinyButton onClick={handleSubmit}>Continuar</ShinyButton>
            </section>
          </Form>
        </section>
      </section>
    </div>
  );
};
