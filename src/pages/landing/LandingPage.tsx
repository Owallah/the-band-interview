import "./LandingPage.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utils/api/Api";
import FeaturedProduct from "./featured/FeaturedProduct";
import Offers from "./offers/Offers";
import ProductList from "../../components/product/ProductsList";

const LandingPage = () => {
  const { isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  return (
    <div className="container section" >
      <FeaturedProduct />
      <Offers />
      <h1>Products</h1>
      <ProductList />
    </div>
  );
};

export default LandingPage;
