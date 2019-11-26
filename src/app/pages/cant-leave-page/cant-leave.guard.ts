import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { CantLeavePageComponent } from "./cant-leave-page.component";

@Injectable()
export class CantLeaveGuard implements CanDeactivate<CantLeavePageComponent> {
  canDeactivate(
    component: CantLeavePageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return !component.cantLeave;
  }
}
