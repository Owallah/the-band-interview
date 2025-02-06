import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import "./EditProduct.css";
import { fetchProductByID, updateProduct } from "../../../utils/api/Api";
import { useState } from "react";
import { useProductStore } from "../../../context/useProductStore";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateProduct: updateLocalProduct } = useProductStore()

  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductByID(Number(id)),
  });

  const [formData, setFormData] = useState({
    title: product?.title || "",
    price: product?.price || 0,
    description: product?.description || "",
    image: product?.image || "",
    category: product?.category || "",
  });

  const updateMutation = useMutation({
    mutationFn: (updatedProduct: any) =>
      updateProduct(Number(id), updatedProduct),
    onSuccess: (data) => {
      updateLocalProduct(Number(id), data)
      navigate("/admin/dashboard");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container section">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: +e.target.value })
            }
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          />
        </label>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;