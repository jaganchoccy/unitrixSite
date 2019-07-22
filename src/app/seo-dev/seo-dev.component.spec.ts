import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoDevComponent } from './seo-dev.component';

describe('SeoDevComponent', () => {
  let component: SeoDevComponent;
  let fixture: ComponentFixture<SeoDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
