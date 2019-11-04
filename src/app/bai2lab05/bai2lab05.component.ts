import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2lab05',
  templateUrl: './bai2lab05.component.html',
  styleUrls: ['./bai2lab05.component.css']
})
export class Bai2lab05Component implements OnInit {

  dulieu={
    hoten:null,
    ngaysinh:null,
    gioitinh:null,
    diem:null,
    hocluc:null,
    };
  constructor() { }

  ngOnInit() {
  }
  xeploai(){
    if(this.dulieu.diem<5){
      this.dulieu.hocluc="Rớt";
    }
    else{
    this.dulieu.hocluc="Đậu";
  }
}

}
