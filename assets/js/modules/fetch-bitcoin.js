export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const preco = await (
        await fetch("https://blockchain.info/ticker")
      ).json();
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerHTML = (1000 / preco.BRL.sell).toFixed(4);
    } catch (e) {
      console.log(e);
    }
  }
  fetchBitcoin();
}
