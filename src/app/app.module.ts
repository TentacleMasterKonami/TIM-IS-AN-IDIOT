import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { MangaComponent } from "./pages/manga/manga.component";
import { MangaPageComponent } from "./pages/manga-page/manga-page.component";
import { CenterComponent } from "./component/center/center.component";
import { AgoTimePipe } from "./pipes/ago-time.pipe";
import { UploadComponent } from './pages/upload/upload.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    UploadComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MangaComponent,
    MangaPageComponent,
    CenterComponent,
    AgoTimePipe,
    NotFoundComponent,
    FavoritesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
