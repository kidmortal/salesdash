import { ChartDataset } from "chart.js";
import { Chart } from "react-chartjs-2";
import { monthNames } from "../../utils/constants";
import { groupPedodosTotalByMonthSalesman } from "../../utils/utils";

type Dataset = ChartDataset<"line", number[]>;

type Props = {
  pedidos: Pedido[];
};

export function SellingsPerSalesman(props: Props) {
  const groups: {} = groupPedodosTotalByMonthSalesman(props.pedidos, 2021);
  const labels: string[] = monthNames;
  const datasets: Dataset[] = Object.entries(groups).map(
    ([salesman, values]) => {
      return {
        label: salesman,
        data: Object.values(values as any),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.3,
      };
    }
  );

  return (
    <Chart
      type="bar"
      data={{
        datasets,
        labels,
      }}
      options={{}}
    />
  );
}
