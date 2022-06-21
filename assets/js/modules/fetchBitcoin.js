export default async function fetchBitcoin(url, target) {
    try {
      const preco = await (await fetch(url)).json();
      const btcPreco = document.querySelector(target);
      btcPreco.innerHTML = (1000 / preco.BRL.sell).toFixed(4);
    } catch (e) {
      console.log(e);
    }

}
