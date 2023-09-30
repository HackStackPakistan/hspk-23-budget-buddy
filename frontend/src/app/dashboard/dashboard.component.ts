import { Component } from '@angular/core';
import { Router } from '@angular/router';
import OpenAI from 'openai';
import { FirebaseService } from 'src/app/services/firebase.service';
import { environment } from 'src/environments/environment.development';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  response: any = '';
  title: string = '';
  email: string = '';
  income: string = '';
  totalAmount: string = '';
  sentMsgs: string[] = [];
  constructor(public firebaseService: FirebaseService, private _router: Router, private apiService: ApiService) {
    this.getUserInfo();
    this.getBudgetInfo();
  }
  date = new Date();

  logOut(){
    this.firebaseService.logout()
  }

  getUserInfo(){
    this.apiService.getUserByID(sessionStorage.getItem('userID')!)
    .subscribe((res)=>{
      this.title = res.username;
      this.email = res.email;
      sessionStorage.setItem('id', res.id);
    })
  }

  getBudgetInfo(){
    this.apiService.getAllBudgetsByUserID()
    .subscribe((res)=>{
      this.income = res[0].budgetAmount;
      this.totalAmount = res[0].budgetAmountRemaining;
    })
  }




  sendmsg(message: string){
    this.sentMsgs.push(message);
  }


  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  getChat(message: string){
    let data: any; 
    const openai = new OpenAI({
    apiKey: this.apiKey, dangerouslyAllowBrowser: true
  });
  openai.chat.completions.create({
    messages: [{ role: "user", content: message }],
    model: "gpt-3.5-turbo",
    temperature: 1,
  }).then( res =>{
    console.log(res.choices[0].message.content);
    this.response = res.choices[0].message.content;
  })
  }

}
