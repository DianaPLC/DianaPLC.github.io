import { Component, Attribute, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'icon-link',
  templateUrl: './icon_link.component.html',
  styleUrl: './icon_link.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class IconLink {
  constructor(
    @Attribute('icon') public icon: String,
    @Attribute('text') public text: string,
    @Attribute('url') public url: string,
    @Attribute('tgt') public tgt: string,
    @Attribute('cls') public cls: string
  ) {
    this.tgt = tgt ? tgt : '_blank';
    this.cls = cls ? cls : 'header-link';
  }
}