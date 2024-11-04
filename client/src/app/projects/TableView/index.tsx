import React from 'react'
import Header from '@/components/Header'
import { useGetTasksQuery } from '@/state/api'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import { dataGridClassNames, dataGridSxStyles } from '@/lib/utils'
import { useAppSelector } from '@/app/redux'
type Props = {
    id:string
    setIsModalNewTaskOpen:(isOpen:boolean)=>void
}
const columns:GridColDef[] = [
  {
    field:"title",
    headerName:"Title",
    width:100
  },
  {
    field:"description",
    headerName:"Description",
    width:200
  },
  {
    field:"status",
    headerName:"Status",
    width:130,
    renderCell:(params)=>(
      <span className='inline-flex rounded-full bg-green-100 text-xs px-2 font-semibold leading-5 text-green-800'>
        {params.value}
      </span>
    )
  },
  {
    field:"priority",
    headerName:"Priority",
    width:75
  },
  {
    field:"tags",
    headerName:"Tags",
    width:130
  },
  {
    field:"startDate",
    headerName:"Start Date",
    width:130
  },
  {
    field:"dueDate",
    headerName:"Due Date",
    width:130
  },
  {
    field:"author",
    headerName:"Author",
    width:150,
    renderCell:(params)=>params.value?.username || "Unknown"
  },
  {
    field:"assignee",
    headerName:"Assignee",
    width:150,
    renderCell:(params)=>params.value?.username || "Unassigned"
  },
 

]
const Table = ({id,setIsModalNewTaskOpen}: Props) => {
  const {data:tasks,error,isLoading}=useGetTasksQuery({projectId:Number(id)})
  const {isDarkMode} = useAppSelector((state)=>state.global)
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>Error while fetching tasks</div>

  return (
    <div className='h-[540px] w-full px-4 pb-8 xl:px-6'>
      <div className='pt-5'>
        <Header name='Table' buttonComponent={
                <button className='flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600' onClick={()=>setIsModalNewTaskOpen(true)}>
                    Add Task
                </button>
            } isSmallText/>
      </div>
      <DataGrid rows={tasks || []} columns={columns} className={dataGridClassNames} sx={dataGridSxStyles(isDarkMode)}/>
    </div>
  )
}

export default Table