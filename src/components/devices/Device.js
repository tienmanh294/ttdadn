import Card from "../ui/Card";
import classes from "./Device.module.css";
function Device(props) {
  // const contentResponse=
  function submitHandler(){

  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label className={classes.name}>{props.deviceName}
          </label>
          </div>
        <textarea rows="10" cols="50" required id="description"></textarea>
        <label className={classes.switch}>
          <input type="checkbox"></input>
          <span className={`${classes.slider} ${classes.round}` }></span>
        </label>
      </form>
    </Card>
  );
}
export default Device;
