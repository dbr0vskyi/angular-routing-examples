import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageWithParamsRoutingModule } from "./page-with-params-routing.module";
import { PageWithParamsComponent } from "./page-with-params.component";

@NgModule({
  declarations: [PageWithParamsComponent],
  imports: [CommonModule, PageWithParamsRoutingModule],
})
export class PageWithParamsModule {}
