import { Component, OnInit } from '@angular/core';


interface GroupedData {
  user: any;
  post: any;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  sideA: number=0;
  sideB: number=0;
  sideC: number=0;
  result: string="";

//Integer Operation
  m!: number;
  n!: number;
  result1: number = 0;

    ngOnInit() {
      
    }

    

  checkTriangle() {
    const a = this.sideA;
    const b = this.sideB;
    const c = this.sideC;
    
    if (a > 0 && b > 0 && c > 0) {
      if (a + b > c && a + c > b && b + c > a) {
        this.result = 'YES';
      } else {
        this.result = 'NO';
      }
    } else {
      this.result = 'Invalid input';
    }
  }

  performOperation() {
    if (this.m === undefined || this.n === undefined) {
      this.result1 = 0;
      return;
    }

    let M = this.m;
    const N = this.n;

    while (M >= N) {
      M -= N;
    }

    this.result1 = M;
  }

    

}
