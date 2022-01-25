import { PieChart, Pie, Cell } from "recharts";
import RenderCustomizedLabel from "./RenderCustomizedLabel";

import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";
import { Colors } from "./RandomColor";

const Circle = () => {
  const { state } = useContext(GlobalContext);

  const COLORS = Colors;

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
