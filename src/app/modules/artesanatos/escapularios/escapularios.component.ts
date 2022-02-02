import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escapularios',
  templateUrl: './escapularios.component.html',
  styleUrls: ['./escapularios.component.scss']
})
export class EscapulariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageCollection: Array<object> = 
  [
    {
    image: '../../../../assets/escap1.jpg',
    thumbImage: '../../../../assets/escap1.jpg',
    alt: 'Japamala 1',
    title: '',
}, {
    image: '../../../../assets/escap2.jpg',
    thumbImage: '../../../../assets/escap2.jpg',
    title: '',
    alt: 'foto-japamala'
},
{
    image: '../../../../assets/escap3.jpg',
    thumbImage: '../../../../assets/escap3.jpg',
    title: '',
    alt: 'foto-japamala'
},
{
    image: '../../../../assets/escap4.jpg',
    thumbImage: '../../../../assets/escap4.jpg',
    title: '',
    alt: 'foto-japamala'
},
];


}

