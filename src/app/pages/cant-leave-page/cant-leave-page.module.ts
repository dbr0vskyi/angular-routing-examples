import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CantLeavePageRoutingModule } from "./cant-leave-page-routing.module";
import { CantLeavePageComponent } from "./cant-leave-page.component";
import { FormsModule } from "@angular/forms";
import { CantLeaveGuard } from "./cant-leave.guard";

@NgModule({
  declarations: [CantLeavePageComponent],
  imports: [CommonModule, CantLeavePageRoutingModule, FormsModule],
  providers: [CantLeaveGuard],
})
export class CantLeavePageModule {}
