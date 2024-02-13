import { Component } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent {
  imageUrl:string='';
  showModel(Url:string){
    this.imageUrl = Url;
    return this.imageUrl;
  }

  closeModel(){
    this.imageUrl = ''
  }
}

