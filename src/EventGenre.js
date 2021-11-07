import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular", "AngularJS"];
  const COLORS = ["#B80000", "#FF6900", "#D3AA00", "#008B02", "#2C78F8", "#9a73df"];

  const getData = () => {
    let data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(" ").includes(genre)).length;
      return { name: genre, value: value };
    });
    data = data.filter((data) => data.value);
    return data;
  };

  useEffect(() => { setData(() => getData()); }, [events]);

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer >
  );
}

export default EventGenre;
