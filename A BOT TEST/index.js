
import { spawn } from 'child_process';
import _0x16d11b from 'path';
import 'console';
import 'util';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const sleep = _0x587f6a => {
  return new Promise(_0x1df7c0 => setTimeout(_0x1df7c0, _0x587f6a));
};
import _0x20dba9 from 'cfonts';
import _0x4c2f7d from 'chalk';
console.clear();
const __dirname = dirname(fileURLToPath(import.meta.url));
const start = async () => {
  const _0x3160dd = [_0x16d11b.join(__dirname, "main.js"), ...process.argv.slice(0x2)];
  const _0x31afef = spawn(process.argv[0x0], _0x3160dd, {
    'stdio': ["inherit", "inherit", "inherit", "ipc"]
  });
  _0x31afef.on('exit', _0x576095 => {
    console.error("❎ Exited with code:", _0x576095);
    if (_0x576095 === '.' || _0x576095 === 0x1 || _0x576095 === 0x0) {
      start();
    }
  });
};
await sleep(0x7d0);
_0x20dba9.say("\n\nSAGNE BOT\n", {
  'font': "tiny",
  'align': 'center',
  'gradient': ['red', "blue"]
});
_0x20dba9.say("Awokawok Halo Gembleng\nSaya Adalah Sagne Bot\nYang Bisa Membantu Kalian Sagne Dengan Saya\nJangan Lupa Sagne Dengan Saya Ya Gembleng\n\nYT : Fernazer Code\nCreated : Fernazer Code & Rafli Maulan\n\n", {
  'font': "console",
  'align': "center",
  'colors': ["blue"]
});
console.log(_0x4c2f7d.bold.green("\n TerimaKasih Sudah Menggunakan Sagne Bot.\nIni Sc Free Khusus Spesial Menuju Tahun Baru😘✅\n\n"));
start();