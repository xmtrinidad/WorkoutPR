import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';

import {ValidateService} from "./services/validate.service";
import { AlertComponent } from './components/alert/alert.component';
import { AuthService } from './services/auth.service';
import {PersonalRecordService} from "./services/personal-record.service";
import { JumbotronComponent } from './components/landing/jumbotron/jumbotron.component';
import { MuscleGroupDropdownComponent } from './components/muscle-group-dropdown/muscle-group-dropdown.component';
import { PersonalRecordsComponent } from './components/personal-records/personal-records.component';
import { RecordComponent } from './components/personal-records/record/record.component';
import { EditRecordComponent } from './components/personal-records/edit-record/edit-record.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AlertComponent,
    LandingComponent,
    JumbotronComponent,
    MuscleGroupDropdownComponent,
    PersonalRecordsComponent,
    RecordComponent,
    EditRecordComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ValidateService, AuthService, PersonalRecordService],
  bootstrap: [AppComponent]
})
export class AppModule {}
