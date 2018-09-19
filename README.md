# material-travelville

This project for apply material design to web by using meteor js framework


## Setup
 ```
 git clone https://github.com/gm445566/material-travelville.git myapp
cd myapp
meteor npm install
  ```

### Initial project starting 
I use add package by using npm

- meteor npm i materialize-css --save
- meteor npm i jquery@3.2.1 --save

because I have problem with installing by "meteor add materialize-css "

### Design
This project will have component/section each content that is

- header
- slide
- folow
- popular
- search
- iconbox
- gallery
- footer

in jquery coding I use 

```javascript
if (Meteor.isClient) {
    $(function() {
        $('.modal').modal();
        $('.sidenav').sidenav();
        $('.materialboxed').materialbox();
        $('.slider').slider({
            indicators: false,
            height: 500,
            transition: 500,
            interval: 6000
        });
        // Autocomplete
        $('.autocomplete').autocomplete({
            data: {
                "Aruba": null,
                "Cancun Mexico": null,
                "Hawaii": null,
                "Florida": null,
                "California": null,
                "Jamaica": null,
                "Europe": null,
                "The Bahamas": null,
                "Pattaya": null
            }
        });
        // Init Scrollspy
        $('.scrollspy').scrollSpy();
    });

```

or you can use

```javascript
Template.layout.onRendered(function() {
    // code here
})
```
### Screenshots

![alt text](https://raw.githubusercontent.com/gm445566/material-travelville/master/readme/screen.png)

project reference from [youtube Traversy Media](https://www.youtube.com/watch?v=MaP3vO-vEsg&t=2833s)
