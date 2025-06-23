// Rimuru-MD Premium
require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const process = require('process');
const os = require('os');
const speed = require('performance-now')
const { cfonts,cfont } = require('cfonts');
const { color } = require('./sistem-asuma/color');
//const cfonts = require('cfonts');
const checkDiskSpace = require('check-disk-space').default;
const FileType = require('file-type');
const { exec } = require('child_process');
//const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');
const NodeCache = require('node-cache');
let d = new Date
let gmt = new Date(0).getTime() - new Date('1 Januari 2023').getTime()
const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString('id', { weekday: 'long' })
const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, runtime, shorturl, formatp, getGroupAdmins } = require("./sistem-asuma/myfunc");
const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage, InteractiveMessage, } = require('@whiskeysockets/baileys');

const pairingCode = global.pairing_code || process.argv.includes('--pairing-code');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

/*const { cleaningSession } = require("./library/boostsession");
(async () => {
await setInterval(async () => {
await cleaningSession("./session")
}, 10000)
})*/
//p
const yangBacaHomo = [`
⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀⠀
⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀
⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀⠀⠀
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⣶⣶⣦⡀
⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣴⣶⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀⣠⣴⣶⣤⡀⠀
⠀⠀⠀⢰⣿⣿⣿⣿⠃⠈⢻⣿⣦⠀⠀⠀⠀⣸⣿⣿⣿⣿⣷⠀
⠀⠀⠀⠘⣿⣿⣿⡏⣴⣿⣷⣝⢿⣷⢀⠀⢀⣿⣿⣿⣿⡿⠋⠀
⠀⠀⠀⠀⢿⣿⣿⡇⢻⣿⣿⣿⣷⣶⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⣿⣇⢸⣿⣿⡟⠙⠛⠻⣿⣿⣿⣿⡇⠀⠀⠀⠀
⣴⣿⣿⣿⣿⣿⣿⣿⣠⣿⣿⡇⠀⠀⠀⠉⠛⣽⣿⣇⣀⣀⣀⠀
⠙⠻⠿⠿⠿⠿⠿⠟⠿⠿⠿⠇⠀⠀⠀⠀⠀⠻⠿⠿⠛⠛⠛⠃`,];
const imageAscii = yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];
const hohoe = [
 {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"kiw kiw member bau💍\",\"title\":\"welcome kak 🤝\",\"id\":\".wasing\"}" 
 },
 {
 "name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"kartu intro👀\",\"id\":\"123456789\",\"copy_code\":\"🧢KARTU INTRO🧢
- nama: 
- umur:
- kelas: 
- askot:
- agama:
- status:\"}`
}
]
//pler
const hohoe1 = [
 {
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: "bye🐣",
 id: `.ohayo`
 })
 },
 {
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: "member beban🎉🗿",
 id: `.ohayo`
 })
}
]

////
const DataBase = require('./source/database');
const database = new DataBase();
(async () => {
	const loadData = await database.read()
	if (loadData && Object.keys(loadData).length === 0) {
		global.db = {
			users: {},
			groups: {},
			database: {},
			settings : {}, 
			...(loadData || {}),
		}
		await database.write(global.db)
	} else {
		global.db = loadData
	}
	
	setInterval(async () => {
		if (global.db) await database.write(global.db)
	}, 3500)
})();

//================================================================================

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./library/function');

//================================================================================


async function startingBot() {
//await verifyPassword();
    const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version, isLatest } = await fetchLatestWaWebVersion()
	
	const Kyzo = WAConnection({
        printQRInTerminal: !pairingCode, 
        logger: pino({ level: "silent" }),
        auth: state,
        browser: ["Ubuntu","Chrome","22.04.2"],
        generateHighQualityLinkPreview: true,     
    	getMessage: async (key) => {
         if (store) {
           const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
           return msg?.message || undefined
         }
           return {
          conversation: 'WhatsApp Bot Azuraa-MDV2'
         }}		
	})
	
	
		if (pairingCode && !Kyzo.authState.creds.registered) {
		let phoneNumber;
	    phoneNumber = await question(chalk.black(chalk.red.bold(`\n ${global.botname2} \n`), chalk.white.bold(`\nPowered By ${global.namaOwner2}\n`), chalk.magenta.italic(`\n# Masukan Nomor WhatsApp,\nContoh Format Number +6285XXX\n`)))
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')		
			let code = await Kyzo.requestPairingCode(phoneNumber);
			code = code.match(/.{1,4}/g).join(" - ") || code
			console.log(chalk.magenta.italic(`your pairing code🫩:`), chalk.white.bold(code))
	}
