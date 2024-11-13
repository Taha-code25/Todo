import React from 'react';
import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 30,
    color: '#471AA0',
    fontFamily: 'Saira',
  },
  inputView: {
    marginTop: 10,
    flexDirection: 'row',

  },
  input: {
    backgroundColor: '#grey',
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 5,
    borderColor: '#BB84E8',
    borderWidth: 1,
    marginBottom: 24,
    height: 50,
    width: 220,
    fontSize: 16,
    padding: 10,
    flex:1
  },
  listStyle: {
    marginVertical: 2.5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke',
    padding: 20,
    borderColor: 'whitesmoke',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: 350,
  },
  textStyle: {
    fontSize: 20,
    marginRight: 20,
    flex: 1,
  },
  mainStyles: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 40,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
  },
  editbtnStyle: {
    paddingRight: 10,
  },
  button: {
    backgroundColor: '#4CAF50', // Green background for the button
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 5, // Rounded corners
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    marginTop: 10, // Margin on top for spacing
  },
  list: {
    alignItems: 'center',
  },
  addIcon: {
    marginTop:2,
    width: 40,
    height: 40,
    tintColor: '#471AA0',
    // marginLeft:3
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
  pencilStyle: {
    marginRight: 4,
    tintColor: '#471AA0',
  },
  trashStyle: {
    tintColor: '#B22222',
  },
});

export default style;
