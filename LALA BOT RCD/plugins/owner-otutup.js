let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.groupSettingUpdate(m.chat, 'announcement')
m.reply(`_Successfully Closed The Group !!_\n`)
}
handler.command = /^(otutup|oclose)$/i

handler.group = true
handler.owner = true
handler.botAdmin = true

export default handler
