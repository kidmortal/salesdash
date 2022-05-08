declare type Pedido = {
  _id: string;
  numero: number;
  nome: string;
  vendedor: string;
  data: string;
  cnpj: string;
  status: string;
  cidade: string;
  estado: string;
  observacao: string;
  observacao_interna: string;
  condicao: string;
  valor: number;
  clonagem: boolean;
  dataSaida?: any;
};
