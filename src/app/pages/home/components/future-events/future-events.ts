import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
}

@Component({
  selector: 'app-future-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "future-events.html",
  styleUrls: ["future-events.css"]
})
export class FutureEvents {
  currentSlide = 1; // Start at index 4 to match the active dot in the image
  itemsPerView = 3;
  
  events: Event[] = [
    {
      id: 1,
      title: 'DECOUVRONS LE FRAMEWORK REACT',
      date: '18 Avril 2025',
      location: 'Canal Olympia - Douala',
      imageUrl: ''
    },
    {
      id: 2,
      title: 'DECOUVRONS LE FRAMEWORK REACT',
      date: '18 Avril 2025',
      location: 'Canal Olympia - Douala',
      imageUrl: ''
    },
    {
      id: 3,
      title: 'DECOUVRONS LE FRAMEWORK REACT',
      date: '18 Avril 2025',
      location: 'Canal Olympia - Douala',
      imageUrl: ''
    },
    {
      id: 4,
      title: 'DECOUVRONS LE FRAMEWORK REACT',
      date: '18 Avril 2025',
      location: 'Canal Olympia - Douala',
      imageUrl: ''
    },
    {
      id: 5,
      title: 'DECOUVRONS LE FRAMEWORK REACT',
      date: '18 Avril 2025',
      location: 'Canal Olympia - Douala',
      imageUrl: ''
    },
    {
      id: 6,
      title: 'DECOUVRONS LE FRAMEWORK REACT',
      date: '18 Avril 2025',
      location: 'Canal Olympia - Douala',
      imageUrl: ''
    }
  ];

  dots = new Array(6); // 6 dots for 6 slides

  get visibleEvents(): Event[] {
    // Return the 3 events currently visible
    return this.events.slice(0, this.itemsPerView);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.dots.length;
  }

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.dots.length) % this.dots.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
