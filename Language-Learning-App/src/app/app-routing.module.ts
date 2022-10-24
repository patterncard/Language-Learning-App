import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CategoriesRoutingModule } from './categories/categories-routing.module';
import { CoinsRoutingModule } from './coins/coins-routing.module';
import { FlashcardRoutingModule } from './game/flashcard/flashcard-routing.module';
import { GameRoutingModule } from './game/game-routing.module';
import { SentenceRoutingModule } from './game/sentence/sentence-routing.module';
import { HighscoreRoutingModule } from './highscore/highscore-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { PictureRoutingModule } from './picture/picture-routing.module';
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
	{
		path: 'picture',
		loadChildren: () =>
			import('./picture/picture.module').then((m) => m.PictureModule),
	},
	{
		path: 'coins',
		loadChildren: () =>
			import('./coins/coins.module').then((m) => m.CoinsModule),
	},
	{
		path: 'flashcard',
		loadChildren: () =>
			import('./game/flashcard/flashcard.module').then(
				(m) => m.FlashcardModule
			),
	},
	{
		path: 'sentence',
		loadChildren: () =>
			import('./game/sentence/sentence.module').then(
				(m) => m.SentenceModule
			),
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
		GameRoutingModule,
		PictureRoutingModule,
		CoinsRoutingModule,
		FlashcardRoutingModule,
		SentenceRoutingModule
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
