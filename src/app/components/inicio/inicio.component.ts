import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 car: any[]=[
    {id: 1, name:'Superman',description:'',url:'https://barbarianstyle.net/wp-content/uploads/2016/04/Nice-and-clean-short-haircut-for-guys.jpg'},
    {id: 2, name:'Batman',description:'',url:'https://barbarianstyle.net/wp-content/uploads/2016/04/Extra-sleek-and-slicked-back-guy-haircut.jpg'},
    {id: 5, name:'BatGirl',description:'',url:'https://barbarianstyle.net/wp-content/uploads/2016/04/Topped-with-texture-guys%E2%80%99-haircut.jpg'},
    {id: 3, name:'Robin',description:'',url:'https://barbarianstyle.net/wp-content/uploads/2016/04/Perfectly-undone-haircut-for-guys.jpg'},
    {id: 6, name:'Flash',description:'',url:'https://barbarianstyle.net/wp-content/uploads/2016/04/Superbly-side-parted-guy-haircut.jpg'},
    {id: 7, name:'Flash',description:'',url:'https://barbarianstyle.net/wp-content/uploads/2016/04/Modern-middle-parted-guys%E2%80%99-haircut.jpg'},
    {id: 8, name:'Flash',description:'',url:'https://barbarianstyle.net/wp-content/uploads/2016/04/Undercut-haircut-for-teenage-guys.jpg'},
    {id: 9, name:'Flash',description:'',url:'https://barbarianstyle.net/wp-content/uploads/2016/04/Effortlessly-irresistible-haircut-for-teenage-guys.jpg'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
