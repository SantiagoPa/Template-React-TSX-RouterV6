import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div className="m-5">
      <h1 className="text-4xl">Formik Components</h1>

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
                              .notOneOf(['it-jr'], 'Esta opción no es permitida')
                              .required("Requerido")
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" className="text-black" />
            <ErrorMessage name="firstName" component={"span"} />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" className="text-black" />
            <ErrorMessage name="lastName" component={"span"} />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" className="text-black" />
            <ErrorMessage name="email" component={"span"} />

            <label className="my-2 cursor-pointer">
              <Field name="terms" type="checkbox" className="text-black" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component={"span"} />

            <label>Job Type</label>
            <Field name="jobType" as="select" className="text-black">
              <option value={""}>Pick something</option>
              <option value={"developer"}>Developer</option>
              <option value={"designer"}>Designer</option>
              <option value={"it-senior"}>IT Senior</option>
              <option value={"it-jr"}>IT Jr</option>
            </Field>
            <ErrorMessage name="jobType" component={"span"} />

            <button className="text-gray-900 bg-white" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
