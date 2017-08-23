import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../model/hero';

// import { HEROES } from '../dummy/heroes-mock';

@Injectable()
export class HeroService {

    private apiUrl: string = 'api/heroes';  // URL to web api
    
    constructor (private http: Http) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getHeroes(): Promise<Hero[]> {

        return this.http.get(this.apiUrl)
                   .toPromise()
                   .then(response => response.json().data as Hero[])
                   .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        
        const url = `${this.apiUrl}/${id}`;

        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Hero)
                        .catch(this.handleError)
    }

    // getHeroesSlowley(): Promise<Hero[]> {
    //     return new Promise(resolve => {
    //         setTimeout(() => resolve(this.getHeroes()), 2000);
    //     });
    // }
}