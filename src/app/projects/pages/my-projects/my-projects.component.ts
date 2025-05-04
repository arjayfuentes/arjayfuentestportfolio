import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { fadeInOnEnter } from '@ngverse/motion/animatecss';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { fadeInUp } from '@ngverse/motion/animatecss';


@Component({
  selector: 'app-my-projects',
  imports: [ButtonModule, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css',
  animations: [
    fadeInOnEnter(),
    trigger('fadeWithDelay', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('{{duration}}ms {{delay}}ms ease-out', style({ opacity: 1, transform: 'none' }))
      ], { params: { delay: 0, duration: 600 } }) // default values
    ]),
    trigger('titleAnim', [
      transition(':enter', [fadeInUp({ delay: 0, duration: 1200 })])
    ]),
  ]
})
export class MyProjectsComponent implements AfterViewInit{

  @ViewChild('projectSelection', { static: true }) projectSelection!: ElementRef;
  triggerAnim = false;

  
  projects = [
    {
      id: 1,
      title: 'Miyembro',
      description: 'An organization, membership and event management system',
      image: '/assets/miyembro-3.jpg',
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by OpenAI',
      image: '/assets/laptop.jpg',
    },
    {
      id: 3,
      title: 'Task Management',
      description: 'Collaborative task management tool with real-time updates',
      image: '/assets/code.jpg',
    },
    {
      id: 4,
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio generator for developers',
      image: '/assets/laptop.jpg',
    },
  ];


  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.triggerAnim = true;
            observer.disconnect(); // only animate once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.projectSelection.nativeElement);
  }
}
