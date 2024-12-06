import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../../model/Contact';
import { CommonModule } from '@angular/common';
import { GridComponentComponent } from "../../utils/grid-component/grid-component.component";
import { PokeService } from '../../../services/poke.service';
import { PokemonData } from '../../../model/Pokemon';
import { SearchService } from '../../../services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, RouterLink, GridComponentComponent, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  @ViewChild(GridComponentComponent) gridElement!: GridComponentComponent;
  searchValue: string = '';

  navigationItems: string[] = ["nav-1", "nav-2", "nav-3"];
  contactInformation: Contact = {
    name: "John",
    address: "Examplestreet 14a/5",
    phone: "+43 111 8 99 4455",
    email: "johndoe@example.com"
  };

  pokemonData: PokemonData[] = [];

  constructor(private pokeService: PokeService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.pokeService.getPokemonListWithImages().subscribe(res => {
      this.pokemonData = res;
    });
  }

  onValueChange(searchValue: string) {

    this.searchService.filterItems(this.gridElement.el, searchValue);

  }
}
