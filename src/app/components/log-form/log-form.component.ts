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
  newUser = new LogMessage();
  feedbackEnabled = false;
  displaySuccessMsg = false;
  fadeout = false;
  constructor(private addPersonLogService: AccessControlLogService) { }

  ngOnInit() {
  }
  submitForm(myForm) {
    this.feedbackEnabled = true;
    if (myForm.valid) {
      this.addPersonLogService.addAccessItem(this.newUser);
      this.newUser = new LogMessage();
      this.feedbackEnabled = false;
      this.displaySuccessMsg = true;
      window.setTimeout(() => {
        myForm.reset();
        this.displaySuccessMsg = false;

      }, 2000);
    } else {

    }
  }
}
