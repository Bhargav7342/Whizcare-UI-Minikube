import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  transform(value: string): string {
    const date=new Date(value)
    return formatDate(date,'dd-MMM-yyyy','en-US');
  }

}
