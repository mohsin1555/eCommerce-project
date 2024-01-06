const express = require("express");
const { Create, Show, wCreate, wShow } = require("../controller/function");
const { Dcreate, Dshow } = require("../controller/dealFunction");
const { kcreate, kshow } = require("../controller/kidsFunction");
const { Signup, Signin } = require("../controller/AuthFunction");
const router = express.Router();
//Men Function Routing
router.post("/create", Create);
router.get("/show", Show);
//Deal function Routing
router.post("/dcreate", Dcreate);
router.get("/dshow", Dshow);
//Women Products Function Routing
router.post("/wcreate", wCreate);
router.get("/wshow", wShow);
//Kids Products Function Routing
router.post("/kcreate", kcreate);
router.get("/kshow", kshow);
//Auth function Routing
router.post("/signup", Signup);
router.post("/signin", Signin);

module.exports = router;
