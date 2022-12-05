import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SelectionsComponent } from './pages/selections/selections.component';
import { GrupsComponent } from './pages/grups/grups.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [AllGamesComponent, HomeComponent, SelectionsComponent, GrupsComponent, ProfileComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
