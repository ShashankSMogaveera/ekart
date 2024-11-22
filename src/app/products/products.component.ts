import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {products} from './products'
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter-product/filter-product.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, FilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productList=products
  all=products.length
  inStock=products.filter(item=> item.is_in_inventory).length
  outOfStock= this.all-this.inStock

  selectedFilter:string='all';

  receiveSelectedFilter(e:any){
    console.log(e)
    this.selectedFilter=e;
  }

  @Input() searchText:string='h';

}
