import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
// import { throttle } from 'lodash';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {
 
  showFooter: boolean = window.innerWidth > 720;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  constructor() {
    this.checkScreenSize(); 
  }

  private checkScreenSize() {
    this.showFooter =  window.innerWidth <= 720;;  
  }

  ngOnInit() {
    this.showFooter = window.innerWidth > 720;
  }
  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.offsetHeight;
    if ((windowHeight + scrollPosition) >= documentHeight) {
      console.log('User has reached the bottom');
      this.showFooter = true;
    } else {
      this.showFooter = true;
    }
  }

}