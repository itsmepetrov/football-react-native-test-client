import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  matchResult: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  teamResult: {
    width: 170,
    fontSize: 70,
    fontWeight: '800',
    textAlign: 'center',
  },
  resultSpace: {
    fontSize: 50,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10
  },
  scorersInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  scorersItems: {
    flex: 1,
    margin: 10
  },
  homeScorerName: {
    textAlign: 'left'
  },
  awayScorerName: {
    textAlign: 'right'
  }
});
