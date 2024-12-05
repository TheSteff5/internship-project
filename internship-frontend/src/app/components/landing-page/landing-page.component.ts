import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../model/Contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  navigationItems: string[] = ["nav-1", "nav-2", "nav-3"];
  contactInformation: Contact = {
    name: "John",
    address: "Birkengasse 3c/3",
    phone: "+43 660 7 11 3346",
    email: "stefanmiskovic@example.com"
  };
}
