import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtisanComponent } from './page-artisan.component';

describe('PageArtisanComponent', () => {
  let component: PageArtisanComponent;
  let fixture: ComponentFixture<PageArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageArtisanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
