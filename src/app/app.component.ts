import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public inputNumber!: number;
  public options = [{name: 'isPrime'}, {name: 'isFibonacci'}];
  public selectedOption = this.options[0].name;
  public answer = false;

  updateSelectedOption(option: string): void {
    this.selectedOption = option;
    this.checkInputType();
  }

  checkInputType(): void {
    if(!isNaN(this.inputNumber)) {
      this.calculateAnswerBasedOnSelectedOption(this.inputNumber, this.selectedOption);
    }
  }

  calculateAnswerBasedOnSelectedOption(num: number, option: string) {
    var number = Math.round(num);
    number = number > 0 ? number: 1;
    if(option === "isPrime") {
      this.answer = this.isPrime(number);
    } else {
      this.answer = this.isFibonacci(number);
    }
  }

  isPrime = (number: number) => {
    for(let i = 2, s = Math.sqrt(number); i <= s; i++) {
      if(number % i === 0) return false; 
    }
    return number > 1;
  } 

  isFibonacci = (number: number) => {
    if (this.isSquare(5*(number*number)-4) || this.isSquare(5*(number*number)+4)) {
      return true;
    } else { 
      return false; 
    }  
  }

  isSquare(number: number) {
    return number > 0 && Math.sqrt(number) % 1 === 0;
};
}



