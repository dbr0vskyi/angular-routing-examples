import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { AuthAdminGuard } from "./auth-admin.guard";

@NgModule({
  imports: [CommonModule],
  providers: [AuthService, AuthGuard, AuthAdminGuard],
})
export class AuthModule {}
