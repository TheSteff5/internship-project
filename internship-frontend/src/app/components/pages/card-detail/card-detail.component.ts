import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../../model/Card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-detail',
  imports: [CommonModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent implements OnInit {

  card?: Card;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const item = JSON.parse(decodeURIComponent(this.route.snapshot.paramMap.get('item')!));
    this.card = item;
  }

}
