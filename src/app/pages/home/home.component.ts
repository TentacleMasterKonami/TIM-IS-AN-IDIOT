import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService, IMangaPrev } from '../../services/manga.service';

import { Observable } from 'rxjs';
import {map, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mangas: IMangaPrev[] = [];

  constructor(private api: MangaService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.api.getMangas().subscribe((mangas)=>{
      this.mangas = mangas
    });
  }
}
