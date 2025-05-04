import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { fadeInUp } from '@ngverse/motion/animatecss' 
import { fadeInUpOnEnter } from '@ngverse/motion/animatecss' 
import { trigger, transition } from '@angular/animations';

import {
  fadeInOnEnter,
  slideInUpOnEnter,
} from '@ngverse/motion/animatecss';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./home/pages/home-page/home-page.component";

@Component({
  imports: [
    ButtonModule,
    CommonModule,
    RouterModule,
    HomePageComponent
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',


})
export class AppComponent {

}