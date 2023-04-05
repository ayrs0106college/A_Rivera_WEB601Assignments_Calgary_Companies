import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {}

  createDb() {
    const companies : Content[] = contents;
    return {companies};
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id)) + 1 : 2000;
  }

}
