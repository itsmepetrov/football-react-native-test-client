import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  date: {
    fontSize: 50,
    fontWeight: '800',
    textAlign: 'center',
  },
  time: {
    fontSize: 50,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10
  }
});
