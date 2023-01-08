'use strict';

/**
 * sentence service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sentence.sentence');
