import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-cant-leave-page",
  templateUrl: "./cant-leave-page.component.html",
  styleUrls: ["./cant-leave-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CantLeavePageComponent {
  cantLeave = false;
}
