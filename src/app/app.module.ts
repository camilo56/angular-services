import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GetPostService } from './services/get-post.service';

//three shaking
//Generar Servicios
//Tipos de servicios
//Inyeccion servicios
//Que es RxJS - Reactive programming
//Observable vs promises vs callback
//fuente de datos de un observable
//como escuchar un observable
//cuando se inia el escuchador del observable
//como se crean los observable
//Creation	from , fromPromise , fromEvent , of

//Manipulacion datos - Operadores - pipe
//Combination =	combineLatest , concat, startWith , withLatestFrom , zip
//Filtering	= debounceTime , distinctUntilChanged , filter , take , takeUntil
//Transformation =	bufferTime , concatMap , map , mergeMap , scan , switchMap
//Utility	tap
//Multicasting	share


//Comvencion de combres $
//Importar modulo http

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
