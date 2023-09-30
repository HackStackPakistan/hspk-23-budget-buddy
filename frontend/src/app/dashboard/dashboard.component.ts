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
  showModalExpense = false;
  showModalIncome = false;
  showModalBal = false;

  response: any = '';
  title: string = '';
  email: string = '';
  income: string = '';
  totalAmount: string = '';
  totalTransactions: string = '';
  sentMsgs: string[] = [];
  trans1: Array<string> = [];
  trans2: Array<string> = [];
  constructor(public firebaseService: FirebaseService, private _router: Router, public apiService: ApiService) {
    this.getUserInfo();
    this.getBudgetInfo();
    this.getTotalTransactions();
    this.getFileteredTransactions();
  }
  date = new Date();

  toggleModalExpense(){
    this.showModalExpense = !this.showModalExpense;
  }

  toggleModalIncome(){
    this.showModalIncome = !this.showModalIncome;
  }

  toggleModalBal(){
    this.showModalBal = !this.showModalBal;
  }

  addBudget(name: string, category: string, amount: string){
    this.apiService.createBudget(name, category, amount)
    .subscribe((res)=>{
      console.log(res);
    })
  }

  addTransaction(expense: string, category: string, payment: string){
    this.apiService.createTransaction(expense, category, payment, this.date.toDateString())
    .subscribe((res)=>{
      console.log(res);
    })
  }

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
      sessionStorage.setItem('budgetID', res[0].id);
      this.income = res[0].budgetAmount;
      this.totalAmount = res[0].budgetAmountRemaining;
    })
  }

  getTotalTransactions(){
    this.apiService.getTotalTransactionsByUserIdAndBudgetId()
    .subscribe((res: any) => {
      this.totalTransactions = res.totalTransactions;
    })
  }

  getFileteredTransactions(){
    this.apiService.getFilteredTransactionsByUserId()
    .subscribe((res: any) => {
      console.log(res);
        this.trans1[0] = res[0].amount;
        this.trans1[1] = res[0].category;
        this.trans2[0] = res[1].amount;
        this.trans2[1] = res[1].category;
    })
  }


  sendmsg(message: string){
    const chatElement = document.getElementById('chat');
    if (chatElement) {
      const newElement = document.createElement('app-sent');
    
      chatElement.appendChild(newElement);
    }
    // this.getChat(message);
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
    const chatElement = document.getElementById('chat');
    if (chatElement) {
      const newElement = document.createElement('app-recieved');
      newElement.setAttribute('Data', this.response);
      chatElement.appendChild(newElement);
    }
  })
  }

}
