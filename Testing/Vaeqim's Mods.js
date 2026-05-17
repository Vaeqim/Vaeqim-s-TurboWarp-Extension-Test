let url_test = 'https://www.turbowarp.org';
let url_connected = 'null';
async function lol() {
  const checkthisurl = url_test;
  async function isReallyOnline(testUrl = checkthisurl, timeout = 5000) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const response = await fetch(testUrl, { method: "HEAD", mode: "no-cors", signal: controller.signal });
      clearTimeout(id);
      return true;
    } catch (err) {
      return false;
    }
  }
  async function updateStatus() {
    const online = navigator.onLine && await isReallyOnline();
    return(online ? "true" : "false");
  }
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  setInterval(updateStatus, 10000);
  url_connected = updateStatus();
}
setInterval(lol, 10000);
lol();

class VaeqimMod {
  constructor(runtime) {
    this.runtime = runtime;
    this.url = 'https://www.turbowarp.org'; 
  }

  getInfo() {
    return {
      id: 'vaeqimmods',
      name: 'Vaeqim Mods',
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: 'Sensing',
        },
        {
          opcode: 'seturl',
          blockType: Scratch.BlockType.COMMAND,
          text: 'use [URL] to check if online',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.turbowarp.org'
            }
          },
          extensions: ["colours_sensing"]
        },
        {
          opcode: 'currenturl',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current url',
          extensions: ["colours_sensing"]
        },
        {
          opcode: 'detectonline',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'online?',
          extensions: ["colours_sensing"]
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: 'Operators',
        },
        {
          opcode: 'squareithink',
          blockType: Scratch.BlockType.REPORTER,
          text: '[number]^[times]',
          arguments: {
            number: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            times: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          },
          extensions: ["colours_operators"]
        }
      ]
    };
  }

  seturl(args) {
    url_test = args.URL;
  }

  currenturl() {
    return url_test;
  }

  detectonline() {
    return url_connected;
  }

  squareithink(args) {
    return args.number ** args.times;
  }
}

Scratch.extensions.register(new VaeqimMod());
