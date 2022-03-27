import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputFile } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div className="m-4">
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "debe tener mas de 2 caracteres")
            .max(15, "debe de tener menos de 15 caracteres")
            .required("requerido"),

          email: Yup.string()
            .required("Este campo es requerido")
            .email("email no valido"),

          password1: Yup.string()
            .min(6, "debe tener minimo 6 caracteres")
            .required("la contraseña es requeriada"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1"), null], "las contraseñas no coinciden")
            .required("requerido"),
        })}
      >
        {({ handleReset }) => (
          <>
            <Form noValidate className="text-gray-900">
              <InputFile label="Name" name="name" placeholder="jhon" />

              <InputFile
                label="Email"
                name="email"
                placeholder="jhon@exmaple.com"
              />

              <InputFile label="Password" name="password1" type="password" />

              <InputFile
                label="Confirmation password"
                name="password2"
                type="password"
              />

              <button className="bg-white" type="submit">
                create
              </button>

              <button
                className="bg-white"
                type="button"
                onClick={handleReset}
              >
                Reset Form
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
