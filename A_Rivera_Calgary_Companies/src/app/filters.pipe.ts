import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {
    transform(contents: Content[], filters: string): Content[] {
    if(!filters){
      return contents.filter(content => !content.type);
    }
    return contents.filter(content => content.type === filters);
  }
}