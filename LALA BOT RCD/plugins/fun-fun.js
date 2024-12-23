import fs from 'fs'
let handler = async (m, { conn, args, participants, text, usedPrefix, command }) => {
  switch (command) {
case 'bego':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pintar':
case 'gay':
case 'lesby':
case 'monyet':
case 'sange':
case 'wibu':
case 'pantek': {
let member = participants.map(u => u.id).filter(v => v !== conn.user.jid)
let org = member[Math.floor(Math.random() * member.length)];    
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
  conn.sendMessage(m.chat, {
text: `ᴀɴᴀᴋ ${command} ᴅɪsɪɴɪ adalah\n@${org.split('@')[0]}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'ᴀɢᴀᴋ ʟᴀᴇɴ',
body: 'L A L A  M U L T I D E V I C E',
thumbnailUrl: pp, 
sourceUrl: `https://www.instagram.com/p/CLPWKRYgkEW/?igsh=MW9xa2xjZTBjNWlxdw==`, 
mediaType: 1,
renderLargerThumbnail: true, 
mentions: [org] 
}}}, { quoted: fkontak})
      break;
    }
  }
};
handler.tags = ['fun']
handler.help = handler.command = ['bego',
'janda',
'perawan',
'babi',
'tolol',
'pintar',
'gay',
'lesby',
'monyet',
'sange',
'wibu',
'pantek',]
handler.group = true
handler.limit = true
export default handler;