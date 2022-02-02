import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pingentes',
  templateUrl: './pingentes.component.html',
  styleUrls: ['./pingentes.component.scss']
})
export class PingentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageCollection: Array<object> = 
  [
    {
    image: '../../../../assets/ping1.webp',
    thumbImage: '../../../../assets/ping1.webp',
    alt: 'ping 1',
    title: '',
}, {
    image: '../../../../assets/ping2.webp',
    thumbImage: '../../../../assets/ping2.webp',
    title: '',
    alt: 'foto-ping'
},
{
    image: '../../../../assets/ping3.jpg',
    thumbImage: '../../../../assets/ping3.jpg',
    title: '',
    alt: 'foto-ping'
},
{
    image: '../../../../assets/ping4.webp',
    thumbImage: '../../../../assets/ping4.webp',
    title: '',
    alt: 'foto-ping'
},
{
    image: '../../../../assets/japamal5.webp',
    thumbImage: '../../../../assets/japamal5.webp',
    title: '',
    alt: 'foto-ping'
},
];


}
