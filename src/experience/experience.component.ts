import { Component, ViewEncapsulation } from '@angular/core';
import { experiences } from './experience.content';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent {
  experienceList = experiences;
}