const {Router} = require('express')
const express = require('express')
const controller = require('../app/controller/controller1')
const route = express.Router()

route.get('/', controller.index)

module.exports = route