import { gql } from '@apollo/client';

export const PODCAST_QUERY = gql`
  query getPodcasts($keywords: String) {
    contentCards(filter: { limit: 20, keywords: $keywords, types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name
          image {
            uri
          }
          categories {
            name
          }
          participants {
            firstName
            lastName
            jobTitle
            company
          }
          timeSpentOnByUsers
          length
          hostedBy {
            firstName
            lastName
            company
          }
          id
        }
      }
    }
  }
`;
