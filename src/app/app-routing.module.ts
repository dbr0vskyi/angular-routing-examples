import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthModule } from "./auth/auth.module";
import { AuthAdminGuard } from "./auth/auth-admin.guard";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  {
    path: "home",
    component: HomeComponent,
  },

  {
    path: "page-with-params",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/page-with-params/page-with-params.module").then(
        (m) => m.PageWithParamsModule
      ),
  },

  {
    path: "page-with-children",
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import("./pages/page-with-children/page-with-children.module").then(
        (m) => m.PageWithChildrenModule
      ),
  },

  {
    path: "cant-leave-page",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/cant-leave-page/cant-leave-page.module").then(
        (m) => m.CantLeavePageModule
      ),
  },

  {
    path: "admin",
    canLoad: [AuthAdminGuard],
    loadChildren: () =>
      import("./pages/admin/admin.module").then((m) => m.AdminModule),
  },

  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
