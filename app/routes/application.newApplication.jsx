import { redirect } from '@remix-run/react';
import React from 'react'
import NewApplicationForm from '../components/NewApplicationForm'
import { getAllApplications, storeApplication } from '../data/applications';

export default function application() {
  return (
    <div>
     <NewApplicationForm/>
    </div>
  )
}


