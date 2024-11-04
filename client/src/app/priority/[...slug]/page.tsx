import React from 'react'
import ReusablePriorityPage from '../reusablePriorityPages'
import { Priority } from '@/state/api'


const Urgent = ({params}:{
  params:{
    slug:string[]
  }
}) => {
  if(params.slug.length>0 && params.slug[0]==="urgent"){
    return <ReusablePriorityPage priority={Priority.Urgent}/>
  }
  if(params.slug.length>0 && params.slug[0]==="high"){
    return <ReusablePriorityPage priority={Priority.High}/>
  }
  if(params.slug.length>0 && params.slug[0]==="medium"){
    return <ReusablePriorityPage priority={Priority.Medium}/>
  }
  if(params.slug.length>0 && params.slug[0]==="low"){
    return <ReusablePriorityPage priority={Priority.Low}/>
  }
  if(params.slug.length>0 && params.slug[0]==="backlog"){
    return <ReusablePriorityPage priority={Priority.Backlog}/>
  }
  
}

export default Urgent