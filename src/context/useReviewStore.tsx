import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Review {
  productId: number;
  rating: number;
  comment: string;
}

interface ReviewState {
  reviews: Review[];
  addReview: (review: Review) => void;
  getReviewsByProductId: (productId: number) => Review[];
}

export const useReviewStore = create<ReviewState>()(
  persist(
    (set, get) => ({
      reviews: [],
      // Add a new review
      addReview: (review) =>
        set((state) => ({ reviews: [...state.reviews, review] })),
      // Get reviews for a specific product
      getReviewsByProductId: (productId) =>
        get().reviews.filter((review) => review.productId === productId),
    }),
    {
      name: 'review-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);