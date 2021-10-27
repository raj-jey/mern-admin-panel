const router = require('express').Router()
const vehicleCtrl = require('../controllers/vehicleCtrl')
// const vehicles = require('../controllers/vehicleCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/vehicles')
    .get(vehicleCtrl.getVehicles)
    .post(auth, authAdmin, vehicleCtrl.createVehicle)

router.route('/vehicles/:id')
    .delete(auth, authAdmin, vehicleCtrl.deleteVehicle)
    .put(auth, authAdmin, vehicleCtrl.updateVehicle)

module.exports = router