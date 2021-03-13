# OpenBank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About the app

It consists of the following module,

#### Core Module

This module injects the home and header module.

#### Header Module

The header section of the app is packaged as a header module. This modules shares a sticky directive from the shared folder to enabe sticky feature.

#### Home Module

The home section, incorportes the left section(Banner), right section(calculator) and the bottom section(Cards).

It includes calculator component and the re-usable cards module.

## Shared Feauture

#### Cards Module

A shared module and includes a card component and uses transclusion/content projection.

#### Sticky Directive

This is a shared directive if used on an element, makes that element sticky.

#### Destroy service

An injection token, can be used to unsubscribe from the subcribtion(Observable).

#### Window service

It provides a proper way to access the window object.