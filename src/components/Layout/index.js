import { Helmet } from "react-helmet";
import { Div, Title } from "./styles";
export const Layout = ({ title, children, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | petgram</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {children}
      </Div>
    </>
  );
};
