import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { salesData } from '../../../../utils/data/MockChartsData';

const SalesPerformanceChart = () => {
  return (
    <div className="chart_container">
      <h3>Sales Performance</h3>
      <LineChart width={500} height={300} data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="sales"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#BAD7F2" />
      </LineChart>
    </div>
  );
};

export default SalesPerformanceChart;