import { performPurchase, User } from "../src";

//b*. Faça um teste com um usuário com o saldo igual ao valor de compra*


test("saldo igual ao valor da compra", () => {
  const user: User = {
    name: "Sara",
    balance: 250
  }
  const result = performPurchase (user,250)
  expect (result).toEqual ({
    name:"Sara",
    balance: 0,
  })
})