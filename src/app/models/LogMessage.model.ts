export class LogMessage {
  person: string;
  message: string;
  createdAt: Date;
  constructor(data) {
    Object.assign(this, data);
    this.createdAt = new Date();
  }
}
