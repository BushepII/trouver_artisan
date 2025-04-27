import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalmentionsComponent } from './legalmentions.component';

describe('LegalmentionsComponent', () => {
  let component: LegalmentionsComponent;
  let fixture: ComponentFixture<LegalmentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalmentionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalmentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
