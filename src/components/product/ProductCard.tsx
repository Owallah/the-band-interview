import { AddShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useCartStore } from "../../context/useCartStore";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCartStore();

  return (
    <div className="product_container">
      <img
        src={product.image}
        alt={product.title}
        className="product_image"
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <h2 className="product_name" onClick={() => navigate(`/product/${product.id}`)}>
        {product.title}
      </h2>
      <p className="product_price">${product.price}</p>
      <div
        className="add_to_cart_button flexCenter"
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
  );
};

export default ProductCard;