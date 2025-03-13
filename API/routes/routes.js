const express = require("express");
const router = express.Router();
const prisma = require("../data/prisma");
const service = require("../service/service");

router.get("/api/menu/:id", async function (req, res) {
  await service.FindMenuID(req, res);
});

router.get("/api/menu/", async function (req, res) {
  const menu = await prisma.localizacaoPA.findMany();
  res.json(menu);
});

router.get("/api/menurelacao/", async function (req, res) {
  const menu = await prisma.relacionamentoPA.findMany();
  res.json(menu);
});

module.exports = router;
