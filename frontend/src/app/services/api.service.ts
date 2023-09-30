import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Budget } from '../interfaces/budget';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  // Auth Routes
  registerUser(email: string, uID: any, username: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    const requestBody = {
      userID: uID,
      username: username,
      email: email
    };
    return this.http.post(`${environment.apiHead}/auth/register`, requestBody, {headers})
  }

  getUserByID(id: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    return this.http.get(`${environment.apiHead}/auth/${id}`, {headers})
  }
  
  // Transaction Routes
  getAllTransactionsByUserID(){
    return this.http.get(`${environment.apiHead}/transactions/all/user/`, {})
  }

  getAllTransactionsByBudget(budgetID: any){
    return this.http.get(`${environment.apiHead}/transactions/all/budget/`, {})
  }

  getTotalTransactionsByUserIdAndBudgetId(){
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    return this.http.get(`${environment.apiHead}/transactions/total/${sessionStorage.getItem('id')}/${sessionStorage.getItem('budgetID')}`, {headers})
  }

  getFilteredTransactionsByUserId(){
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    return this.http.get(`${environment.apiHead}/transactions/filter/${sessionStorage.getItem('id')}`, {headers})
  }
  getTransactionByID(){
    return this.http.get(`${environment.apiHead}/transactions/`, {})
  }

  createTransaction(amount: string, category: string, payment: string ,date: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    const requestBody = {userID: sessionStorage.getItem('id'), 
    budgetID: sessionStorage.getItem('budgetID'), 
    transactionDate: date, 
    transactionType: 'expense', 
    amount: amount, 
    category: category, 
    paymentMethod: payment, 
    description: category
  };
    return this.http.post(`${environment.apiHead}/transactions`, requestBody , {headers})
  }

  delTransaction(id: string){
    return this.http.delete(`${environment.apiHead}/transactions/${id}`, {})
  }

  updateTransaction(id: string){
    return this.http.put(`${environment.apiHead}/transactions/${id}`, {})
  }


  // Budget Routes
  getAllBudgetsByUserID(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    return this.http.get(`${environment.apiHead}/budgets/all/${sessionStorage.getItem('id')}`, {headers})
  }

  getBudgetByID(){
    return this.http.get(`${environment.apiHead}/budgets/1`, {})
  }

  createBudget(name: string, amount: string, category: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    return this.http.post(`${environment.apiHead}/budgets`, {userID: sessionStorage.getItem('id'), budgetName: name, budgetAmount: amount,budgetCategory: category,budgetTimePeriod: "Monthly","budgetStartDate": "2023-09-01T00:00:00Z","budgetEndDate": "2023-09-30T23:59:59Z"}, {headers})
  }

  delBudget(id: string){
    return this.http.delete(`${environment.apiHead}/budgets/${id}`, {})
  }

  updateBudget(id: string){
    return this.http.put(`${environment.apiHead}/budgets/${id}`, {})
  }


  // Goals Routes
  getAllGoalsByUserID(){
    return this.http.get(`${environment.apiHead}/goals/all/1`, {})
  }

  getGoalByID(){
    return this.http.get(`${environment.apiHead}/goals/1`, {})
  }

  createGoal(){
    return this.http.post(`${environment.apiHead}/goals`, {})
  }

  delGoal(id: string){
    return this.http.delete(`${environment.apiHead}/goals/${id}`, {})
  }

  updateGoal(id: string){
    return this.http.put(`${environment.apiHead}/goals/${id}`, {})
  }

  
}
