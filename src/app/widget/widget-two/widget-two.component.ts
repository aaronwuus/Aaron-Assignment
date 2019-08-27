import { Subscription } from 'rxjs';
import { WidgetService } from './../../services/widget.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css']
})
export class WidgetTwoComponent implements OnInit, OnDestroy {
  fromWidgetOne;
  service: Subscription;
  constructor(private widgetService: WidgetService) {
   }

  ngOnInit() {
    this.service = this.widgetService.subject.subscribe(data => {
      this.fromWidgetOne = data ;
    });
    this.fromWidgetOne = '';
  }
  ngOnDestroy() {
    if (this.service !== undefined) {
      this.service.unsubscribe();
    }
  }
}
