import { create } from "zustand";

type FormState = {
  nombreEmpresa: string;
  email: string;
  direccion: string;
  telefono: string;
  estrategia: string;
  solucion: string;
  descripcionCorta: string;
  mision: string;
  descripcionLarga: string;
  setField: (field: keyof FormState, value: string) => void;
  setFields: (fields: Partial<FormState>) => void;
};

export const useFormStore = create<FormState>((set) => ({
  nombreEmpresa: "",
  email: "",
  direccion: "",
  telefono: "",
  estrategia: "",
  solucion: "",
  descripcionCorta: "",
  mision: "",
  descripcionLarga: "",
  setField: (field, value) => set({ [field]: value }),
  setFields: (fields: Partial<FormState>) => set(fields),
}));