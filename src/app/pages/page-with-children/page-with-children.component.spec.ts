import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageWithChildrenComponent } from "./page-with-children.component";

describe("PageWithChildrenComponent", () => {
  let component: PageWithChildrenComponent;
  let fixture: ComponentFixture<PageWithChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageWithChildrenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
