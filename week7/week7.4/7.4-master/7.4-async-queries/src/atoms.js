import axios from "axios";
import { atom, selector } from "recoil";
// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });

// this is how we handle asychornus task in reacoil - point is hum log direct async method nhi bana sakte default me ,documentation k hisab se selector asyc ho sakta hai isliye default me ek selector banaya hai
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkSelector",
        get:async ()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})