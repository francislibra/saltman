import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salt'
})
export class SaltPipe implements PipeTransform {
  transform(value: any, args?: any[]): any[] {
    if (value) {

      const keyArr: any[] = Object.keys(value),
            dataArr = [];

      keyArr.forEach((key: any) => {
        dataArr.push(key);
      });

      return dataArr;
    }
  }
}
