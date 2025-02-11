import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import "./AddProduct.css";
import { addNewProduct } from "../../../utils/api/Api";
import { useState } from "react";
import { useProductStore } from "../../../context/useProductStore";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProductStore();

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const addMutation = useMutation({
    mutationFn: addNewProduct,
    onSuccess: (data) => {
      addProduct(data);
      navigate("/admin/dashboard");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMutation.mutate(product);
  };

  return (
    <div className="container section">
      <h1>Add New Product</h1>
      <fieldset>
        <form onSubmit={handleSubmit} className="add_product_form">
          <label>
            Title:
            <input
              className="add_product_input"
              type="text"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
              required
            />
          </label>
          <label>
            Price:
            <input
              className="add_product_input"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: +e.target.value })
              }
              required
            />
          </label>
          <label>
            Description:
            <textarea
              className="add_product_input_textarea"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              required
            />
          </label>
          <label>
            Image URL:
            <input
              className="add_product_input"
              type="text"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
              required
            />
          </label>
          <label>
            Category:
            <input
              className="add_product_input"
              type="text"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              required
            />
          </label>
          <button type="submit" className="add_product_button button">
            Add Product
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddProduct;
