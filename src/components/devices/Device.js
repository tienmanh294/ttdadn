import Card from "../ui/Card";
import classes from "./Device.module.css";
import {useRef} from 'react'
import ToggleSwitch from "../ui/ToggleButton";
function Device(props) {
  const buttonInputRef=useRef();
  function handleChange(event){
    event.preventDefault();
    const userButtonRef=buttonInputRef.current.value;
    const changedData={
      changed:userButtonRef
    }
    props.onChangeDevice(changedData);
  }
  return (
    <Card>
      <form className={classes.form}>
        {/* <textarea rows="10" cols="50" required id="description">{props.data}</textarea> */}
        <ToggleSwitch label={props.deviceName}/>
      </form>
    </Card>
  );
}
export default Device;
