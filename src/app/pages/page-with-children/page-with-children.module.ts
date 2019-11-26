import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageWithChildrenRoutingModule } from "./page-with-children-routing.module";
import { PageWithChildrenComponent } from "./page-with-children.component";
import { ChildPageAComponent } from "./child-page-a/child-page-a.component";
import { ChildPageBComponent } from "./child-page-b/child-page-b.component";

@NgModule({
  declarations: [
    PageWithChildrenComponent,
    ChildPageAComponent,
    ChildPageBComponent,
  ],
  imports: [CommonModule, PageWithChildrenRoutingModule],
})
export class PageWithChildrenModule {}
