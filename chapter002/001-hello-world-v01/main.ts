import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-world',
    template: '<h1>Hello {{ name }}!</h1> <p>Welcome to "Developping Angular with TypeScript".</p>'
})
class HelloWorldComponent {
    name: string;

    constructor() {
        this.name = 'Yves Schelpe';
    }
}

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HelloWorldComponent
    ],
    bootstrap: [
        HelloWorldComponent
    ]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);