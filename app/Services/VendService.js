let total = 0
class VendService {
  addCoin() {
    total += .25
    console.log('added coins')
  }
}
export const vendService = new VendService()