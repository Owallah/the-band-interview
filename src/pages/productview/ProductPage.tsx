import "./ProductPage.css";
import { useParams } from "react-router";
import { fetchProductByID } from "../../utils/api/Api";
import { useQuery } from "@tanstack/react-query";
import { useCartStore } from "../../context/useCartStore";
import LoadingSpinner from "../../components/load/LoadSpinner";
import ErrorDisplay from "../../components/error/ErrorDisplay";
import { Star, StarBorder } from "@mui/icons-material";
import ReviewForm from "../../components/reviews/ReviewForm";
import { useReviewStore } from "../../context/useReviewStore";
import ProductViewCard from "./ProductViewCard";


const ProductPage = () => {
  const { addToCart } = useCartStore();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductByID(Number(id)),
  });

  const { getReviewsByProductId } = useReviewStore()
  const reviews = getReviewsByProductId(Number(id))

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorDisplay error={error} />;

  return (
    <div className="container">
      <div className="product_details">
        <ProductViewCard product={data} addToCart={addToCart} />
      </div>
      <ReviewForm productId={Number(id)} />

      <div className="reviews_section">
        <h2>Customer Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review this product!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <div className="review_rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <Star style={{ color: "#ffc107" }} />
                    ) : (
                      <StarBorder style={{ color: "#ffc107" }} />
                    )}
                  </span>
                ))}
              </div>
              <p className="review_comment">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;