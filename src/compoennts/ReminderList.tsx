 
import { Reminder } from "../models/reminder"
interface RemiderListProps{
items:Reminder[]
}


export const ReminderList = ({items}:RemiderListProps) => {

return (<ul>
    {
        items.map(item=><li key={item.id}>{item.title}</li>)
    }
</ul>)

 
}