import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

// বিভিন্ন বারের জন্য সুন্দর কিছু কালার (Tailwind palette এর কাছাকাছি)
const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'];

const data = [
  { name: 'The Great Gatsby', uv: 4000 },
  { name: 'To kill a mocking bird', uv: 3000 },
  { name: '1984', uv: 2000 },
  { name: 'The Alchemist', uv: 2780 },
  { name: 'Pride and prejudice', uv: 1890 },
  
];

// ত্রিভুজ তৈরির পাথ ফাংশন
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

// কাস্টম ত্রিভুজ বার কম্পোনেন্ট
const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReCharts = () => {
  return (
    <div className='container mx-auto py-10 px-4'>
      {/* Tailwind কার্ড স্টাইল */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Custom Shape Bar Chart
        </h1>

        {/* চার্টের এরিয়া */}
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#6B7280', fontSize: 12}}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#6B7280', fontSize: 12}}
              />
              <Tooltip 
                cursor={{ fill: '#F3F4F6' }} 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              
              <Bar 
                dataKey="uv" 
                shape={<TriangleBar />} 
                label={{ position: 'top', fill: '#374151', fontSize: 12 }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReCharts;