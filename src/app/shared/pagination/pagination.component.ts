import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() prev: number;
  @Input() current: number;
  @Input() next: number;
  @Input() max: number;
  @Output() changePage = new EventEmitter();
  constructor() {
    this.prev = 0;
    this.current = 0;
    this.next = 0;
  }

  ngOnInit() {
  }

  setPage(target: number) {
    this.changePage.emit(target);
  }
}
