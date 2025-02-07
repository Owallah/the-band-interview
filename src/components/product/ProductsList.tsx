import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utils/api/Api";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../load/LoadSpinner";
import ErrorDisplay from "../error/ErrorDisplay";

const ProductList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // State for search, filter, and sort
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorDisplay error={error} />;

  // Get unique categories for the filter dropdown
  const categories = [...new Set(data.map((product: any) => product.category))];

  // Filter and sort products
  const filteredProducts = data
    .filter((product: any) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a: any, b: any) => {
      if (sortOrder === "priceLowToHigh") return a.price - b.price;
      if (sortOrder === "priceHighToLow") return b.price - a.price;
      return 0; // Default order
    });

  return (
    <div>
      {/* Search, Filter, and Sort Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search_input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter_select"
        >
          <option value="all">All Categories</option>
          {categories.map((category: any) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort_select"
        >
          <option value="default">Default Order</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product List */}
      <div className="products_container" id="#products">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;