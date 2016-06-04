import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scroll: {
    marginTop: 62
  },

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
  },

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
  },

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
