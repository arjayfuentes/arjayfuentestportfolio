import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-my-contact',
  imports: [ButtonModule, CommonModule],
  templateUrl: './my-contact.component.html',
  styleUrl: './my-contact.component.css',
})
export class MyContactComponent {

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
