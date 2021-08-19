import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { AddClientComponent } from './add-client/add-client.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { WeComponent } from './we/we.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ClientelistComponent } from './clientelist/clientelist.component';
import { ClienteaddComponent } from './clienteadd/clienteadd.component';
import { ClientedetailsComponent } from './clientedetails/clientedetails.component';
import { CitalistComponent } from './citalist/citalist.component';
import { CitaaddComponent } from './citaadd/citaadd.component';
import { CitadetailsComponent } from './citadetails/citadetails.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { CitaMenuComponent } from './cita-menu/cita-menu.component';
import { ClienteMenuComponent } from './cliente-menu/cliente-menu.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
       
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        AddClientComponent,
        MenuComponent,
        InicioComponent,
        WeComponent,
        ProductlistComponent,
        ProductaddComponent,
        ProductdetailsComponent,
        ClientelistComponent,
        ClienteaddComponent,
        ClientedetailsComponent,
        CitalistComponent,
        CitaaddComponent,
        CitadetailsComponent,
        ProductMenuComponent,
        CitaMenuComponent,
        ClienteMenuComponent
        
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
