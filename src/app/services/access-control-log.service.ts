import { Injectable } from "@angular/core";
import { LogMessage } from "../models/LogMessage.model";

@Injectable()
export class AccessControlLogService {
  logMessages: LogMessage[] = [
    {
      person: "isak",
      message: "taking out a book",
      createdAt: new Date(),
    },
    {
      person: "Juan",
      message: "getting a pencil",
      createdAt: new Date(),
    },
  ];
  newLog = new LogMessage();
  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(log) {
    const newLog = {
      person: log.person,
      message: log.message,
      createdAt: new Date(),
    };
    this.logMessages.push(newLog);
    console.log("================================");
    console.log("ACCESS LOG");
    console.log("================================");
    this.logMessages.forEach(logMessage => {
      console.log(logMessage.person, logMessage.message, logMessage.createdAt);
    });
  }
}
