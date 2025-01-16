import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconLink } from '../icon_link/icon_link.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconLink, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fullName = 'Diana Patton-LoveCooksey';
  title = 'Software Engineer';
}