import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnaldatasComponent } from './personnaldatas.component';

describe('PersonnaldatasComponent', () => {
  let component: PersonnaldatasComponent;
  let fixture: ComponentFixture<PersonnaldatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnaldatasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnaldatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
