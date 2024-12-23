//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('✅ Kumpulan pesan perpisahan')
  } else throw `✳️ Masukkan pesan\n@user (menyebutkan)`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
