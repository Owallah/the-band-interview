import { useState } from "react";
import { Star, StarBorder } from "@mui/icons-material";
import "./ReviewForm.css";
import { useReviewStore } from "../../context/useReviewStore";

interface ReviewFormProps {
  productId: number
}

const ReviewForm = ({ productId }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { addReview } = useReviewStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }
    addReview({productId, rating, comment})
    alert("Product Revewed successful")
    setRating(0)
    setComment("")
  };

  // Handle star click to set the rating
  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div className="review_form section container">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <div className="star_rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="star"
                onClick={() => handleStarClick(star)}
              >
                {star <= rating ? (
                  <Star style={{ color: "#ffc107" }} />
                ) : (
                  <StarBorder style={{ color: "#ffc107" }} />
                )}
              </span>
            ))}
          </div>
        </label>
        <br />
        <label>
          Review:
          <textarea
          className="review_text_area"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review here..."
            required
          ></textarea>
        </label>
        <br />
        <button type="submit" className="review_submit_button button">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;