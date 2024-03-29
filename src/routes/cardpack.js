const express = require("express");
const controller = require("../controllers/cardpack");

const router = express.Router();
router.get("/", controller.findAll);
router.post("/", controller.create);
router.get("/:id", controller.findOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;