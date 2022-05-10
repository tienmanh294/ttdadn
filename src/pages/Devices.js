import Device from "../components/devices/Device";
import {useState} from 'react'
function DevicesPage(){
  //chuyen doi che do
  //cap nhat du lieu thu cong
    const[serverData,setServerData]=useState({});
    function sendRequest(changedData){
        fetch(
            "https://react-getting-started-d2ed4-default-rtdb.firebaseio.com/meetups.json",
            {
              method: "POST",
              body: JSON.stringify(changedData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then((response)=>{
             return response.json()
          }).then((data)=>{
            setServerData(data);
          });
    }
    return(
        <section>
            <h1>Manage devices</h1>
            <Device deviceName="DHT11" ></Device>
            <Device deviceName="Gas sensor"></Device>
            <Device deviceName="Magetic Switch"></Device>
            <Device deviceName="Buzzer" ></Device>
            <Device deviceName="Single Push Button"></Device>
            <Device deviceName="Light sensor"></Device>
        </section>
    );
}
export default DevicesPage