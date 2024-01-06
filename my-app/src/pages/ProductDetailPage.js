import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";

const ProductDetailPage = () => {
  const history = useHistory();
  const { category, productId, productNameSlug } = useParams();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Header />
    </div>
  );
};
