let isIgnite = true; /*é ignite, a 1ºvez é ignite, é verdade*/
function changeCard(event) {
  const card = event.currentTarget; /*faz o evento, os dois cliques*/
  const backgroundImage = isIgnite /*faz a troca das figurinhas*/
    ? "url(./assets/bg.explorer.svg)" /* (?)entao, entra na funcao e transforma em explorer*/
    : "url(./assets/bg.ignite.svg)"; /* (:)se nao, muda para ignite*/
  isIgnite = !isIgnite;
  /*converte de verdadeiro para falso, se o valor é verdadeiro (isIgnite = true), 
 (!isIgnite) !nega o valor, sendo assim ele se torna falso*/
  card.style.backgroundImage = backgroundImage;
}
