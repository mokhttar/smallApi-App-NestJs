import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const messages = await readFile('messages.json', 'utf8');
    const ParsedMessages = JSON.parse(messages);
    return ParsedMessages[id];
  }
  async findAll() {
    const messages = await readFile('messages.json', 'utf8');
    const ParsedMessages = JSON.parse(messages);
    return ParsedMessages;
  }
  async CreateMessage(message: string) {
    const messages = await readFile('messages.json', 'utf8');
    const id = Math.floor(Math.random() * 99);
    let ParsedMessages = JSON.parse(messages);

    ParsedMessages[id] = {
      id: id,
      message: message,
    };

    const FinalMessages = await writeFile(
      'messages.json',
      JSON.stringify(ParsedMessages),
    );
    return FinalMessages;
  }
}
