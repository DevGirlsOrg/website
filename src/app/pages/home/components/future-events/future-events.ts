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
  template: `
    <section class="future-events">
      <div class="container">
        <h1 class="section-title">Évènements à venir</h1>
        <p class="section-subtitle">Ne manquez pas les futurs évènements que nous organiserons</p>
        
        <div class="events-carousel">
          <div class="events-track">
            <div class="event-card" *ngFor="let event of visibleEvents">
              <div class="event-image">
                <div class="event-badge">
                  <h3>What is <span class="react-text">React</span>?</h3>
                </div>
              </div>
              <div class="event-content">
                <h4 class="event-title">{{ event.title }}</h4>
                <div class="event-meta">
                  <span class="event-date">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {{ event.date }}
                  </span>
                  <span class="event-location">{{ event.location }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-controls">
            <div class="carousel-dots">
              <span 
                *ngFor="let dot of dots; let i = index" 
                class="dot" 
                [class.active]="i === currentSlide"
                (click)="goToSlide(i)">
              </span>
            </div>
            <div class="carousel-arrows">
              <button class="arrow-btn prev" (click)="previousSlide()" aria-label="Previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button class="arrow-btn next" (click)="nextSlide()" aria-label="Next">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Reset and base styles */
    .future-events {
      padding: 80px 20px;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    /* Section title */
    .section-title {
      font-size: 2.75rem;
      font-weight: 700;
      text-align: center;
      color: #1a1a1a;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }

    .section-subtitle {
      font-size: 1.125rem;
      text-align: center;
      color: #666;
      margin-bottom: 60px;
      font-weight: 400;
    }

    /* Carousel container */
    .events-carousel {
      position: relative;
      margin-bottom: 40px;
    }

    .events-track {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      padding: 0 20px;
    }

    /* Event card */
    .event-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .event-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    /* Event image section */
    .event-image {
      position: relative;
      height: 280px;
      background: linear-gradient(135deg, #e3f2fd 0%, #f0f4ff 100%);
      padding: 40px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .event-badge {
      position: relative;
      z-index: 1;
      text-align: center;
    }

    .event-badge h3 {
      font-size: 1.75rem;
      color: #2c3e50;
      font-weight: 500;
      letter-spacing: -0.01em;
    }

    .react-text {
      color: #61dafb;
      font-weight: 700;
    }

    /* Event content */
    .event-content {
      padding: 24px 30px 28px;
    }

    .event-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }

    .event-meta {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .event-date,
    .event-location {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9375rem;
      color: #666;
    }

    .icon {
      flex-shrink: 0;
    }

    /* Carousel controls */
    .carousel-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      margin-top: 50px;
    }

    .carousel-dots {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #d1d5db;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .dot.active {
      background-color: #e91e63;
      width: 40px;
      border-radius: 5px;
    }

    .carousel-arrows {
      display: flex;
      gap: 12px;
    }

    .arrow-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 2px solid #e91e63;
      background: white;
      color: #e91e63;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .arrow-btn:hover {
      background-color: #e91e63;
      color: white;
      transform: scale(1.05);
    }

    .arrow-btn:active {
      transform: scale(0.95);
    }

    /* Responsive design */
    @media (max-width: 1200px) {
      .events-track {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }

      .section-subtitle {
        font-size: 1rem;
        margin-bottom: 40px;
      }

      .events-track {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .event-image {
        height: 240px;
      }

      .carousel-controls {
        flex-direction: column;
        gap: 24px;
      }
    }

    @media (max-width: 480px) {
      .future-events {
        padding: 50px 15px;
      }

      .section-title {
        font-size: 1.75rem;
      }

      .event-badge h3 {
        font-size: 1.5rem;
      }

      .event-content {
        padding: 20px 24px 24px;
      }

      .arrow-btn {
        width: 44px;
        height: 44px;
      }
    }
  `]
})
export class FutureEvents {
  currentSlide = 4; // Start at index 4 to match the active dot in the image
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
