import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5lab05',
  templateUrl: './bai5lab05.component.html',
  styleUrls: ['./bai5lab05.component.css']
})
export class Bai5lab05Component implements OnInit {

  nhanviencheck ={
    hoten:null,
    luong: Number,
    gioitinh:"nam",
    tuoi:null,
    rate: null,
  }

  dotuoicheck= [
    {
      tuoi: "duoi 25",
      rate: 0.07
    },
    {
      tuoi: "tu 25 den 40",
      rate: 0.1
    },
    {
      tuoi: "tren 40",
      rate: 0.15
    }
  ]
  
    tongtienthuong: Number = 0;

  tienthuong(){
    if(this.nhanviencheck.gioitinh== "nu")
      this.tongtienthuong=Math.ceil((+this.nhanviencheck.rate)*(+this.nhanviencheck.luong)+200000);
    else
      this.tongtienthuong=(+this.nhanviencheck.rate)*(+this.nhanviencheck.luong)
    return this.tongtienthuong
  }
  constructor() { }

  ngOnInit() {
  }

}
