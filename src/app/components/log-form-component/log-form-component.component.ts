import { Component, OnInit } from '@angular/core';

import { AccessControlLogService } from '../../services/access-control-log.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  display: Boolean = false;
  person: String = '';
  message: String = '';
  fadeout: Boolean = false;
  constructor(private addPersonLogService: AccessControlLogService) { }

  ngOnInit() {
  }
  submitForm(myForm) {
    console.log(myForm);
    this.addPersonLogService.addAccessItem(myForm.value.person, myForm.value.message);
    this.display = true;
    this.person = '';
    this.message = '';
  }
}
