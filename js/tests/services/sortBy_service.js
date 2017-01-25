describe('sortbyService', function() {

	var $Service;
	beforeEach(module('contactsApp'));

	beforeEach(inject(function(SortByService){
		$Service = SortByService;
	}));

	it('should return firstName as default sorting method', function() {
		expect($Service.getSortBy()).to.equal('firstName');
	});

	it('should store sorting method', function() {
		$Service.setSortBy('lastName');
		expect($Service.getSortBy()).to.equal(
			window.localStorage.getItem('contacts_default_order')
		);
	});
});
