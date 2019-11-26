import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { HomeModule } from "./pages/home/home.module";

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HomeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
