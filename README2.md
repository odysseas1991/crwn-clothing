1. Starting project with:
   npx create-react-app crw-clothing

2. SASS installed with:
   npm add node-sass

3. Router
   npm add react-router-dom

   3.1 we use Route and Switch.
   Switch gives us more control to routing.

   3.2 withRouter() we have access to location, match and history props!!!

   HOC: High Order component is a function that takes another component as
   an argument, tranforms it into another component and returns that
   transformed component out of itself.
   `url(${imageUrl})`

4. Redux

   npm add redux redux-logger react-redux

5. npm add redux-persist

   Redux persist is a library allowing to save the redux store in the local storage of your browser.
   It lets us leverage either locale storage or session storage.

6. npm add react-stripe-checkout
   It provides us the checkout button.

7. Heroku

   To build again the new version of the application:

   git add -A
   git push heroku master

8. npm add redux-thunk

   Handle asynchronous redux. It is a piece of middleware that allows us to fire functions.

<--------! To render img for local directory dynamically !--------------------->

Example:

1. locate images folder to ../../images....

2. JSON data
   const SHOP_DATA = [
   {
   id: 1,
   title: 'Hats',
   routeName: 'hats',
   items: [
   {
   id: 1,
   name: 'brown-brim',
   //imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
   imageUrl: '/images/shop-img/hats/',
   price: 25
   },
   {
   id: 2,
   name: 'blue-beanie',
   imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
   //imageUrl: '/images/shop-img/hats/blue-beanie.png',
   price: 18
   },
   {
   id: 3,
   name: 'brown-cowboy',
   imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
   //imageUrl: '/images/shop-img/hats/brown-cowboy.png',
   price: 35
   }
   ]
   }
   ];

3. The key is to have a reference ex. name. But we need our image.png has the same name.

const CollectionItem = ({ id, name, price, imageUrl }) => (

<div className='collection-item'>
<div className='image'>
<img
src={require(`../../images/shop-img/hats/${name}.png`)}
alt='ss' ></img>
</div>
<div className='collection-footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>
</div>
);

4. FIREBASE

   4.1 npm add firebase
   4.2 Google Sign In authentication :https://firebase.google.com/docs/auth/web/google-signin

5. AFTER BULIDING THE BACK END 

   npm run dev

   to run both server and client