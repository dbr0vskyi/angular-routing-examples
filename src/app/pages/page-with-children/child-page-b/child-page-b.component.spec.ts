import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChildPageBComponent } from "./child-page-b.component";

describe("ChildPageBComponent", () => {
  let component: ChildPageBComponent;
  let fixture: ComponentFixture<ChildPageBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPageBComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
