# Gerador de  QR-codes para e-commerces

Aqui, desenvolvi um gerador de QR-codes e também um gerador de senhas usando NODE.
A ideia geral é de aplciar conceitos de lógica de programação além de estruturar o código da melhor maeira possível para que possa ser reaproveitado.

## REGRAS:

- [x] A aplicação é executada no terminal onde serão inputados os dados.

- [x] O usuário poderá escolher entre criar  QR code ou criar senhas


---
primeiro criei o index
em seguida instalo a bliblioteca `prompt`
depois criei o prompt-main.js com as regras do schema fornecidos pela doc do `prompt`

após isso, no index principal, crio as regras de execução para chamar o prompt e executar as regras já configuradas.
depois baixei o a biblioteca `chalk` para estilizar o retorno, e utilizo isso no arquivo prompt-main préviamente configurado.

criando qr-code
baixo a biblioteca `QRCode-terminal`
