import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params:{query: term}
    // ^^^THIS CODE MAKES A REQUEST TO THE UNSPLASH API, SEARCHES FOR A NUMBER OF PHOTOS, AND UNSPLASH WILL SEND BACK JSON THAT HAS PHOTO DATa
    })
    this.setState({images: response.data.results});
    // how can i find this response.data.results again
    // console.log(this.state.images)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
};

export default App;