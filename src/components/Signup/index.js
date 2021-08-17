import React, { useState } from "react";
import { Form, Input, Button } from "../Signin/styles";
import { useRegisterMutation } from "../../hooks/useRegisterMutation";
import { useFormik } from "formik";
import * as yup from "yup";

export const Signup = ({ changeForm }) => {
  const [menssage, setMenssage] = useState("");
  const { sigup, error, loading } = useRegisterMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup
        .string()
        .required()
        .oneOf([yup.ref("repeatPassword")]),
      repeatPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password")]),
    }),
    onSubmit: (values) => {
      sigup({
        variables: {
          input: { email: values.email, password: values.password },
        },
      })
        .then((data) => {
          changeForm(true);
        })
        .catch((e) => setMenssage(e.message));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {menssage && <p>{menssage}</p>}
      <Input
        type="email"
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
      <Input
        placeholder=" Repeat Password"
        type="password"
        name="repeatPassword"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        Registrase
      </Button>
    </Form>
  );
};
