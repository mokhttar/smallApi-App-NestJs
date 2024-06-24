import { IsString, isString } from 'class-validator';
export default class CreateMessageDto {
  //that means we used the is string decorator to valiudate that  the body we  are going to receive is a string
  @IsString()
  content: string;
}
