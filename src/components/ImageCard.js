import React from 'react'

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0}
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans =() => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans: spans})
    };

    render(){
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img src={urls.regular} alt={description} ref={this.imageRef}/>
            </div>
        )
    }
}

export default ImageCard