const useNotifIcon=(status)=>{
switch (status) {
    case "success":
        return "check"
    case "info":
        return   "notifications"
case "warning":
    return "travel_explore";
    case "danger":
        return "campaign"
    default:
        break;
}
}
export default useNotifIcon;