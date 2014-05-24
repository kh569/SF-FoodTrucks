SF-FoodTrucks
=============

It will show all the approved Food trucks located in San Francisco area.

Built by Kuo-En Hung, 5/22/14

###Project Demo:
[click here] (http://sf-foodtrucks-khung.herokuapp.com) or  
[http://sf-foodtrucks-khung.herokuapp.com](http://sf-foodtrucks-khung.herokuapp.com)

The [SF food truck data](https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat) is from the public website [SF data](http://www.datasf.org/). It provides an API for querying JSON data backs.

###The technical track
* front-end: HTML5, CSS, JavaScript
* Back-end: Node.js, Express.js (no experience)
* Test DB: MongoDB, Mongoose, Mongolab (no experience)
* Deployed at Heroku (no experience)
* API: Google Maps Javascript API v3 library (no experience)

###Reasoning behind your technical choices
* Back-end
  * It’s my first time to use Node.js to build a web app.
  * Node.js is very powerful, it's Javascript, and because everything is asynchronous, and all I/O is non-blocking. It is easy to build a single page apps, and interact with filesystems
  * At first, I was studying how to use MongoDB, but actually we don’t really need to use it, because there are not too many records in the jason file. Although, I did have a version using [MongoLab](https://mongolab.com/welcome/).
  * It took me some time to figure out how to utilize the data jason file from [SF food truck data](https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat).
  * I used the Google Maps Javascript API v3 library to make requests directly to the Google Maps API from the browser and display the data. I also using markerclusterer, a [google-maps-utility-library-v3](https://code.google.com/p/google-maps-utility-library-v3/wiki/Libraries), to per-zoom clusters for large amounts of markers.


###Future works
* I would add some function to this app. For example, add a search bar, so user can search for food trucks based on food type, address, zip code. 
* For clean MVC software design purpose, I will use some fornt-end framework, like backbone.js or boostrap

###Link to your resume or public profile
[Github repo](https://github.com/kh569/SF-FoodTrucks)

[Linkedin](http://www.linkedin.com/in/kuoenmichaelhung/)

