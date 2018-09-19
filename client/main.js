// import { Template } from 'meteor/templating';

// For meteor npm i materialize-css --save
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'jquery/dist/jquery.js'; //jquery version 3.2.1 use "meteor nmp install"

import './main.css';
import './main.html';
import '../imports/header/header.js';
import '../imports/slider/slider.js';
import '../imports/search/search.js';
import '../imports/iconbox/iconbox.js';
import '../imports/popular/popular.js';
import '../imports/gallery/gallery.js';
import '../imports/follow/follow.js';
import '../imports/contact/contact.js';
import '../imports/footer/footer.js';

/* Template.layout.onRendered(function() {
    $(".button-collapse").sideNav();
});
 */
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
}