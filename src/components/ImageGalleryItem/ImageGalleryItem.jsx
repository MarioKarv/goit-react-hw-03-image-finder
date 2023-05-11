import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal'
import css from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };

  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt="img"
          onClick={this.onModal}
          className={css.ImageGalleryItemImage}
        />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
