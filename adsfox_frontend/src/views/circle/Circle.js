import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import RenderCustomizedLabel from "./RenderCustomizedLabel";

import { useContext, useEffect } from "react";

import CanalService from "../../services/CanalService";

import { GlobalContext } from "../../context/GlobalState";

const Circle = () => {
  const { canals,state, dispatch, setPercentages } = useContext(GlobalContext);

  // useEffect(async () => {
  //   retrivePercentage();
  // }, []);

  // const retrivePercentage = async () => {
  //   const result = await CanalService.getPercentages();
  //   setPercentages(result);
  // };

  // const data = [
  //     { name: "Group A", value: 450 },
  //     { name: "Group B", value: 300 },
  //     { name: "Group C", value: 300 },
  //     { name: "Group D", value: 200 },
  //   ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={state.percentages}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={RenderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {state.percentages.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );

  
};

export default Circle;
