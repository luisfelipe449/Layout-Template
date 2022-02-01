import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-japamalas',
  templateUrl: './japamalas.component.html',
  styleUrls: ['./japamalas.component.scss']
})
export class JapamalasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageCollection: Array<object> = [{
    image: '../../../../assets/japamala1.jpg',
    thumbImage: '../../../../assets/japamala1.jpg',
    alt: 'alt of image',
    title: 'title of image'
}, {
    image: '../../../../assets/japamala2.webp',
    thumbImage: '../../../../assets/japamala2.webp', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];


}
