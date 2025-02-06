import "./LandingPage.css";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utils/api/Api";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import FeaturedProduct from "./featured/FeaturedProduct";
import Offers from "./offers/Offers";
import { useCartStore } from "../../context/useCartStore";

const LandingPage = () => {
  const { addToCart } = useCartStore();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const navigate = useNavigate();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  return (
    <div className="container section">
      <FeaturedProduct />
      <Offers />
      <h1>Products</h1>
      <div className="products_container">
        {data.map((product: any) => (
          <div key={product.id} className="product_container">
            <img
              src={product.image}
              alt={product.title}
              className="product_image"
            />
            <h2
              className="product_name"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {product.title}
            </h2>
            <p className="product_price">${product.price}</p>
            <div
              className="add_to_cart_button"
              onClick={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                })
              }
            >
              <AddShoppingCartOutlined />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
