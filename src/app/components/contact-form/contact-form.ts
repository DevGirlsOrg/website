import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm implements OnInit {
  private emailService = inject(EmailService);

  firstName = '';
  lastName = '';
  email = '';
  message = '';

  status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');

  ngOnInit(): void {
    this.emailService.init();
  }

  onSubmit(): void {
    if (!this.firstName || !this.lastName || !this.email || !this.message) return;

    this.status.set('loading');
    this.emailService
      .sendContactForm({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        message: this.message,
      })
      .then(() => {
        this.status.set('success');
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.message = '';
        setTimeout(() => this.status.set('idle'), 5000);
      })
      .catch(() => {
        this.status.set('error');
        setTimeout(() => this.status.set('idle'), 5000);
      });
  }

  dismissToast(): void {
    this.status.set('idle');
  }
}
