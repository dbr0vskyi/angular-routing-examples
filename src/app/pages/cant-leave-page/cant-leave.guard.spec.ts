import { TestBed, async, inject } from "@angular/core/testing";

import { CantLeaveGuard } from "./cant-leave.guard";

describe("CantLeaveGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CantLeaveGuard],
    });
  });

  it("should ...", inject([CantLeaveGuard], (guard: CantLeaveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
