import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../../services/poke.service';
@Component({
  selector: 'app-card-detail',
  imports: [CommonModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent implements OnInit {
  pokemon: any;

  constructor(private route: ActivatedRoute, private pokeService: PokeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokeService.getPokemonById(params['id']).subscribe(res => {
        this.pokemon = res;
      });
    });
  }

  getImagePath() {
    return this.pokemon['sprites']['other']['official-artwork']['front_default'];
  }
}
