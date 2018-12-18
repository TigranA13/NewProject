import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  serviceData = {
    

    "oneHalfeFirstImg1":"https://via.placeholder.com/320x240.png",
    "h3ClassHeading1":"Varius ac felis eget",
    "newP1":"Sociosqu litora torquent per conubia nostra per inceptos himenaeos curabitur non libero quis ligula congue quiss",
    "footerA":"Read More",

    "oneHalfeFirstImg2":"https://via.placeholder.com/320x240.png",
    "h3ClassHeading2":"Varius ac felis eget",
    "newP2":"Sociosqu litora torquent per conubia nostra per inceptos himenaeos curabitur non libero quis ligula congue quis",


    "oneHalfeFirstImg3":"https://via.placeholder.com/320x240.png",
    "h3ClassHeading3":"Varius ac felis eget",
    "newP3":"Sociosqu litora torquent per conubia nostra per inceptos himenaeos curabitur non libero quis ligula congue quis",


    "oneHalfeFirstImg4":"https://via.placeholder.com/320x240.png",
    "h3ClassHeading4":"Varius ac felis eget",
    "newP4":"Sociosqu litora torquent per conubia nostra per inceptos himenaeos curabitur non libero quis ligula congue quis",


    "h2ClassHeadinNosapse1":"Vehicula donec dignissim",
    "pClassNosapse1":"Varius porta maecenas vestibulum efficitur elit eu lacinia massa",
    "h6Heading1":"Hendrerit quis lorem",
    "pAfterH6_1":"Iaculis sagittis sapien at porta justo rhoncus sed etiam et metus justo quisque",


    "h6Heading2":"Hendrerit quis lorem",
    "pAfterH6_2":"Iaculis sagittis sapien at porta justo rhoncus sed etiam et metus justo quisque",


    "h6Heading3":"Hendrerit quis lorem",
    "pAfterH6_3":"Iaculis sagittis sapien at porta justo rhoncus sed etiam et metus justo quisque",


    "h6Heading4":"Hendrerit quis lorem",
    "pAfterH6_4":"Iaculis sagittis sapien at porta justo rhoncus sed etiam et metus justo quisque",


    "h6Heading5":"Hendrerit quis lorem",
    "pAfterH6_5":"Iaculis sagittis sapien at porta justo rhoncus sed etiam et metus justo quisque",


    "h6Heading6":"Hendrerit quis lorem",
    "pAfterH6_6":"Iaculis sagittis sapien at porta justo rhoncus sed etiam et metus justo quisque",

    "wrapperBgdedH2":"Semper turpis eget",
    "wrapperBgdedP":"Maximus arcu dictum a nunc molestie odio sit amet ipsum",

    "aClassExerptImg1":"https://via.placeholder.com/320x320.png",
    "h6HeadinFontX1_1":"Egestas consectetur",
    "exerptP1":"Rhoncus lectus sed sagittis dictum phasellus tristique",

    "aClassExerptImg2":"https://via.placeholder.com/320x320.png",
    "h6HeadinFontX1_2":"Egestas consectetur",
    "exerptP2":"Rhoncus lectus sed sagittis dictum phasellus tristique",

    "aClassExerptImg3":"https://via.placeholder.com/320x320.png",
    "h6HeadinFontX1_3":"Egestas consectetur",
    "exerptP3":"Rhoncus lectus sed sagittis dictum phasellus tristique",

    "aClassExerptImg4":"https://via.placeholder.com/320x320.png",
    "h6HeadinFontX1_4":"Egestas consectetur",
    "exerptP4":"Rhoncus lectus sed sagittis dictum phasellus tristique"
  };

  constructor() {
  }

  getData(){
    return this.serviceData
  }

}
