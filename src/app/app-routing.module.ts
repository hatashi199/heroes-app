import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { activateAuthGuard, matchAuthGuard } from './auth/guards/auth.guard';
import {
	activatePublicGuard,
	matchPublicGuard
} from './auth/guards/public.guard';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then((m) => m.AuthModule),
		canActivate: [activatePublicGuard],
		canMatch: [matchPublicGuard]
	},
	{
		path: 'heroes',
		loadChildren: () =>
			import('./heroes/heroes.module').then((m) => m.HeroesModule),
		canActivate: [activateAuthGuard],
		canMatch: [matchAuthGuard]
	},
	{
		path: '404',
		component: Error404PageComponent
	},
	{
		path: '',
		redirectTo: 'heroes',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
