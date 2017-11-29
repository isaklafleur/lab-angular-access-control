import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<Object> = [
    {
      person: 'isak',
      message: 'taking out a book',
      createdAt: new Date(),
    },
    {
      person: 'Juan',
      message: 'getting a pencil',
      createdAt: new Date(),
    },
  ]
  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(person: string, message: string) {
    const newLog = {
      person: person,
      message: message,
      createdAt: new Date(),
    }
    this.logMessages.push(newLog);
    this.logMessages.forEach(logMessage => {
      console.log(logMessage['person'], logMessage['message']);
    });

  }
}
