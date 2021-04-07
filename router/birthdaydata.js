var express = require('express')
var router = express.Router();
var birthday_controller = require('../controller/birthdaydata')

router.get('/',birthday_controller.birthday_info_all)
router.get('/test',birthday_controller.test)
router.get('/:id',birthday_controller.birthday_info_by_id);

router.post('/create',birthday_controller.birthday_create);

router.put('/update/:id',birthday_controller.birthday_info_update_by_id);

module.exports = router;