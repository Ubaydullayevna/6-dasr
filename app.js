const spiderImage = document.querySelector("#img");
const kolibriImage = document.querySelector("#kolibri");
const spiderScore = document.getElementById("score");

let innerWidth = window.innerWidth - 50;
let innerHeight = window.innerHeight - 50;
let score = 0;
const randomPositionTime = setInterval(() => {
  let top = Math.random() * innerWidth;
  let left = Math.random() * innerHeight;

  spiderImage.style = `
  transition:0.9s;
   position:absolute;
   left:${top}px;
   top:${left}px ;`;
}, 1000);

spiderImage.addEventListener("click", () => {
  score+=1;
  spiderScore.innerHTML = `${score}`;
  kolibriImage.style.transform = `rotate(-30deg)`
});

document.addEventListener("mousemove", mouseCursor);
function mouseCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  kolibriImage.style.left = `${x}px`
  kolibriImage.style.top = `${y}px`;
}
