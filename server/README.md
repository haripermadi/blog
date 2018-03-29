# blog-with-express-and-TDD
Simple blog web using TDD

# what is that?
A simple blog web app where users could sign up and login. User can see all blog post and also post a new blog.

#Build set up

##Server
```
npm install
npm start /nodemon start

```
##Client

```
npm install
npm run dev
npm run build

```

#Routing

**Route** | **HTTP** | **Descrition**
----------|----------|---------------
/login/signup | POST | sign up user
/login/signin | POST | login user
/article | GET | show all articles
/article | POST | add new an article
/article/:id | PUT | update an articles
/article/:id | DELETE | remove an articles

#Demo

For demo apps you can access [blog.haripermadi.com](http://blog.haripermadi.com)