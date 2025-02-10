async function allowedCharacters(){
  let allowed = []

  if (process.env.UPPERCASE_LETTERS === "true") {
    allowed.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }

  if(process.env.LOWERCASE_LETTERS) {
    allowed.push(..."abcdefghijklmnopqrstuvwxyz")
  }

  if(process.env.NUMBERS === "true") {
    allowed.push(..."0123456789")
  }

  if(process.env.SPECIAL_CHARACTERS === "true") {
    allowed.push(..."0123456789")
  }

  return allowed
}

async function handle() {
  let characters = [] // inicia vazio e depois será checado no .env o que será aceito ou não
  let password = ""

  const passwordLength = process.env.PASSWORD_LENGTH
  characters = await allowedCharacters()

  

  for(let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length) // sorteia valor aleatório
    password += characters[index]
  }

  return password
}

export default handle