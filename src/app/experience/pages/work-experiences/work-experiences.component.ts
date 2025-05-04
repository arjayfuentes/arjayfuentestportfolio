import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { fadeInOnEnter } from '@ngverse/motion/animatecss';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { fadeInUp } from '@ngverse/motion/animatecss';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

@Component({
  selector: 'app-work-experiences',
  imports: [AvatarModule, AvatarGroupModule, CommonModule, TagModule],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.css',
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
export class WorkExperiencesComponent implements AfterViewInit{
  
  @ViewChild('experienceSelection', { static: true }) experienceSelection!: ElementRef;

  triggerAnim = false;

  experiences = [
    {
      title: 'Full Stack Software Developer',
      company: 'RJB Technology Inc',
      location: 'Makati City, Philippines',
      period: 'July 2020 – November 2021',
      description: 'Contributed to the modernization of enterprise and casino management systems by rewriting Flash-based applications using Angular and Java. Participated in both front-end and back-end development tasks, implemented authentication mechanisms, and supported junior team members with Spring Boot integration.',
      projects: [
        {
          applicationName: "Cyberboss – Casino Management System",
          description: "Migrated a legacy Flash ActionScript application to Angular 9 using TypeScript, SCSS, and PrimeNG. Recreated UI components based on existing functionality and debugged Java-based back-end logic. Updated stored procedures and addressed functional issues based on project requirements."
        },
        {
          applicationName: "OPO – Employee Management System",
          description: "Developed Angular pages and corresponding Spring Boot endpoints for features like worklog reports and leave tracking. Implemented Spring Security for authentication. Provided assistance to junior developers with back-end setup and worked collaboratively with front-end and technical leads for integration."
        },
      ],
      technologies: [
        {
          technology: "Java",
          icon: "java",
          image: "assets/java.png"

        },
        {
          technology: "Angular",
          icon: "angular",
          image: "assets/angular.png"
        },
        
        {
          technology: "Spring Boot",
          icon: "springboot",
          image: "assets/springboot.png"

        },
        {
          technology: "Spring Framework",
          icon: "springframework",
          image: "assets/springframework.png"

        },
        {
          technology: "Typescript",
          icon: "typescript",
          image: "assets/typescript.png"

        },
        {
          technology: "AWS",
          icon: "aws",
          image: "assets/aws.png"

        }, {
          technology: "MySQL",
          icon: "mysql",
          image: "assets/mysql.png"

        },
        {
          technology: "PostgreSQL",
          icon: "postgresql",
          image: "assets/postgresql.png"

        },
        {
          technology: "HTML",
          icon: "html",
          image: "assets/html.png"

        },
        {
          technology: "CSS",
          icon: "css",
          image: "assets/css.png"

        },
        {
          technology: "PrimeNG",
          icon: "primeng",
          image: "assets/primeng.png"

        },{
          technology: "Gradle",
          icon: "gradle",
          image: "assets/gradle.jpg"

        },{
          technology: "Visual Studio Code",
          icon: "visualstudiocode",
          image: "assets/visualstudiocode.png"

        },
        {
          technology: "Intellij",
          icon: "intellij",
          image: "assets/intellij.png"

        },{
          technology: "Actionscript",
          icon: "actionscript",
          image: "assets/actionscript.png"

        },
      ]
    },
    {
      title: 'Software Developer',
      company: 'UST Global',
      location: 'McKinley Hill, Philippines',
      period: 'January 2017 – July 2020',
      description: "Contributed to the full-stack development and modernization of enterprise software applications by rewriting legacy systems and enhancing internal tools using modern technologies such as Angular, Spring Boot, and OpenJDK. Engaged in Agile practices and emphasized clean, maintainable code through rigorous testing and adherence to standards.",
      projects: [
        {
          applicationName: "Assortment – Retail Forecasting System (Rewrite & Upgrade)",
          description: "Rewrote Flash ActionScript front-end in Angular 2–7 using CSS3/HTML5/Bootstrap, while upgrading Java 5 back-end services to Java 8 on Spring Boot. Implemented enhancements based on client feedback and participated in Agile ceremonies, sprint estimations, and reviews."},
        {
          applicationName: "Refund Management System",
          description: "Overhauled JSP-based interface using HTML5, CSS3, Bootstrap, and JavaScript. Refactored and upgraded Java logic to support more robust refund tracking for loss prevention across retail chains."
        },
        {
          applicationName: "Formulate – Prescription Recipe Builder",
          description: "Delivered end-to-end modules for a pharmaceutical app, using Angular 5 for the UI and OpenJDK 11 for the back end. Integrated fingerprint scanning hardware to streamline and secure user authentication workflows."
        },
        {
          applicationName: "Timesheet Management System (Internal Tool)",
          description: "Built Angular 8 interfaces and Java-based APIs to enable real-time time tracking and reporting for internal employee management."
        },
      ],
      technologies: [
        {
          technology: "Angular",
          icon: "angular",
          image: "assets/angular.png"
        },
        {
          technology: "Java",
          icon: "java",
          image: "assets/java.png"

        },
        {
          technology: "Spring Boot",
          icon: "springboot",
          image: "assets/springboot.png"

        },
        {
          technology: "Spring Framework",
          icon: "springframework",
          image: "assets/springframework.png"

        },
        {
          technology: "Typescript",
          icon: "typescript",
          image: "assets/typescript.png"

        },
        {
          technology: "Jenkins",
          icon: "jenkins",
          image: "assets/jenkins.png"

        },
        {
          technology: "Javascript",
          icon: "javascript",
          image: "assets/javascript.png"

        },
        {
          technology: "MySQL",
          icon: "mysql",
          image: "assets/mysql.png"

        },
        {
          technology: "PostgreSQL",
          icon: "postgresql",
          image: "assets/postgresql.png"

        },
        {
          technology: "HTML",
          icon: "html",
          image: "assets/html.png"

        },
        {
          technology: "CSS",
          icon: "css",
          image: "assets/css.png"

        },
        {
          technology: "PrimeNG",
          icon: "primeng",
          image: "assets/primeng.png"

        },
        {
          technology: "Bootstrap",
          icon: "bootstrap",
          image: "assets/bootstrap.png"

        },
        {
          technology: "Angular Material",
          icon: "angularmaterial",
          image: "assets/angularmaterial.png"

        },
        {
          technology: "JSP",
          icon: "jsp",
          image: "assets/jsp.png"

        },
        {
          technology: "Gradle",
          icon: "gradle",
          image: "assets/gradle.jpg"

        },
        {
          technology: "Maven",
          icon: "maven",
          image: "assets/maven.png"

        },
        {
          technology: "J2EE",
          icon: "j2ee",
          image: "assets/j2ee.png"

        },
        {
          technology: "Tomcat",
          icon: "tomcat",
          image: "assets/tomcat.png"

        },
        {
          technology: "Eclipse",
          icon: "eclipse",
          image: "assets/eclipse.png"

        },
        {
          technology: "Visual Studio Code",
          icon: "visualstudiocode",
          image: "assets/visualstudiocode.png"

        },
        {
          technology: "Actionscript",
          icon: "actionscript",
          image: "assets/actionscript.png"

        },
      ]
    }
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

    observer.observe(this.experienceSelection.nativeElement);
  }
}
