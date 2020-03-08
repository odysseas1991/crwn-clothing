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

!!!!!!!!!!!! To render img for local directory dynamically !!!!!!!!!!!!!!!!!!!!!

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
