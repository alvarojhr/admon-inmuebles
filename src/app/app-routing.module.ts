import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogUserComponent } from "./log-user/log-user.component";

const routes: Routes = [{ path: "login", component: LogUserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
