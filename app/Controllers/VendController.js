import { state } from "../AppState.js"
import { vendService } from "../Services/VendService.js"


function _drawTotal() {
  console.log('[VendController]: total')
  vendService.total
  document.getElementById('total').innerHTML = total
  console.log(total)
}
function _drawSnacks() {
  console.log('[VendController]: snacks')
  let snacks = state.snacks
  let template = ''
  snacks.forEach(s => template += `<li> ${s.name} | ${s.price} </li>`)
  document.getElementById('snacks').innerHTML = template
}
export class VendController {
  constructor() {
    _drawTotal()
    _drawSnacks()
  }
  addCoin() {
    vendService.addCoin()
    console.log('[VendController]: added coins')
  }
}
