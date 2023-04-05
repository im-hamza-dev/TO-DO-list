const express = require("express");
const router = express.Router();
const NotesController = require("../controllers/notes-controller");

router.get("/", NotesController.getNotes);
router.post("/", NotesController.createNotes);
router.put("/:nid", NotesController.updateNotesById);
router.delete("/:nid", NotesController.delNotes);

module.exports = router;
