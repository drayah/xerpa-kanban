# xerpa-kanban

![Kanban](http://i.imgur.com/24xwzbt.png)

An implementation of a Kanban webapp written in ES2015 and Vue.js

## Requirements

In order to build, test and run the project make sure you have the following tools installed.

* Chrome 
* Node 6+
* Npm 3+

## Build Setup

``` bash
# make sure you have all project dependencies installed
npm install

# run tests
npm test 

# serve with hot reload at localhost:8080 for development
npm run dev

# build for production with minification
npm run build
```

## Description

The Kanban app is made up of the following Vue components:

* kanban-app  
This is a container component that groups KanbanHeader, 
KanbanBoard and KanbanFooter components.

* kanban-header  
This simple component serves as the header for the app.

* kanban-footer  
This simple component serves as the footer for the app.

* kanban-board  
The board functions as a container and groups three 
separate KanbanList components together. 
The lists function as todo, doing and done lists.

* kanban-list  
The list deals with showing a list of KanbanCard components and
enables the user to add new cards to itself.

* kanban-card  
The card is a draggable component that can be moved within a list
and between different lists. You can delete a card by clicking on it 
in order to show the card's actions.

## Improvements

Native DnD didn't work out to great and is buggy due to the computed card list.
Evaluate a move to a custom drag and drop implementation in order to function
more like trello.

The deletion state for cards is buggy when more than one card has its state set 
for deletion and when moving a card to a list containing cards that have their
deletion state enabled. This should be improved.

Add the ability to edit existing cards.

Evaluate nightwatch.js for use with automated testing inside the browser.