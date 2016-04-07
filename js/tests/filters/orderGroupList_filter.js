describe('orderGroupList filter', function() {

	var $filter;

	beforeEach(module('contactsApp'));

	beforeEach(inject(function(_$filter_){
		$filter = _$filter_;
	}));

	var startGroupList = _.object(Array(
		['Test 5','0'],
		['Group 2','0'],
		['Not grouped','0'],
		['Group 5','0'],
		['AGroup 8','0'],
		['All contacts','0'],
		['FGroup c','0']
	));
	var endGroupList = Array(
		['All contacts','0'],
		['Not grouped','0'],
		['AGroup 8','0'],
		['FGroup c','0'],
		['Group 2','0'],
		['Group 5','0'],
		['Test 5','0']
	);

	it('should return the endGroupList order', function() {
		var orderGroupList = $filter('orderGroupList');
		expect(_.pairs(orderGroupList(startGroupList))).to.deep.equal(endGroupList);
	});
});
