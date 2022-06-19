import React, {Component} from "react";
import { Animated, View, Text } from "react-native";

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 5000
      }
    ).start()
  }

  render() {
    const opacity = this.state.fadeAnim
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
        <Animated.View style={{
          height: 150,
          width: 300,
          borderWidth: 3,
          borderColor: 'black',
          borderRadius: 50,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacity
        }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>React Native</Text>
        </Animated.View>
      </View>
    )
  }
}

export default Animation
