import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  imports: [],
  templateUrl: './galery.html',
  styleUrl: './galery.css',
})
export class Galery {
  photos = [
    { src: 'assets/images/events/event-1.png', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-2.png', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-3.png', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-4.png', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-5.png', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-6.png', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-7.png', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-8.jpg', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-9.jpg', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-12.jpg', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-13.jpg', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-14.jpg', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-15.jpg', alt: 'Événement Dev Girls' },
    { src: 'assets/images/events/event-16.png', alt: 'Événement Dev Girls' },
  ];
}
