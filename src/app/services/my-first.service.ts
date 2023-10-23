import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert(
    {
      name: 'Wesley',
      email: 'wesley@email.com',
      message: 'qq coisa ....'
    });
    this.insert(
    {
      name: 'João ',
      email: 'joãoy@email.com',
      message: 'qq coisa 2 ....'
    });
    this.insert(
    {
      name: 'Tanjiro',
      email: 'tanjiro@email.com',
      message: 'qq coisa 3 ....'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages(): Array<any> {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
