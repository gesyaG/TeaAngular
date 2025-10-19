import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogType} from "../../../types/catalog.type";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {CardService} from "../../../services/card.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private cardService: CardService, private http: HttpClient, private router: Router) {
  }

  catalog: CatalogType[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.cardService.getCards()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.catalog = data;
            console.log(data);
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        })
  }
}
