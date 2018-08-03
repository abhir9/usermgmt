/**
 * Created by abhi on 9/16/2017.
 */
"use strict";

const express = require('express'),
    router = express.Router(),
    userServices = require('../services/user.services'),
    validator = require('../utility/validator'),
    config = require('config.json'),
	responseService = require('../services/response.service'),
    responseHandler = require('../utility/responseHandler');

module.exports = function(router) {
    // get all user
    router.route('/').get(function (req, res) {
         responseService.validateAndSend(null, responseHandler.setSuccessResponse({
                "message":"registration successful"
            }),  res);
    });


}
