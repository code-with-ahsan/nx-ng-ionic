import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

export interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class RandomuserService {
  cachedUsers: IUser[] = [];
  constructor(private http: HttpClient) {
    const users = JSON.parse(localStorage.getItem('ruw') || '[]');
    this.cachedUsers = users;
  }

  getRandomUsers(): Observable<IUser[]> {
    if (this.cachedUsers.length) {
      console.log('returned from cache');
      return of(this.cachedUsers);
    }
    return this.http
      .get<{
        results: IUser[];
      }>('https://randomuser.me/api/?results=10&seed=cwa')
      .pipe(
        map((response) => {
          this.cachedUsers = response.results;
          localStorage.setItem('ruw', JSON.stringify(response.results));
          return response.results;
        })
      );
  }
}
