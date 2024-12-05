import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Router } from '@angular/router';
import { Card } from '../../../model/Card';

@Component({
  selector: 'app-grid-component',
  imports: [CommonModule, CardComponent],
  templateUrl: './grid-component.component.html',
  styleUrl: './grid-component.component.scss'
})
export class GridComponentComponent {
  @Input() items!: any[];

  constructor(private router: Router) {

  }

  navigate(data: Card): void {
    const serializedData= encodeURIComponent(JSON.stringify(data));
    this.router.navigate(['/card-detail/', serializedData]);
  }
}
