import React from 'react'
import Widget from './Widget';

export default function Widgets() {
  const widgetType=['today-money','today-users','new-clients','sales'];
  const widgetsList=widgetType.map(type=><Widget key={type} type={type}/>)
  return (
    <div className="row">
  {widgetsList}
  </div>
  )
}
