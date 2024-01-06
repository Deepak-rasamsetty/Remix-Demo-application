import { useLoaderData } from '@remix-run/react';
import React from 'react'

export default function applicationInfo() {
  const applicationId = useLoaderData();
  console.log(applicationId);
  return (
    <div>
      Hello, this is application id - <h2>{applicationId}</h2>
    </div>
  )
}

export async function loader({params}){
  console.log(params.applicationId);
  return params.applicationId;
}
