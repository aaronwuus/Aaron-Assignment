import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean): any {
    if (value == true) {
      return 'Potential Hazard';
    } else {
      return 'No Hazard';
    }
  }
}
