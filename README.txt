* client
	- npx create-react-app ./

* server - 
	- npm init -y (initialize package.json)
   *dependencies
	- npm install body-parser (enable us to send post request)
	- npm install cors (enable cross origin request)
	- npm install express (framework for creating routing for application)
	- npm install mongoose (create models for our posts)
	- npm install nodemon (no need to manually reset the server)

	- under package.json - below "main": index.js, add the "type": "module
	- delete what it's in scripts and add "start": "nodemon index.js"


* client
npm i @material-ui/core @material-ui/icons @material-ui/lab axios jwt-decode material-ui-chip-input moment react-file-base64 react-google-login react-redux react-router-dom redux redux-thunk --legacy-peer-deps

setup the monggoDB 
https://www.youtube.com/watch?v=VsUzmlZfYNg&t=1170s
19:32

* server 
	- setup the index.js (connec to database)
	- run npm start in client

   - crate routes folder 
	- create file posts.js
	- under posts.js try first if it's connected
		router.get('/', () ={ res.send('this work')});
      -under index.js 
		import postRoutes from './routes.posts.js'
		- use express middleware
		app.use('/posts', postRoutes);
		- go to url http://localhost:5000/posts (check if working)

   - crate controllers folder 
		- create posts.js
   - create model folder 
		- create postsMessage.js
		- create the schema
    - setup the posts.js under controllers
		-  setup the getPost  and createPosts
		
* Client
	- npm install @material-ui/core (UI kit)
	- create components folder
	- under components folder - create Form and Posts folder
	- npm start under client
	- setup the App.js
	- setup the components files js & css
	
	- create API folder -add index.js
	- create reducers and action folder 

	- inside index.js under src folder (initialize redux)
	
 	- setup reducers index.js and posts.js
	- setup posts.js under actions folder

CLIENT AND SERVER IS NOW CONNECTED 
	
	start with setuping the Form.js 
https://www.youtube.com/watch?v=VsUzmlZfYNg&t=1170s
1:07:02 