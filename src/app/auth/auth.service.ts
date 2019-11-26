import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable()
export class AuthService {
  private readonly USER_PASSWORD = "qwerty";
  private readonly ADMIN_PASSWORD = "toor";
  private hasSession = false;

  get isAuthorized(): boolean {
    return this.hasSession;
  }

  isAuthorizedStatic(): Promise<boolean> {
    return of<boolean>(true)
      .pipe(delay(800))
      .toPromise();
  }

  authorizeUser() {
    const enteredPassword = prompt("Please, enter the user password.");

    this.hasSession = this.USER_PASSWORD === enteredPassword;

    return this.isAuthorized;
  }

  isAdmin() {
    const enteredPassword = prompt("Please, enter the ROOT user password.");

    return this.ADMIN_PASSWORD === enteredPassword;
  }
}
