import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService, IManga } from '../../services/manga.service';

import { Observable } from 'rxjs';
import {map, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';



@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {
  manga$: Observable<IManga>;

  constructor(private api: MangaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.manga$ = this.route.params.pipe(
      map((params) => parseInt(params.id, 10)),
      filter((id) => !isNaN(id) && id !== null && id !== undefined),
      distinctUntilChanged(),
      switchMap((id) => this.api.getManga(id)),
    );
  }

}
