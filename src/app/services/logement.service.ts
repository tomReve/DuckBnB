import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Logement {
  id: number;
  title: string;
  description: string;
  price: number;
  address: string;
  nb_bed: number;
  nb_room: number;
  nb_traveler_max: number;
  creation_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogementService {
  public logements: Logement[] = [];
  public loaded = false;
  public apiUrl = 'http://149.91.88.101/private/duckbnbapi/public/api/housings';
  constructor(private http: HttpClient) { }
  load(): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.get(this.apiUrl, { responseType: 'text' }).subscribe(data => {
        this.logements = JSON.parse(data);
        console.log(this.logements);
        resolve(true);
      }, error => {console.log(error);
      });
    });
  }
  getLogement(id: number): Logement {
    return this.logements.find(logement => logement.id === id);
  }
}
