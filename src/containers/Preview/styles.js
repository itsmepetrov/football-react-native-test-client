import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    marginTop: 62
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'stretch',
    margin: 10
  },
  openButton: {
    flex: 1,
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: 1,
    backgroundColor: '#ffffff',
    position: 'absolute',
    height: 50,
    bottom: 0,
    right: 0,
    left: 0
  },
  closeButton: {
    flex: 1,
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: 1,
    backgroundColor: '#ffffff',
    position: 'absolute',
    height: 50,
    bottom: 0,
    right: 0,
    left: 0
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  },
  calendar: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    backgroundColor: '#ffffff',
    position: 'absolute',
    height: 320,
    bottom: 0,
    right: 0,
    left: 0,
    marginBottom: -20
  }
});
