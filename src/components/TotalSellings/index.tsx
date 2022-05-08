import { ChartDataset } from "chart.js";
import { useState } from "react";
import { Chart } from "react-chartjs-2";
import { monthNames } from "../../utils/constants";
import { groupPedidosByMonth } from "../../utils/utils";
import styles from "./index.module.scss";

type Dataset = ChartDataset<"line", number[]>;

type Props = {
  pedidos: Pedido[];
};

export function TotalSellings(props: Props) {
  const groups = groupPedidosByMonth(props.pedidos);
  const availableYears = Object.keys(groups);
  const [year, setYear] = useState(new Date().getFullYear());
  const yearGroup = groups[year];
  const months = yearGroup && Object.keys(yearGroup);
  const labels: string[] = monthNames;
  const data = months?.map((key) => yearGroup[key].total);
  const datasets: Dataset[] = [
    {
      label: `${year} -Vendas - data de saida`,
      data: data,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.3,
    },
  ];

  return (
    <div className={styles.chartContainer}>
      <select value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
        {availableYears.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <Chart
        type="line"
        data={{
          datasets,
          labels,
        }}
        options={{
          maintainAspectRatio: false,
        }}
        height="100%"
        width="100%"
      />
    </div>
  );
}
