import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Logement {
  id: number;
  title: string;
  description: string;
  price: number;
  address: string;
  nbBed: number;
  nbRoom: number;
  nbTravelerMax: number;
  createdAt: string;
  slug: string;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogementService {
  public logements: Logement[] = [];
  public loaded = false;
  public apiUrl = 'http://antonintouron.fr/private/duckbnbapi/public/api/housings';
  constructor(private http: HttpClient) { }
  load(): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.get(this.apiUrl, { responseType: 'text' }).subscribe(data => {
        this.logements = JSON.parse(data);
        resolve(true);
      }, error => {console.log(error);
      });
    });
  }
  getLogement(slug): Logement {
    return this.logements.find(logement => logement.slug === slug);
  }
  getFilteredLogement(searchTerm): Promise<boolean> {
    return new Promise((resolve) => {
      // tslint:disable-next-line:max-line-length
      this.http.get('http://antonintouron.fr/private/duckbnbapi/public/api/housings/search/' + searchTerm, { responseType: 'text' }).subscribe(data => {
        this.logements = JSON.parse(data);
        resolve(true);
      }, error => {console.log(error);
      });
    });
  }
}
