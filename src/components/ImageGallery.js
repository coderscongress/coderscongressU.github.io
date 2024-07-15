

import React, { Component } from 'react';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.jpg';
import pic9 from '../images/pic9.jpg';
import pic10 from '../images/pic10.jpg';
import pic11 from '../images/pic11.jpg';
import pic12 from '../images/pic12.jpg';
import pic13 from '../images/pic13.jpg';
import pic14 from '../images/pic14.jpg';
import pic15 from '../images/pic15.jpg';
import pic16 from '../images/pic16.jpg';
import pic17 from '../images/pic17.jpg';
import pic18 from '../images/pic18.jpg';
import pic19 from '../images/pic19.jpg';
import pic20 from '../images/pic20.jpg';
import "./indexList.css";




class ImageGallery extends Component {   


    state = {
        index: 0, 
        picList: [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14,pic15,pic16,pic17,pic18,pic19,pic20]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div align="center">
            <img src={this.state.picList[this.state.index]}  style={{"maxHeight":"40%","maxWidth":"60%"}} alt={""} /> <br/>
          
		  <button style={{"fontSize":"30px"}} onClick={this.onClickPrevious}> &lt;&lt; </button>
           <button style={{"margin-left":"5px", "fontSize":"30px"}} onClick={this.onClickNext}> &gt;&gt; </button>
		  </div>
        );
      }

}


export default ImageGallery;