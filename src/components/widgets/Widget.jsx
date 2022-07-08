import useModifiedNumbers from "../../customHooks/useModifiedNumbers";

export default function Widget({type}) {
    let widgetData;
    switch (type) {
        case 'today-money':
            widgetData={
                icon:"weekend",
                value:53000,
                title:"today's money",
                performance:"+55",
                timeRange:"last week",
                iconColor:"dark"
            }
            break;
        case 'new-clients':
            widgetData={
                icon:"person",
                value:3462,
                title:"new clients",
                performance:"-6",
                timeRange:"yesterday",
                iconColor:"success"
            }
            break;
        case 'sales':
            widgetData={
                icon:"weekend",
                value:1034304,
                title:"sales",
                performance:"-5",
                timeRange:"yesterday",
                iconColor:"info"
            }
            break;
        case 'today-users':
            widgetData={
                icon:"person",
                value:230,
                title:"today's users",
                performance:"+3",
                timeRange:"last month",
                iconColor:"primary"
            }
            break;
    
        default:
            break;
    }
  return (
    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
    <div className="card">
      <div className="card-header p-3 pt-2">
        <div className={`icon icon-lg icon-shape bg-gradient-${widgetData.iconColor} shadow-${widgetData.iconColor} text-center border-radius-xl mt-n4 position-absolute`}>
          <i className="material-icons opacity-10">{widgetData.icon}</i>
        </div>
        <div className="text-end pt-1">
          <p className="text-sm mb-0 text-capitalize">{widgetData.title}</p>
          <h4 className="mb-0">{type==="today-money"||type==="sales"?"$":null} {useModifiedNumbers(widgetData.value)}</h4>
        </div>
      </div>
      <hr className="dark horizontal my-0"/>
      <div className="card-footer p-3">
        <p className="mb-0"><span className={`text-${widgetData.performance>=0?"success":"danger"} text-sm font-weight-bolder`}>{widgetData.performance}% </span>than {widgetData.timeRange}</p>
      </div>
    </div>
  </div>
  )
}
///useModifiedNumbers is a customhook for seperating numbers in three section