import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Mentors } from "./mentors/mentors";
import { Events } from "./events/events";
import { FutureEvents } from "./future-events/future-events";
import { ContactForm } from "../../components/contact-form/contact-form";

@Component({
  selector: 'app-home',
  imports: [Hero, Mentors, Events, FutureEvents, ContactForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
