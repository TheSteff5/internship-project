import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  filterItems(hostElement: ElementRef, searchValue: string) {
    const collection: HTMLCollection = hostElement.nativeElement.children;
    Array.from(collection).forEach((element: Element) => {
      const cardElement = <HTMLElement>element;
      const title: string = <string>element.firstElementChild?.getAttribute('id');

      if (searchValue.length < 3 || title.includes(searchValue.split(/\s+/).slice(0, 3).join(' ').toLowerCase())) {
        cardElement.style.display = 'flex';
      } else {
        cardElement.style.display = 'none';
      }
      
   
    });
  }
}
