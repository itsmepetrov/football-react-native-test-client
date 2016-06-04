export const MATCHES_FOR_DATE = `
  query matches($date: String!) {
    matches(date: $date) {
      id
      date
      koTime
      result
      homeTeam {
        id
        name
        badge(width: 70 height: 70) {
          url
          width
          height
        }
        score
        scorers
      }
      awayTeam {
        id
        name
        badge(width: 70 height: 70) {
          url
          width
          height
        }
        score
        scorers
      }
    }
  }
`;

export const MATCH_INFO = `
  query match($id: ID!) {
    match(id: $id) {
      id
      date
      koTime
      result
      homeTeam {
        id
        name
        badge(width: 150 height: 150) {
          url
          width
          height
        }
        score
        scorers
      }
      awayTeam {
        id
        name
        badge(width: 150 height: 150) {
          url
          width
          height
        }
        score
        scorers
      }
      actions {
        teamId
        eventType
        matchTime
        eventTime
        normalTime
        addedTime
        whereFrom
        players {
          id
          teamId
          name
        }
      }
    }
  }
`;
