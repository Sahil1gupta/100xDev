import { useEffect, useState } from 'react'
let count=0;
function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [exchange3Data, setExchange3Data] =useState({});
  // const [bankData, setBankData] = useState({});
  count=count+1;
  console.log(`counter ${count}`)
  useEffect(() => {
    // Some operation to get the data
    console.log(" first useeffect")
    setExchange1Data({
      returns: 100
    });
  }, [])
console.log("hi2")
  useEffect(() => {
    // Some operation to get the data
    console.log(" second useeffect")
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    console.log(" third useeffect")
    setExchange3Data({
      returns: 100
    });
  }, [])

  // useEffect(() => {
  //   // Some operation to get the data
  //   console.log(" third useeffect")
  //   setTimeout(() => {
  //     setBankData({
  //       income: 100
  //     });
  //   },5000)
  // }, [])

  const cryptoReturns = exchange1Data.returns + exchange2Data.returns ;
  console.log(cryptoReturns)
  // const incomeTax = (cryptoReturns + bankData.income) * 0.3


  return (
    <div>
        {/* hi there, your income tax returns are {incomeTax} */}
        {console.log("component has mounted")}
        hii
    </div>
  )
}

export default App
