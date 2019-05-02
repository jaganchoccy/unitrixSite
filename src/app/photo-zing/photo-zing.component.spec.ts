import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoZingComponent } from './photo-zing.component';

describe('PhotoZingComponent', () => {
  let component: PhotoZingComponent;
  let fixture: ComponentFixture<PhotoZingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoZingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoZingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
