import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { productComparisonData } from '../../../../utils/data/MockChartsData';
const ProductComparisonChart = () => {
  return (
    <div className="chart_container">
      <h3>Product Comparison</h3>
      <BarChart width={500} height={300} data={productComparisonData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#B0F2B4" />
      </BarChart>
    </div>
  );
};

export default ProductComparisonChart;