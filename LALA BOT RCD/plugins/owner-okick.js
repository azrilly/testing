
let handler = async (m, { conn, participants, usedPrefix, command }) => {
	
let kickte = `✳️ Penggunaan comamdo yang benar\n*${usedPrefix + command}* @tag`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`✅ Berhasil Kick`) 

}

handler.help = ['okick']
handler.tags = ['owner']
handler.command = ['okick', 'ok'] 

handler.group = true
handler.rowner = true
handler.botAdmin = true

export default handler
