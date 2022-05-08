import { useEffect, useState } from "react";
import { db } from "../../database/pedidos";
import { getAllPedidos } from "../../services/api";
import { formatDateToString } from "../../utils/utils";
import styles from "./index.module.scss";

export function Header() {
  const [lastTimeUpdated, setLastTimeUpdated] = useState("");
  const lastTimeDate = lastTimeUpdated
    ? formatDateToString(new Date(lastTimeUpdated))
    : "Nunca";
  const [count, setCount] = useState(0);
  async function handleSync() {
    const data = await getAllPedidos();
    db.pedidos.clear();
    db.pedidos.bulkAdd(data);
    db.pedidos.count().then((n) => setCount(n));
    const lastTime = localStorage.getItem("@salesdash/lastUpdateTime");
    if (lastTime) {
      setLastTimeUpdated(lastTime);
    }
  }
  useEffect(() => {
    db.pedidos.count().then((n) => setCount(n));
    const lastTime = localStorage.getItem("@salesdash/lastUpdateTime");
    if (lastTime) {
      setLastTimeUpdated(lastTime);
    }
  }, []);

  return (
    <div className={styles.headerContainer}>
      <span>Pedidos Sincronizados: {count}</span>
      <div className={styles.importarPedidos}>
        <img
          onClick={() => handleSync()}
          className={styles.syncButton}
          alt="sync pedidos"
          src="/assets/sync.svg"
        />
        <div className={styles.column}>
          <span>Importar Pedidos</span>
          <span className={styles.smallText}>
            Ultima importação: {lastTimeDate}
          </span>
        </div>
      </div>
    </div>
  );
}
