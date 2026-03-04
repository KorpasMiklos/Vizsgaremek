import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('létre kell hoznia', () => {
    expect(component).toBeTruthy();
  });

  it('fejléc logójának megjelenik a szövege "SzakiPark"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoSpan = compiled.querySelector('.logo span');
    expect(logoSpan?.textContent).toContain('SzakiPark');
  });
});