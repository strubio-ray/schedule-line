import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeComma'
})
export class RemoveCommaPipe implements PipeTransform {
  constructor(){ }

  public transform(val: string | null): string {
    if (val != null) {
      return val.replace(/,/g, "");
    } else {
      return "";
    }
  }
}