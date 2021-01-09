import React from 'react'
import { Router } from '@reach/router';
import { useQuery, useMutation } from '@apollo/client';
import Lolly from '..//template/yourLolly';
import gql from 'graphql-tag';

const fetchLollies=gql`
query MyQuery {
  
      lollies {
        sender
        middle
        message
        bottom
        recipient
        top
        lollyPath
      }
    }
  
`;

export default function VirtualLolly() {
    const { data, loading, error } = useQuery(fetchLollies);
    if (loading) {
        return <h1>Loading</h1>
    }
    return (
        <Router basepath="/virtuallolly">
           {data.lollies.map((value,key)=>{
               return( <Lolly key={key} pageContext={value} path={`/${value.lollyPath}`}></Lolly>)
           })}
        </Router>
    )
}
