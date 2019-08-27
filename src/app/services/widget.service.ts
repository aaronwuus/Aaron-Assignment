import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  subject = new BehaviorSubject('');
  constructor() { }
}
