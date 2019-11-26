import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-page-with-children",
  templateUrl: "./page-with-children.component.html",
  styleUrls: ["./page-with-children.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWithChildrenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
