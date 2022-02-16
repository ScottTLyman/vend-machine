import { state } from "../AppState.js"
import { vendService } from "../Services/VendService.js"


function _drawTotal() {
  console.log('[VendController]: total')
  let total = 0

}
function _drawSnacks() {
  console.log('[VendController]: snacks')
  let snacks = state.snacks
  let template = ''
  snacks.forEach(s => template += s.Template)
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
  vend(snackName) {
    vendService.vend(snackName)
    console.log('[VendController]: vending')
  }
}
