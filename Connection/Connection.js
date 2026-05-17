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

class Connection {
  getInfo() {
    return {
      id: 'connection',
      name: 'Connection',
      color1: '#FFAB19',
      color2: '#EC9C13',
      color3: '#CF8B17',
      menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAyxJREFUeJzlm19O3DAQxp2qB+gbzd4CiavsUZB6BCSOwlW64hYJvHGD9KEdGIw9/8fZKj8JCZas428yk3x27KkM4vnxZtMcf3v/OuX15oO0k9SCf/7Qnerl7XO8sgIS2igWXQv2BgD/HRmMkIZAOBapFcyBAwC/RwTC1UAtPFp0DwhARCDMX3x+vNlGC6/BgbAGwfQlEL+X8JqXt80cBNUXcMpfi3gAglCUJSE+UJPydw8nabMqfv9ayP9bSkJ0kCbls8QDXBCKsiTYAyzi13Vlj7Uwz3MpwUEg/3lN4oHoIHyL6NQo8fgcUaXWjYz06o8Uj5FmApcFzQ+vXTwQEYQvH/wv4gFvEL5bTqoRvyz8zYridKJrfV3XMs9zuXs4iW6MNZ+iIbn6I8UDXBCKMBNaWaDKAIv47WnWnOIL03kty7KkZcJ7JLirv4f4906e/54zIhPqLBD5gD3F47YkJaX1CWwJeMV7DQtcye1pTimHqRDpv7d4AIuIKAdcBmwGeMV7fUJ9JS2ZQEHeAy6XC9vBTPGlU9OaewKngb0JUifJFg9YgyAJ0MQ9/no1N0o8plXTmv5h4D7ABgCfpGakeIAKAtW/GgiAyAe0GtpDfGHKodc/ClEGUGSMDaK8P4UqA3pkDYwyHF8P03C4JNvj7AEQxpUBWWMDi/e3Yg6A1SRJiTQ7FOYSKP8610tTz9hAY3u9ky7mDKCukHdgJHV8EUNv92MwwyRFmR2KkMdgrwNekxRtdijI+QAvXofoNTs98HxAyKuxFhH2OPo1WIuUAGTPB0SSlgEZ8wEZiKfFVY2eV9bG1o81yfERNz3TtLgF7UyNd2bHSkoApOYF/0iOz0D9blDVuNK8RJudmta7wbQSKAbzkmV2KMzrA7zUj7Vos1PTWx+QmgE9Ws/07OV1PVxLZCz0TFKW7S3aJTJARhA4h5gRBG6RVLcEbu9fJ7z+NgrK1UU7vmHrBKVIpq4801sWyABkZMEoxxeyVBaIHicUw7s8DaGLpYHIHSJZji9tuTwQuWGiDkKE+NQNE5jDbpnBHHrTFHDobXOYw26crDns1tkWh9w8TXGt2+f/AM4mhBbfSHvsAAAAAElFTkSuQmCC',
      blocks: [
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
}

Scratch.extensions.register(new Connection());
