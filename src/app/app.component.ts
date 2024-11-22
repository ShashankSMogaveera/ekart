import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent} from '../app/products/products.component'
import { SearchComponent } from '../app/searchbox/search-box.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductsComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ekart';
  count=0;
  searchText:string='';

  incrementCount(){
    this.count++;
  }
  decrementCount(){
    this.count--;
  }

  receiveSearchText(value:string){
    console.log(this.searchText)
    this.searchText=value;
  }
}
