import { MessagesModule } from './messages.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function app() {
  const mymessagesApp = await NestFactory.create(MessagesModule);
  mymessagesApp.useGlobalPipes(new ValidationPipe());
  await mymessagesApp.listen(3000);
}
app();
