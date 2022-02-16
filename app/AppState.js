import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class State {
  snacks = [new Snack("Hershey's", 2.00, 'https://www.sweetservices.com/images/P/hershey%20bar.jpg'), new Snack("Snickers", 2.50, 'https://expatspantry.com/wp-content/uploads/2018/02/Snickers.jpg'), new Snack("Sweet Tarts", 2.00, 'https://www.hereforagooddeal.com/wp-content/uploads/2017/11/TART.jpg'), new Snack("Airheads", 1.50, 'https://images.albertsons-media.com/is/image/ABS/960479347?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available')]

}
export const state = new State()
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
}
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
