const da = [
  'https://tinyurl.com/yswe9tpc',
  'https://tinyurl.com/ytl2nszs',
  'https://tinyurl.com/ytvhzblm',
  'https://tinyurl.com/ytyob7dw',
  'https://tinyurl.com/yvk69r8g',
  'https://tinyurl.com/yufpw366'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, pickRandom(da), 'dado.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['sticker']
handler.command = ['dadu'] 
handler.register = true
export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}