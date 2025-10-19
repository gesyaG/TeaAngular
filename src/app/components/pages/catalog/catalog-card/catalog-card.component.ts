import {Component, Input, OnInit} from '@angular/core';
import {CatalogType} from "../../../../types/catalog.type";

@Component({
  selector: 'catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent implements OnInit {

  @Input() catalogCard: CatalogType;

  constructor() {
    this.catalogCard = {
      image: '',
      title: '',
      id: 0,
      description: '',
    }
  }

  ngOnInit(): void {
  }

}
