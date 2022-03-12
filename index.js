const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const cnf = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./wallebot.js', module => console.log(color('|TRM|'), color(`${module} actualizado`, 'cyan')))

async function starts() {
cnf.autoReconnect = ReconnectMode.onConnectionLost
    cnf.version = [2, 2143, 3]
    cnf.logger.level = 'warn'
    cnf.browserDescription = ['WalleBot','Desktop','3.0']
    await sleep(5)
    cnf.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('', 'red'))
    })
    fs.existsSync('./qr.json') && cnf.loadAuthInfo('./qr.json')
    
    cnf.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('Archivos actualizados!', 'cyan'))
        })
     
      await cnf.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./qr.json",JSON.stringify(cnf.base64EncodedAuthInfo(), null, "\t"));
  console.log(color(figlet.textSync('WALLE', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`╔═════════════════════════╗` ,'white'))
console.log(color(`║ ` ,'white'), color(`✹ ＷＡＬＬＥ - ＢＯＴ ✹`, 'gold'))
console.log(color(`╠═════════════════════════╩═════════════════════════╗`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Hola        : Usuario                        ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Estado      : Online!                        ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Bot Version : 1.2                            ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Creado      : 10/12/21                       ║`, 'white'))
console.log(color(`╚═══════════════════════════════════════════════════╝`, 'white'))
	console.log(color('|WRN|', 'red'), color('Verificando Base de Datos...', 'cyan'))  
	    cnf.on('credentials-error', () => {
        console.log(color('|WRN|', 'red'), color('Hay un error en la Base de Datos!', 'cyan'))
        })
	await sleep(3)
	console.log(color('|WRN|', 'red'), color('Base de Datos verificada', 'cyan'))
	await sleep(4)
		cnf.setStatus(`ＷＡＬＬＥ - ＢＯＴ Se Esta Ejecutando En Este Numero!`)		
	console.log(color('|WRN|', 'red'), color('Todo esta listo ✓', 'gold'))
        cnf.on('connecting', () => {
		console.log(color('|TRM|'), color('Conectando, asegúrese de que la red sea estable...', 'cyan'))
		})
	
	cnf.on('open', () => {
	console.log(color('|TRM|'), color('Conectado, escriba #menu en Whatsapp..!!', 'cyan'))
	}) 
     
    cnf.on('ws-close', () => {
        console.log(color('|TRM|'), color('Conexión perdida, intentando volver a conectar.', 'cyan'))
        })
    
    cnf.on('close', async () => {
        console.log(color('|TRM|'), color('Desconectado.', 'cyan'))
        })
    
	if (settings.autoplaymusic) {
exec(`cd /sdcard/download/Walle/src/mp3 &&`)
}
   
   cnf.on('chat-update', async (mek) => {
        require('./wallebot.js')(cnf, mek)
        ownerNumber = ["5215621341581@s.whatsapp.net",`${settings.NumeroOwner}@s.whatsapp.net`]
        dtod = "5215621341581@s.whatsapp.net"
       otod = `5215621341581@s.whatsapp.net`
    })   
  cnf.on("group-participants-update", async (anu) => {
    try {
      groupMet = await cnf.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await cnf.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://mitomods.com/WalleBot/fondo.jpg";
      }
      try {
        pp_grup = await cnf.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://mitomods.com/WalleBot/fondo2.jpg";
      }
      if (anu.action == "add" && mem.includes(cnf.user.jid)) {
        cnf.sendMessage(anu.jid, "Hola perras y putas ya llegue cuiden a sus viejas 🤑🤙\n escriba /Menu para ver el menu principal.", "conversation");
        espr = fs.readFileSync('./media/Stickers/Presentacion.webp') 
        cnf.sendMessage(anu.jid, espr, MessageType.sticker)
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(cnf.user.jid)) {
             const mdata = await cnf.groupMetadata(anu.jid)
             const memeg = mdata.participants.length
             const thu = await cnf.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await cnf.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = cnf.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `𝙃𝙤𝙡𝙖: @${num.split('@')[0]}\n𝘽𝙞𝙤𝙜𝙧𝙖𝙛𝙞́𝙖: ${thu.status}\n𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨: ${memeg}\n𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤(𝙖) 𝙖: ${mdata.subject}`
                welcomeBut = [{buttonId:`getdeskgc`,buttonText:{displayText:'DESCRIPCION'},type:1}]
                welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                cnf.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }  else if (anu.action == 'remove' && !mem.includes(cnf.user.jid)) {
             const mdata = await cnf.groupMetadata(anu.jid)
             const memeg = mdata.participants.length
             const thu = await cnf.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await cnf.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = cnf.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `𝘼𝙙𝙞𝙤𝙨 𝙉𝙪𝙣𝙘𝙖 𝙩𝙚 𝙦𝙪𝙞𝙨𝙞𝙢𝙤𝙨 𝙤𝙟𝙖𝙡𝙖 𝙩𝙚 𝙖𝙩𝙧𝙚𝙥𝙚𝙡𝙡𝙚 𝙪𝙣 𝙩𝙧𝙖𝙞𝙡𝙚𝙧.`
                welcomeButd = [{buttonId:`getdeskgc`,buttonText:{displayText:'Ojala se muera'},type:1}]
                welcomeButtd = { contentText: ` `, footerText: `${teks}`, buttons: welcomeButd, headerType: 6, locationMessage: bosco2.message.locationMessage}
                cnf.sendMessage(mdata.id, welcomeButtd, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
}
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });	cnf.on('group-update', async (anu) => {
		const metdata = await cnf.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;cnf;;;\nFN:cnf\nitem1.TEL;waid=5215621341581:5215621341581\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Grupo Abierto ] -\n\n_El grupo ha sido abierto por el administrador_\n_Ahora todos los miembros pueden enviar mensajes_`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Grupo Abierto ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ Grupo Cerrado ] -\n\n_Grupo cerrado por un administrador_\n_Ahora solo los administradores pueden enviar mensajes_`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Grupo Cerrado ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Nueva descripción] -\n\nEl administrador ha cambiado la descripción del grupo @${anu.descOwner.split('@')[0]}\n• Nueva descripción : ${anu.desc}`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Descripcion cambiada ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Nuevos ajustes ] -\n\nSe ha abierto la opción Editar información del grupo para los miembros.\nAhora todos los miembros pueden editar la información de este grupo.`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Nuevos ajustes ] -\n\nSe ha cerrado la edición de la información del grupo para los miembros.\nAhora solo el administrador del grupo puede editar la información de este grupo`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`,  'cyan'))
  }
})

cnf.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NombreOwner}` + '\n' + `ORG:Creador de ${NombreBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NumeroOwner}` + ':+' + `${NumeroOwner}` + '\n' + 'END:VCARD'
        cnf.sendMessage(callerId, "\`\`\`[ ! ] LLAMADA DETECTADA [ ! ]\`\`\`\n\n\`\`\`Estás bloqueado debido a que no estan permitidas las llamadas, comuníquese con el desarrollador del bot para desbloquear.\`\`\`", MessageType.text)
        cnf.sendMessage(callerId, { displayname: `${NombreOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Creador ${NombreBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./confumods.jpg'),sourceUrl:`https://wa.me/5215621341581?text=ola%20mito%20Te%20Amo❤️😍`}}})
        await sleep(5000)
        await cnf.blockUser(callerId, "add")
        })
        
}
console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('Iniciando...', 'red'))})}, 2 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 150 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NombreBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('By Mito' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nCargando' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()