process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import { createRequire } from 'module';
import _0x73d3dd, { join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { platform } from 'process';
global.__filename = function filename(_0x5c5c1e = import.meta.url, _0x2f2731 = platform !== "win32") {
  return _0x2f2731 ? /file:\/\/\//.test(_0x5c5c1e) ? fileURLToPath(_0x5c5c1e) : _0x5c5c1e : pathToFileURL(_0x5c5c1e).toString();
};
global.__dirname = function dirname(_0x29441e) {
  return _0x73d3dd.dirname(global.__filename(_0x29441e, true));
};
global.__require = function require(_0x3df08b = import.meta.url) {
  return createRequire(_0x3df08b);
};
import 'ws';
import { readdirSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x5d9d1f from 'yargs';
import { spawn } from 'child_process';
import _0x493b28 from 'lodash';
import 'console';
import _0x4cff63 from 'cfonts';
import 'node-cache';
import _0x4a14ac from 'syntax-error';
import * as _0x8e3255 from 'os';
import _0x3ec184 from 'chalk';
import { format } from 'util';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import _0xf32053 from 'pino';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
const {
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = await import("@adiwajshing/baileys");
const Device = _0x8e3255.platform() === "win32" ? "Windows" : _0x8e3255.platform() === "darwin" ? "MacOS" : "Linux";
const {
  chain
} = _0x493b28;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
global.API = (_0x57f1c0, _0x4559b9 = '/', _0x57253b = {}, _0x22332b) => (_0x57f1c0 in global.APIs ? global.APIs[_0x57f1c0] : _0x57f1c0) + _0x4559b9 + (_0x57253b || _0x22332b ? '?' + new URLSearchParams(Object.entries({
  ..._0x57253b,
  ...(_0x22332b ? {
    [_0x22332b]: global.APIKeys[_0x57f1c0 in global.APIs ? global.APIs[_0x57f1c0] : _0x57f1c0]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x5d9d1f(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts.prefix || "â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â�?:;?&.\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? opts.mongodbv2 ? new mongoDBV2(opts.db) : new mongoDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + 'database.json'));
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x3e915b => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x3e915b(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'banned': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFile = '' + (opts._[0x0] || "sessions");
console.log("Load Kondom from " + authFile);
const {
  state,
  saveCreds
} = await useMultiFileAuthState(global.authFile);
const {
  version,
  isLatest
} = await fetchLatestBaileysVersion();
console.log("Memakai Kondom v" + version.join('.') + ", isLatest: " + isLatest);
const pairingCode = process.argv.includes("--pairing");
const connectionOptions = {
  'version': version,
  'logger': _0xf32053({
    'level': 'silent'
  }),
  'printQRInTerminal': !pairingCode,
  'browser': [Device, 'Chrome', '20.0.04'],
  'generateHighQualityLinkPreview': true,
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0xf32053().child({
      'level': "silent",
      'stream': "store"
    }))
  },
  'patchMessageBeforeSending': _0x397e2a => {
    const _0x4c8225 = !!(_0x397e2a.buttonsMessage || _0x397e2a.templateMessage || _0x397e2a.listMessage);
    if (_0x4c8225) {
      _0x397e2a = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadataVersion': 0x2,
              'deviceListMetadata': {}
            },
            ..._0x397e2a
          }
        }
      };
    }
    return _0x397e2a;
  },
  'defaultQueryTimeoutMs': undefined,
  'syncFullHistory': false
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
if (!opts.test) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write()["catch"](console.error);
    }
  }, 60000);
}
if (opts.server) {
  (await import("./server.js"))["default"](global.conn, PORT);
}
async function clearsession() {
  const _0xb99fee = readdirSync("./sessions").filter(_0x8ba5ec => _0x8ba5ec.startsWith("pre-key-"));
  _0xb99fee.forEach(_0x3809a1 => {
    unlinkSync("./sessions/" + _0x3809a1);
  });
  console.log(_0x3ec184.bold.green("Terima Kasih telah menggunakan Script Fernazerr Code"));
}
async function connectionUpdate(_0x208b7a) {
  const {
    receivedPendingNotifications: _0x1abb1f,
    connection: _0x3e3990,
    lastDisconnect: _0x2cf8df,
    isOnline: _0x31cf87,
    isNewLogin: _0x486695
  } = _0x208b7a;
  if (_0x486695) {
    conn.isInit = true;
  }
  if (_0x3e3990 == "connecting") {
    console.log(_0x3ec184.redBright("Activating Bot, Please wait a moment..."));
  }
  if (_0x3e3990 == "open") {
    console.log(_0x3ec184.green("Tersambung"));
  }
  if (_0x31cf87 == true) {
    console.log(_0x3ec184.green("Aktif Nih Gembleng"));
  }
  if (_0x31cf87 == false) {
    console.log(_0x3ec184.red("Disconnected Status"));
  }
  if (_0x1abb1f) {
    console.log(_0x3ec184.yellow("Menunggu Pesan..."));
  }
  if (_0x3e3990 == "close") {
    console.log(_0x3ec184.red("Connection lost & trying to reconnect..."));
  }
  global.timestamp.connect = new Date();
  if (_0x2cf8df && _0x2cf8df.error && _0x2cf8df.error.output && _0x2cf8df.error.output.statusCode !== DisconnectReason.loggedOut) {
    console.log(_0x3ec184.red('Connecting...'));
    await global.reloadHandler(true);
  }
  if (global.db.data == null) {
    await global.loadDatabase();
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x41139c) {
  try {
    const _0x1cf397 = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x1cf397 || {}).length) {
      handler = _0x1cf397;
    }
  } catch (_0x8c1c04) {
    console.error(_0x8c1c04);
  }
  if (_0x41139c) {
    const _0x34b9b4 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x34b9b4
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off('group-participants.update', conn.participantsUpdate);
    conn.ev.off('groups.update', conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.welcome = "*@user*\n*𝚑𝚊𝚜 𝚓𝚘𝚒𝚗𝚎𝚍 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙*\n\n𝙱𝚎𝚏𝚘𝚛𝚎 𝚝𝚑𝚊𝚝, 𝚍𝚘𝚗𝚝 𝚏𝚘𝚛𝚐𝚎𝚝 𝚝𝚘 𝚛𝚎𝚊𝚍 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙 𝚛𝚞𝚕𝚎𝚜";
  conn.bye = "*@user* *𝚑𝚊𝚜 𝚕𝚎𝚏𝚝 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙*";
  conn.spromote = "@user sekarang admin!";
  conn.sdemote = "@user sekarang bukan admin!";
  conn.sDesc = "Deskripsi telah diubah ke \n@desc";
  conn.sSubject = "Judul grup telah diubah ke \n@subject";
  conn.sIcon = "Icon grup telah diubah!";
  conn.sRevoke = "Link group telah diubah ke \n@revoke";
  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn);
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on('connection.update', conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x2bdc47 => /\.js$/.test(_0x2bdc47);
global.plugins = {};
async function filesInit() {
  for (let _0x1f68a2 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let _0x4f4449 = global.__filename(join(pluginFolder, _0x1f68a2));
      const _0x431e8f = await import(_0x4f4449);
      global.plugins[_0x1f68a2] = _0x431e8f['default'] || _0x431e8f;
    } catch (_0xd85211) {
      conn.logger.error(_0xd85211);
      delete global.plugins[_0x1f68a2];
    }
  }
}
filesInit().then(_0x571d87 => console.log(Object.keys(global.plugins)))["catch"](console.error);
global.reload = async (_0x294943, _0x3fd295) => {
  if (/\.js$/.test(_0x3fd295)) {
    let _0x126c7f = global.__filename(join(pluginFolder, _0x3fd295), true);
    if (_0x3fd295 in global.plugins) {
      if (existsSync(_0x126c7f)) {
        conn.logger.info("re - require plugin '" + _0x3fd295 + "'");
      } else {
        conn.logger.warn("deleted plugin '" + _0x3fd295 + "'");
        return delete global.plugins[_0x3fd295];
      }
    } else {
      conn.logger.info("requiring new plugin '" + _0x3fd295 + "'");
    }
    let _0x404c5b = _0x4a14ac(readFileSync(_0x126c7f), _0x3fd295, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x404c5b) {
      conn.logger.error("syntax error while loading '" + _0x3fd295 + "'\n" + format(_0x404c5b));
    } else {
      try {
        const _0x112ec8 = await import(global.__filename(_0x126c7f) + "?update=" + Date.now());
        global.plugins[_0x3fd295] = _0x112ec8["default"] || _0x112ec8;
      } catch (_0x475581) {
        conn.logger.error("error require plugin '" + _0x3fd295 + "\n" + format(_0x475581) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x2c781c], [_0x454e16]) => _0x2c781c.localeCompare(_0x454e16)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
import _0x31eff5 from 'readline';
const more = String.fromCharCode(0x200e);
const readMore = more.repeat(0xfa1);
const sleep = _0x16746e => {
  return new Promise(_0x5d09c1 => setTimeout(_0x5d09c1, _0x16746e));
};
const rl = _0x31eff5.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0xd2e0fa => new Promise(_0x2aa55e => rl.question(_0xd2e0fa, _0x2aa55e));
if (pairingCode && !conn.authState.creds.registered) {
  await sleep(0x1b58);
  console.clear();
  _0x4cff63.say("\nPAIRING CODE\n", {
    'font': "tiny",
    'align': "left",
    'gradient': ["red", "blue"]
  });
  console.log(_0x3ec184.bold.white("━━━━━━━━━━━ https://github.com/RafliMaulan ━━━━━━━━━━━"));
  console.log(_0x3ec184.bold.green("\n\nNomer Bot 62 :"));
  let phoneNumber = await question(_0x3ec184.bgBlack(_0x3ec184.greenBright("> ")));
  phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
  let code = await conn.requestPairingCode(phoneNumber);
  code = code?.["match"](/.{1,4}/g)?.['join']('-') || code;
  console.log(_0x3ec184.bold.green("Nih Pairing Code : "), _0x3ec184.bold.yellow(code));
  rl.close();
}
async function _quickTest() {
  let _0x51ce35 = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", '-filter_complex', 'color', "-frames:v", '1', '-f', "webp", '-']), spawn("convert"), spawn('magick'), spawn('gm'), spawn('find', ["--version"])].map(_0x1e9f05 => {
    return Promise.race([new Promise(_0x10ca50 => {
      _0x1e9f05.on("close", _0x13e58c => {
        _0x10ca50(_0x13e58c !== 0x7f);
      });
    }), new Promise(_0x3e8f0f => {
      _0x1e9f05.on('error', _0x59b922 => _0x3e8f0f(false));
    })]);
  }));
  let [_0x1e0a55, _0xf6789e, _0x8de88, _0x22b0a6, _0x259e0b, _0x28d7cf, _0x568b3b] = _0x51ce35;
  console.log(_0x51ce35);
  let _0x27a507 = global.support = {
    'ffmpeg': _0x1e0a55,
    'ffprobe': _0xf6789e,
    'ffmpegWebp': _0x8de88,
    'convert': _0x22b0a6,
    'magick': _0x259e0b,
    'gm': _0x28d7cf,
    'find': _0x568b3b
  };
  Object.freeze(global.support);
  if (!_0x27a507.ffmpeg) {
    conn.logger.warn("Please install ffmpeg for sending videos (pkg install ffmpeg)");
  }
  if (_0x27a507.ffmpeg && !_0x27a507.ffmpegWebp) {
    conn.logger.warn("Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)");
  }
  if (!_0x27a507.convert && !_0x27a507.magick && !_0x27a507.gm) {
    conn.logger.warn("Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)");
  }
}
_quickTest().then(() => conn.logger.info("☑️ Bot Sedang Sagne"))["catch"](console.error);