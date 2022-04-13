import Card from "../ui/Card";
import classes from "./Device.module.css";
import {useRef} from 'react'
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
        <div>
          <label className={classes.name}>{props.deviceName}
          </label>
          </div>
        <textarea rows="10" cols="50" required id="description">{props.data}</textarea>
        <label className={classes.switch}>
          <input type="checkbox" onChange={handleChange}></input>
          <span className={`${classes.slider} ${classes.round}` }></span>
        </label>
      </form>
    </Card>
  );
}
export default Device;
