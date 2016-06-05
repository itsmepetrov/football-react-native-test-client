import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  teamInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  teamName: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    height: 40
  },
  teamBadge: {
    height: 170,
    width: 170
  }
});
