import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInOnEnter } from '@ngverse/motion/animatecss';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { fadeInUp } from '@ngverse/motion/animatecss';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css',
  animations: [
    fadeInOnEnter(),
    trigger('titleAnim', [
      transition(':enter', [fadeInUp({ delay: 0, duration: 800 })])
    ]),
    trigger('fadeInIfVisible', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class MySkillsComponent implements AfterViewInit {
  @ViewChild('skillsSection', { static: true }) skillsSection!: ElementRef;
  triggerAnim = false;

  skills = [
    { name: 'Java' },
    { name: 'Spring' },
    { name: 'Angular' },
    { name: 'PrimeNg' },
    { name: 'MySQL' },
    { name: 'PostgresSQL' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'Spring Microservices' },
    { name: 'Tailwind' },
    { name: 'AWS' },
    { name: 'Angular Material' }
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

    observer.observe(this.skillsSection.nativeElement);
  }
}
