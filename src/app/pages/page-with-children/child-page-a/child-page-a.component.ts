import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-child-page-a",
  templateUrl: "./child-page-a.component.html",
  styleUrls: ["./child-page-a.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildPageAComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
