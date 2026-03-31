import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-card.html',
  styleUrl: './services-card.css',
})
export class ServicesCard {
    @Input() title!: string;
   @Input() description: string = '';
  @Input() icon: string = '';
}