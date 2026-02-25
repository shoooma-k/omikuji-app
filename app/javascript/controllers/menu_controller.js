import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  toggle() {
    const navToggle = document.getElementById("nav-toggle")
    const menuContainer = document.getElementById("menu-container")
    if (!navToggle || !menuContainer) return

    navToggle.classList.toggle("is-open")
    menuContainer.classList.toggle("is-open")
  }
}