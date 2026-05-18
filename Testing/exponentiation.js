class VaeqimExponentiation {
  getInfo() {
    return {
      id: 'vaeqimexponentiation',
      name: 'Exponentiation',
      blocks: [
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

  squareithink(args) {
    return args.number ** args.times;
  }
}

Scratch.extensions.register(new VaeqimExponentiation());
