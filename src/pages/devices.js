import Device from "../components/devices/Device";
function DevicesPage(){
    return(
        <section>
            <h1>Manage devices</h1>
            <Device deviceName="DHT11"></Device>
            <Device deviceName="Gas sensor"></Device>
            <Device deviceName="Magetic Switch"></Device>
        </section>
    );
}
export default DevicesPage