export class Snack {
  constructor(name, price, imgURL) {
    this.name = name
    this.price = price
    this.imgURL = imgURL
  }
  get Template() {
    return `
  <div class="card" style="width: 18rem; onclick="app.vendController.vend(${this.name})">
    <img src="${this.imgURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${this.name}</p>
      <p class="card-text">${this.price}</p>
    </div>
  </div>
`
  }
}