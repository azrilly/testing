import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`6285752235008`, `${await conn.getName(6285752235008+'@s.whatsapp.net')}`, `💌 Developer`, `ᴀᴄʜɪᴇᴠᴇᴍᴇɴᴛ ᴄᴀɴɴᴏᴛ ʙᴇ ᴀᴄʜɪᴇᴠᴇᴅ ᴡɪᴛʜᴏᴜᴛ ᴇɴᴛʜᴜꜱɪᴀꜱᴍ`, `lalabot5008@gmail.com`, `🇮🇩 Indonesia - Kalimantan Barat`, `https://www.instagram.com/yanz_5008`, `👤 ᴅᴇᴠᴇʟᴏᴘᴇʀ / ᴄʀᴇᴀᴛᴏʀ`],
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Owner Bot `, `ɴᴏᴛ ғᴀᴍᴏᴜs ᴊᴜsᴛ ᴀʟᴏɴᴇ ʙᴏʏ`, `Dick`, `🇮🇩 Indonesia`, `📍 i don't know`, `🙍🏻 ᴏᴡɴᴇʀ ʙᴏᴛ`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`, `ɴᴏᴛʜɪɴɢ`, `🇯🇵 Jepang`, `📍 i don't know`, `ʜᴀɴʏᴀ ʙᴏᴛ ʙɪᴀsᴀ ʏᴀɴɢ ᴋᴀᴅᴀɴɢ sᴜᴋᴀ ᴇʀᴏʀ ☺`]
  ], fkontak)
  await m.reply(`ᴍʏ ᴏᴡɴᴇʀ ᴅᴏɴᴛ sᴘᴀᴍ ᴏʀ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʙʟᴏᴄᴋᴇᴅ`)
  } 
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(developer|owner|creator)$/i

export default handler