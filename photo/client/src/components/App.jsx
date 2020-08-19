import React from 'react';
import axios from 'axios';
import Description from './Description.jsx';
import MainPhotos from './MainPhotos.jsx';
import LandingPage from './LandingPage.jsx';
import PropertyOverview from './PropertyOverview.jsx';
import Modal from './Modal.jsx';
import ReactCarousel from './ReactCarousel.jsx';
import ReactCarouselPhotos from './ReactCarouselPhotos.jsx';
import Share from './Share.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      rooms: [],
      photos: [],
      currentPage: '',
      show: false,
      photoIndex: '',
      share: false
    }

    this.getProperties = this.getProperties.bind(this);
    this.getRooms = this.getRooms.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.lowerPhotoIndex = this.lowerPhotoIndex.bind(this);
    this.increasePhotoIndex = this.increasePhotoIndex.bind(this);
    this.openShare = this.openShare.bind(this);
    this.hideShare = this.hideShare.bind(this);
  }

  getProperties(location) {
    axios.get(`/properties/${location}`)
    .then((results) => {
      this.setState({
        properties: results.data
      })
    })
    .catch(() => console.log('There was an error with getting the data'))
  }

  getRooms(location) {
    axios.get(`/rooms/${location}`)
    .then((results) => {
      this.setState({
        rooms: results.data
      })
    })
    .catch(() => console.log('There was an error with getting the data'))
  }

  getPhotos(location) {
    axios.get(`/photos/${location}`)
    .then((results) => {
      this.setState({
        photos: results.data
      })
    })
    .catch(() => console.log('There was an error with getting the data'))
  }

  lowerPhotoIndex() {
    this.setState({
      photoIndex: this.state.photoIndex - 1
    })
  }

  increasePhotoIndex() {
    this.setState({
      photoIndex: this.state.photoIndex + 1
    })
  }

  openModal(event) {
    console.log(event.target.getAttribute('value'));
    this.setState({
      show: true,
      photoIndex: Number(event.target.getAttribute('value'))
    });
  }

  closeModal() {
    this.setState(state => ({
      show: false
    }));
  }

  openShare() {
    this.setState({
      share: true
    })
  }

  hideShare() {
    this.setState({
      share: false
    })
  }

  componentDidMount() {
    const location = window.location.pathname.match(/(\d+)/) ? window.location.pathname.match(/(\d+)/)[0] : null;
    this.getProperties(location);
    this.getRooms(location);
    this.getPhotos(location);
    this.setState({
      show: false,
      share: false
    })
  }

  render() {
    return (
      <div>
        {this.state.share ? <Share /> : null}
        {this.state.photos.length > 0 && this.state.show === false ? <LandingPage data={this.state.properties} photos={this.state.photos} click={this.openModal} share={this.openShare} hide={this.hideShare} shareState={this.state.share}/> : null}
        {/* {this.state.photos.length > 0 && this.state.show === true ? <Modal rooms={this.state.rooms} photos={this.state.photos} closeModal={this.closeModal} show={this.state.show}/> : null} */}
        {this.state.photos.length > 0 && this.state.show === true ? <ReactCarousel rooms={this.state.rooms} photos={this.state.photos} closeModal={this.closeModal} show={this.state.show} index={this.state.photoIndex} lower={this.lowerPhotoIndex} increase={this.increasePhotoIndex}/> : null}
      </div>
    )
  }
}

export default App;