import { Component, OnInit } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { LogMessage } from "../../models/LogMessage.model";
import { AccessControlLogService } from "../../services/access-control-log.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"],
})
export class LogFormComponent implements OnInit {
  newLog = new LogMessage({});
  feedbackEnabled = false;
  displaySuccessMsg = false;
  fadeout = false;
  constructor(private accessControlLogService: AccessControlLogService) { }

  ngOnInit() {
  }
  submitForm(myForm) {
    this.feedbackEnabled = true;
    if (myForm.valid) {
      this.accessControlLogService.addAccessItem(this.newLog);
      this.newLog = new LogMessage({});
      this.feedbackEnabled = false;
      this.displaySuccessMsg = true;
      window.setTimeout(() => {
        this.displaySuccessMsg = false;
      }, 2000);
    }
  }
}
