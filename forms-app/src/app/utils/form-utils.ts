import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

type ErrorMessages = Partial<{
  required: string | ((e: any) => string);
  minlength: (e: { requiredLength: number; actualLength: number }) => string;
  maxlength: (e: { requiredLength: number; actualLength: number }) => string;
  min: (e: { min: number; actual: number }) => string;
  max: (e: { max: number; actual: number }) => string;
  email: string | ((e: any) => string);
  pattern: string | ((e: any) => string);
}> &
  Record<string, string | ((e: any) => string)>;

const DEFAULT_MESSAGES: ErrorMessages = {
  required: "Este campo es requerido.",
  minlength: (e) => `Mínimo de ${e.requiredLength} caracteres.`,
  maxlength: (e) => `Máximo de ${e.requiredLength} caracteres.`,
  min: (e) => `Valor mínimo de ${e.min}.`,
  max: (e) => `Valor máximo de ${e.max}.`,
  email: "Correo inválido.",
  pattern: "Formato inválido.",
};

export class FormUtils {
  static isValidField(
    form: FormGroup,
    fieldName: string
  ): boolean | null {
    return (
      form.controls[fieldName].errors &&
      form.controls[fieldName].touched
    );
  }

  static getFieldError(
    form: FormGroup,
    fieldName: string
  ): string | null {
    if (!form.controls[fieldName]) return null;
    const errors = form.controls[fieldName].errors ?? {};
    return this.getError(errors);
  }

  static isValidFieldInArray(
    form: FormArray,
    index: number): boolean | null {
    return (
      form.controls[index].errors &&
      form.controls[index].touched
    );
  }

  static getFieldInArrayError(
    form: FormArray,
    index: number
  ): string | null {
    if (!form.controls[index]) return null;
    const errors = form.controls[index].errors ?? {};
    return this.getError(errors);
  }

  private static getError(
    errors: ValidationErrors,
    messages: ErrorMessages = DEFAULT_MESSAGES,
  ): string | null {
    for (const key of Object.keys(errors)) {
      const rule = messages[key];
      if (!rule) continue;

      const value = errors[key];
      return typeof rule === "function" ? rule(value) : rule;
    }
    return null;
  }
}
