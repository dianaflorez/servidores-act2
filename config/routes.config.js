const express = require("express");
const router = express.Router();
const users = require("../controllers/users.controller");

// router.get("/", (req, res) => {
//   res.send("hola");
// });

// users CRUD
router.post("/users", users.create);
router.get("/users", users.list);
router.get("/users/:id", users.detail);
router.patch("/users/:id", users.update); // patch solo partes
// router.put("/users/:id", users.update); // put reemplazar todo
router.delete("/users/:id", users.delete);

module.exports = router;