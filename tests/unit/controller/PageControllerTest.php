<?php
/**
 * ownCloud - contacts
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Hendrik Leppelsack <hendrik@leppelsack.de>
 * @copyright Hendrik Leppelsack 2015
 */

namespace OCA\Contacts\Controller;

use PHPUnit\Framework\TestCase;

use OCP\AppFramework\Http\TemplateResponse;

class PageControllerTest extends TestCase {

	/** @var PageController */
	private $controller;

	public function setUp() {
		$request = $this->getMockBuilder('OCP\IRequest')->getMock();

		$this->controller = new PageController('contacts', $request);
	}

	public function testIndex() {
		$result = $this->controller->index();

		$this->assertEquals('main', $result->getTemplateName());
		$this->assertTrue($result instanceof TemplateResponse);
	}
}
