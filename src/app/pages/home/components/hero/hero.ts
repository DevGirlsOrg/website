import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../../../components/header/header';

@Component({
  selector: 'app-hero',
  imports: [Header, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
