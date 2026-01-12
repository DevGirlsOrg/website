import { Component } from '@angular/core';
import { Team } from "./components/team/team";
import { Galery } from "./components/galery/galery";
import { ContactForm } from "../../components/contact-form/contact-form";

@Component({
  selector: 'app-about',
  imports: [Team, Galery, ContactForm],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
