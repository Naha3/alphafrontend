import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
// import { throttle } from 'lodash';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {
  showFooter: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Listen for the scroll event after the component view has initialized
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy(): void {
    // Cleanup the event listener when the component is destroyed to avoid memory leaks
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    // Get current scroll position, window height, and document height
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.offsetHeight;
  
    // Log the values to the console
    console.log('Window Height:', windowHeight);
    console.log('Scroll Position:', scrollPosition);
    console.log('Document Height:', documentHeight);
  
    // Check if the user has scrolled to the bottom of the page
    if ((windowHeight + scrollPosition) >= documentHeight) {
      console.log('User has reached the bottom');
      this.showFooter = false;
    } else {
      this.showFooter = true;
    }
  }
  

  // private onScrollThrottled = throttle(this.onScroll.bind(this), 100);

  // ngAfterViewInit(): void {
  //   window.addEventListener('scroll', this.onScrollThrottled);
  // }

  // ngOnDestroy(): void {
  //   window.removeEventListener('scroll', this.onScrollThrottled);
  // }

  // onScroll(): void {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     this.showFooter = false;
  //   } else {
  //     this.showFooter = true;
  //   }
  // }
}
