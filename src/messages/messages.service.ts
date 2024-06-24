import { MessagesRepository } from './messages.repository';



export class MessagesService {
  messagesRepo: MessagesRepository;
  //DONT THIS SHIT IN REAL APPS  IN A REAL APP USE (DEPENDENCY INJECTION  PRINCIPLE)
  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id:string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content:string) {
    return this.messagesRepo.CreateMessage(content);
  }
}
