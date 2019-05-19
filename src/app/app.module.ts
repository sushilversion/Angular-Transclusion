import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppInitService } from '@app/app-init.service';
import { AppComponent } from '@app/app.component';
import { appRouterModule } from '@app/app.routes';
import { CoreModule } from '@app/core/core.module';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { SharedModule } from '@app/shared/shared.module';
import { TodoListCompletedModule } from '@app/todo-list-completed/todo-list-completed.module';
import { TodoListModule } from '@app/todo-list/todo-list.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'environments/environment';

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(
    httpClient,
    environment.feServerUrl + '/assets/i18n/',
    '-lang.json'
  );
}
@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    appRouterModule,
    TodoListCompletedModule,
    TodoListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AppInitService,
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
