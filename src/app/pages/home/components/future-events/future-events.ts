import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-future-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./future-events.html",
  styleUrls: ["./future-events.css"]
})
export class FutureEvents {
  currentSlide = 0;
  itemsPerView = 3;
  private touchStartX = 0;
  private touchEndX = 0;

  events = [
    { id: 1, title: 'DECOUVRONS LE FRAMEWORK REACT', date: '18 Avril 2025', location: 'Canal Olympia - Douala' },
    { id: 2, title: 'DECOUVRONS LE FRAMEWORK REACT', date: '18 Avril 2025', location: 'Canal Olympia - Douala' },
    { id: 3, title: 'DECOUVRONS LE FRAMEWORK REACT', date: '18 Avril 2025', location: 'Canal Olympia - Douala' },
    { id: 4, title: 'DECOUVRONS LE FRAMEWORK REACT', date: '18 Avril 2025', location: 'Canal Olympia - Douala' },
    { id: 5, title: 'DECOUVRONS LE FRAMEWORK REACT', date: '18 Avril 2025', location: 'Canal Olympia - Douala' },
    { id: 6, title: 'DECOUVRONS LE FRAMEWORK REACT', date: '18 Avril 2025', location: 'Canal Olympia - Douala' }
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