let handler = async (m, { conn }) => {
let hasil = Math.floor(Math.random() * 500000)
let time = global.db.data.users[m.sender].lastmiming + 14400000
  global.db.data.users[m.sender].exp += hasil
  m.reply(`Ini untuk mu tuan *${hasil} XP* 😘`)
  global.db.data.users[m.sender].lastmiming = new Date * 1
}
handler.customPrefix = /^(ayg|syg)$/i
handler.command = new RegExp
handler.rowner = true
export default handler

