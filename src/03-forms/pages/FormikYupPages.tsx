import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";


export const FormikYupPages = () => {
  
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "debe de tener 15 caracteres o menos")
        .required("Requerido"),

      lastName: Yup.string()
        .max(10, "debe de tener 15 caracteres o menos")
        .required("Requerido"),

      email: Yup.string().required("Requerido").email("email no valido"),
    }),
  });

  return (
    <div className="m-5">
      <h1 className="text-4xl">Formik Yup</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>

        <input
          className="text-gray-900"
          type="text"
          {...getFieldProps("firstName")}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          className="text-gray-900"
          type="text"
          {...getFieldProps("lastName")}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          className="text-gray-900"
          type="email"
          {...getFieldProps("email")}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button className="text-gray-900 bg-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
