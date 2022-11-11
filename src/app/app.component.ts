import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FullStack';
  log_email: any;
  log_password:any;

  reg_email: any;
  reg_password:any;
  reg_confirm_password:any;
  constructor() { }

  ngOnInit() {
    
  }
  login(){

  }
  Register() {
    
  }
 

}
