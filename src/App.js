import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesC from './components/Particles/Particles';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import React, { Component } from 'react';


const PAT = '676a8b7f09fd40dd9ab16dc639b32ee1';
 const USER_ID = 'k98s7l8byogf';
const APP_ID = 'faceDetect';
const MODEL_ID = 'face-detection';
 const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';

const initialstate = {
   input: '', 
      imageUrl: '',  
      box: {},
      route: 'signin',
      IsSignIn: false,
      user: {
            id: '',
            name: '',
            email: '',
            entries: 0,
            joined:''
      }
}
class App extends Component {
  constructor() {
    super();
    this.state = initialstate;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries:data.entries,
        joined: data.joined
      }
    })
}

  displayFaceBox = (box) => {
    
    this.setState({ box: box });
  }
  calculateFaceLocation = (data) => {
     const regions = data.outputs[0].data.regions;
    const img = document.getElementById('inputimage');
    const width = Number(img.width);
    const height = Number(img.height);
       
      const faceBoxes = regions.map(region => {
        const boundingBox = region.region_info.bounding_box;
        const topRow = boundingBox.top_row * height;
        const rightCol = width - boundingBox.right_col * width;
        const bottomRow = height - boundingBox.bottom_row * height;
        const leftCol = boundingBox.left_col * width;

        console.log(`Bounding Box: ${topRow}, ${rightCol}, ${bottomRow}, ${leftCol}`);

        return {
            topRow,
            rightCol,
            bottomRow,
            leftCol
        };
    });

    console.log('Face Boxes:', faceBoxes);

    return faceBoxes;
    
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  
  }
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
 const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": this.state.input
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };


    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
      
    .catch(error => console.log('error', error));
 fetch('http://localhost:3000/image', {
                method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.state.user.id
                
            })
       
          })
            .then(responses => responses.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {
                entries:count 
              }))
            })
  

  }
  onRouteChange = (data) => {
    if (data === 'signout') {
      this.setState(initialstate)
    }
    else if (data === 'home') {
      this.setState({IsSignIn:true})
      
    }

    this.setState({route: data});
  }

  render() {
    return (
      <div className="App">

        <ParticlesC />
                <Navigation IsSignIn={this.state.IsSignIn} onRouteChange={this.onRouteChange} /> 
        {this.state.route === 'home'
          ?
          (<div>
          
          <Logo />
            <Rank name={ this.state.user.name} entries={this.state.user.entries} />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit} />
          < FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>)
          : (
            this.state.route==='signin'?
       
              (<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />)
              :(<Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
               )
           }
      </div>
    );
  }

}
export default App;
