import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

////////////////////////////////////////////////////////////////////
// SERVICES
////////////////////////////////////////////////////////////////////
import { AccessControlLogService } from "./services/access-control-log.service";


////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////
import { AppComponent } from "./app.component";
import { LogFormComponent } from "./components/log-form/log-form.component";


@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccessControlLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
