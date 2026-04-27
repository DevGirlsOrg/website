import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  imports: [],
  templateUrl: './galery.html',
  styleUrl: './galery.css',
})
export class Galery {
  photos = [
    { src: 'assets/images/events/event-1.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-2.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-3.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-4.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-5.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-6.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-7.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-8.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-9.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-12.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-13.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-14.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-15.webp', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-16.webp', alt: 'Événement Dev Girls' },
  ];
}
