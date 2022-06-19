import { StyleSheet } from "react-native";

const animationScrollViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentBox: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  point: {
    height: 5,
    marginHorizontal: 5,
    backgroundColor: 'black',
    borderRadius: 2
  },
  noteBox: {
    height: 20,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 5
  }


})

export default animationScrollViewStyles
