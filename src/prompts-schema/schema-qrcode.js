import chalk from "chalk"

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE")
  },
  {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo de QRCode (1 - NORMAL ou (2 - TERMINAL"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true
  },
  {
    name: "qrcode",
    message: chalk.yellow.bold('Name must be only letters, spaces, or dashes'),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true
  }
]

export default promptSchemaQRCode