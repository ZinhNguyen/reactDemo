import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
const final_style = StyleSheet.create({
  container:{
   flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'deepskyblue',
    alignItems: 'flex-end',
    paddingBottom: 5,
    position: 'absolute'
  },
  body: {
    flex: 8,
    marginTop: 55,
    position: 'relative',
    marginBottom: 60,
  },  
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'deepskyblue',
    position: 'absolute',
    marginTop: 600,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerImage: {
    flex: 1,
    justifyContent: 'center',
  },
  headerLeft: {
    flex: 9,
    paddingTop: 10,
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
  loginTitle:{
    fontSize: 25,
    color: 'deepskyblue'
  },
  line:{
    borderBottomColor: 'deepskyblue',
    borderBottomWidth: 2,
    width: 60,
    marginTop: 5,
  },
  login:{
    borderBottomWidth: 1,
    paddingBottom: 1,
    marginTop: 20,
  },
  loginContainer:{
    paddingLeft: 30,
    paddingRight: 30,
  },
  loginFogotText:{
    color: 'deepskyblue',
    marginTop: 10,
  },
  loginRight:{
    alignItems: 'flex-end'
  },
  loginCenter:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  center:{
    justifyContent: 'center'
  },
  loginNow:{
    color: 'deepskyblue',
  },
  loginButton:{
    backgroundColor: "deepskyblue",
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  loginText:{
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },
  loginIcon:{
    width: 35,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gainsboro',
    
  },
  loginIconContainer:{
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 20,
  },
});


export default final_style;
