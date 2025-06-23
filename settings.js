//Sc Rimuru-MD
//Script by Kyzo
//fitur 100% work
//buy no enc chat 628993937289

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// Settings Bot 
global.bott = '6285641359069'
global.owner = '6289666747744'
global.versi = version
global.footer = '2025';
global.namaOwner = "Prszxxx"
global.namaOwner2 = "Prszxxx"
global.packname = 'AzuraaV2'
global.botname = 'AzuraaMDV2'
global.botname2 = 'AzuraaMDV2'

global.pasword = "AzuraaMDV2"
global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah
global.autodetect = false //auto detect command salah
global.onlygc = false // fungsi hanya untuk group chat
global.onlypc = false // fungsi hanya untuk private chat
global.game = true
// Settings Link / Tautan
global.autotyping = true
global.autoread = true
global.kirsan = false
global.antiBot = false
global.antispam = false
global.anticall = false
global.AutoaiPrivat = false
global.linkOwner = "https://wa.me/+6289666747744"
global.linkGrup = "https://files.catbox.moe/u4r0x2.jpg"
global.menuStore = "https://files.catbox.moe/y1bvyl.png"
global.pathimg = fs.readFileSync('./source/media/menu.jpg');
global.inutt = fs.readFileSync('./source/media/menu.jpg');
global.oleng = fs.readFileSync('./source/media/menu.jpg');
// Settings Channel / Saluran
global.linkSaluran = "https://chat.whatsapp.com/Bdbb1XeYrFKJ19LxYTuR18"
global.idSaluran = "120363368222492263@newsletter"
global.idch = "120363368222492263@newsletter"
global.namaSaluran = "AzuraaMD"
global.idgc = "12036340690228044@g.us"


global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"
//hiasann
global.sum = ['⛶','❏','⫹⫺']
global.ki = "\`"
global.ka = "\`"
global.emojiw = "🐣"
// Settings Api Digital Ocean
global.apiDigitalOcean = "-"

// Settings Api Digital Ocean
global.apiSimpelBot = "new2025"


// Settings All Payment
global.dana = "Kosong"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak Tersedia"

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/sywv4p.jpg", 
reply: "https://files.catbox.moe/y1bvyl.png", 
logo: "https://files.catbox.moe/y1bvyl.png", 
dana: "https://img100.pixhost.to/images/667/540082364_skyzopedia.jpg", 
ovo: "https://img100.pixhost.to/images/667/540082774_skyzopedia.jpg", 
gopay: "https://img100.pixhost.to/images/667/540083275_skyzopedia.jpg", 
qris: "https://ar-hosting.pages.dev/1740941887769.jpg"
}
global.multiplier = 38 // The higher, The harder levelup
// limit
global.limit = {
	free: 50,
	premium: 9999, 
	vip: 'VIP' 
};
// Message Command 
global.mess = {
owner: "\nғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ\n",
admin: "\nғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ\n",
botAdmin: "\nʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ\n",
group: "\nғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ɢʀᴏᴜᴘ\n",
private: "\nғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ\n",
prem: "\nғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ\n",
wait: 'ʟᴏᴀᴅɪɴɢ...',
error: '\nᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ ᴘᴀᴅᴀ ғɪᴛᴜʀ ini\n',
done: 'ᴅᴏɴᴇ'
}
// SETTING GAME
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 3000 // Balance maksimal
global.limit = 15 // Set limit
global.limitawal = {
premium: "Infinity",
free: 100,
monayawal: 100
}

// SETTING RPG
global.rpg = { // Bebas ubah value/angka
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
// DATABASE GAME
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})