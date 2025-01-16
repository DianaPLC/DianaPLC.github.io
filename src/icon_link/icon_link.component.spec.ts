import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconLink } from './icon_link.component';

describe('AppComponent', () => {
  let iconLink: HTMLElement;
  let iconLinkComp: IconLink;
  let fixture: ComponentFixture<IconLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconLink],
    }).compileComponents();

    fixture = TestBed.createComponent(IconLink);
    iconLinkComp = fixture.componentInstance;
    iconLinkComp.icon = "testImg";
    iconLinkComp.text = "Test Link Text";
    iconLinkComp.url = "www.test.com";

    fixture.detectChanges();
    iconLink = fixture.nativeElement as HTMLElement;
  });

  it('should render icon', () => {
    expect(iconLink.querySelector('img')?.src).toContain('testImg');
  });

  it('should render text', () => {
    expect(iconLink.querySelector('span')?.textContent).toEqual('Test Link Text');
  });

  it('should reference link', () => {
    expect(iconLink.querySelector('a')?.href).toContain('www.test.com');
  });

  it('should default to "_blank" target if not provided', () => {
    expect(iconLink.querySelector('a')?.target).toEqual('_blank');
  });

  it('should should render with provided target when present', () => {
    iconLinkComp.tgt = "_self";
    fixture.detectChanges();
    expect(iconLink.querySelector('a')?.target).toEqual('_self');
  });

  it('should default to "header-link" class if not provided', () => {
    expect(iconLink.querySelector('a')?.className).toContain('header-link');
  });

  it('should should render with provided class when present', () => {
    iconLinkComp.cls = "my-style";
    fixture.detectChanges();
    expect(iconLink.querySelector('a')?.className).toContain('my-style');
    expect(iconLink.querySelector('a')?.className).not.toContain('header-link');
  });
});
