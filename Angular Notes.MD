- [Angular Notes](#angular-notes)
    - [CLI Commands](#cli-commands)
    - [Modules](#modules)
      - [Route Module](#route-module)
      - [Ng Module](#ngmodule)
    - [Component](#components)
      - [Variables in @Component](#variables-in-component)
        - [selector](#selector)
        - [template / templateUrl](#template--templateurl)
        - [styles / styleUrls](#styles--styleurls)
      - [Note: prefix](#note-prefix)
    - [Directives](#directives)
      - [Structural Directives](#structural-directives)
      - [Attribute Directives](#attribute-directives)
      - [Built-in Directives](#built-in-directives)
        - [Directive 1- ngIf](#directive-1-ngif--expression-that-can-be-converted-to-boolean)
          - [Optional chaning](#optional-chaining)
        - [Directive 2- ngFor](#directive-2-ngfor)
        - [Directive 3- ngSwitchCase](#directive-3-ngswitch)
        - [Directive 4- ngClass](#directive-4-ngclass)
        - [Directive 5- ngStyle](#directive-5-ngstyle)
    - [Pipes](#pipes)
      - [Built-in Pipes](#built-in-pipes)
        - [date](#date)
        - [lowercase](#lowercase)
        - [title](#titlecase)
        - [percent](#percent)
        - [json](#json)
        - [slice](#slice)
        - [number](#number-for-decimals)
    - [Adding Bootstrap](#adding-bootstrap)
    - [Lifecycle Hooks](#lifecycle-hooks)
      - [ngOnInıt](#ngoninit)
    - [Component Communication](#component-communication)

# Angular Notes
------------------
$~~~~~~$
## CLI Commands


- ``ng new projectName`` => creates an angular project with default application

- ``ng new projectName`` --createApplication=false => creates an angular empty angular project
    - ``ng g app`` also do the same thing.

## Template Syntax


### Modules

#### Route Module
- We need at least 1 module to bootstrap our app, and it's called as Route Module.
    - Anguler adds route module as default whose name is AppModule in app.module.ts file.

- Route Module contains information about which angular components, directives, pipes, 3tr party libs, spesific angular libs and Modules are being used so that in main.ts file, application starts with the information in Route Module.
    - ````js
        //main.ts
          platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
      ````

#### NgModule

- NgModule is a decorater that contains all metadata information about Module's component, libs, directives.

````js
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //this is the component will be loaded first.
})
export class AppModule { }
````



### Components

- Once we created a component, we get 4 files
    - app.component.ts
    - name.component.html
    - name.component.scss
    - name.component.spec.ts 
- We need one root component as we need one root module.
- Components can be called views.

#### Variables in @Component

##### selector

- It selects the element where we wanna render our component(view).

##### template / templateUrl

- template is used to use inline html
- templateUrl is used to use hmtl file.
    - It gets relative path like ./fileName.html


##### styles / styleUrls

- styles prop gets string arrays to style the html.
- styleUrls prop also gets string array to locate the css/scss files to style the html.


-----------------------------


### Note: prefix

- Prefix is used as prefix when we create new components and angular suggests that we should use prefixes to avoid confliction with another elements which my exist.

- It is assigned in angular.json

- People changed the app prefix to what they want or what their company/project name is.

- now, when we create new components, their selector is set to ``prefix-componentName``


### Binding Syntax


- Angular has 3 binding sytax
  - Interpolation
  - Property Syntax
  - Event Binding

#### Binding Syntax

- html files can use variables from component class using double curly brackets

````js
<h2>Welcome to {{hotelName}}</h2>
//hotelName comes from rooms component class
````


#### Property Syntax

- Angular adds some properties and one of them is to bind our variables to elements.
- we can use ``[innerText]`` property in elements which actually means ``document.getElementById('elementWeAreOn').innerText`` to bind variable
$
````js
<div [innerText] = 'hotelName'></div>
````
- the properties defined built-in are solely usable in property syntax
(box syntax is being used)

#### Event Binding

- To bind events in Angular, banana syntax is used.

````js
//In JavaScript
<button onClick = "function()"></button>
````

````js
<button (click) = "toggle()">Toggle</button>
````

## Directives

- Directives are use to change the behaviour or apperance of DOM elements

- They can implement all lifecylce hooks

- They dont have any templates, just have the logic.

- There are 2 types of Directives

### Structural Directives

- They are the directives that changes the DOM layout by adding and removing DOM elements.

- they may cause performanse issue that means they are costlier than Attribute Directives.


### Attribute Directives

- It changes the apperance of DOM.



### Built-in Directives

#### Directive 1: *ngIf = "expression that can be converted to boolean"
- ngIf is used to remove or add html elements to DOM based on a if statement we set.

- By the way, hidden property doesn't remove the element that it's implemented, it'll still appear in 'Inspect the source'.


--------------------------------------
__A small feature of TS__
###### Optional Chaining

* ?. is used to stop running when encounter to null or unefined values.

````js

// in angular, we can use them with ngIf

<p *ngIf = "rooms?.availableRooms && rooms.availableRooms > 0"></p>

````

-------------------------------------------


#### Directive 2: *ngFor

* It allows us to use for each statement in elements.
````js
<tr *ngFor="let room of roomList">

</tr>
````

* ngFor also allows us to get if the for each loop count even or odd.

````js
<tr *ngFor = " ...; ...; ...; let e = even; let o = odd">
<td>{{e ? "Even" : "Odd" }}</td>
</tr>
````

- Whatsmore, it allows us to get index of the collection being used.

````js
<tr *ngFor = " ...; ...; ...; let i = index">
  <td>{{i}}</td>
</tr>
````


#### Directive 3: ngSwitch

- It allows to add switch-case statements, it kind of differs from other structural directives.

````js
<div [ngSwitch]="role"> // It takes a variable to check its value
    <div *ngSwitchCase="'Admin'"> // case controlled, remember to use '' if value is string
        <hinv-rooms></hinv-rooms>
    </div>
    <div *ngSwitchCase="'User'">
        <div>
            Welcome to the page, User!
        </div>
    </div>
    <div *ngSwitchDefault> // this is default case
        <div>
            You are not allowed to view this page!
        </div>
    </div>
</div>
````


#### Directive 4: ngClass

- It allows us to change elements' class.
````js
<div [ngClass]="e ? 'even': 'odd' " // we determine class if it is even or odd
     [ngSwitch]="role"> // It takes a variable to check its value
    <div *ngSwitchCase="'Admin'"> // case controlled, remember to use '' if value is string
        <hinv-rooms></hinv-rooms>
    </div>
    <div *ngSwitchCase="'User'">
        <div>
            Welcome to the page, User!
        </div>
    </div>
    <div *ngSwitchDefault> // this is default case
        <div>
            You are not allowed to view this page!
        </div>
    </div>
</div>
````


#### Directive 5: ngStyle

- It allows us to change style of the elements

````js
<div [ngStle]="{color: rooms.availableRooms ? 'green' : 'red'}">
````



## Pipes

- Pipes are used to tranform our data.

- They keep the data as it is but format it.

- usage is simple, just add | symbol by the variable and use pipe name.

### Built-in Pipes

#### date

- transform data typed variables to date as will.

- there are some pre-defined options
  - ... | date : 'short' or 'long' or 'shortDate'
    - also it can be specified like 'dd/MMM/yyyy'
  - Here is the list of pre defined options
![list](/AngularCourseGreateLearning/pics/pre-defined_DatePipe_Options.png)

#### lowercase

- everything will be displayed as lowercase

#### titleCase

- each word's first letter will be capitilized.


#### percent

- makes numbers percentaged


#### json

- it is used to convert objects to json format in development stage

#### slice

- it slices arrays and gets 2 parameter
  - ``slice : firstIndex : lastIndex``
    - first index is included but lastIndex not.
- suggestion : don't use slice for pagination, do it in server side.


#### number (for decimals)

- It allows us to configure decimal values' display.
  - number : 'before.min-max'
    - before => default 0 - it puts zeros before the value.
    - min => default 0 - it determines min fractions (if doesn't exist, it adds zero to complete min value we pass)
    - max => default 3 - it determines max fractions (if doesn't exist as much as the amounth we pass, just skips)



## Adding Bootstrap
- in app.component.css - sass - scss file, add the import statement below.
``@import '~bootstrap/dist/css/bootstrap.min.css';``

- or in angular.json file, add the path like above to this part 
````js
"styles": [
  "src/styles.scss",
  "bootstrap/dist/css/bootstrap.min.css"
]
````
--------------------------------------

## Lifecycle Hooks

- lifecycle starts when angular instantiates component and its child view and it ends when Angular destroys the component instance and removes its rendered template from the DOM.


### ngOnInit

- we should use constructor to be able to instantiate our component class but we shouldn't use constructor to set data. constructor should be used to inject services.

- ngOnInit is used to instantiate lifecycle and gets data to set our props.

- ngInıt must be implemented to related component class


### Component Communication


- as the app grows, components will need to communicate with each other and we also make them communicate with each other creating reusable html tags by passing data to them.

- There are 3 ways for component communication


#### Input 

- Input is a decorator that makes the components selector element be able to get data from property.

- ``@Input() rooms : IRoomList[] = [];``

- then we pass the data required like this:
  - ``<hinv-rooms-list [rooms]="roomList"></hinv-rooms-list>``


- What we can infere is we created a new component just renders the the list of rooms by getting data using _@Input_. All It knows is just render the data. The component that contains this component is passes data to the room-list component.

- This relationship can be called parent-child or smart-dumb. 
  - parent/smart is room-component (that passes data) and child/dumb is room-list component (that gets data to render sth)

- For sake of single responsibility principle, split the components down as their purpose.


#### Output

- Input is used to get data from other components. So output is used to give data to other components. Since we called the data receiver component as "dumb or child", we don't wanna let him to handle operations. We create EventEmitters to make it emit event we actually defined events in parent components. this is the way we can give data to parent components from child components.

- First off, we use @Output and create Event emitter:
  - ``@Output() selectedRoom = new EventEmitter<IRoomList>()``
- Then we add a method that gets a IRoomList item as a parameter and use it for event emitting.
  - ``SelectRoom(room:IRoomList){ this.selectedRoom.emit(room); }``
- Add this method to a element's event like button click.
  - ``<td><button class="btn btn-primary" (click)="SelectRoom(room)">Select</button></td>``
- So far, it doesn't know what to do with this room object, it is just an event emitter.
  - ``<hinv-rooms-list [rooms]="roomList" (selectedRoom)="selectRoom($event)"></hinv-rooms-list>``
    - (selectedRoom) => event call
    - "selectRoom($event)" event given by the parent component
  - Time to a method to pass for that event.
    - ``selectRoom(room:IRoomList){ console.log(room) }`` => It is the operation will be handled for selectedRoom event.

### Change Detection

- Angular has a feature to keep tracking of changes in all views named Change Detection.

- Change Detection is configured in Component Decorator. 

  - changeDetection: ChangeDetectionStrategy.OnPush or default.
  - OnPush deactivates the auto detection.
  - To be able to change it to OnPush, you must not change data in the component. So, if the data come from outside, you can use OnPush.
    - Also, if the variables used in the component change, immutable variables must be passed to be able to get updated data.
      - to make it immutable, you must pass new instance of the object. mutable means that changing so as we pass new instance of an object we passed a immutable object.
      - for instance, instead of rooms.push(room), use rooms = [...roomList, room].


### ngOnChanges

- To use ngOnChanges, @Input need to be used to keep track of sth.

- onChange interface is implemented to use ngOnChanges

- Here is the method :
````js
ngOnChanges(changes: SimpleChanges): void {

}
````

- Changes can be monitored using changes object like this

````js
changes['propName'] => it returns true or false 

````

### DoCheck

- It is hardly used but it allows us to track of event around of all application. This makes it so costly, avoid using it!



### Using Other Component's member without @Input or @Output

- When we don't have access to another component with inputs and outputs but we wanna fetch their member, ViewChild Decorator can be used.

- How it is used :

````js
@ViewChild(HeaderComponent) headerComponent! : HeaderComponent;
````

- But there are some point we need to be careful:

  - headerComponent can't be initialized during or before ngOnInıt. It is because headerComponent can have delay and cause problems. so, to be able to get the component as ready to use, AfterViewInit is used. (also child component's tag must be used in component html)
  - Though, there is a way to override this and fetch the component in ngOnInıt.
    - If the component doesn't have any delay, add a new object has static member and set it true. Its default value is false not to cause any exception due to delay. If the child component is a async component, set it to false.
    - ``@ViewChild(HeaderComponent, {static:true}) headerComponent! : HeaderComponent;``

- ViewChildren can be used for multiple childs

### ng-templates

* templates never render anything but help to render other templates or __components__

- templates can be used with ViewChild to render Component.

````js
export class AppComponent implements AfterViewInit {
  
  @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;
  
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
  // componentRef can be used to get the props using componentRef.instance.Props
}
````

### Template Reference

- It is similar to ng-templates
````js
    @ViewChild('name', {static: true}) nameEl! : ElementRef;

    ngOnInit() {
      this.nameEl.nativeElement.innerText = 31;
    }
````

## Content Projection

- We use ng-content to project the content passed into its selector.

````js
//  if we pass content without using ng-content like this 
<hinv-container>
    <h1>Hello from ng-content</h1>
</hinv-container>
// h1 element won't be displayed
````

````js
// but if we use ng-content in container's html file, it will be displayed
<ng-content></ng-content>
````

- Also we can decide the order of process of loading contents
````js
// The order we decide using in container.component.html
<ng-content select="hinv-employee"></ng-content>
<ng-content></ng-content>
<ng-content select="hinv-rooms"></ng-content>

//app.component.html

<hinv-container>
    <hinv-rooms></hinv-rooms>
    <h1>Hello from ng-content</h1>
    <hinv-employee></hinv-employee>
</hinv-container>
// even if we put these content the order of hinv-room - ngcontent - hinv-employee, order is overridden by the order we have decided in container.component.html
````
### ngContentInit

- now it is abvious that we can access the components passed into ng-content element using ngContentInit.

- The way we do it is that using ngAfterContentInit from afterContentInit interface.

- there is no static option.


### ngOnDestroy

- ngOnDestroy is called when a component got destroyed. This is the last lifecycle hook.

- ngOnDestroy is used to unsubscribe the data subscriptions so that the consuption can be reduced.

