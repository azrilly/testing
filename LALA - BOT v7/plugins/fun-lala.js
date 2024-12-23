let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Lagi Ngapain Kamu?`); 
    conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key }})
 //let ouh = await fetch(`https://widipe.com/prompt/gpt?prompt=Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Hatsune Miku, dan kamu adalah karakter Idol dari jepang. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat seperti cewek tsundere&text=${text}`)
 //let ouh = await fetch(`https://api.betabotz.org/api/search/c-ai?prompt=hai%20ai%20siapa%20namamu?&char=HuTao&apikey=8cZTmd8U`)
 //let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=nobara`)
 let ouh = await fetch(`https://api.ryzendesu.vip/api/ai/chatgpt?text=${text}`)
  let gyh = await ouh.json()
  m.reply (`${gyh.result}`)
  }
handler.help = ['lala']
handler.tags = ['fun']
handler.command = /^(lala)$/i
handler.premium = false

export default handler;