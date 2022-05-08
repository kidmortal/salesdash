export async function getAllPedidos() {
  const response = await fetch(
    "https://novakidserver.herokuapp.com/mongodb/pedidos?key=758232"
  );
  const data = await response.json();
  const now = new Date();
  const dateString = now.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  const split = dateString.split(" ");
  let date = split[0];
  let splitDate = date.split("/");
  [splitDate[0], splitDate[1]] = [splitDate[1], splitDate[0]];
  date = splitDate.join("/");
  const hours = split[1];
  const formatDate = `${date} ${hours}`;

  localStorage.setItem("@salesdash/lastUpdateTime", formatDate);

  return data;
}
