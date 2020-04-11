import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  return (
    <div className='collection-page'>
      <h2>collection PAGE</h2>
    </div>
  );
};

//the 1st argument 'state' is the overall state from store
//the 2nd argument 'ownProps' is the props of our component(CollectionPage)
//which takes the props from ROUTE of shop page
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
