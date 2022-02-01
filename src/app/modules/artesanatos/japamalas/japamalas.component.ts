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

  imageCollection: Array<object> = 
  [
    {
    image: '../../../../assets/japamala1.jpg',
    thumbImage: '../../../../assets/japamala1.jpg',
    alt: 'Japamala 1',
    title: '',
}, {
    image: '../../../../assets/japamala2.webp',
    thumbImage: '../../../../assets/japamala2.webp',
    title: '',
    alt: 'foto-japamala'
},
{
    image: '../../../../assets/japamala3.png',
    thumbImage: '../../../../assets/japamala3.png',
    title: '',
    alt: 'foto-japamala'
},
{
    image: '../../../../assets/japamala4.webp',
    thumbImage: '../../../../assets/japamala4.webp',
    title: '',
    alt: 'foto-japamala'
},
{
    image: '../../../../assets/japamal5.jpg',
    thumbImage: '../../../../assets/japamal5.jpg',
    title: '',
    alt: 'foto-japamala'
},
];


}
