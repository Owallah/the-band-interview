import { useQuery } from "@tanstack/react-query";
import "./AdminDashboard.css"
import { fetchProducts } from "../../../utils/api/Api";
import { AddOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";

const AdminDashboard = () => {
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  return (
    <div className="container section">
      <div className="add_product_button button">
        <AddOutlined /> Add Product
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Rating</th>
        </tr>
        {
          data.map((product: any) => (
            <tr>
              <td>{product.id}</td>
              <td><img src={product.image} alt="" /></td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.rating.rate}: ({product.rating.count})</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default AdminDashboard