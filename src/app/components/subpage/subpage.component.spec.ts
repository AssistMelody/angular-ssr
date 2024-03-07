import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageComponent } from './subpage.component';

describe('SubpageComponent', () => {
  let component: SubpageComponent;
  let fixture: ComponentFixture<SubpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubpageComponent]
    });
    fixture = TestBed.createComponent(SubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
