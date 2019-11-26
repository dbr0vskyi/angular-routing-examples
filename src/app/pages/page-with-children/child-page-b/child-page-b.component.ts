import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-child-page-b",
  templateUrl: "./child-page-b.component.html",
  styleUrls: ["./child-page-b.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildPageBComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToPageWithParams() {
    this.router.navigate(["../../page-with-params", 2, "video"], {
      queryParams: { redirectedFromClass: true },
      relativeTo: this.route,
    });
  }
}
