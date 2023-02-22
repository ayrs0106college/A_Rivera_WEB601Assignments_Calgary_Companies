import { Component } from '@angular/core';
// import { Content } from '../helper-files/content-interface';
// import  { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  // contentList: ContentList;

  // constructor(){
  //   this.contentList = new ContentList(); 

  //   this.contentList.addCompany({id: 0,
  //     title: "ENBRIDGE",
  //     description:
  //     `<div class="field--item"><p><em><strong>ENBRIDGE</strong></em> is Oil and Gas company, Natural Gas utility company&nbsp;with headquarters in Canada. Enbridge is North America’s largest energy infrastructure company with an extensive delivery network of crude oil, natural gas and renewable energy.&nbsp;Headquarters is in Canada.</p>

  //     <p>It has 27,415 kilometers pipelines and produces 3 million barrels per day. Distributes natural gas. Produces Wind Power, Solar Power, GeoThermal Power, Hydro Electric Power.</p>
      
  //     <p>As on 2020, more than 11,200 employees are working for Enbridge company.</p>
      
  //     <h3><strong>Enbridge Business:</strong></h3>
      
  //     <p><strong>Crude Oil Pipelines </strong>moves approximately 25% of North American crude oil demand, serving 12 million barrels per day (bpd) of refining capacity and connecting producers to the best markets in the U.S. Midwest, the Gulf Coast and Eastern Canada.</p>
      
  //     <p><br>
  //     <strong>Gas Transmission and Midstream transports </strong>nearly 20% of the natural gas consumed in the U.S., connecting to key residential, industrial and commercial markets totaling approximately 170 million people as well as power generation facilities across the continent.</p>
      
  //     <p><br>
  //     <strong>Gas Distribution and Storage (Enbridge Gas)</strong> is the largest natural gas utility in North America by throughput and serves approximately 12 million people with our 3.8 million meter connections in Ontario and Quebec.</p>
      
  //     <p><br>
  //     <strong>Renewable Power Generation</strong> has interests in more than 30 renewable power facilities, including a growing presence in offshore wind in Europe. Our operating facilities have the capacity to generate about 1,750 MW (net ownership) of zero-emission energy in North America and Europe.</p>
  //     </div>`,
  //     creator: "Enbridge Gas",
  //     imgURL: 'https://www.enbridgegas.com/-/media/Extranet-Pages/residential/Landing-page/Hero-image/HWP_Hero-Banner-Feb-Bill-insert.ashx?rev=fd04d671d9454e2bba55aacb87dde1a6',
  //     type: 'Natural Gas Company',
  //     tags: ['Natural Gas'],
  //     address: '3840 Rhodes Dr, Windsor, ON N9A 6N7',
  //     email: 'careers@enbridge.com',
  //     phone: '+1 888-774-3111 / +1-877-362-7434 / +1-866-763-5427',
  //     url: 'https://www.value.today/company/enbridge',
  //     website: 'https://www.enbridgegas.com/careers',
  //     status: false,
  //   })
  //   this.contentList.addCompany({id: 1,
  //     title: "CANADIAN PACIFIC RAILWAY",
  //     description: `
  //     <p>Canadian Pacific Railway es una red ferroviaria de Clase 1 (que en Canadá significa que ha tenido beneficios superiores a 250 millones de dólares), conocida como "CP Rail" entre 1968 y 1996, operada por Canadian Pacific Railway Limited. Su red ferroviaria se extiende desde Vancouver hasta Montreal, además de cubrir algunas ciudades importantes de los Estados Unidos, como Mineápolis, Chicago y Nueva York. Su sede central se encuentra en Calgary, Alberta.</p>
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
  //   })
  //   this.contentList.addCompany({id: 2,
  //     title: "K+S Potash Canada",
  //     description: `<div class="elementor-widget-container">
  //     <p>K+S Potash Canada is part of the K+S Group, a German-based company that has been mining and processing potash and salt for over 125 years. At our Bethune solution potash mine near Moose Jaw, Saskatchewan, K+S Potash Canada extracts potash crude salt which is further processed into three types of potassium chloride. Our products are used as natural fertilizers and compacted for use in a variety of industrial applications.</p><p>Bethune is the first greenfield potash mine in the Province of Saskatchewan in more than 40 years and enables K+S to produce high quality potash for generations to come. With this facility, K+S can more easily reach the markets in Asia, as well as North and South America, and is well-equipped for expansion of total capacity as markets grow.</p><p>Bethune is a solution mine. Solution mining is the process of mining underground water-soluble minerals by dissolving the minerals with water. The mineral-rich solution (called brine) is then extracted from the ground and the minerals are recovered from it.</p>						</div>
  //     <p>QUESTIONS ABOUT THE PROCESS?
  //     If you need help with your application or you have additional questions, reach out to our recruitment team at:
  //     </br><a href="ksrecruit@ks-potashcanada.com">ksrecruit@ks-potashcanada.com</a> This address is for inquiries only – applications sent to this address will not be processed.</p>`,
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
  //   })
  //   this.contentList.addCompany({id: 3,
  //     title: "Company 3",
  //     description: "Description 3",
  //     creator: "Creator 3",
  //     imgURL: '"url 3',
  //     type: 'type 3',
  //     tags: ['tags 3'],
  //     address: 'address 3',
  //     email: 'email 3',
  //     phone: 'phone 3',
  //     url: '',
  //     website: '',
  //     status: false,
  //   })
  // }
}

