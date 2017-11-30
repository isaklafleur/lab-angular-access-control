import { Injectable } from "@angular/core";
import { LogMessage } from "../models/LogMessage.model";

@Injectable()
export class AccessControlLogService {
  logMessages: LogMessage[] = [];
  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(log) {
    const newLog = new LogMessage(log);
    this.logMessages.push(newLog);
    console.log("================================");
    console.log("ACCESS LOG");
    console.log("================================");
    this.logMessages.forEach((logMessage: LogMessage) => {
      console.log(logMessage.person, logMessage.message, logMessage.createdAt);
    });
  }
}
