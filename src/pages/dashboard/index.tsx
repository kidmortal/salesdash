import "chart.js/auto";
import { useEffect, useState } from "react";
import { InfoCard } from "../../components/InfoCard";
import { SellingsPerSalesman } from "../../components/SellingsPerSalesman";
import { TotalSellings } from "../../components/TotalSellings";
import { db } from "../../database/pedidos";
import styles from "./index.module.scss";

export function Dashboard() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    db.pedidos.toArray().then((p) => setPedidos(p));
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.orderStatusContainer}>
        <InfoCard
          label="Aguardando Aprovação"
          content="17"
          icon="/assets/waiting.svg"
          variant="yellow"
        />
        <InfoCard
          label="Aprovados"
          content="5"
          icon="/assets/approved.svg"
          variant="green"
        />
        <InfoCard
          label="Separado"
          content="10"
          icon="/assets/box.svg"
          variant="purple"
        />
        <InfoCard
          label="Aguardando Retirada"
          content="18"
          icon="/assets/transport.svg"
          variant="orange"
        />
        <InfoCard
          label="Aguardando Nota Fiscal"
          content="4"
          icon="/assets/document.svg"
          variant="blue"
        />
      </div>
      <div className={styles.chart}>
        <TotalSellings pedidos={pedidos} />
      </div>
    </div>
  );
}
