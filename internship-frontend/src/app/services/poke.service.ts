import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get<any>(environment.POKE_API_URL + '?limit=' + environment.POKE_LIMIT + '&offset=' + environment.POKE_OFFSET);
  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get<any>(environment.POKE_API_URL + '/' + id);
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getPokemonListWithImages(): Observable<any> {
    return this.getPokemonList().pipe(
      // Use forkJoin to fetch all individual Pokémon details in parallel
      switchMap((response: any) => {
        const pokemonRequests = response.results.map((poke: any) =>
          this.getPokemonByUrl(poke.url) // Fetch details for each Pokémon
        );
        return forkJoin(pokemonRequests); // Wait for all the requests to complete
      })
    );
  }
}
