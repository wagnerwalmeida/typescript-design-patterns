import { ApplyDiscountContext } from './'

const context = new ApplyDiscountContext()

context.addItem(2_001)

const [discountValue, shippingValue, totalOrder] = [
  context.getDiscountValue(),
  context.getShippingValue(),
  context.getTotalOrder(),
]

const finalValue = totalOrder - discountValue + shippingValue

console.log({
  totalOrder,
  discountValue,
  shippingValue,
  finalValue,
})
