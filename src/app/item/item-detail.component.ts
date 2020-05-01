import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    items: any ;

    constructor(
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        this.itemService.getItems().subscribe(
            response => {
             this.items = response;
         }, error => console.log(error));
    }
}
