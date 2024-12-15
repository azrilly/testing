const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6283119845366'] //ur owner number
global.ownernomer = "6283119845366" //ur owner number2
global.ownername = "🩸⃟༑⌁⃰⃰𝐅𝐚𝐚 𝐎𝐟𝐜梨🐉" //DO NOT CHANGE
global.grup = "-" //ur group link
global.gcpetinggi = "-"
global.imageurl = "https://pomf2.lain.la/f/cjdc9cvv.jpg"
global.isLink = "120363297700623532@newsletter"
global.nameCreator = "🩸⃟༑⌁⃰⃰𝐅𝐚𝐚 𝐎𝐟𝐜梨🐉" //DO NOT CHANGE
global.namabot = "⏤͟͟͞͞𝐅𝐚𝐚 𝐎𝐟𝐜 𝐕.𝟕.𝟎梨🐉メ"
global.yt = "-" //ur website link
global.socialm = "-" //ur github or insta name
global.location = "Indonesia" //ur location

//payment
global.dana = "083119845366"
global.ovo = "-"
global.gopay = "083119845366"
global.saweria = "-"

//date
        let d = new Date(new Date + 3600000)
        let locale = 'id'
        let weton = ['Pahing',
            'Pon',
            'Wage',
            'Kliwon',
            'Legi'][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })


//new
global.ownergc = "-"
global.botname = "⏤͟͟͞͞𝐅𝐚𝐚 𝐎𝐟𝐜 𝐕.𝟕.𝟎梨🐉メ"
global.ownerNumber = ["6283119845366@s.whatsapp.net"]
global.version = "𝐕.𝟕.𝟎"
global.ownerweb = "-"
global.themeemoji = '🪀'
global.wm = "⏤͟͟͞͞𝐅𝐚𝐚 𝐎𝐟𝐜 𝐕.𝟕.𝟎梨🐉メ"
global.packname = "BOT BY 🩸⃟༑⌁⃰⃰𝐅𝐚𝐚 𝐎𝐟𝐜梨🐉"
global.author = "MADE ON " + `${date}`
global.prefa = ['','!','.','#','&']
global.sessionName = '🩸⃟༑⌁⃰⃰𝐅𝐚𝐚 𝐎𝐟𝐜梨🐉'
global.tekspushkon = ''
global.keyopenai ='iigf'

//SETTING PANEL NYA FAA OFC
global.domain2 = '-' // Isi Domain Lu
global.apikey2 = '-' // Isi Apikey Plta Lu
global.capikey2 = '-' // Isi Apikey Pltc Lu
global.eggsnya2 = '15' // id eggs yang dipake
global.location2 = '1' // id location

global.domain = '-'
global.apikey = '-' //PLTA
global.capikey = '-' //PLTC
global.eggsnya = '15'
global.location = '1'


global.limitawal = {
    premium: "Infinity",
    free: 10
}

//media target
global.thumbmenu ='https://pomf2.lain.la/f/cjdc9cvv.jpg'
global.imageurl ="https://pomf2.lain.la/f/cjdc9cvv.jpg"
global.isLink ="https://whatsapp.com/channel/0029VaZRiKK9WtCDBmbSKn0u" //GA USAH DI RUBAH NANTI ERORR
global.thumb = { url: 'https://pomf2.lain.la/f/cjdc9cvv.jpg' }
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

global.listharga = `𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗣𝗔𝗡𝗘𝗟 𝗥𝗨𝗡 𝗕𝗢T *BY FAA OFC* 🔥

𝗣𝗔𝗞𝗘𝗧 𝗠𝗨𝗥𝗔𝗛 :
1GB RAM 30% CPU : 1K
2GB RAM 50%CPU : 2K
3GB RAM 80% CPU : 3K
4GB RAM 100% CPU : 4K
5GB RAM 120% CPU: 5K
6GB RAM 150% CPU: 6K
7GB RAM 180% CPU : 7K
8GB RAM 200% CPU: 8K
9GB RAM 230% CPU : 9K
UNLI RAM UNLI CPU : ~10K~ 5K

𝗣𝗔𝗞𝗘𝗧 𝗟𝗔𝗜𝗡𝗡𝗬𝗔 :
ADMIN PANEL : 20K
PT ADMIN PANEL : 25K
OWN PT PANEL : 30K
`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
