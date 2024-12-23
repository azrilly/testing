
let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then(async data => {
		let txt = `*≡ Daftar blokir*\n\n*Total :* ${data.length}\n\n┌─⊷\n`
		for (let i of data) {
			txt += `▢ @${i.split("@")[0]}\n`
		}
		txt += "└───────────"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'Tidak ada nomor yang diblokir'
	})
}

handler.help = ['blocklist']
handler.tags = ['owner']
handler.command = ['blocklist', 'listblock'] 
handler.rowner = true

export default handler
