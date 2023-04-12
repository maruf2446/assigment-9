
import React from 'react';
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";


const Statistics = () => {

        const data = [
          {
            name: "Assignment 1",
            marks: 60,
          },
          {
            name: "Assignment 2",
            marks: 52,
          },
          {
            name: "Assignment 3",
            marks: 53,
          },
          {
            name: "Assignment 4",
            marks: 55,
          },
          {
            name: "Assignment 5",
            marks: 56,
          },
          {
            name: "Assignment 6",
            marks: 52,
          },
          {
            name: "Assignment 7",
            marks: 56,
          },
          {
            name: "Assignment 8",
            marks: 60,
          }
        ]

    return (
        <div>
            <h2>Statistics Page</h2>
            <ComposedChart width={800} height={400} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="marks" barSize={20} fill="#9873ff" />
        </ComposedChart>
            
        </div>
    );
};

export default Statistics;