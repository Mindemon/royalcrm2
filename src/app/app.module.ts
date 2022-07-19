import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './layout/main/app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LogoComponent } from './layout/header/logo/logo.component';
import { HamburgerComponent } from './layout/header/hamburger/hamburger.component';
import { LeftNavComponent } from './layout/header/left-nav/left-nav.component';
import { RightNavComponent } from './layout/header/right-nav/right-nav.component';
import { LoggedComponent } from './layout/header/right-nav/logged/logged.component';
import { NotLoggedComponent } from './layout/header/right-nav/not-logged/not-logged.component';
import { NavLinkTopComponent } from './layout/header/nav-link-top/nav-link-top.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    HamburgerComponent,
    LeftNavComponent,
    RightNavComponent,
    LoggedComponent,
    NotLoggedComponent,
    NavLinkTopComponent
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
