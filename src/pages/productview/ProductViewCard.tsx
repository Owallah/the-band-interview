import { AddShoppingCartOutlined, LocalMallOutlined, Star } from '@mui/icons-material'


interface ProductViewCardProps {
    product: {
      id: number;
      title: string;
      price: number;
      image: string;
      category: string
      description: string
      rating: {
        rate: number,
        count: number
      }
    };

    addToCart: any
  }
const ProductViewCard = ({product, addToCart}: ProductViewCardProps) => {
  return (
    <div className='product_view_container flexCenter'>
        <div className='product_view_container_image'>
            <img src={product.image} alt={product.title} />
        </div>
        <div className='product_view_container_text flexColCenter'>
            <div className="product_view_container_text_data">
                <p>{product.category}</p>
                <h1>{product.title}</h1>
                <h3>{product.rating.rate}<Star /></h3>
                <h2>Ksh. {product.price * 120}</h2>
                <p>{product.description}</p>
            </div>
            <div className="product_view_container_text_buttons">
                <div
          className="button"
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
          Add To Cart
          <AddShoppingCartOutlined />
        </div>

        <div
          className="order_now_button"
          onClick={() =>
            alert('Order Now!')
            
          }
        >
          Order Now
          <LocalMallOutlined />
        </div>
            </div>

        

        </div>
    </div>
  )
}

export default ProductViewCard