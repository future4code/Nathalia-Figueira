import { performPurchase, User } from "../src";

//c*. Faça um teste com um usuário com o saldo menor do que o valor de compra*

test(" Saldo menor que o valor", () => {
  const user : User = {
    name: "Elena",
    balance: 100,
  }
  const result = performPurchase(user, 200)
  expect(result).toEqual({
    name: "Elena",
    balance: -100
  })
})