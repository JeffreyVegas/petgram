import { useState } from "react";

import { Signin } from "../../components/Signin";
import { Signup } from "../../components/Signup";
import { Helmet } from "react-helmet";
import { Title, Question, Conteiner } from "./styles";

export const Logger = () => {
  const [changeForm, setChangeForm] = useState(true);
  return (
    <Conteiner>
      <Helmet>
        <title>Logger | petgram</title>
      </Helmet>
      <Title>
        {!changeForm
          ? "Registrate y comparte las fotos de tus mascotas"
          : "Inicia Seccion para subir fotos de tus mascotas"}
      </Title>
      {changeForm ? <Signin /> : <Signup changeForm={setChangeForm} />}
      <Question>
        {!changeForm ? (
          <>
            ¿ya tienes una cuenta?{" "}
            <span onClick={() => setChangeForm(!changeForm)}>
              Inicia Sesion
            </span>
          </>
        ) : (
          <>
            ¿no tienes una cuenta?{" "}
            <span onClick={() => setChangeForm(!changeForm)}>Registrate</span>
          </>
        )}
      </Question>
    </Conteiner>
  );
};
