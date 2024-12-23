let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`_Successfully Opened Group !!_\n`)
}
handler.help = ['obuka', 'otutup']
handler.tags = ['owner']
handler.command = /^(obuka|oopen)$/i

handler.group = true
handler.rowner = true
handler.botAdmin = true

export default handler
