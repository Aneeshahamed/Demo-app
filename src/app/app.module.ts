import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService } from './Services/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
