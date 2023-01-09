import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSignUpComponent } from './tab-sign-up.component';

describe('TabSignUpComponent', () => {
  let component: TabSignUpComponent;
  let fixture: ComponentFixture<TabSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
