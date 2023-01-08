import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratsCategoryComponent } from './congrats-category.component';

const routes: Routes = [
	{
		path: 'congrats-category',
		component: CongratsCategoryComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CongratsCategoryRoutingModule {}
