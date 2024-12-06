import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-component',
  imports: [CommonModule, CardComponent],
  templateUrl: './grid-component.component.html',
  styleUrl: './grid-component.component.scss'
})
export class GridComponentComponent {
  @Input() items!: any[];

  constructor(private router: Router, public el: ElementRef) { }

  navigate(data: any): void {
    this.router.navigate(['/pokemon/', data.id]);
  }
}
