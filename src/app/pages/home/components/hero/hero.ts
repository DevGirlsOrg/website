import { Component } from '@angular/core';
import { Header } from '../../../../components/header/header';

@Component({
  selector: 'app-hero',
  imports: [Header],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
