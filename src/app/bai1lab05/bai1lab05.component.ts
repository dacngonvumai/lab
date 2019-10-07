import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1lab05',
  templateUrl: './bai1lab05.component.html',
  styleUrls: ['./bai1lab05.component.css']
})
export class Bai1lab05Component implements OnInit {

  hcn = {
    chieudai : null,
    chieurong: null,
    chuvi : null,
    dientich : null,
  };
  constructor() { }





  ngOnInit() {
  }
  tinh(){
    this.hcn.chuvi=(this.hcn.chieudai*1+this.hcn.chieurong*1)*2
    this.hcn.dientich=this.hcn.chieudai*this.hcn.chieurong
  }

}
