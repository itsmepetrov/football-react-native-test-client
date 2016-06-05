import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  }
});
