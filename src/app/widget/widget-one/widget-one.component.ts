import { WidgetService } from './../../services/widget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css']
})
export class WidgetOneComponent implements OnInit {
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
  }
  send(data) {
    this.widgetService.subject.next(data.value);
  }
}
