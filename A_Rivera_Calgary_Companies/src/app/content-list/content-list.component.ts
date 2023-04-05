import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {
  contents: Content[] = [];
  title: string = '';
  type: string = '';
  CompanyExists: boolean | null = null;
  CompanyData: any | null = null;
  CompaniesTypeExist: boolean | null = null;
  CompaniesType: any = [];
  AllCompanies: boolean = true;
  CompsByType: boolean = false;
  CompTypes: string[] = [];
  errMsg: boolean = false;

  topCompanyContent: Content[] = [];
  
// contentList: ContentList;
  images(content: any){
    console.log(`Company Id: ${content.id}`);
    console.log(`Company Title: ${content.title}`);
  }
  searchForCompany(){
    this.CompanyExists = this.contents.some(content => content.title.toUpperCase() === this.title.toUpperCase());
    if (this.CompanyExists){
      this.contents.map(content => {
        if (content.title.toUpperCase() === this.title.toUpperCase()) {
          this.CompanyData = content
        }
      })
    } else {
      this.CompanyData = null
    }
    this.AllCompanies = false;
    this.CompsByType = false;
  }
  searchForCompaniesType(){
    this.CompaniesTypeExist = this.contents.some(content => content.type?.toUpperCase() === this.type.toUpperCase());
    let SameType:any = []
    let DifferentType:any = []
    let TypeNotSet:any = []
    this.contents.map(content => {
      if(content.type?.toUpperCase() === this.type.toUpperCase()){
        SameType.push(content)
      } else if(!content.type || content.type == ''){
        TypeNotSet.push(content)
      } else {
        DifferentType.push(content)
      }
    })
    {SameType.length>0 ?
      this.CompaniesType = SameType : 
        (TypeNotSet.length>0 ?
          this.CompaniesType = TypeNotSet :
          this.CompaniesType = DifferentType
        )
    }
    this.AllCompanies = false;
    this.CompsByType = false;
  }
  DisplayAll(){
    this.CompanyData = null;
    this.CompanyExists = null;
    this.CompanyData = null;
    this.CompaniesTypeExist = null;
    this.CompaniesType = [];
    this.title = ''
    this.type = ''
    this.AllCompanies = true;
    this.CompsByType = false;
  }
  CompaniesByType(){
    this.DisplayAll()
    this.AllCompanies = false;
    this.CompsByType = true;
    this.contents.map(content => {
      if(content.type){
        {!this.CompTypes.includes(content.type) && this.CompTypes.push(content.type)}
      }
    })
  }

  // addContent(newContent: Content){
  //   const AddPromise = new Promise((resolve, reject) => {
  //     this.contents.push(newContent);
  //     this.contents = [...this.contents];
  //     resolve(newContent.title);
  //   });
  //   AddPromise.then(title => {
  //     console.log(`Company "${title}" succesfully added to the list!`);
  //     //Clear the input fields
  //     this.errMsg = false;
  //   }).catch(err => {
  //     this.errMsg = true,
  //     console.log(`Company not added due to error: ` + err)
  //   });
  // }

  addContent(newCompany: Content): void {
    this.CompaniesService.addCompany(newCompany).subscribe(newCompanyFromServer =>
      this.contents.push(newCompanyFromServer)
    );
  }

  updateContentInList(CompanyId: Content): void {
    this.CompaniesService.updateContent(CompanyId).subscribe(() =>
      console.log("Content updated successfully")
    );
  }

  constructor(private CompaniesService: CompaniesService){
      // this.contentList = new ContentList(); 
      // this.contents= [
      //   {id: 0,
      //     title: "ENBRIDGE",
      //     description:
      //     `ENBRIDGE is Oil and Gas company, Natural Gas utility company&nbsp;with headquarters in Canada. Enbridge is North America’s largest energy infrastructure company with an extensive delivery network of crude oil, natural gas and renewable energy.&nbsp;Headquarters is in Canada.
      //     It has 27,415 kilometers pipelines and produces 3 million barrels per day. Distributes natural gas. Produces Wind Power, Solar Power, GeoThermal Power, Hydro Electric Power.    
      //     As on 2020, more than 11,200 employees are working for Enbridge company.
      //     Enbridge Business:
      //     Crude Oil Pipelines moves approximately 25% of North American crude oil demand, serving 12 million barrels per day (bpd) of refining capacity and connecting producers to the best markets in the U.S. Midwest, the Gulf Coast and Eastern Canada.
      //     Gas Transmission and Midstream transports nearly 20% of the natural gas consumed in the U.S., connecting to key residential, industrial and commercial markets totaling approximately 170 million people as well as power generation facilities across the continent.
      //     Gas Distribution and Storage (Enbridge Gas) is the largest natural gas utility in North America by throughput and serves approximately 12 million people with our 3.8 million meter connections in Ontario and Quebec.
      //     Renewable Power Generation has interests in more than 30 renewable power facilities, including a growing presence in offshore wind in Europe. Our operating facilities have the capacity to generate about 1,750 MW (net ownership) of zero-emission energy in North America and Europe.
      //     `,
      //     creator: "Enbridge Gas",
      //     imgURL: "https://www.enbridgegas.com/-/media/Extranet-Pages/residential/Landing-page/Hero-image/HWP_Hero-Banner-Feb-Bill-insert.ashx?rev=fd04d671d9454e2bba55aacb87dde1a6",
      //     type: 'Natural Gas',
      //     tags: ['Natural Gas'],
      //     address: '3840 Rhodes Dr, Windsor, ON N9A 6N7',
      //     email: 'careers@enbridge.com',
      //     phone: '+1 888-774-3111 / +1-877-362-7434 / +1-866-763-5427',
      //     url: 'https://www.value.today/company/enbridge',
      //     website: 'https://www.enbridgegas.com/careers',
      //     status: false,
      //   },
      //   {id: 1,
      //     title: "CANADIAN PACIFIC RAILWAY",
      //     description: `
      //     Canadian Pacific Railway es una red ferroviaria de Clase 1 (que en Canadá significa que ha tenido beneficios superiores a 250 millones de dólares), conocida como "CP Rail" entre 1968 y 1996, operada por Canadian Pacific Railway Limited. Su red ferroviaria se extiende desde Vancouver hasta Montreal, además de cubrir algunas ciudades importantes de los Estados Unidos, como Mineápolis, Chicago y Nueva York. Su sede central se encuentra en Calgary, Alberta.
      //     `,
      //     creator: "https://www.cpr.ca/en/choose-rail/mexico",
      //     imgURL: 'https://www.cpr.ca/responsiveimages/banners/careers-landing-060122.jpg',
      //     type: 'Railway transportation',
      //     tags: ['Potasah','Shipping to Mexico','https://www.cpr.ca/en/choose-rail/mexico'],
      //     address: 'Canadian Pacific, 7550 Ogden Dale Road S.E. Calgary, AB T2C 4X9',
      //     email: 'https://www.cpr.ca/en/contact-us#careers',
      //     phone: '+1 888-333-8111, +1-888-333-6370, +1-800-855-0511',
      //     url: 'https://www.value.today/company/canadian-pacific-railway',
      //     website: 'https://www.cpr.ca/en/careers',
      //     status: false,
      //   },
      //   {id: 2,
      //     title: "K+S Potash Canada",
      //     description: `
      //     K+S Potash Canada is part of the K+S Group, a German-based company that has been mining and processing potash and salt for over 125 years. At our Bethune solution potash mine near Moose Jaw, Saskatchewan, K+S Potash Canada extracts potash crude salt which is further processed into three types of potassium chloride. Our products are used as natural fertilizers and compacted for use in a variety of industrial applications.Bethune is the first greenfield potash mine in the Province of Saskatchewan in more than 40 years and enables K+S to produce high quality potash for generations to come. With this facility, K+S can more easily reach the markets in Asia, as well as North and South America, and is well-equipped for expansion of total capacity as markets grow.Bethune is a solution mine. Solution mining is the process of mining underground water-soluble minerals by dissolving the minerals with water. The mineral-rich solution (called brine) is then extracted from the ground and the minerals are recovered from it.
      //     QUESTIONS ABOUT THE PROCESS?
      //     If you need help with your application or you have additional questions, reach out to our recruitment team at:
      //     ksrecruit@ks-potashcanada.com This address is for inquiries only – applications sent to this address will not be processed.`,
      //     creator: "K+S Potash Canada",
      //     imgURL: 'https://www.ks-potashcanada.com/wp-content/uploads/2022/06/teaser-business.jpg',
      //     type: 'Meals industry',
      //     tags: ['Potash in Calgary','Internship'],
      //     address: 'address 2',
      //     email: 'ksrecruit@ks-potashcanada.com',
      //     phone: '(306) 385-8000',
      //     url: 'https://www.ks-potashcanada.com/',
      //     website: 'https://www.ks-potashcanada.com/culture-and-benefits/',
      //     status: false,
      //   },
      //   {id: 3,
      //     title: "CANADIAN NATURAL RESOURCES",
      //     description: "CANADIAN NATURAL RESOURCES is Oil and Gas company with headquarters in Calgary, Canada with business operation in exploration, development and production of oil and gas products. Headquarters is in Canada. Canadian Natural is a senior oil and natural gas production company, with continuing operations in its core areas located in western Canada, the U.K. portion of the North Sea and Offshore Africa.",
      //     creator: "CANADIAN NATURAL",
      //     imgURL: 'https://www.cnrl.com/content/uploads/2022/12/Budget_Home-Carousel-Image.jpg',
      //     type: 'Energy',
      //     tags: ['Oil and Natural gas'],
      //     address: '2100, 855 - 2 Street S.W. Calgary, AB T2P 4J8',
      //     email: 'paul.mendes@cnrl.com',
      //     phone: '(403) 517-6700, 403 514-7605',
      //     url: 'https://www.cnrl.com/careers/student-opportunities/',
      //     website: 'https://www.cnrl.com/',
      //     status: false,
      //   },
      //   {id: 4,
      //     title: "TC ENERGY CORPORATION",
      //     description: "TC ENERGY CORPORATION business is supply of natural gas and crude oil through pipelines and generates electricity. Headquarters is in Calgary, Canada.",
      //     creator: "TC ENERGY CORPORATION",
      //     imgURL: 'https://www.tcenergy.com/siteassets/about/contact/transcanada-tower-calgary-1140x640.jpg',
      //     type: 'Energy',
      //     tags: ['Energy sector', 'Mexico'],
      //     address: '450 - 1 Street S.W. Calgary, AB, Canada, T2P 5H1',
      //     email: 'hr_services@tcenergy.com',
      //     phone: '1-888-982-7222, Mexico Phone 800-111-3333, Alberta 1-800-242-3447, 1-403-920-7859, Human Resources 1-877-669-8111',
      //     url: 'https://www.tcenergy.com/about/careers/',
      //     website: 'https://www.tcenergy.com/',
      //     status: false,
      //   },
      //   {id: 5,
      //     title: "SUNCOR ENERGY",
      //     description: "SUNCOR ENERGY is Canada based Energy, Oil and Gas Company. Headquarters is in Canada.",
      //     creator: "SUNCOR ENERGY",
      //     imgURL: 'https://sustainability-prd-cdn.suncor.com/-/media/project/suncor/images/home/rich-kruger.jpg?mw=1366&modified=20230221213429&hash=F10D05C801EB34F9625D0E1CAAAB0BC2',
      //     type: 'Energy',
      //     tags: ['Energy'],
      //     address: 'P.O. Box 2844, 150 - 6 Avenue S.W. Calgary, Alberta, Canada T2P 3E3',
      //     email: 'media@suncor.com',
      //     phone: '403-296-8000, ',
      //     url: 'https://www.suncor.com/en-ca/contact-us#employment-opportunities-%E2%80%93-all-locations',
      //     website: 'https://suncor.wd1.myworkdayjobs.com/Suncor_External',
      //     status: false,
      //   },
      //   {id: 6,
      //     title: "CENOVUS ENERGY",
      //     description: "Cenovus Energy is a integrated oil and natural gas company. The Company is owner of two projects that are producing oil, Christina Lake and Foster Creek. The headquarters is in Canada.",
      //     creator: "CENOVUS ENERGY",
      //     imgURL: 'https://mc-ced23ebb-4707-4c95-9c94-3171-cdn-endpoint.azureedge.net/-/media/Project/WWW/Images/banners/our-company-hero-slim.png?rev=9b85a79a5f8f4aeeba1cc6413bb144b7&sc_lang=en',
      //     type: 'Energy',
      //     tags: ['https://www.cenovus.com/Careers'],
      //     address: '225 6 Ave SW, PO Box 766, Calgary, AB T2P 0M5',
      //     email: 'questions&comments@cenovus.com',
      //     phone: '403-766-2000',
      //     url: 'https://www.value.today/company/cenovus-energy',
      //     website: 'https://www.cenovus.com/',
      //     status: false,
      //   },
      //   {id: 7,
      //     title: "IMPERIAL OIL",
      //     description: "IMPERIAL OIL is Canada based Oil and Gas Company and it has Petroleum refinery business. Headquarters is in Canada.",
      //     creator: "IMPERIAL OIL",
      //     imgURL: 'https://www.imperialoil.ca/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/84894-50059/options/keepaspectratio/strathcona',
      //     type: 'Energy',
      //     tags: ['https://www.bma.upatras.gr/images/canada.pdf'],
      //     address: '3187 SOUTHEAST CALGARY, CANADA, Closed office: 237 4 Ave SW, Calgary, AB T2P 3M9, 505 Quarry Park Blvd SE, Calgary, AB T2C 5N1',
      //     email: 'employ@essoimperialoil.ca',
      //     phone: '+1 587-315-1259, (403) 237-3737',
      //     url: 'https://www.value.today/company/imperial-oil',
      //     website: 'https://www.imperialoil.ca/en-ca/careers/careers',
      //     status: false,
      //   },
      //   {id: 8,
      //     title: "SHAW COMMUNICATIONS",
      //     description: "SHAW COMMUNICATIONS is Telecom Company with headquarters in Calgary, Canada. Provides Telephone, Television, Internet and Mobile services.",
      //     creator: "SHAW COMMUNICATIONS",
      //     imgURL: 'https://images.ctfassets.net/tzb4ihmthaev/5rUDHleYOI7odNvxcgmyWi/a25ce61491227c140412574caa183439/1MHomes-superpromo-image-L_2x.jpg?q=80&fl=progressive',
      //     type: 'Comunications',
      //     tags: ['Comunications', 'https://www.shaw.ca/corporate/careers', 'https://www.shaw.ca/corporate/careers/people-departments'],
      //     address: '630 3 Ave SW, Calgary, AB, T2P 4L4',
      //     email: 'NotAvailable',
      //     phone: '+1 888-472-2222',
      //     url: 'https://www.value.today/company/shaw-communications',
      //     website: 'https://www.shaw.ca/',
      //     status: false,
      //   },
      //   {id: 9,
      //     title: "CANADIAN UTILITIES",
      //     description: "Canada Based Utility Company with approximately 5,200 employees and assets of $21 billion, is an ATCO Company. Generates Electricity, distributes and transmission of natural gas and electricity is core business. ATCO is a diversified global corporation delivering service excellence and innovative business solutions in",
      //     creator: "ATCO CANADIAN UTILITIES",
      //     imgURL: 'https://www.atco.com/content/dam/web/home-page/wheat-power-transmission-line-article-tile.png/jcr:content/renditions/jpeg-1920-1920.jpeg',
      //     type: 'Utilities',
      //     tags: ['https://www.atco.com/en-ca/about-us/careers.html', 'https://www.atco.com/en-ca/about-us/careers/hiring-process.html'],
      //     address: '5302 Forand St SW, Calgary, AB T3E 8B4',
      //     email: 'Not Available',
      //     phone: '+1 844-687-2826',
      //     url: 'https://www.value.today/company/canadian-utilities',
      //     website: 'https://www.atco.com/en-ca.html',
      //     status: false,
      //   },
      //   {id: 10,
      //     title: "KEYERA",
      //     description: "KEYERA provides services to Oil and Gas sector companies to store and transport oil and gas. This company provides essential services to oil and gas producers in the Western Canada Sedimentary Basin, including NGL gathering and processing, fractionation, storage, transportation, logistics and marketing services. We also provide diluent logistics services for oil sands customer. Headquarters in Canada",
      //     creator: "KEYERA",
      //     imgURL: 'https://images.thestar.com/qmwaqpKtvaUqtaD8DGt86VGxerY=/1086x869/smart/filters:cb(1660742198110):format(webp)/https://www.thestar.com/content/dam/thestar/business/2022/08/17/keyera-and-canadian-national-railway-to-evaluate-alberta-terminal-project/20220817080844-e4b661cbf547a159653e1ffcd29a9c9178960a40ef860bb8089a60ce4eb12e05.jpg',
      //     type: 'Energy',
      //     tags: ['https://www.keyera.com/careers/'],
      //     address: 'Ampersand, West Tower 200, The, 144 4 Ave SW #6th, Calgary, AB T2P 3N4',
      //     email: 'careers@keyera.com',
      //     phone: '(403) 205-8300',
      //     url: 'https://www.value.today/company/keyera',
      //     website: 'https://www.keyera.com/',
      //     status: false,
      //   },
      //   {id: 11,
      //     title: "BOARDWALK REAL ESTATE INVESTMENT TRUST",
      //     description: "Boardwalk Real Estate Investment Trust is a Commercial Real Estate Investment company. The headquarters is in Canada",
      //     creator: "BOARDWALK REAL ESTATE INVESTMENT TRUST",
      //     imgURL: 'https://www.bwalk.com/media/1033/lavish-amenities.jpg?anchor=center&mode=crop&width=380&height=380&rnd=131776716390000000&format=webp',
      //     type: 'Real Estate',
      //     tags: ['https://www.bwalk.com/en-ca/careers/'],
      //     address: '200 – 1501 1st St. SW Calgary, AB T2R 0W1',
      //     email: 'Not available',
      //     phone: '1-800-310-9255, (403) 531-9255',
      //     url: 'https://www.value.today/company/boardwalk-real-estate-investment-trust',
      //     website: 'https://www.bwalk.com/en-ca/',
      //     status: false,
      //   },
      //   {id: 12,
      //     title: "Undefined",
      //     description: "Undefined",
      //     creator: "Undefined",
      //     // imgURL: 'https://padlet.net/packs/media/images/laboratory_dark-a9646ce910d22acd31ac0cb8ecbf6f4e.png',
      //     // type: '',
      //     tags: ['Undefined'],
      //     address: 'Undefined',
      //     email: 'Undefined',
      //     phone: 'Undefined',
      //     url: 'Undefined',
      //     website: 'Undefined',
      //     status: false,
      //   },
      // ]
  }
  ngOnInit(){
    this.CompaniesService.getCompanies().subscribe(companies => this.contents = companies);
  }
}