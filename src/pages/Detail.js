import { PhotoCardWhitQuery } from "../containers/PhotoCardWhitQuery";
import { Layout } from "../components/Layout";

export const Detail = (props) => {
  const { id } = props.match.params;
  return (
    <Layout title={`photo ${id}`}>
      <PhotoCardWhitQuery id={id} />
    </Layout>
  );
};
