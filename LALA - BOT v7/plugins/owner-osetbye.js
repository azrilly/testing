//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('✅ Kumpulan pesan perpisahan')
  } else throw `✳️ Masukkan pesan\n@user (menyebutkan)`
}
handler.help = ['osetbye']
handler.tags = ['owner']
handler.command = ['osetbye'] 

handler.group = true
handler.rowner = true

export default handler
