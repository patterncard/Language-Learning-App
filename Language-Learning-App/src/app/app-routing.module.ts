import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CategoriesRoutingModule } from './categories/categories-routing.module';
import { GameRoutingModule } from './game/game-routing.module';
import { HighscoreRoutingModule } from './highscore/highscore-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { SettingsRoutingModule } from './settings/settings-routing.module';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then((m) => m.AuthModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'categories',
		loadChildren: () =>
			import('./categories/categories.module').then(
				(m) => m.CategoriesModule
			),
	},
	{
		path: 'highscore',
		loadChildren: () =>
			import('./highscore/highscore.module').then(
				(m) => m.HighscoreModule
			),
	},
	{
		path: 'settings',
		loadChildren: () =>
			import('./settings/settings.module').then((m) => m.SettingsModule),
	},
	{
		path: 'game',
		loadChildren: () =>
			import('./game/game.module').then((m) => m.GameModule),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		AuthRoutingModule,
		HomeRoutingModule,
		CategoriesRoutingModule,
		HighscoreRoutingModule,
		SettingsRoutingModule,
		GameRoutingModule
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
