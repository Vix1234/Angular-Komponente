import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudservisComponent } from './studservis.component';

describe('StudservisComponent', () => {
  let component: StudservisComponent;
  let fixture: ComponentFixture<StudservisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudservisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudservisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
