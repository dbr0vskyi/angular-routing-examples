import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChildPageAComponent } from "./child-page-a.component";

describe("ChildPageAComponent", () => {
  let component: ChildPageAComponent;
  let fixture: ComponentFixture<ChildPageAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPageAComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
