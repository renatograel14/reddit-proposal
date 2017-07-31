import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdSidenavModule } from '@angular/material';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { ThemeModule } from '../../theme/theme.module';
import { MainPageRoutingModule, routedComponents } from './main-page.routing';


@NgModule({
    imports: [
        CommonModule,
        MainPageRoutingModule,
        ThemeModule,
        MalihuScrollbarModule.forRoot(),
        MdSidenavModule
    ],
    exports: [],
    declarations: [...routedComponents],
    providers: [],
})
export class MainPageModule { }
