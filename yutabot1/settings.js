//base by DGXeon
//recode by Zrilapecu 
//YouTube: notfound404


const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "none!" //ur yt chanel name
global.socialm = "IG: azrillikethis" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'Yuta Multi Device' //ur bot name
global.ownernumber = '6285157457662' //ur owner number
global.ownername = '©Yuta' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029Vawd0Fi3GJOytS8ilI1C" //"https://whatsapp.com/channel/0029Vawd0Fi3GJOytS8ilI1C"
global.wagc = "https://whatsapp.com/channel/0029Vawd0Fi3GJOytS8ilI1C" //"https://whatsapp.com/channel/0029Vawd0Fi3GJOytS8ilI1C"
global.themeemoji = '🪀'
global.wm = "NatV"
global.botscript = 'https://whatsapp.com/channel/0029Vawd0Fi3GJOytS8ilI1C' //'https://whatsapp.com/channel/0029Vawd0Fi3GJOytS8ilI1C' //script link
global.packname = "yutaBOT"
global.author = "Yuta - Package"
global.creator = "6285157457662@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285157457662"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})