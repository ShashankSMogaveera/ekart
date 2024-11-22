import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-product",
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    standalone:true,
    imports:[CommonModule]
})
export class ProductComponent{
    @Input() prod:{
        id: number,
        name: string,
        description: string,
        brand: string,
        gender: string,
        category: string,
        size: Array<Number>,
        color: Array<string | undefined>,
        price: number,
        discountPrice?:number,
        is_in_inventory: boolean,
        items_left: Number,
        imageURL: string,
        slug: string
      }={
        id: 1,
        name: "Nike React Infinity Run Flyknit",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        brand: "NIKE",
        gender: "MEN",
        category: "RUNNING",
        size: [6, 7, 8, 9, 10],
        color: ["White", "Blue", "Black"],
        price: 160,
        discountPrice:140,
        is_in_inventory: true,
        items_left: 3,
        imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
        slug: "nike-react-infinity-run-flyknit"
      };

      @Input() searchText:string='';
}