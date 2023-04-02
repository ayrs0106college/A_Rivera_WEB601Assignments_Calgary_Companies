import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private messageService: MessageService) { }

  getCompanies(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return of(contents);
  }

  getCompanyById(id?: number): Observable<Content[]> {
    var content:any = [];
    if (id !== undefined) { 
      content = contents.find(c => c.id === id);
      this.messageService.addMessage(`Content Item at id: ${id}`);
    }
    return of(content);
  }
}


