import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CantLeavePageComponent } from "./cant-leave-page.component";

describe("CantLeavePageComponent", () => {
  let component: CantLeavePageComponent;
  let fixture: ComponentFixture<CantLeavePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CantLeavePageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantLeavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
