import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlecookiesComponent } from './handlecookies.component';

describe('HandlecookiesComponent', () => {
  let component: HandlecookiesComponent;
  let fixture: ComponentFixture<HandlecookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandlecookiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlecookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
