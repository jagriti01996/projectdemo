import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { RegisterComponent } from "./components/register/register.component";
import { BlogComponent } from "./components/blog/blog.component";
import { HomeComponent } from "./components/home/home.component";
import { ActivitiesComponent } from './components/activities/activities.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

  {
    path: "menu",
    component: MenuBarComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "activities",
    component: ActivitiesComponent,

  },
  { 
    path: "**",
   component: HomeComponent
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
