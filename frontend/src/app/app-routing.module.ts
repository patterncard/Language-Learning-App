import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CategoriesRoutingModule } from './categories/categories-routing.module';
import { CoinsRoutingModule } from './coins/coins-routing.module';
import { CongratsCategoryRoutingModule } from './congrats/congrats-category/congrats-category-routing.module';
import { CongratsCoinsRoutingModule } from './congrats/congrats-coins/congrats-coins-routing.module';
import { CongratsFailureRoutingModule } from './congrats/congrats-failure/congrats-failure-routing.module';
import { CongratsLevelRoutingModule } from './congrats/congrats-level/congrats-level-routing.module';
import { CongratsPointsRoutingModule } from './congrats/congrats-points/congrats-points-routing.module';
import { FlashcardRoutingModule } from './game/flashcard/flashcard-routing.module';
import { GameRoutingModule } from './game/game-routing.module';
import { ImageRoutingModule } from './game/image/image-routing.module';
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
	{
		path: 'image',
		loadChildren: () =>
			import('./game/image/image.module').then((m) => m.ImageModule),
	},
	{
		path: 'congrats-points',
		loadChildren: () =>
			import('./congrats/congrats-points/congrats-points.module').then(
				(m) => m.CongratsPointsModule
			),
	},
	{
		path: 'congrats-coins',
		loadChildren: () =>
			import('./congrats/congrats-coins/congrats-coins.module').then(
				(m) => m.CongratsCoinsModule
			),
	},
	{
		path: 'congrats-failure',
		loadChildren: () =>
			import('./congrats/congrats-failure/congrats-failure.module').then(
				(m) => m.CongratsFailureModule
			),
	},
	{
		path: 'congrats-level',
		loadChildren: () =>
			import('./congrats/congrats-level/congrats-level.module').then(
				(m) => m.CongratsLevelModule
			),
	},
	{
		path: 'congrats-category',
		loadChildren: () =>
			import(
				'./congrats/congrats-category/congrats-category.module'
			).then((m) => m.CongratsCategoryModule),
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
		SentenceRoutingModule,
		ImageRoutingModule,
		CongratsPointsRoutingModule,
		CongratsCoinsRoutingModule,
		CongratsFailureRoutingModule,
		CongratsLevelRoutingModule,
		CongratsCategoryRoutingModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
