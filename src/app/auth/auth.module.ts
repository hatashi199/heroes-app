import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
	declarations: [
		LayoutPageComponent,
		LoginPageComponent,
		RegisterPageComponent
	],
	imports: [AuthRoutingModule]
})
export class AuthModule {}
