import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FabMenuComponent } from "./fab-menu/fab-menu.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations:[
        FabMenuComponent,
        HeaderComponent
    ],
    imports:[
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports:[
        FabMenuComponent,
        HeaderComponent
    ]
})

export class ComponentsModule{}