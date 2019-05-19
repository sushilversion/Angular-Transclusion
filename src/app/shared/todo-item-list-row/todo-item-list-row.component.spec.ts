/* tslint:disable:no-unused-variable */
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { appRouterModule, rootPath } from '@app/app.routes';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { InvalidDateValidatorDirective } from '@app/shared/invalid-date.directive';
import { TODOItem } from '@app/shared/models/todo-item';
import { SpinnerModule } from '@app/shared/spinner/spinner.module';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { AddTodoComponent } from '@app/todo-list/add-todo/add-todo.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { TodoItemListRowComponent } from './todo-item-list-row.component';

describe('TodoItemListRowComponent', () => {
  let component: TodoItemListRowComponent;
  let fixture: ComponentFixture<TodoItemListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        TodoListComponent,
        TodoItemListRowComponent,
        FooterComponent,
        AddTodoComponent,
        TodoListCompletedComponent,
        InvalidDateValidatorDirective
      ],
      imports: [
        BrowserModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot(),
        FormsModule,
        appRouterModule,
        SpinnerModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: rootPath },
        {
          provide: TodoListService,
          useValue: { todoList: [new TODOItem('Buy milk', 'Remember to buy milk')] }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
