import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CompaniesService {
  
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }
  
  constructor(private messageService: MessageService, private http: HttpClient) { }
  
  getCompanies() : Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    console.log(this.http.get<Content[]>("api/companies"))
    return this.http.get<Content[]>("api/companies");
  }
  addCompany(newCompany: Content): Observable<Content>{
    this.messageService.addMessage("New Company Added");
    return this.http.post<Content>("api/companies",newCompany, this.httpOptions);
  }
  updateContent(CompanyId: Content): Observable<any>{
    return this.http.put("api/companies" , CompanyId, this.httpOptions);
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


