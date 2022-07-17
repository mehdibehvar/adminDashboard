import React from 'react'
import useNotifIcon from '../customHooks/useNotifIcon'

export default function ToastIcon({status}) {
    const icon=useNotifIcon(status);
  return (<i className={`material-icons text-${status==="info"?"white":status} me-2`}>
 {icon}
</i>

  )
}
