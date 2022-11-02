import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Container = styled.div`
    box-shadow : 5px 5px 10px gray;
    margin : 20px;
    padding : 10px;
    border-radius : 10px;
`
const ChartTitle = styled.h3`
    margin: 30px;
    font-size : 24px;
`


const data = [
    {
      name: 'JAN',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'FEB',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MAR',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'APR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUNE',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'JUL',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: 'AUG',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'SEP',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
  ];
  

const Chart = () => {
  return (
    <Container>
        <ChartTitle>
            Sales Analytics
        </ChartTitle>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#9650f2" activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="uv" stroke="#059922" activeDot={{ r: 4 }}/>
        </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}

export default Chart