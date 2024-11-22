import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search-box',
    templateUrl: '../searchbox/search-box.component.html',
    standalone: true,
    styleUrl: '../searchbox/search-box.component.css',
    imports: [CommonModule, FormsModule]
})
export class SearchComponent{
    searchText:string=''

    searchChange(e:any){
        this.searchText=e.target.value;
    }

    @Output() sendSearchText: EventEmitter<string> = new EventEmitter<string>();

    onSearchClick(){
        this.sendSearchText.emit(this.searchText);
    }

}