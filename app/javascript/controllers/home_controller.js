import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const hole = document.getElementById("hole")
    if (!hole) return

    for (let i = 0; i < 100; i++) {

      const img = document.createElement("img");
      img.src = "OmikujiHuda36KB.jpg";

      let x = Math.random() * 100;
      let y = Math.random() * 100;
      let angle = Math.random() * 360;
      img.style.left = -0 + x + "%";
      img.style.top = -0 + y + "%";
      img.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      setTimeout(() => {
        hole.appendChild(img);
      }, i * 100);
    }
  }
}
