const router = require('express').Router();

router.use(require('./home'))
router.use("/api/",require('./author'))

module.exports = router;