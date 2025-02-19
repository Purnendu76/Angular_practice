import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeComponent } from './reative.component';

describe('ReativeComponent', () => {
  let component: ReativeComponent;
  let fixture: ComponentFixture<ReativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReativeComponent]
    });
    fixture = TestBed.createComponent(ReativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
