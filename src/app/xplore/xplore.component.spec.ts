import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XploreComponent } from './xplore.component';

describe('XploreComponent', () => {
  let component: XploreComponent;
  let fixture: ComponentFixture<XploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