//================================================================================
	
Kyzo.ev.on('creds.update', await saveCreds)
Kyzo.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await Kyzo.decodeJid(Kyzo.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Kyzo.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: global.reply, title: "乂 Panggilan Terdeteksi", body: "Powered By "+global.namabot, previewType: "PHOTO"}}}, {quoted: null})
//Kyzo.sendContact(ff.from, [owner], "Telfon Atau Vc = Block", sendcall)
await sleep(7000)
await Kyzo.updateBlockStatus(ff.from, "block")
}}
}})
//================================================================================

Kyzo.ev.on('connection.update', async (update) => {
		const { connection, lastDisconnect, receivedPendingNotifications } = update
		if (connection === 'close') {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.connectionLost) {
				console.log('Connection to Server Lost, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log('Connection closed, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log('Restart Required...');
				startingBot()
			} else if (reason === DisconnectReason.timedOut) {
				console.log('Connection Timed Out, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.badSession) {
				console.log('Delete Session and Scan again...');
				startingBot()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log('Close current Session first...');
				startingBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log('Scan again and Run...');
				exec('rm -rf ./session/*')
				process.exit(1)
			} else if (reason === DisconnectReason.Multidevicemismatch) {
				console.log('Scan again...');
				exec('rm -rf ./session/*')
				process.exit(0)
			} else {
				
Kyzo.end(`Unknown DisconnectReason : ${reason}|${connection}`)
			}
		}
		if (connection == 'open') { 
            //Kyzo.sendMessage(global.owner + "@s.whatsapp.net", {text: `${`bot aktif`.toString()}`})
Kyzo.relayMessage(global.owner + "@s.whatsapp.net", {
  "pollResultSnapshotMessage": {
    "name": `kyzoo Bot Lu aktif`,
    "pollVotes": [
      {
        "optionName": "user rimuru",
        "optionVoteCount": `${Object.keys(db.users).length}`
      },
        {
        "optionName": "total group",
        "optionVoteCount": `${Object.keys(db.groups).length}`
      },
      {
        "optionName": "pembuat script",
        "optionVoteCount": `99999`
      }
    ],
    "contextInfo": {
      "forwardingScore": 126,
    //  "mentionedJid": [m.sender],
      "isForwarded": true
    }
  }
}, {})
Kyzo.newsletterFollow("120363368222492263@newsletter")    
Kyzo.newsletterFollow("120363418957617576@newsletter")
Kyzo.newsletterFollow("120363419193147120@newsletter")
Kyzo.newsletterFollow("120363402102458053@newsletter")
Kyzo.newsletterFollow("120363416804484711@newsletter")
Kyzo.newsletterFollow("120363417709532959@newsletter")
Kyzo.newsletterFollow("120363398923179543@newsletter")
try {
//Kyzo.newsletterFollow(String.fromCharCode(49, 50, 48, 51, 54, 51, 50, 57, 55, 51, 49, 52, 52, 55, 48, 56, 52, 55, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114))
			await sleep(1999)
cfonts.say('asuma', {
    font: 'tiny',
    align: 'left',
    colors: ['green', 'white'],
    background: 'transparent',
    maxLength: 0,
    rawMode: false,
});
} catch (e) {
}
console.log(chalk.magenta.italic(`Rimuru-MD Connected✓\n\n`))
		} else if (receivedPendingNotifications == 'true') {
			console.log('Please wait About 1 Minute...')
		}
	});


await store.bind(Kyzo.ev)	
await Solving(Kyzo, store)
	
//================================================================================
	
Kyzo.ev.on('messages.upsert', async (message) => {
 await MessagesUpsert(Kyzo, message, store);
});

//================================================================================

Kyzo.ev.on('contacts.update', (update) => {
		for (let contact of update) {
			let id = 
Kyzo.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
		}
});

//================================================================================
	
Kyzo.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
	try {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ Group Notifikasi ]"
      }
    }
  }
  if (global.db.groups[id] && global.db.groups[id].welcome == true) {
  /*  const urlGrup = "https://chat.whatsapp.com/" + await Kyzo.groupInviteCode(id)*/
    const metadata = await Kyzo.groupMetadata(id)
    let teks
    for(let n of participants) {
      let profile;
      try {
        profile = await Kyzo.profilePictureUrl(n, 'image');
      } catch {
        profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
      }
      let imguser = await prepareWAMessageMedia({
        image: {
          url: profile
        }
      }, {
        upload: Kyzo.waUploadToServer
      })
      if(action == 'add') {
        teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
        let asu = await await Kyzo.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        
await Kyzo.sendMessage(id, {
  footer: `dari atmin dan member`,
  buttons: [
    {
      buttonId: `.intro`,
      buttonText: { displayText: `hallo member kntol @${Kyzo.getName(n)}` },
      type: 1
    },
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `welcome user news</>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: `hallo @${n.split('@')[0]} selamat datang di group ${metadata.subject}\n\n*Pembuat gc :* ${metadata.owner ? metadata.owner.split('@')[0] : 'Sudah keluar'}`,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [n], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: `haloo member ke ${metadata.participants.length}`
   }, 
    externalAdReply: {
      title: `${botname2} -`,
      body: `Status Group : ${metadata.announce == true ? "tertutup" : "terbuka"}`,
      thumbnailUrl: profile,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})//pler
      } else if(action == 'remove') {
        teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
        let asu = /*await Kyzo.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })*/
Kyzo.sendButton(id, hohoe1, qtext,{
 footer: `${teks}`})

Kyzo.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Leaving To Group",
      "description": `Selamat tinggal Anj @${Kyzo.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "6289666747744@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      } else if(action == 'promote') {
        teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await Kyzo.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        await Kyzo.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Promote Member",
      "description": `Promote member @${Kyzo.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "6289666747744@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      } else if(action == 'demote') {
        teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await Kyzo.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        await Kyzo.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Demote Member",
      "description": `Demote member @${Kyzo.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "6289666747744@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      }
    }
  }
} catch (e) {}
});

//================================================================================
	
Kyzo.ev.on('groups.update', async (update) => {
		try {
		const data = update[0]
		const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"
      }
    }
  }
		if (data?.inviteCode) {      
		let botNumber = Kyzo.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
  await Kyzo.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mereset* link grup`, mentions: [participant]}, {quoted: qtext})
		}
		
		if (data?.desc) {
		let botNumber = Kyzo.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
		await Kyzo.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *memperbarui* deskripsi grup`, mentions: [participant]}, {quoted: qtext})
		}
		
		if (data?.subject) {
		let botNumber = Kyzo.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
		await Kyzo.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mengganti* nama grup`, mentions: [participant]}, {quoted: qtext})
		}		
		
		
		} catch (e) {
		}
});

//================================================================================
Kyzo.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await Kyzo.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
}
}
catch (e) {
if (e.json) throw e.json
}
}
let opt = {
filename
}
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '',
mimetype = type.mime,
convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime))(
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'
delete options.asSticker
delete options.asLocation
delete options.asVideo
delete options.asDocument
delete options.asImage
let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype }
let m
try {
m = await Kyzo.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
//console.error(e)
m = null
} finally {
if (!m) m = await Kyzo.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
file = null
return m
}
}
Kyzo.sendText = (jid, text, quoted = '', options) => Kyzo.sendMessage(jid, { text: text, ...options }, { quoted })
return Kyzo

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});