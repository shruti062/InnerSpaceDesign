import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Hero } from '../../components/hero/hero';
import { ProjectCard } from '../../components/project-card/project-card';
import { ServicesCard } from '../../components/services-card/services-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  Hero,ProjectCard, ServicesCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}