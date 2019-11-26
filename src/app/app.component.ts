import { Component, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: RouterEvent) => {
      console.log(event);
    });
  }

  public goToPageWithParams() {
    // navigate(commands: any[], extras: NavigationExtras = { skipLocationChange: false }): Promise<boolean>

    this.router.navigate(["page-with-params", 5, "photo"], {
      queryParams: { redirectedFromClass: true },
    });

    // navigateByUrl(url: string, extras: NavigationExtras = { skipLocationChange: false }): Promise<boolean>
    // this.router.navigateByUrl('/page-with-params/231/photo-video', {queryParams: { id: 1}});
  }
}
