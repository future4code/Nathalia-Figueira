# Exercício sobre Criptografia e User Roles

Exercício 1:   
*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
Round é o tempo de delay para inserção de senha e salt é uma string aleatória gerada com o intuito de encriptografar a senha de modo que seja mais dificil o acesso a mesma por terceiros. O valor que eu utilizei foi 12 como indicado pelo professor Matheus. Utilizaei 12, pois é um time preestabelecido.


*b. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

FEITO

*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

FEITO

Exercício 2
Na aula de ontem, implementamos os endpoints de *signup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso. 

*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
Primeiro devemos modificar o cadastro, pois é a ordem primeiro de criação de usuário e depois o login de usuário, assim saberemos se estará tudo funcionando corretamente.

*b. Faça a alteração do primeiro endpoint*

*c. Faça a alteração do segundo endpoint*

*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*
