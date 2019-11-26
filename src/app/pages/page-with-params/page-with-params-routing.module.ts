import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageWithParamsComponent } from "./page-with-params.component";

const routes: Routes = [
  {
    path: ":id/:type",
    component: PageWithParamsComponent,
    data: { title: "Custom page title" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWithParamsRoutingModule {}
