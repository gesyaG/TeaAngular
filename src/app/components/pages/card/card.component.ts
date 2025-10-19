import {Component, Input, OnInit} from '@angular/core';
import {CatalogType} from "../../../types/catalog.type";
import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "../../../services/card.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() catalogCard: CatalogType;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cardService: CardService) {
    this.catalogCard = {
      image: '',
      title: '',
      id: 0,
      description: '',
    }
  }

  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params
      .subscribe(params => {
      if (params['id']) {
        this.cardService.getCard(+params['id'])
          .pipe(
            tap(() => {
              this.loading = false;
            })
          )
          .subscribe({
            next: (data) => {
              this.catalogCard = data;
            },
            error: (error) => {
              console.error(error);
              this.router.navigate(['/']);
            }
          })
      }
    })
  }

}
