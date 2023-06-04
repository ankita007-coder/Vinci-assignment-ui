import { gql } from 'apollo-boost';

export const GET_WIDGET1_DATA = gql`
  query GetWidget1Data {
    widget1Data {
      // Sample fields
      id
      title
      value
    }
  }
`;

export const GET_WIDGET2_DATA = gql`
  query GetWidget2Data {
    widget2Data {
      // Sample fields
      id
      name
      count
    }
  }
`;

export const GET_WIDGET3_DATA = gql`
  query GetWidget3Data {
    widget3Data {
      // Sample fields
      id
      date
      revenue
    }
  }
`;
