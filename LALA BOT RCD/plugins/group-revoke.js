
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('\n✅ Tautan grup telah berhasil disetel ulang\n')
  //m.reply('✅ Tautan grup telah berhasil disetel ulang\n\n📌 Tautan baru:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
