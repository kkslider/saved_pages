## What does this do?

SavedPages is a working clone of Instapaper, the popular 'read later' app. SavedPages provides a bookmarklet that the user can drag to his/her bookmark bar, and click at any time to save the current link to their account. 

The user can then load SavedPages and view a list of their bookmarked pages. as well as perform actions on them including editing, liking, archiving, deleting, and sharing via email. 

## How does it work?

### The bookmarklet: [Github Gist code](https://gist.github.com/kkslider/d5ca6eb1e75cb0a8e623)
The Javascript bookmarklet first checks if the current page has jQuery loaded. If it doesn't, a script is appended to the page loading a specified version of jQuery (1.10.2 at the moment). 

Next, the document URL is parsed and an AJAX POST request is made to the SavedPages resource URL for bookmarks. On success, a dark overlay is appended to the document body that fades in and out, along with a "Saved!" message. On failure (the user is not currently logged in to SavedPages), the user is redirected to the SavedPages sign in page. 

### The client-side

Backbone.js is used as the client-side MVC framework. After successful sign in or creation of an account, the user is directed through the Backbone router to the 'unread' view, where the view and the sidebar are rendered. 

There are three tabs organizing bookmarks: 'Unread', 'Liked', and 'Archive'. Each tab fetches a collection of bookmarks that correspond to the tab type, e.g. the 'Archive' tab only displays archived bookmarks. Actions taken on bookmarks, such as editing, liking, archiving, and deleting, are applied to the appropriate Backbone model and propagated to the database through Rails. 

### The server-side

Rails handles the direction of HTTP requests through the router and the specified resource URLs. There are two models and controllers - users and bookmarks. The user model stores users' emails, encrypted (using BCrypt) passwords, and session token. The sessions controller handles the logging in and logging out of users. The bookmark model stores the bookmark URL, title, summary (optional), and user ID. In addition, each bookmark has boolean 'is_liked' and 'is_archived' attributes. When the Backbone bookmarks collection is fetched, the 'unread' action in Rails passes the properly ordered set of bookmarks back in JSON, based on the data param from the fetch call. 

## What are some challenges you faced? 

### Same Origin Policy 

The same origin policy on the web prevents HTTP requests made from one running application to another destination. HTTP cookies are kept confential in this manner, such that sensitive user activity information is kept to one site. This posed a problem with the bookmarklet, which runs an AJAX POST request from whichever site the user is on to the SavedPages server. In this scenario, no user cookies are sent and the request is detected as cross domain, so the request fails. To get around this, Cross-origin resource sharing (CORS) is utilized to allow such cross domain requests. I installed the Rack CORS gem and configured the back-end to accept requests from any origin. Additionally, the AJAX request needs to have an 'xhrFields' key with 'withCredentials: true' value set in order for the current browser cookies to be sent to the destination. 

### Database Schema

Originally, I planned on having different models for liked and archived bookmarks, such that both tables stored a user id and bookmark id. I realized later that this would be better handled as properties of the Bookmark model, through is_liked and is_archived booleans. Any user actions could be simply handled through the toggling of the boolean property. 

### Ordering of Bookmarks

Instapaper orders the bookmarks differently by tab. In 'Unread', the bookmarks are sorted by creation date descending. In 'Liked' and 'Archive', they are sorted by updated date descending. One option I had was to define a comparator for the Backbone bookmarks collection upon fetch. However, because the collection is fetched from the same resource URL, I would have had to define the comparator differently within each Backbone route. The main issue with this was that Kaminari paginates by sending an 'x' quantity of records per request, and each request would send bookmarks that would need to be filtered by type (liked/archived). Thus, though they could be sorted properly, the proper amount of records sent would vary by type, something not handled by Kaminari. I addressed this by filtering the bookmarks and ordering them in the Rails controller according to the data param sent in the fetch call. Thus, the Backbone collection would be set with the right number of models as well as the right order. 
