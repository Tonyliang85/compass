bluetooth.onBluetoothConnected(function () {
	
})
bluetooth.onBluetoothDisconnected(function () {
    input.setAccelerometerRange(AcceleratorRange.FourG)
    degrees += 1
})
let degrees = 0
for (let index = 0; index < 4; index++) {
    bluetooth.startAccelerometerService()
}
basic.forever(function () {
	
})
