import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../components/ListOfPhotoCard";
import { Helmet } from "react-helmet";

const Home = (props) => {
  const { id } = props.match.params;
  return (
    <>
      <Helmet>
        <title>Home | petgram</title>
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  );
};

export default Home;
