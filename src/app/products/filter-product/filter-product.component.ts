import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-filter-product',
    templateUrl: './filter-product.component.html',
    styleUrl: './filter-product.component.css',
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class FilterComponent{

    @Input() all:number=0;
    @Input() inStock:number=0;
    @Input() outOfStock:number=0;

    selectedFilter: string='All';

    @Output() childEmitter: EventEmitter<String>=new EventEmitter<String>();

    sendSelectedFilter(){
        this.childEmitter.emit(this.selectedFilter)

    }
}