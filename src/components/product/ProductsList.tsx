import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utils/api/Api";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../load/LoadSpinner";
import ErrorDisplay from "../error/ErrorDisplay";

const ProductList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorDisplay error={error} />;

  return (
    <div className="products_container" id="#products">
      {data.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;