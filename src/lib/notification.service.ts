import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Notification} from './notification';

const dataFile = require('./notifications.json');

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  notifications = [];

  constructor() {
    this.notifications = dataFile;
  }

  list(): Observable<Notification[]> {
    return of(this.notifications);
  }

  /** Log a service message with the MessageService */
  private log(message: string) {
    console.log(this.constructor.toString().match(/\w+/g)[1] + `: ${message}`);
  }
}
