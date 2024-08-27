const { auth } = require("../middlewares/auth");
const router = require("express").Router();


router.get("/tes", (req, res) => {
    res.send("Hello Dunia");
  });
router.use(require("./auth"));
router.use(auth);
router.use("/todos", require("./todos"));

module.exports = router;
