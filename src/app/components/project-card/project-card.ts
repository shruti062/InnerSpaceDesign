import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
   @Input() title: string = '';
  @Input() category: string = '';
  @Input() image: string = '';
  @Input() video: string = '';
}
