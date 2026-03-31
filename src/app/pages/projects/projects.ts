import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
   // Add your projects here
   selectedImage: string | null = null;
selectedVideo: string | null = null;

openImage(img: string) {
  this.selectedImage = img;
}

openVideo(video: string) {
  this.selectedVideo = video;
}

closePreview() {
  this.selectedImage = null;
  this.selectedVideo = null;
}
  projects = [
    {
      name: 'Modern Independent House',
      type: 'Residential',
      image: 'assets/images/p1.jpeg'
    },
    {
      name: 'Modern House',
      type: 'Residential',
      image: 'assets/images/p2.jpeg'
    },
    {
      name: 'Renovated Home',
      type: 'Residential/Renovation',
      image: 'assets/images/p3.jpeg'
    },
    {
      name: 'House Structure',
      type: 'Residential',
      image: 'assets/images/p4.jpeg'
    },
    {
      name: 'Renovated Home',
      type: 'Residential/Renovation',
      image: 'assets/images/p5.jpeg'
    }
  ];
  videos = [
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v1.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v2.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v3.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v4.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v5.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v6.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v7.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v8.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v9.mp4'
  },
  {
    title: 'Construction Site Work',
    url: 'assets/videos/v10.mp4'
  },
  {
    title: 'Construction Site Work',
    url: 'assets/videos/v11.mp4'
  },
  {
    title: 'Construction Site Work',
    url: 'assets/videos/v12.mp4'
  },
  {
    title: 'Construction Site Work',
    url: 'assets/videos/v13.mp4'
  },
  {
    title: 'Construction Site Work',
    url: 'assets/videos/v14.mp4'
  },
  {
    title: 'Construction Site Work',
    url: 'assets/videos/v15.mp4'
  },
  {
    title: 'Construction Site Work',
    url: 'assets/videos/v16.mp4'
  },
  {
    title: 'Interior Design Execution',
    url: 'assets/videos/v17.mp4'
  },
];
}
