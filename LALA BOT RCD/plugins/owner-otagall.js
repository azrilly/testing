let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ Group : *${groupMetadata.subject}*\n▢ Member : *${participants.length}*${text ? `\n▢ Mensaje : ${text}\n` : ''}\n┌─⊷ *MENTIONS* ↓\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ Lala ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
}

handler.help = ['otagall']
handler.tags = ['owner']
handler.command = ['otagall']

handler.group = true
handler.owner = true

export default handler
