describe('addressbookCtrl', function() {

	var $addressbookCtrl;
	beforeEach(module('contactsApp'));


  beforeEach(inject(function ($rootScope, $controller, _AddressBookService_){
    scope = $rootScope.$new();
    AddressBookService = _AddressBookService_;

    controller = $controller('addressbookCtrl', {
      '$scope': scope,
      'AddressBookService': AddressBookService
    });

    controller.addressBook = {};
  }));

  it('starts in non-edit mode',function(){
      expect(controller.editing).to.equal(false);
  });

  describe('saveNameEditor', function() {
    beforeEach(function() {
      sinon.spy(AddressBookService, 'rename');
    });

    it('saves the rename using AddressBookService', function() {
      controller.displayName = 'foo';

      controller.saveNameEditor();

      expect(AddressBookService.rename.calledWith(controller.addressBook, 'foo')).to.equal(true);
    });
  });

  describe('deleteAddressBook', function() {
    beforeEach(function() {
      sinon.spy(AddressBookService, 'delete');
    });

    it('deletes using AddressBookService', function() {
      controller.deleteAddressBook();

      expect(AddressBookService.delete.calledWith(controller.addressBook)).to.equal(true);
    });
  });

  describe('download', function() {
    beforeEach(function() {
      sinon.spy(window, 'open');
      controller.addressBook.url = '/';
    });

    it('opens the download in a new window', function() {
      controller.download();

      expect(window.open.calledWith('/?export')).to.equal(true);
    });
  });

});
