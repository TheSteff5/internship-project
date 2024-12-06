import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('wrapper') wrapper!: ElementRef; /* wrapper for sidenav navigation */
  @ViewChild('sidenav') sidenav!: ElementRef;

  pokemonData: PokemonData[] = [];
  isPhone = false;
  searchValue: string = '';
  navigationItems: string[] = ["nav-1", "nav-2", "nav-3"];
  contactInformation: Contact = {
    name: "Stefan Miskovic",
    address: "Birkengasse 3c/3",
    phone: "+43 660 7 11 3346",
    email: "stefanmiskovic11@hotmail.com"
  };

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isPhone = window.innerWidth <= 768;
    console.log(this.isPhone)
  }

  constructor(private pokeService: PokeService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.onResize();
    this.pokeService.getPokemonListWithImages().subscribe(res => {
      this.pokemonData = res;
    });
  }

  onValueChange(searchValue: string) {
    this.searchService.filterItems(this.gridElement.el, searchValue);
  }

  openSideNav() {
    this.wrapper.nativeElement.style.width = '100%';
    this.sidenav.nativeElement.style.width = '60%';
  }

  closeSideNav() {
    this.wrapper.nativeElement.style.width = '0';
    this.sidenav.nativeElement.style.width = '0';
  }

  onSidenavClick(event: MouseEvent) {
    event.stopPropagation(); /* Prevent event to be executed if clicked inside the sidenav content */
  }
}
