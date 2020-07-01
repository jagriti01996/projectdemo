import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { RegisterComponent } from "./components/register/register.component";
import { BlogComponent } from "./components/blog/blog.component";
import { AboutTabComponent } from "./components/about-tab/about-tab.component";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  
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
    path: "about-tab",
    component: AboutTabComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
