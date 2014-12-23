var assert = require('assert');


/**
 * Mocha tests for <%= entity %>
 *
 * @policy <%= entityName %>
 * @testFramework mocha
 */
describe('<%= entity %>', function () {

	it('should exist', function () {
		assert(<%= entityName %>);
		assert(sails.policies.<%= entityName %>);
	});

	// ...
	// tests for other policy class methods
	// ...

});
