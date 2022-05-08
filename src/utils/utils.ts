type PedidosGroup = {
  [key: string]: {
    [key: string]: {
      total: number;
    };
  };
};

export function groupPedidosByMonth(pedidos: Pedido[]) {
  const datesObj: PedidosGroup = {};
  pedidos.forEach((pedido) => {
    const testDate = new Date(pedido.dataSaida);
    const month = testDate.getMonth() + 1;
    const year = testDate.getFullYear();
    if (datesObj[year] === undefined) {
      datesObj[year] = {
        1: {
          total: 0,
        },
        2: {
          total: 0,
        },
        3: {
          total: 0,
        },
        4: {
          total: 0,
        },
        5: {
          total: 0,
        },
        6: {
          total: 0,
        },
        7: {
          total: 0,
        },
        8: {
          total: 0,
        },
        9: {
          total: 0,
        },
        10: {
          total: 0,
        },
        11: {
          total: 0,
        },
        12: {
          total: 0,
        },
      };
    }
    datesObj[year][month].total += pedido.valor;
  });
  return datesObj;
}

type PedidosYearMonthGroup = {
  [salesman: string]: {
    [year: string]: {
      [month: string]: {
        total: number;
        data: Pedido[];
      };
    };
  };
};

export function groupPedidosBySalesman(pedidos: Pedido[]) {
  const datesObj: PedidosYearMonthGroup = {};
  pedidos.forEach((pedido) => {
    const testDate = new Date(pedido.dataSaida);
    const salesman = pedido.vendedor;
    const month = testDate.getMonth() + 1;
    const year = testDate.getFullYear();
    if (datesObj[salesman] === undefined) {
      datesObj[salesman] = {};
      datesObj[salesman][year] = {
        1: {
          total: 0,
          data: [],
        },
        2: {
          total: 0,
          data: [],
        },
        3: {
          total: 0,
          data: [],
        },
        4: {
          total: 0,
          data: [],
        },
        5: {
          total: 0,
          data: [],
        },
        6: {
          total: 0,
          data: [],
        },
        7: {
          total: 0,
          data: [],
        },
        8: {
          total: 0,
          data: [],
        },
        9: {
          total: 0,
          data: [],
        },
        10: {
          total: 0,
          data: [],
        },
        11: {
          total: 0,
          data: [],
        },
        12: {
          total: 0,
          data: [],
        },
      };
    }
    datesObj[salesman][year][month].data.push(pedido);
    datesObj[salesman][year][month].total += pedido.valor;
  });
  return datesObj;
}

type GroupMonthSalesman = {
  salesman: string;
  month: string;
  total: number;
};

export function groupPedodosTotalByMonthSalesman(
  pedidos: Pedido[],
  targetYear: number
) {
  const targetYearPedidos = pedidos.filter((pedido) => {
    const date = new Date(pedido.dataSaida);
    const year = date.getFullYear();
    return year === targetYear;
  });
  const groupBySalesman = targetYearPedidos.reduce((group, pedido) => {
    const date = new Date(pedido.dataSaida);
    const month = date.getMonth() + 1;
    if (group[pedido.vendedor] === undefined) {
      group[pedido.vendedor] = {};
    }
    if (group[pedido.vendedor][month] === undefined) {
      group[pedido.vendedor] = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
      };
    }
    group[pedido.vendedor][month] += pedido.valor;
    return group;
  }, {} as any);
  return groupBySalesman;
}

export function formatDateToString(date: Date) {
  console.log(date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${zeroLeft(day)}/${zeroLeft(
    month
  )}/${year} ${hours}:${minutes}:${seconds}`;
}

export function zeroLeft(number: number) {
  return number < 10 ? `0${number}` : number;
}
