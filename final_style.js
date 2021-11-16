import {StyleSheet} from 'react-native';
const final_style = StyleSheet.create({
  container:{
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'deepskyblue',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  body: {
    flex: 8,
  },  
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'deepskyblue',
  },
  headerImage: {
    flex: 1,
    justifyContent: 'center',
  },
  headerLeft: {
    flex: 9,
  },
  headerRight: {
    flex: 1,
  },
  footerMiddle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input:{
    height: 40,
    marginLeft: 10,
    marginRight: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'white',
  },
});

export default final_style;
