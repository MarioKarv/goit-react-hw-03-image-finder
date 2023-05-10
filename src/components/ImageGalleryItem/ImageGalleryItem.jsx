import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal'

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
      <li class="gallery-item">
        <img src={webformatURL} alt="image" onClick={this.onModal} />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
