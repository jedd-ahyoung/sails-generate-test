/**
 * sails-generate-test
 *
 * Usage:
 * `sails generate test`
 *
 * @type {Object}
 */

var util = require('util')
	, _ = require('lodash');

// Make _.defaults recursive
_.defaults = require('merge-defaults');
_.str = require('underscore.string');

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: function(scope, cb) {
		function formatIsValid(entityName, entityType) {
			// Validate our input here. If we can't split the entity
			// or the EntityType isn't in entityTypes, throw an error.
			var entityTypes = ['model', 'controller', 'policy'];

			// TODO: Make the error handling better here.
			if (!entityType || !entityName) return false;
			if (entityTypes.indexOf(entityType.toLowerCase()) < 0) return false;

			return true;
		}

		var parts,
		    entity = scope.args[0];

		if (!scope.rootPath || !entity) {
			return cb(new Error('Usage: sails generate test <EntityName:EntityType>'));
		}

		parts = entity.split(':');
		if (!formatIsValid(parts[0], parts[1])) {
			return cb(new Error('Argument must be in the form <EntityName:EntityType>'));
		};

		_.defaults(scope, {
			currentTime: new Date(),
			rootPath: scope.rootPath
		});

		scope.entityName = parts[0];
		scope.entityType = parts[1].toLowerCase();
		scope.entity = parts[0] + _.str.capitalize(parts[1]);
		scope.extension = '.test.js';
		scope.filename = scope.entity + scope.extension;

		module.exports.targets = {};
		module.exports.targets['./tests/unit/:entityType/:filename'] = {
			template: scope.entityType + scope.extension
		};

		return cb();
	},

	after: function (scope, cb) {
		console.log('Created a new ' + scope.entityType + ' unit test: `'+scope.filename+'`.');
		cb();
	}
};

