var assert = require('assert');


/**
 * Mocha tests for <%= entity %>
 *
 * @model <%= entityName %>
 * @testFramework mocha
 */
describe('<%= entity %>', function () {

	it('should exist', function () {
		assert(<%= entityName %>);
		assert(sails.models.<%= entityName %>);
	});

	// ...
	// tests for other model class methods
	// ...

});
