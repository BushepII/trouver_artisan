import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { LegalmentionsComponent } from './components/legalmentions/legalmentions.component';
import { PersonnaldatasComponent } from './components/personnaldatas/personnaldatas.component';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';
import { PressComponent } from './components/press/press.component';
import { TradeComponent } from './components/trade/trade.component';
import { GettotheregionComponent } from './components/gettotheregion/gettotheregion.component';
import { ContactComponent } from './components/contact/contact.component';
import { CookiespolicyComponent } from './components/cookiespolicy/cookiespolicy.component';
import { HandlecookiesComponent } from './components/handlecookies/handlecookies.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { PageArtisanComponent } from './components/page-artisan/page-artisan.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artisan/:id', component: PageArtisanComponent},
    { path: 'legal-mentions', component: LegalmentionsComponent},
    { path: 'personnal-datas', component: PersonnaldatasComponent},
    { path: 'accessibility', component: AccessibilityComponent},
    { path: 'press', component: PressComponent},
    { path: 'trade', component: TradeComponent},
    { path: 'get-to-the-region', component: GettotheregionComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'cookies-policy', component: CookiespolicyComponent},
    { path: 'handle-cookies', component: HandlecookiesComponent},
    { path: '**', component: ErrorpageComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}