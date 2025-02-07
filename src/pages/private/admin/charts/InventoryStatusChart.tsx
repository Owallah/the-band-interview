import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { inventoryData } from '../../../../utils/data/MockChartsData';

const COLORS = ['#B0F2B4', '#BAF2E9', '#BAD7F2', '#F2BAC9', '#F2E2BA'];

const InventoryStatusChart = () => {
  return (
    <div className="chart_container">
      <h3>Inventory Status</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={inventoryData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="stock"
          nameKey="name"
        >
          {inventoryData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default InventoryStatusChart;