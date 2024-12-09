import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  footerVisible: boolean = true;
  endButtonVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Initial checks to hide or show footer and button on page load
    // this.checkScrollPosition();
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   this.checkScrollPosition();
  // }

  // private checkScrollPosition(): void {
  //   const footer = document.getElementById('footer');
  //   const endButton = document.getElementById('endButton');
  //   const documentHeight = document.documentElement.scrollHeight;
  //   const viewportHeight = window.innerHeight;
  //   const scrollPosition = window.scrollY + viewportHeight;

  //   // Show footer when scrolled 100px from the top
  //   if (window.scrollY > 100) {
  //     this.footerVisible = true;
  //   } else {
  //     this.footerVisible = false;
  //   }

  //   // Show "Sign and Submit" button when reaching the end of the page
  //   if (scrollPosition >= documentHeight) {
  //     this.endButtonVisible = true;
  //   } else {
  //     this.endButtonVisible = false;
  //   }
  // }
}
