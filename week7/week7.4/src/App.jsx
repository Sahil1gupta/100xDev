import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {RecoilRoot,useRecoilValue} from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotification } from "./atoms";
function App() {
  const [count, setCount] = useState(0);


  return <>
  <RecoilRoot>

    <MainApp/>
  </RecoilRoot>
  </>;
}

function MainApp() {

  const networkNotificationCount=useRecoilValue(networkAtom>=100?"99+":networkAtom)
  const jobsAtomCount=useRecoilValue(jobsAtom);
  const notificationsAtomCount=useRecoilValue(notificationsAtom)
  const messagingAtomCount=useRecoilValue(messagingAtom)
  const totalNotifications=useRecoilValue(totalNotification)
  // const totalNotification=useMemo(()=>(
  //   networkNotificationCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount
  // ),[networkNotificationCount,jobsAtomCount,notificationsAtomCount,messagingAtomCount])
  return (
    <div>
      <button>Home</button>

      <button>My network ({networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationsAtomCount})</button>

      <button> Me({totalNotifications})</button>
    </div>
  );
}

export default App;
