import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Alert = ({msg,type}) => {
  return (
    <div className='flex px-2 items-center justify-center rounded-md gap-2 w-max min-w-[180px] h-[50px] bg-gray-200 fixed top-5 z-50 right-5'>
        {type==='SUCCESS' &&
            <TaskAltIcon color = 'success' />
        }
        {type==='ERROR' &&
            <ErrorOutlineIcon color = 'error' />
        }
        <div style={{color:type==='SUCCESS'?'green':'#d32f2f'}}>{msg}</div>
    </div>
  )
}

export default Alert