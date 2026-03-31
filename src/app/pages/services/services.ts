import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesCard } from '../../components/services-card/services-card';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServicesCard],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
