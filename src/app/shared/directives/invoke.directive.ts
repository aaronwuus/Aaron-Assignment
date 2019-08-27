import { Directive, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appInvoke]'
})
export class InvokeDirective implements AfterContentInit {
  @Output() invoke = new EventEmitter();
  ngAfterContentInit(): void {
    this.invoke.emit(null);
  }
}
