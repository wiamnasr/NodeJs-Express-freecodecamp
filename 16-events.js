/*
        Events => big part of our work is to handle events (click, hover, ...)

        -       In browser app, those events are mostly external

        -       Event driven programming is a style by which the flow of the program is at least partly determined by the events that occur as the program executes

        -       Used heavily in server side with node js

        -       Once our event takes place, a callback function is fired


        >>>>>>>>>>>> Having a look at some examples setting up our own events
*/

// typically named EventEmitter because we are getting back the class
const EventEmitter = require("events");

/*
        At this point we have 2 options

        -       If we want to create something custom, we need to extend the class

        -       If we simply want to emit an event as well as listen for it, we just create the instance (will go with route) 

*/

// Creating the instance of our class (the object)
const customEmitter = new EventEmitter();

/*
        There are many methods available on this object, however the most used are "on" and "emit"

        -       "on" => Will listen for an event

        -       "emit" => emit an event

*/

// >>>>>>>>>>ORDER MATTERS<<<<<<<<<<<<

// In this basic setup, we are just passing in the string (the name of the event, named response here)
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id ${id}`);
});

// We can have as many methods as we want, like listening to the same event and doing some other thing
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

// the strings need to match (since I am emitting the "response" event that's what needs to match)
// many arguments can be passed in here that can be accessed by callback functions as parameters
customEmitter.emit("response", "john", 34);
