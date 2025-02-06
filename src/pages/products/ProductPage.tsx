import "./ProductPage.css";
import { useParams } from "react-router";
import { fetchProductByID } from "../../utils/api/Api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { useCartStore } from "../../context/useCartStore";

const ProductPage = () => {
  const { addToCart } = useCartStore()
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductByID(Number(id)),
  });

  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", { rating, review });
    alert("Thank you for your review!");
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="container">
      <div className="product_details">
        <img src={data.image} alt={data.title} className="product_image" />
        <h1 className="product_title">{data.title}</h1>
        <p className="product_price">${data.price}</p>
        <p className="product_description">{data.description}</p>
        <p className="product_rating">
          Rating: {data.rating.rate} ({data.rating.count} reviews)
        </p>
        <div className="button" onClick={() =>
                addToCart({
                  id: data.id,
                  title: data.title,
                  price: data.price,
                  image: data.image,
                  quantity: 1,
                })
              }>
          Add To Cart
          <AddShoppingCartOutlined />
        </div>
      </div>

      <div className="review_form">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
            ></textarea>
          </label>
          <br />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
