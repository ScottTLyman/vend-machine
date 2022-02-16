let total = 0
class VendService {
  addCoin() {
    total += .25
    console.log('added coins')
    return total
  }
}
export const vendService = new VendService()