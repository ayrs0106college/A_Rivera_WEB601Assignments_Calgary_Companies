import { Component } from "@angular/core";
import { CompaniesService } from "./services/companies.service";
import { Content } from '../app/helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Rivera_Calgary_Companies';
  contents: Content[] = [];
  contentID: Content[] = [];
  CompanyExists: boolean | null = null;
  id?: number;
  CompanyData: any | null = null;

  constructor(private CompaniesService: CompaniesService){}
  
  ngOnInit(){
    this.CompaniesService.getCompanies().subscribe(companies => this.contents = companies);
  }

  searchById(id: any){
    this.CompanyExists = this.contents.some(content => content.id === this.id);    
    if (this.CompanyExists){
      this.contents.map(content => {
        if (content.id === this.id) {
          this.CompaniesService.getCompanyById(content.id).subscribe(companies => this.contentID = companies);
          this.CompanyData = content
          this.id = undefined
        }
      })
    } else {
      this.CompanyData = null
      alert("Company does not exist")
    }
  }
}