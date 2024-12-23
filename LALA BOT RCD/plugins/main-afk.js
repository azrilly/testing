var handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} Sekarang Coli, Dengan Alasan ${text ? ': ' + text : 'Yg Tidak Jelas'}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
