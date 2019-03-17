import { Pipe, PipeTransform } from '@angular/core';

//the pure: false thing means pipe happens whenever data changes - can lead to performance issues
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  //value can be an array
  transform(value: any, filterString: string, propName: string): any {

    if (value.length == 0 || filterString === '' || filterString == null) {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
