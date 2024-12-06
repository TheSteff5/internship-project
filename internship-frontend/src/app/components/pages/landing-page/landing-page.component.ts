import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../../model/Contact';
import { CommonModule } from '@angular/common';
import { GridComponentComponent } from "../../utils/grid-component/grid-component.component";
import { PokeService } from '../../../services/poke.service';
import { PokemonData } from '../../../model/Pokemon';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, RouterLink, GridComponentComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  navigationItems: string[] = ["nav-1", "nav-2", "nav-3"];
  contactInformation: Contact = {
    name: "John",
    address: "Birkengasse 3c/3",
    phone: "+43 660 7 11 3346",
    email: "stefanmiskovic@example.com"
  };

  pokemonData: PokemonData[] = [];

  constructor(private pokeService: PokeService) {

  }

  ngOnInit(): void {    
    this.pokeService.getPokemonListWithImages().subscribe(res => {
      this.pokemonData = res;
    });
  }
}
