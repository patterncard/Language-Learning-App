import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardComponent } from './flashcard.component';

const routes: Routes = [
	{
		path: 'flashcard',
		component: FlashcardComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FlashcardRoutingModule {}
