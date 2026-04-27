import { Component } from '@angular/core';
import { Header } from '../../../../components/header/header';

@Component({
  selector: 'app-team',
  imports: [Header],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  members = [
    {
      name: 'Arolle Fona',
      role: 'Co-Fondatrice',
      photo: 'assets/images/members/arolle-fona.webp',
      photoPosition: 'center 10%',
      links: [
        { href: 'https://arollefona.me/', icon: 'pi pi-globe', label: 'Site web' },
        {
          href: 'https://www.linkedin.com/in/arolle-fona-300705188/',
          icon: 'pi pi-linkedin',
          label: 'LinkedIn',
        },
        { href: 'https://x.com/FonaArolle', icon: 'x-icon', label: 'X' },
      ],
    },
    {
      name: 'Linda Mballa',
      role: 'Co-Fondatrice',
      photo: 'assets/images/members/linda-mballa.webp',
      photoPosition: 'center top',
      links: [
        {
          href: 'https://www.linkedin.com/in/linda-mballa-b1472a209/',
          icon: 'pi pi-linkedin',
          label: 'LinkedIn',
        },
        { href: 'https://x.com/lmballa65141?s=21', icon: 'x-icon', label: 'X' },
      ],
    },
    {
      name: 'Ivana Carole',
      role: 'Graphiste-Designer',
      photo: 'assets/images/members/ivana-carole.webp',
      photoPosition: 'center 15%',
      links: [
        {
          href: 'https://www.linkedin.com/in/ivana-carole-%E2%9D%A4%EF%B8%8F-8267411ba/',
          icon: 'pi pi-linkedin',
          label: 'LinkedIn',
        },
      ],
    },
    {
      name: 'Mengue Tiku Catherine',
      role: 'Responsable Communication',
      photo: 'assets/images/members/cathy.webp',
      photoPosition: 'center top',
      links: [
        {
          href: 'https://www.linkedin.com/in/mengue-tiku-catherine-vanellie/',
          icon: 'pi pi-linkedin',
          label: 'LinkedIn',
        },
      ],
    },
  ];
}
