import React, {Component} from "react";
import { View, Text, ScrollView, ImageBackground, Animated, Dimensions } from "react-native";
import animationScrollViewStyles from "./animationScrollViewStyles";

const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4')

const window = Dimensions.get('window')

class AnimationScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        window
      }
    }
  }

  scrollX = new Animated.Value(0)

  onDimensionsChange = ({window}) => {
    this.setState({dimensions: {window}})
  }

  // componentDidMount() {
  //   Dimensions.addEventListener('change', this.onDimensionsChange)
  // }
  //Hàm addEventListener là thêm sự kiện
  //Hàm removeEventListener là xóa bỏ đi sự kiện
  // componentWillUnmount() {
  //   Dimensions.removeEventListener('change', this.onDimensionsChange)
  // }

  render() {
    const windowWidth = this.state.dimensions.window.width

    return(
      <View style={animationScrollViewStyles.container}>
        <View style={animationScrollViewStyles.contentBox}>
          {this._renderShowImageBox(windowWidth)}
          {this._renderShowIndicator(windowWidth)}
        </View>

      </View>
    )
  }
  _renderShowImageBox(windowWidth) {
    return(
      <ScrollView
        horizontal={true}
        pagingEnabled
        // để hình ảnh zô khớp, chuyển hẳn sang trang
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: this.scrollX
              }
            }
          }
        ])}
        scrollEventThrottle={1}
      >
        {
          images.map((image, imageIndex) => {
            return(
              <View style={{
                height: 250,
                width: windowWidth
              }}
              key={imageIndex}
              >
                <ImageBackground
                  source={{uri: image}}
                  style={animationScrollViewStyles.image}
                >
                  {this._renderShowImageNote(imageIndex)}
                </ImageBackground>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }

  _renderShowImageNote(imageIndex) {
    return(
      <View style={animationScrollViewStyles.noteBox}>
        <Text style={{color: 'white'}}>Image: {imageIndex}</Text>
      </View>
    )
  }

  _renderShowIndicator(windowWidth) {
    return(
      <View style={{flexDirection: 'row'}}>
        {
          images.map((image, imageIndex) => {
            const width = this.scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [5, 12, 5],
              extrapolate: 'clamp'
            })
            return(
              <Animated.View
                // key={imageIndex}
                style={[animationScrollViewStyles.point, {width}]}
              />
            )
          })
        }
      </View>
    )
  }

}

export default AnimationScrollView
