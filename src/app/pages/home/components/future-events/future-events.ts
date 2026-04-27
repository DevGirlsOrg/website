import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-future-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './future-events.html',
  styleUrls: ['./future-events.css'],
})
export class FutureEvents {
  currentSlide = 0;
  itemsPerView = 3;
  private touchStartX = 0;
  private touchEndX = 0;

  events = [
    {
      id: 1,
      title: 'Space - Devenir Developpeur en 2025',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-1.webp',
    },
    {
      id: 2,
      title: 'Workshop Tech',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-3.webp',
    },
    {
      id: 3,
      title: 'Ravisa Digital Skills',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-8.webp',
    },
    {
      id: 4,
      title: 'Space - Le vibe Coding',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-2.webp',
    },
    {
      id: 5,
      title: 'Workshop Tech',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-4.webp',
    },
    {
      id: 6,
      title: 'Partenariat - Idem Challenge',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-5.webp',
    },
    {
      id: 7,
      title: 'Space - Game Coding',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-9.webp',
    },
    {
      id: 8,
      title: 'Meetup Dev Girls',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-6.webp',
    },
    {
      id: 9,
      title: 'Meetup Dev Girls',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-7.webp',
    },
    {
      id: 10,
      title: 'Meetup Dev Girls',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-16.webp',
    },
    {
      id: 11,
      title: 'Workshop Tech avec WTM Yaounde',
      location: 'Université de Yaounde, Cameroun',
      image: 'assets/images/events/event-13.webp',
    },
    {
      id: 12,
      title: 'Meetup Dev Girls',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-14.webp',
    },
    {
      id: 13,
      title: 'Ravisa Digital Skills',
      location: 'Douala, Cameroun',
      image: 'assets/images/events/event-15.webp',
    },
  ];

  get dots() {
    return new Array(this.events.length - (this.itemsPerView - 1));
  }

  // --- Logique de Navigation ---
  nextSlide() {
    if (this.currentSlide < this.events.length - this.itemsPerView) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.events.length - this.itemsPerView;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  // --- Logique de Swipe Tactile ---
  handleTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  handleTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  handleTouchEnd() {
    const threshold = 50; // Sensibilité du swipe
    const distance = this.touchStartX - this.touchEndX;

    if (Math.abs(distance) > threshold) {
      if (distance > 0) this.nextSlide();
      else this.previousSlide();
    }
  }
}
