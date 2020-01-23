import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService, IManga } from '../../services/manga.service';

import { Observable } from 'rxjs';
import {map, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.component.html',
  styleUrls: ['./manga-page.component.scss']
})
export class MangaPageComponent implements OnInit {
  manga$: Observable<IManga>;
  page$: Observable<number>;

  constructor(private api: MangaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.manga$ = this.route.params.pipe(
      map((params) => parseInt(params.id, 10)),
      filter((id) => !isNaN(id) && id !== null && id !== undefined),
      distinctUntilChanged(),
      switchMap((id) => this.api.getManga(id)),
    );

    this.page$ = this.route.params.pipe(
      map((params) => parseInt(params.page, 10)),
      filter((page) => !isNaN(page) && page !== null && page !== undefined),
      map((page) => page),
      distinctUntilChanged()

    );
  }
}
