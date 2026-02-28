import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { image: String, url: String }
  
  connect() {
    this.spawn()  }

  add() {
    this.spawn()
  }

  spawn() {
    const omikujiContainer = document.getElementById('omikuji-container');
    const addOmikuji = document.getElementById("add-omikuji");
    addOmikuji.classList.add("is-visible");
    

    for (let i = 0; i < 30; i++) {
      const link = document.createElement("a")
      link.href = this.urlValue

      const img = document.createElement("img");
      img.src = this.imageValue

      let angle = Math.random() * 40 - 20;
      img.style.transform = `rotate(${angle}deg)`;
      img.classList.add("open-omikuji");

      link.appendChild(img)

      setTimeout(() => {
        omikujiContainer.appendChild(link);
        if (i === 29) {
          addOmikuji.classList.remove("is-visible");
        }
      }, i * 100);
    }
  }

  
}