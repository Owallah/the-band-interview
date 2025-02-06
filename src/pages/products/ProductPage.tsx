import "./ProductPage.css";
import { useParams } from "react-router";
import { fetchProductByID } from "../../utils/api/Api";
import { useQuery } from "@tanstack/react-query";
import { useCartStore } from "../../context/useCartStore";
import LoadingSpinner from "../../components/load/LoadSpinner";
import ErrorDisplay from "../../components/error/ErrorDisplay";
import ProductCard from "../../components/product/ProductCard";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import ReviewForm from "../../components/reviews/ReviewForm";
const ProductPage = () => {
  const { addToCart } = useCartStore();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductByID(Number(id)),
  });

  const handleReviewSubmit = (rating: number, review: string) => {
    console.log("Review submitted:", { rating, review });
    alert("Thank you for your review!");
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorDisplay error={error} />;

  return (
    <div className="container">
      <div className="product_details">
        <ProductCard product={data} />
        <div
          className="button"
          onClick={() =>
            addToCart({
              id: data.id,
              title: data.title,
              price: data.price,
              image: data.image,
              quantity: 1,
            })
          }
        >
          Add To Cart
          <AddShoppingCartOutlined />
        </div>
      </div>
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default ProductPage;