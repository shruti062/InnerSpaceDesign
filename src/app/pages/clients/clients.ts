import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
   // Add client logos here
  clients = [
    { name: 'TCS', logo: 'assets/images/tcs.jpeg' },
    { name: 'Fusion Decor ', logo: 'assets/images/fus.jpeg' },
    { name: 'Metro Builders', logo: 'assets/images/metro.jpeg' },
    { name: 'Opulent Decor', logo: 'assets/images/opulent.jpeg' },
    { name: 'RJ Interiors', logo: 'assets/images/rj.jpeg' },
    { name: 'Ashwini Hospital', logo: 'assets/images/ashwini.jpeg' },
    { name: 'Capital Marbles & Granite', logo: 'assets/images/otg.jpeg' },
    { name: 'Pattashree Fabrics', logo: 'assets/images/patt.jpeg' },
  ];
}
