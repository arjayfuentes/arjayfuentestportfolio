import { Component, ElementRef, OnInit } from '@angular/core';
import { fadeInUp } from '@ngverse/motion/animatecss' 
import { trigger, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  animations: [
    trigger('titleAnim', [
      transition(':enter', [fadeInUp({ delay: 0, duration: 600 })])
    ]),
    trigger('subtitleAnim', [
      transition(':enter', [fadeInUp({ delay: 0, duration: 600 })])
    ]),
    trigger('arrowAnim', [
      transition(':enter', [fadeInUp({ delay: 0, duration: 600 })])
    ])
  ]
})
export class AboutMeComponent implements OnInit{
  showTitle = false;
  showSubtitle = false;
  showArrow = false;

  constructor(private elementRef: ElementRef) {}


  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of component is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.triggerAnimations();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }

  private triggerAnimations() {
    setTimeout(() => this.showTitle = true, 300);
    setTimeout(() => {
      this.showSubtitle = true;
      this.showArrow = true;
    }, 500);
  }
}
