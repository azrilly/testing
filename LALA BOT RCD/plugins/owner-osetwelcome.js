//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Pesan pembuka telah dikonfigurasi')
  } else throw `✳️ Masukkan pesan Selamat Datang\n\n@user (menyebutkan)\n@group (Nama Grup)\n@desc (Deskripsi Grup)`
}
handler.help = ['osetwelcome']
handler.tags = ['owner']
handler.command = ['osetwelcome'] 

handler.group = true
handler.rowner = true

export default handler
