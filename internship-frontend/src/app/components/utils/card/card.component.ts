import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() cardImg?: string;
  @Input() cardTitle?: string;
  @Input() cardShortText?: string;

  ngOnInit(): void { }
}
