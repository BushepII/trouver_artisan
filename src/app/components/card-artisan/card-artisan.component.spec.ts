import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArtisanComponent } from './card-artisan.component';

describe('CardArtisanComponent', () => {
  let component: CardArtisanComponent;
  let fixture: ComponentFixture<CardArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardArtisanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
