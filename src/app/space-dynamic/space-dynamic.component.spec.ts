import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceDynamicComponent } from './space-dynamic.component';

describe('SpaceDynamicComponent', () => {
  let component: SpaceDynamicComponent;
  let fixture: ComponentFixture<SpaceDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
