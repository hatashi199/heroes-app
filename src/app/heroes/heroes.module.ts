import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroImgRoutePipe } from './pipes/hero-img-route.pipe';

@NgModule({
	declarations: [
		HeroPageComponent,
		LayoutPageComponent,
		ListPageComponent,
		NewPageComponent,
		SearchPageComponent,
  HeroCardComponent,
  HeroImgRoutePipe
	],
	imports: [HeroesRoutingModule, CommonModule]
})
export class HeroesModule {}
