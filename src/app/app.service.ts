import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  serviceData = {
    "H1":"Overerts",
    "aHome":"Home",
    "aAboutUs":"About Us",
    "aGallery":"Gallery",
    "aServices":"Services",
    "aPriceList":"Price List",
    "aContacts":"Contacts",

    "pClassHeading1":"Cum sociis natoque penatibus",
    "h2ClassHeading1":"Tincidunt nec venenatis etiam tellus",
    "p1":"Et magnis dis montes ridiculus mus sed mi eros molestie eget mauris",
    "aClassBtn1":"Parturient",
    "aClassBtn1Inverse":"Nascetur",

    "pClassHeading2":"Urna gravida eget consequat",
    "h2ClassHeading2":"Rhoncus pharetra ligula vestibulum",
    "p2":"Sed varius dui eget convallis nibh lectus ultricies lacus ac auctor lacus",
    "aClassBtn2":"Consequat",
    "aClassBtn2Inverse":"Phasellus",

    "pClassHeading3":"Porta congue lacus eleifend",
    "h2ClassHeading3":"Efficitur porta quisque nisl odio suscipit",
    "p3":"Ante et velit in elit sapien vulputate non mattis ut euismod sed nisi",
    "aClassBtn3":"Accumsan",
    "aClassBtn3Inverse":"Molestie",

    "h6_1":"est ut dolor tristique",
    "p_1":"maecenas tempus vestibulum felis in efficitur sed facilisis urna metus interdum pretium mi dignissim et fusce.",
    "pClasBtmSpace1":"sagittis tempor nullam iaculis dolor id condimentum cursus duis scelerisque ac metus amet laoreet vestibulum dictum.",
    "aFaceBook":"https://www.facebook.com",
    "aTwitter":"https://www.twitter.com",
    "aDribbble":"https://dribbble.com/",
    "aLinkedIn":"https://linkedin.com",
    "aGooglePluse":"https://plus.google.com/",
    "aVk":"https://vk.com",

    "h6Heading1":"luctus vestibulum magna",
    "address":"Street Name & Number, Town, Postcode/Zip",
    "phone":"+00 (123) 456 7890",
    "fax":"+00 (123) 456 7890",
    "email":"info@domain.com",

    "h6Heading2":"velit porttitor ac euismod",
    "h2Nospace":"ut porttitor sit amet",
    "pClassNospace1":"nunc sed eget augue varius dapibus mi eget lobortis risus nunc a leo",
    
    "h2Nospace2":"finibus commodo ex eu",
    "pClassNospace2":"pharetra nam sit amet lacus tempor ipsum finibus luctus sed fringilla"

  }

  constructor() { }

  getData(){
    return this.serviceData
  }
}
