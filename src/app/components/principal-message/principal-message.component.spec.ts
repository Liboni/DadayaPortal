import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMessageComponent } from './principal-message.component';

describe('PrincipalMessageComponent', () => {
  let component: PrincipalMessageComponent;
  let fixture: ComponentFixture<PrincipalMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
