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

  getTransactionByID(){
    return this.http.get(`${environment.apiHead}/transactions/`, {})
  }

  createTransaction(){
    // return this.http.post(`${environment.apiHead}/transactions`, {userID: uID, budgetID: bID, transactionDate: date, transactionType: type, amount: amount, category: category, paymentMethod: paymentMethod, description: description})
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

  createBudget(){
    return this.http.post(`${environment.apiHead}/budgets`, {})
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
