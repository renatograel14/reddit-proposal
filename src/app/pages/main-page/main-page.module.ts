import { ThemeModule } from '../../theme/theme.module';
import { MainPageRoutingModule, routedComponents } from './main-page.routing';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MainPageRoutingModule, ThemeModule],
    exports: [],
    declarations: [...routedComponents],
    providers: [],
})
export class MainPageModule { }
