import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewComponent } from './components/products/view/view.component';
import { WhishlistComponent } from './components/products/whishlist/whishlist.component';
import { CartComponent } from './components/products/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { CheckoutComponent } from './components/products/checkout/checkout.component';
import { ProductsModule } from './components/products/products.module';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,    
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ProductsModule, AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
