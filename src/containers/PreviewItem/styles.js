import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
    paddingBottom: 10
  },
  homeTeam: {
    width: 80,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'right',
    paddingBottom: 30
  },
  awayTeam: {
    width: 80,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'left',
    paddingBottom: 30
  },
  result: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 30
  },
  badge: {
    height: 70,
    width: 70
  }
});
