import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type ID = number;

export interface IManga {
  id: ID;
  title: string;

  pageURLs: string[];

  uploadedAt: string;
}

export interface IMangaPrev {
  id: ID;
  title: string;

  thumbURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  constructor() { }

  getMangas(page = 0, limit = 30): Observable<IMangaPrev[]> {
    return of(
      [
        { id: 3, title: 'Kimetsu no Yaiba3', thumbURL: '/assets/MANGA/Kimetsu no Yaiba3/1.jpg' },
        { id: 2, title: 'Kimetsu no Yaiba2', thumbURL: '/assets/MANGA/Kimetsu no Yaiba2/1.jpg' },
        { id: 1, title: 'Kimetsu no Yaiba1', thumbURL: '/assets/MANGA/Kimetsu no Yaiba/1.jpg' },
      ]
    );
  }

  getManga(id: ID): Observable<IManga> {
    switch(id) {
      case 1: return of(
        {
          id,
          title: 'Kimetsu no Yaiba',

          pageURLs: [
            ...(new Array(4)).fill(0).map((v, i) => '/assets/MANGA/Kimetsu no Yaiba/' + (i+1) + '.jpg'),
            ...(new Array(51)).fill(0).map((v, i) => '/assets/MANGA/Kimetsu no Yaiba/' + (i + 5) + '.png'),
          ],

          uploadedAt: /*new Date().toISOString()//*/ '2020-01-11T18:41:05.568Z'
        }
      );

      case 2: return of(
        {
          id,
          title: 'Kimetsu no Yaiba2',

          pageURLs: [
            ...(new Array(25)).fill(0).map((v, i) => '/assets/MANGA/Kimetsu no Yaiba2/' + (i+1) + '.jpg'),
          ],

          uploadedAt: /*new Date().toISOString()//*/ '2020-01-11T18:41:05.568Z'
        }
      );

      case 3: return of(
        {
          id,
          title: 'Kimetsu no Yaiba3',

          pageURLs: [
            ...(new Array(23)).fill(0).map((v, i) => '/assets/MANGA/Kimetsu no Yaiba3/' + (i+1) + '.jpg'),
          ],

          uploadedAt: /*new Date().toISOString()//*/ '2020-01-11T18:41:05.568Z'
        }
      );
    }

    return of(null);
  }
}
