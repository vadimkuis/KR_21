import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageItemComponent } from './advantage-item.component';

describe('AdvantageItemComponent', () => {
  let component: AdvantageItemComponent;
  let fixture: ComponentFixture<AdvantageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
