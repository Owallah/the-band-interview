import "./FeaturedProduct.css";

const FeaturedProduct = () => {
  const featuredProduct = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  };

  return (
    <div className="featured_product">
      <div className="featured_content">
        <h2 className="featured_title">Featured Product</h2>
        <img
          src={featuredProduct.image}
          alt={featuredProduct.title}
          className="featured_image"
        />
        <h3 className="featured_product_title">{featuredProduct.title}</h3>
        <p className="featured_product_price">Ksh.{featuredProduct.price * 120}</p>
        <p className="featured_product_description">{featuredProduct.description}</p>
        <a href="#products" className="button">Shop Now</a>
      </div>
    </div>
  );
};

export default FeaturedProduct;