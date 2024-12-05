import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../../model/Contact';
import { CommonModule } from '@angular/common';
import { GridComponentComponent } from "../../utils/grid-component/grid-component.component";
import { Card } from '../../../model/Card';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, RouterLink, GridComponentComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  navigationItems: string[] = ["nav-1", "nav-2", "nav-3"];
  contactInformation: Contact = {
    name: "John",
    address: "Examplestreet 14a/5",
    phone: "+43 111 8 99 4455",
    email: "johndoe@example.com"
  };
  items: Card[] = [
    {
      img: '/assets/images/logo.svg',
      title: 'test title 1',
      shortText: "this is a test short text \n and there is a second line",
      id: 1,
    },
    {
      img: '/assets/images/logo.svg',
      title: 'test title 2',
      shortText: "this is a test short text \n and there is a second line",
      id: 2,
    },
    {
      img: '/assets/images/logo.svg',
      title: 'test title 3',
      shortText: "this is a test short text \n and there is a second line",
      id: 3,
    },
    {
      img: '/assets/images/logo.svg',
      title: 'test title 4',
      shortText: "this is a test short text \n and there is a second line",
      id: 4,
    },
    {
      img: '/assets/images/logo.svg',
      title: 'test title 5',
      shortText: "this is a test short text \n and there is a second line",
      id: 5,
    },

    {
      img: '/assets/images/logo.svg',
      title: 'test title 6',
      shortText: "this is a test short text \n and there is a second line",
      id: 6,
    },
  ];
}
