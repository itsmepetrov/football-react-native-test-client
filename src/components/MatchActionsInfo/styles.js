import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  actionsInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  timeInfo: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    width: 60
  },
  normalText: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  addedText: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center'
  },
  smallTeamBadge: {
    marginTop: 17,
    height: 50,
    width: 50
  },
  eventInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
