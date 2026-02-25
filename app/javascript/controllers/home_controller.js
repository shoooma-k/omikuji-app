import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static values = { image: String }

  connect() {
    const hole = document.getElementById("hole")
    if (!hole) return

    for (let i = 0; i < 100; i++) {

      const img = document.createElement("img");
      img.src = this.imageValue;

      let x = Math.random() * 100;
      let y = Math.random() * 100;
      let angle = Math.random() * 360;
      img.style.left = x + "%";
      img.style.top = y + "%";
      img.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      setTimeout(() => {
        hole.appendChild(img);
      }, i * 100);
    }
  }
}
