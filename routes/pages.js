const express = require('express');
const pages = require('express').Router();

pages.get(/^(users||cards)/, (req, res) => {
  res.statusCode = 404;
  res.json({ "message": "Запрашиваемый ресурс не найден" })
});

pages.get('/', (req, res) => {
  res.render('./public/index.html');
});


module.exports = pages;