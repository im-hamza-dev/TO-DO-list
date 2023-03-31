const express = require("express");
const router = express.Router();
const ItemsController = require("../controllers/items-controller");

router.get("/", ItemsController.getNotes);
router.post("/", ItemsController.createNotes);
router.put("/:nid", ItemsController.updateNotesById);
router.del("/:nid", ItemsController.delNotes);

module.exports = router;
