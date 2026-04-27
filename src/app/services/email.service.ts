import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private platformId = inject(PLATFORM_ID);

  init(): void {
    if (isPlatformBrowser(this.platformId)) {
      emailjs.init({ publicKey: environment.emailjs.publicKey });
    }
  }

  async sendContactForm(data: ContactFormData): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    const result = await emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, {
      from_name: `${data.firstName} ${data.lastName}`,
      reply_to: data.email,
      from_email: data.email,
      message: data.message,
      to_name: 'Dev Girls',
    });
    console.log('EmailJS result:', result);
  }
}
