import { Pipe, PipeTransform } from '@angular/core';
import { categories, priorities } from '../../features/tasks/collections/collections.module';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(value: number, type: string): string {
    switch(type){
      case "priority":
        return priorities.find(priority => priority.value == value)?.name ?? "";
      case "category":
        return categories.find(category => category.value == value)?.name ?? "";
    }
    return "";
  }

}
