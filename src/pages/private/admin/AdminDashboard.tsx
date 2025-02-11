import { useMutation } from "@tanstack/react-query";
import "./AdminDashboard.css";
import { deleteProduct } from "../../../utils/api/Api";
import {
  AddOutlined,
  DeleteOutline,
  EditOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useProductStore } from "../../../context/useProductStore";
import SalesPerformanceChart from "./charts/SalesPerformanceChart";
import ProductComparisonChart from "./charts/ProductComparisonChart";
import InventoryStatusChart from "./charts/InventoryStatusChart";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { products, deleteProduct: deleteLocalProduct } = useProductStore()
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // // Fetch products
  // useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  // });

  // Delete product mutation
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      if (deleteId) {
        deleteLocalProduct(deleteId)
        setDeleteId(null)
      }
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="container section">

      <div className="analytics_section">
        <h2>Analytics</h2>
        <div className="charts_container flexCenter">
          <SalesPerformanceChart />
          <ProductComparisonChart />
          <InventoryStatusChart />
        </div>
      </div>

      <div
        className="add_product_button button"
        onClick={() => navigate("/admin/add/product")}
      >
        <AddOutlined /> Add Product
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img src={product.image} alt={product.title} width={50} />
              </td>
              <td>{product.title}</td>
              <td>Ksh.{product.price * 120}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                {product.rating?.rate} ({product.rating?.count})
              </td>
              <td>
                <div
                  className="admin_view_product"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <RemoveRedEyeOutlined />
                </div>
                <div
                  className="admin_edit_product"
                  onClick={() => navigate(`/admin/edit/product/${product.id}`)}
                >
                  <EditOutlined />
                </div>
                <div
                  className="admin_delete_product"
                  onClick={() => setDeleteId(product.id)}
                >
                  <DeleteOutline />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="delete_modal">
          <div className="delete_modal_content">
            <p>Are you sure you want to delete this product?</p>
            <div className="delete_modal_actions">
              <button onClick={() => handleDelete(deleteId)}>Yes</button>
              <button onClick={() => setDeleteId(null)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;