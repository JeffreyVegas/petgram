import { useState } from "react";

import { Form, Input, Button } from "./styles";
import { useAuthContext } from "../../context";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { useFormik } from "formik";
import * as yup from "yup";

export const Signin = () => {
  const [menssage, setMenssage] = useState("");
  const { activeUser } = useAuthContext();
  const { login, loading, error } = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      login({
        variables: {
          input: values,
        },
      })
        .then((response) => {
          activeUser(response.data.login);
        })
        .catch((e) => setMenssage(e.message));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {menssage && <p>{menssage}</p>}
      <Input
        placeholder="Email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        disabled={loading}
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        Iniciar Sesion
      </Button>
    </Form>
  );
};
