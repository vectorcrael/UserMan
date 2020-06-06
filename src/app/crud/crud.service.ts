/*
  The main CRUD operations implemented in this service
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //this is the address for the mockup jason-server that retreives data from the 
  private apiServer = "http://localhost:3000";

  //specify the kind of information data exchanged in the header, mainly jason format
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //inject the http client to the service
  constructor(private httpClient: HttpClient) { }
  
  //create a new user using this operation 
  create(user): Observable<User> {
    return this.httpClient.post<User>(this.apiServer + '/users/', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  //get the user objects using the id
  getById(id): Observable<User> {
    return this.httpClient.get<User>(this.apiServer + '/users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //get the users
  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiServer + '/users/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //update the user object
  update(id, user): Observable<User> {
    return this.httpClient.put<User>(this.apiServer + '/users/' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //delete the selected user
  delete(id) : Observable<void>{
    return this.httpClient.delete<void>(this.apiServer + '/users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
