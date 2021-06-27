import {performPurchase,User } from "../src/index"

//*a. Faça um teste com um usuário com o saldo maior do que o valor de compra*
 
test("Teste saldo maior que o valor", () => {
	const user: User = {
		name: "Ana",
		balance: 300
	}
	const result = performPurchase(user, 100)
	expect(result).toEqual({
		name: "Ana",
		balance: 200
	})
})