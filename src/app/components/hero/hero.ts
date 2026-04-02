import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements AfterViewInit {

  @ViewChild('videoRef') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const vid = this.video.nativeElement;

    // Force mute + autoplay (fix browser block issue)
    vid.muted = true;
    vid.defaultMuted = true;

    vid.load();
    vid.play().catch(() => {
      console.log("Autoplay blocked");
    });
  }
}