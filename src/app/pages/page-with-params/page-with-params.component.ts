import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-page-with-params",
  templateUrl: "./page-with-params.component.html",
  styleUrls: ["./page-with-params.component.scss"],
})
export class PageWithParamsComponent implements OnInit {
  routeParams: {
    id?: string;
    type?: string;
  } = {};

  constructor(private route: ActivatedRoute, private titleService: Title) {
    console.log(this.route.snapshot); // ActivatedRouterSnapshot
  }

  ngOnInit() {
    this.route.params.subscribe((routeParams) => {
      this.routeParams.id = routeParams.id;
      this.routeParams.type = routeParams.type;
    });

    this.route.data.subscribe((routeData: { title: string }) => {
      this.titleService.setTitle(routeData.title);
    });
  }
}
