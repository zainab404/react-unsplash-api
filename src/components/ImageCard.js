// purpose of this component is to show one image by itself
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
    // this is how we create a reference, call React.createRef to an instance vairable
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({spans: spans});
  }

  render() {
    const { description, urls} = this.props.image
    // ^^^ THIS LETS US BREAK DOWN OUR PROPS REFERECE, 
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img 
        alt={description}
        src={urls.regular}
        ref={this.imageRef}
        // ^^^ SO INSTEAD OF THIS.PROPS.DESCRIPTION, YOU CAN JUST DO DESCRIPTION
         />
      </div>
    )
  }
}

export default ImageCard;