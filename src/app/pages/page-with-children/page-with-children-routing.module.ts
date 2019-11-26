import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageWithChildrenComponent } from "./page-with-children.component";
import { ChildPageAComponent } from "./child-page-a/child-page-a.component";
import { ChildPageBComponent } from "./child-page-b/child-page-b.component";

const routes: Routes = [
  {
    path: "",
    component: PageWithChildrenComponent,
    children: [
      {
        path: "",
        redirectTo: "child-a",
        pathMatch: "full",
      },
      {
        path: "child-a",
        component: ChildPageAComponent,
      },
      {
        path: "child-b",
        component: ChildPageBComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWithChildrenRoutingModule {}
