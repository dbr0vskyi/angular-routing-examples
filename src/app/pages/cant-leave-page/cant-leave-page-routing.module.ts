import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CantLeavePageComponent } from "./cant-leave-page.component";
import { CantLeaveGuard } from "./cant-leave.guard";

const routes: Routes = [
  {
    path: "",
    component: CantLeavePageComponent,
    canDeactivate: [CantLeaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantLeavePageRoutingModule {}
