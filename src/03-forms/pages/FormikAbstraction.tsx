import { Formik, Form } from "formik";
import * as Yup from "yup";

import { InputFile, MyCheckbox, MySelect } from "../components/";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div className="m-5">
      <h1 className="text-4xl">Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "debe de tener 15 caracteres o menos")
            .required("Requerido"),

          lastName: Yup.string()
            .max(10, "debe de tener 15 caracteres o menos")
            .required("Requerido"),

          email: Yup.string().required("Requerido").email("email no valido"),

          terms: Yup.boolean().oneOf([true], "debe de aceptar las condiciones"),

          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <InputFile
              label="First Name"
              name="firstName"
              placeholder="santy"
            />

            <InputFile
              label="Last Name"
              name="lastName"
              placeholder="padilla"
            />

            <InputFile
              label="Email Address"
              name="email"
              placeholder="example@example.com"
              type="email"
            />

            <MySelect
              name="jobType"
              as="select"
              className="text-black"
              label="Job Type"
            >
              <option value={""}>Pick something</option>
              <option value={"developer"}>Developer</option>
              <option value={"designer"}>Designer</option>
              <option value={"it-senior"}>IT Senior</option>
              <option value={"it-jr"}>IT Jr</option>
            </MySelect>

            <MyCheckbox label="Termns & Conditions" name="terms" />

            <button className="text-gray-900 bg-white" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
