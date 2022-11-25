import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuontriesService } from './services/cuontries.service';
import { FeatureLandingPageComponent } from './feature/feature-landing-page/feature-landing-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CuontriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
