import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateMessageDto from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  // Method to get all messages
  @Get()
  getAllMessages() {
    return this.messagesService.findAll();
    // return 'This is a route to get all messages';
  }

  // Method to create a message
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    // console.log(body);
    
    return this.messagesService.create(body.content);
  }

  // Method to get a message using an id
  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    // console.log(id);
    // return 'This is a route to get a message by id: ' + id;
    return this.messagesService.findOne(id);
  }
}
