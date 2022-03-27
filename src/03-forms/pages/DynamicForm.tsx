import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputFile, MySelect } from "../components";
import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFileds: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Debe de tener minimo ${(rule as any).value || 2} caracteres`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("email incorrecto");
    }

    // otras reglas
  }

  requiredFileds[input.name] = schema;
}

const validationsSchema = Yup.object({ ...requiredFileds });

export const DynamicForm = () => {
  return (
    <div className="m-5">
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ label, type, name, placeholder, options }) => {
              const typeValid = ["input", "password", "email"];
              if (typeValid.includes(type)) {
                return (
                  <InputFile
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">select an option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`El type: ${type}, no es soportado`);
            })}
            <button type="submit" className="bg-white text-black">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
