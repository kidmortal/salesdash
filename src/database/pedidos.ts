// db.ts
import Dexie, { Table } from "dexie";

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  pedidos!: Table<Pedido>;

  constructor() {
    super("salesdash");
    this.version(1).stores({
      pedidos:
        "++numero,nome,vendedor,data,cnpj,status,cidade,estado,observacao_interna,condicao,valor,dataSaida,clonagem",
    });
  }
}

export const db = new MySubClassedDexie();
