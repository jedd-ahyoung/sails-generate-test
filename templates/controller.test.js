var assert = require('assert');


/**
 * Mocha tests for <%= entity %>
 *
 * @controller <%= entityName %> 
 * @testFramework mocha
 */
describe('<%= entity %>', function () {

	it('should exist', function () {
		assert(<%= entityName %>);
		assert(sails.controllers.<%= entityName %>);
	});

	// ...
	// tests for other controller class methods
	// ...

});
