import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
  mainNavigations:Array<String>=['Home', "Products", "Sale", "New arrival", "Contact", 'Services']
  subNavigations:Array<String>=['Help', "Exchange & Return", "Order Tracker", "Signup?Login"]

}
