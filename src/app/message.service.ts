import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[]=[];

  add(msg: string){
    this.messages.push(msg);
  }

  clear(){
    this.messages = [];
  }
}
