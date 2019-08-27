import { environment } from './../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeoBrowseService {
  navPage = new BehaviorSubject(0);
  constructor(private apiService: ApiService) { }

  neoBrowse(path: string): Observable<any> {
    return this.apiService.browseData(path);
  }
}
