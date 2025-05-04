import { Component, ElementRef, HostListener, OnInit, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AboutMeComponent } from "../../../about/pages/about-me/about-me.component";
import { fadeInOnEnter } from '@ngverse/motion/animatecss';
import { MySkillsComponent } from "../../../skills/pages/my-skills/my-skills.component";
import { MyProjectsComponent } from "../../../projects/pages/my-projects/my-projects.component";
import { WorkExperiencesComponent } from "../../../experience/pages/work-experiences/work-experiences.component";
import { MyContactComponent } from "../../../contact/pages/my-contact/my-contact.component";
import { MyProfileComponent } from "../../../profile/pages/my-profile/my-profile.component";

@Component({
  selector: 'app-home-page',
  imports: [
    ButtonModule,
    CommonModule,
    MenubarModule,
    RouterModule,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    WorkExperiencesComponent,
    MyContactComponent,
    MyProfileComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [fadeInOnEnter()],

  
})
export class HomePageComponent implements OnInit{

  ngOnInit() {
    this.items = [
      { 
        label: 'Skills', 
        command: (event) => this.scrollToSection('skills') 
      },
      { 
        label: 'Projects', 
        command: (event) => this.scrollToSection('projects') 
      },
      { 
        label: 'Experience', 
        command: (event) => this.scrollToSection('experience') 
      },
      { 
        label: 'Contact', 
        command: (event) => this.scrollToSection('contact') 
      },
      { 
        label: 'Resume', 
        url: 'assets/Ariel Jay Fuentes Resume 2025 EN.pdf', 
        target: '_blank' 
      }
    ];
  }

  // Updated handler method
  handleNavigation(event: any, item: MenuItem) {
    if (item.command) {
      event.preventDefault();
      item.command(event); // Pass the event to the command
    }
    // External links will handle normally via href
  }

  items: MenuItem[] = [];
  activeSection = 'about';
  private sections = ['about', 'skills', 'projects', 'experience', 'contact'];

  @ViewChildren('section') sectionElements!: ElementRef[];



  scrollToSection(section: string) {
    this.activeSection = section;
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const offset = window.pageYOffset;
    this.sectionElements.forEach((element) => {
      const section = element.nativeElement.id;
      const position = element.nativeElement.offsetTop;
      const height = element.nativeElement.offsetHeight;
      
      if (offset >= position - 200 && offset < position + height - 200) {
        this.activeSection = section;
      }
    });
  }
}

