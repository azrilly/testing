import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
 • SEWA BOT MASUK GRUP :
   - 1 Minggu : 5k
   - 1 Bulan : 10K
   - Permanen : 25K

• Jangan spam BOT (spam = ban permanen)  
 
 Via:
   • Pulsa : [085752235008]
   • Gopay: [085752235008]
   • Spay: [085752235008]
   • Dana: [085180802234]

 Jika Minat Hubungi Owner:
              Wa.me/6285752235008 (Owner)
`.trim())
    
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command =  /(sewabot|order|sewa)/i
handler.register = false
handler.premium = false

export default handler