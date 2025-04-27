import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettotheregionComponent } from './gettotheregion.component';

describe('GettotheregionComponent', () => {
  let component: GettotheregionComponent;
  let fixture: ComponentFixture<GettotheregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettotheregionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettotheregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
