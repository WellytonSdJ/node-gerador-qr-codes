import prompt from "prompt";
import promptMain from './prompts/prompt-main.js'

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

(async function main () {
  prompt.get(promptMain, async (err, choose)  => {
    if(choose.select == 1) await createQRCode()
    if(choose.select == 2) await createPassword()
  })
})()