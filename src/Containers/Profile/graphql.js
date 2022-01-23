import gql from 'graphql-tag'

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $input: String!){
    updateUser(email: $email, input: $input){
      email
    }
  }
`
