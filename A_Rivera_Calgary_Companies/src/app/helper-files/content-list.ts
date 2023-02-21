import { Content } from "./content-interface";

export class ContentList {
    private companies: Content[];
    constructor() {
        this.companies = []; // initialize array
    }
    get companiesList(){
        return this.companies;
    }
    addCompany(company: Content) {
        this.companies.push(company);
    }
    countCompanies(){return this.companies.length}

    readCompany(index: number){
        let company = this.companies[index];
        return `
            <h1>${company.title}</h1>
            <h6>Contacted: ${company.status}</br>
            ${company.email} ° ${company.phone} ° ${company.address}</br>
            <a href="${company.website}">${company.website}</a></br>
            <a href="${company.url}">About the company</a></br>
            </h6>
            <p>Type: ${company.type}</p>
            <img src="${company.imgURL}">
            <p>Creator: ${company.creator}</p>
            <p>${company.description}</p>`;
    }
}