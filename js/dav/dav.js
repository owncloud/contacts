var dav = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // lib/debug.js
  var require_debug = __commonJS({
    "lib/debug.js"(exports, module) {
      module.exports = function debug8(topic) {
        return function(message) {
          if (debug8.enabled) {
            console.log(`[${topic}] ${message}`);
          }
        };
      };
    }
  });

  // lib/namespace.js
  var namespace_exports = {};
  __export(namespace_exports, {
    CALDAV: () => CALDAV,
    CALENDAR_SERVER: () => CALENDAR_SERVER,
    CARDDAV: () => CARDDAV,
    DAV: () => DAV,
    OC: () => OC
  });
  var CALENDAR_SERVER, CALDAV, CARDDAV, DAV, OC;
  var init_namespace = __esm({
    "lib/namespace.js"() {
      CALENDAR_SERVER = "http://calendarserver.org/ns/";
      CALDAV = "urn:ietf:params:xml:ns:caldav";
      CARDDAV = "urn:ietf:params:xml:ns:carddav";
      DAV = "DAV:";
      OC = "http://owncloud.org/ns";
    }
  });

  // lib/camelize.js
  function camelize(str, delimiter = "_") {
    let words = str.split(delimiter);
    return [words[0]].concat(
      words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    ).join("");
  }
  var init_camelize = __esm({
    "lib/camelize.js"() {
    }
  });

  // node_modules/@xmldom/xmldom/lib/conventions.js
  var require_conventions = __commonJS({
    "node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
      "use strict";
      function find(list, predicate, ac) {
        if (ac === void 0) {
          ac = Array.prototype;
        }
        if (list && typeof ac.find === "function") {
          return ac.find.call(list, predicate);
        }
        for (var i = 0; i < list.length; i++) {
          if (Object.prototype.hasOwnProperty.call(list, i)) {
            var item = list[i];
            if (predicate.call(void 0, item, i, list)) {
              return item;
            }
          }
        }
      }
      function freeze(object, oc) {
        if (oc === void 0) {
          oc = Object;
        }
        return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
      }
      function assign(target, source) {
        if (target === null || typeof target !== "object") {
          throw new TypeError("target is not an object");
        }
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
        return target;
      }
      var MIME_TYPE = freeze({
        /**
         * `text/html`, the only mime type that triggers treating an XML document as HTML.
         *
         * @see DOMParser.SupportedType.isHTML
         * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
         * @see https://en.wikipedia.org/wiki/HTML Wikipedia
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
         * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
         */
        HTML: "text/html",
        /**
         * Helper method to check a mime type if it indicates an HTML document
         *
         * @param {string} [value]
         * @returns {boolean}
         *
         * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
         * @see https://en.wikipedia.org/wiki/HTML Wikipedia
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
         * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
        isHTML: function(value) {
          return value === MIME_TYPE.HTML;
        },
        /**
         * `application/xml`, the standard mime type for XML documents.
         *
         * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
         * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
         * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
         */
        XML_APPLICATION: "application/xml",
        /**
         * `text/html`, an alias for `application/xml`.
         *
         * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
         * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
         * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
         */
        XML_TEXT: "text/xml",
        /**
         * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
         * but is parsed as an XML document.
         *
         * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
         * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
         */
        XML_XHTML_APPLICATION: "application/xhtml+xml",
        /**
         * `image/svg+xml`,
         *
         * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
         * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
         * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
         */
        XML_SVG_IMAGE: "image/svg+xml"
      });
      var NAMESPACE = freeze({
        /**
         * The XHTML namespace.
         *
         * @see http://www.w3.org/1999/xhtml
         */
        HTML: "http://www.w3.org/1999/xhtml",
        /**
         * Checks if `uri` equals `NAMESPACE.HTML`.
         *
         * @param {string} [uri]
         *
         * @see NAMESPACE.HTML
         */
        isHTML: function(uri) {
          return uri === NAMESPACE.HTML;
        },
        /**
         * The SVG namespace.
         *
         * @see http://www.w3.org/2000/svg
         */
        SVG: "http://www.w3.org/2000/svg",
        /**
         * The `xml:` namespace.
         *
         * @see http://www.w3.org/XML/1998/namespace
         */
        XML: "http://www.w3.org/XML/1998/namespace",
        /**
         * The `xmlns:` namespace
         *
         * @see https://www.w3.org/2000/xmlns/
         */
        XMLNS: "http://www.w3.org/2000/xmlns/"
      });
      exports.assign = assign;
      exports.find = find;
      exports.freeze = freeze;
      exports.MIME_TYPE = MIME_TYPE;
      exports.NAMESPACE = NAMESPACE;
    }
  });

  // node_modules/@xmldom/xmldom/lib/dom.js
  var require_dom = __commonJS({
    "node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
      var conventions = require_conventions();
      var find = conventions.find;
      var NAMESPACE = conventions.NAMESPACE;
      function notEmptyString(input) {
        return input !== "";
      }
      function splitOnASCIIWhitespace(input) {
        return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
      }
      function orderedSetReducer(current, element) {
        if (!current.hasOwnProperty(element)) {
          current[element] = true;
        }
        return current;
      }
      function toOrderedSet(input) {
        if (!input) return [];
        var list = splitOnASCIIWhitespace(input);
        return Object.keys(list.reduce(orderedSetReducer, {}));
      }
      function arrayIncludes(list) {
        return function(element) {
          return list && list.indexOf(element) !== -1;
        };
      }
      function copy(src, dest) {
        for (var p in src) {
          if (Object.prototype.hasOwnProperty.call(src, p)) {
            dest[p] = src[p];
          }
        }
      }
      function _extends(Class, Super) {
        var pt = Class.prototype;
        if (!(pt instanceof Super)) {
          let t2 = function() {
          };
          var t = t2;
          ;
          t2.prototype = Super.prototype;
          t2 = new t2();
          copy(pt, t2);
          Class.prototype = pt = t2;
        }
        if (pt.constructor != Class) {
          if (typeof Class != "function") {
            console.error("unknown Class:" + Class);
          }
          pt.constructor = Class;
        }
      }
      var NodeType = {};
      var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
      var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
      var TEXT_NODE = NodeType.TEXT_NODE = 3;
      var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
      var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
      var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
      var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
      var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
      var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
      var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
      var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
      var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
      var ExceptionCode = {};
      var ExceptionMessage = {};
      var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
      var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
      var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
      var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
      var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
      var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
      var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
      var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
      var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
      var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
      var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
      var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
      var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
      var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
      var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
      function DOMException(code, message) {
        if (message instanceof Error) {
          var error = message;
        } else {
          error = this;
          Error.call(this, ExceptionMessage[code]);
          this.message = ExceptionMessage[code];
          if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
        }
        error.code = code;
        if (message) this.message = this.message + ": " + message;
        return error;
      }
      DOMException.prototype = Error.prototype;
      copy(ExceptionCode, DOMException);
      function NodeList() {
      }
      NodeList.prototype = {
        /**
         * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
         * @standard level1
         */
        length: 0,
        /**
         * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
         * @standard level1
         * @param index  unsigned long
         *   Index into the collection.
         * @return Node
         * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
         */
        item: function(index) {
          return index >= 0 && index < this.length ? this[index] : null;
        },
        toString: function(isHTML, nodeFilter, options) {
          var requireWellFormed = !!options && !!options.requireWellFormed;
          for (var buf = [], i = 0; i < this.length; i++) {
            serializeToString(this[i], buf, isHTML, nodeFilter, null, requireWellFormed);
          }
          return buf.join("");
        },
        /**
         * @private
         * @param {function (Node):boolean} predicate
         * @returns {Node[]}
         */
        filter: function(predicate) {
          return Array.prototype.filter.call(this, predicate);
        },
        /**
         * @private
         * @param {Node} item
         * @returns {number}
         */
        indexOf: function(item) {
          return Array.prototype.indexOf.call(this, item);
        }
      };
      function LiveNodeList(node, refresh) {
        this._node = node;
        this._refresh = refresh;
        _updateLiveList(this);
      }
      function _updateLiveList(list) {
        var inc = list._node._inc || list._node.ownerDocument._inc;
        if (list._inc !== inc) {
          var ls = list._refresh(list._node);
          __set__(list, "length", ls.length);
          if (!list.$$length || ls.length < list.$$length) {
            for (var i = ls.length; i in list; i++) {
              if (Object.prototype.hasOwnProperty.call(list, i)) {
                delete list[i];
              }
            }
          }
          copy(ls, list);
          list._inc = inc;
        }
      }
      LiveNodeList.prototype.item = function(i) {
        _updateLiveList(this);
        return this[i] || null;
      };
      _extends(LiveNodeList, NodeList);
      function NamedNodeMap() {
      }
      function _findNodeIndex(list, node) {
        var i = list.length;
        while (i--) {
          if (list[i] === node) {
            return i;
          }
        }
      }
      function _addNamedNode(el, list, newAttr, oldAttr) {
        if (oldAttr) {
          list[_findNodeIndex(list, oldAttr)] = newAttr;
        } else {
          list[list.length++] = newAttr;
        }
        if (el) {
          newAttr.ownerElement = el;
          var doc = el.ownerDocument;
          if (doc) {
            oldAttr && _onRemoveAttribute(doc, el, oldAttr);
            _onAddAttribute(doc, el, newAttr);
          }
        }
      }
      function _removeNamedNode(el, list, attr) {
        var i = _findNodeIndex(list, attr);
        if (i >= 0) {
          var lastIndex = list.length - 1;
          while (i < lastIndex) {
            list[i] = list[++i];
          }
          list.length = lastIndex;
          if (el) {
            var doc = el.ownerDocument;
            if (doc) {
              _onRemoveAttribute(doc, el, attr);
              attr.ownerElement = null;
            }
          }
        } else {
          throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
        }
      }
      NamedNodeMap.prototype = {
        length: 0,
        item: NodeList.prototype.item,
        getNamedItem: function(key) {
          var i = this.length;
          while (i--) {
            var attr = this[i];
            if (attr.nodeName == key) {
              return attr;
            }
          }
        },
        setNamedItem: function(attr) {
          var el = attr.ownerElement;
          if (el && el != this._ownerElement) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          var oldAttr = this.getNamedItem(attr.nodeName);
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        /* returns Node */
        setNamedItemNS: function(attr) {
          var el = attr.ownerElement, oldAttr;
          if (el && el != this._ownerElement) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        /* returns Node */
        removeNamedItem: function(key) {
          var attr = this.getNamedItem(key);
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
        //for level2
        removeNamedItemNS: function(namespaceURI, localName) {
          var attr = this.getNamedItemNS(namespaceURI, localName);
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        getNamedItemNS: function(namespaceURI, localName) {
          var i = this.length;
          while (i--) {
            var node = this[i];
            if (node.localName == localName && node.namespaceURI == namespaceURI) {
              return node;
            }
          }
          return null;
        }
      };
      function DOMImplementation() {
      }
      DOMImplementation.prototype = {
        /**
         * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
         * The different implementations fairly diverged in what kind of features were reported.
         * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
         *
         * @deprecated It is deprecated and modern browsers return true in all cases.
         *
         * @param {string} feature
         * @param {string} [version]
         * @returns {boolean} always true
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
         * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
         */
        hasFeature: function(feature, version2) {
          return true;
        },
        /**
         * Creates an XML Document object of the specified type with its document element.
         *
         * __It behaves slightly different from the description in the living standard__:
         * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
         * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
         * - this implementation is not validating names or qualified names
         *   (when parsing XML strings, the SAX parser takes care of that)
         *
         * @param {string|null} namespaceURI
         * @param {string} qualifiedName
         * @param {DocumentType=null} doctype
         * @returns {Document}
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
         * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
         *
         * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
         * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
         * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
         */
        createDocument: function(namespaceURI, qualifiedName, doctype) {
          var doc = new Document();
          doc.implementation = this;
          doc.childNodes = new NodeList();
          doc.doctype = doctype || null;
          if (doctype) {
            doc.appendChild(doctype);
          }
          if (qualifiedName) {
            var root = doc.createElementNS(namespaceURI, qualifiedName);
            doc.appendChild(root);
          }
          return doc;
        },
        /**
         * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
         *
         * __This implementation differs from the specification:__
         * - this implementation is not validating names or qualified names
         *   (when parsing XML strings, the SAX parser takes care of that)
         *
         * Note: `internalSubset` can only be introduced via a direct property write to `node.internalSubset` after creation.
         * Creation-time validation of `publicId`, `systemId` is not enforced.
         * The serializer-level check covers all mutation vectors, including direct property writes.
         * `internalSubset` is only serialized as `[ ... ]` when both `publicId` and `systemId` are
         * absent (empty or `'.'`) — if either external identifier is present, `internalSubset` is
         * silently omitted from the serialized output.
         *
         * @param {string} qualifiedName
         * @param {string} [publicId]
         * The external subset public identifier. Stored verbatim including surrounding quotes.
         * When serialized with `requireWellFormed: true` (via the 4th-parameter options object),
         * throws `DOMException` with code `INVALID_STATE_ERR` if the value is non-empty and does
         * not match the XML `PubidLiteral` production (W3C DOM Parsing §3.2.1.3; XML 1.0 [12]).
         * @param {string} [systemId]
         * The external subset system identifier. Stored verbatim including surrounding quotes.
         * When serialized with `requireWellFormed: true`, throws `DOMException` with code
         * `INVALID_STATE_ERR` if the value is non-empty and does not match the XML `SystemLiteral`
         * production (W3C DOM Parsing §3.2.1.3; XML 1.0 [11]).
         * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
         * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
         * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
         *
         * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
         * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
         * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
         */
        createDocumentType: function(qualifiedName, publicId, systemId) {
          var node = new DocumentType();
          node.name = qualifiedName;
          node.nodeName = qualifiedName;
          node.publicId = publicId || "";
          node.systemId = systemId || "";
          return node;
        }
      };
      function Node() {
      }
      Node.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        // Modified in DOM Level 2:
        insertBefore: function(newChild, refChild) {
          return _insertBefore(this, newChild, refChild);
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          if (oldChild) {
            this.removeChild(oldChild);
          }
        },
        removeChild: function(oldChild) {
          return _removeChild(this, oldChild);
        },
        appendChild: function(newChild) {
          return this.insertBefore(newChild, null);
        },
        hasChildNodes: function() {
          return this.firstChild != null;
        },
        cloneNode: function(deep) {
          return cloneNode(this.ownerDocument || this, this, deep);
        },
        // Modified in DOM Level 2:
        /**
         * Puts the specified node and all of its subtree into a "normalized" form. In a normalized
         * subtree, no text nodes in the subtree are empty and there are no adjacent text nodes.
         *
         * Specifically, this method merges any adjacent text nodes (i.e., nodes for which `nodeType`
         * is `TEXT_NODE`) into a single node with the combined data. It also removes any empty text
         * nodes.
         *
         * This method iteratively traverses all child nodes to normalize all descendant nodes within
         * the subtree.
         *
         * @throws {DOMException}
         * May throw a DOMException if operations within removeChild or appendData (which are
         * potentially invoked in this method) do not meet their specific constraints.
         * @see {@link Node.removeChild}
         * @see {@link CharacterData.appendData}
         * @see ../docs/walk-dom.md.
         */
        normalize: function() {
          walkDOM(this, null, {
            enter: function(node) {
              var child2 = node.firstChild;
              while (child2) {
                var next = child2.nextSibling;
                if (next !== null && next.nodeType === TEXT_NODE && child2.nodeType === TEXT_NODE) {
                  node.removeChild(next);
                  child2.appendData(next.data);
                } else {
                  child2 = next;
                }
              }
              return true;
            }
          });
        },
        // Introduced in DOM Level 2:
        isSupported: function(feature, version2) {
          return this.ownerDocument.implementation.hasFeature(feature, version2);
        },
        // Introduced in DOM Level 2:
        hasAttributes: function() {
          return this.attributes.length > 0;
        },
        /**
         * Look up the prefix associated to the given namespace URI, starting from this node.
         * **The default namespace declarations are ignored by this method.**
         * See Namespace Prefix Lookup for details on the algorithm used by this method.
         *
         * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
         *
         * @param {string | null} namespaceURI
         * @returns {string | null}
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
         * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
         * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
         * @see https://github.com/xmldom/xmldom/issues/322
         */
        lookupPrefix: function(namespaceURI) {
          var el = this;
          while (el) {
            var map = el._nsMap;
            if (map) {
              for (var n in map) {
                if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
                  return n;
                }
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        // Introduced in DOM Level 3:
        lookupNamespaceURI: function(prefix) {
          var el = this;
          while (el) {
            var map = el._nsMap;
            if (map) {
              if (Object.prototype.hasOwnProperty.call(map, prefix)) {
                return map[prefix];
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        // Introduced in DOM Level 3:
        isDefaultNamespace: function(namespaceURI) {
          var prefix = this.lookupPrefix(namespaceURI);
          return prefix == null;
        }
      };
      function _xmlEncoder(c) {
        return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
      }
      copy(NodeType, Node);
      copy(NodeType, Node.prototype);
      function _visitNode(node, callback) {
        return walkDOM(node, null, { enter: function(n) {
          return callback(n) ? walkDOM.STOP : true;
        } }) === walkDOM.STOP;
      }
      function walkDOM(node, context, callbacks) {
        var stack = [{ node, context, phase: walkDOM.ENTER }];
        while (stack.length > 0) {
          var frame = stack.pop();
          if (frame.phase === walkDOM.ENTER) {
            var childContext = callbacks.enter(frame.node, frame.context);
            if (childContext === walkDOM.STOP) {
              return walkDOM.STOP;
            }
            stack.push({ node: frame.node, context: childContext, phase: walkDOM.EXIT });
            if (childContext === null || childContext === void 0) {
              continue;
            }
            var child2 = frame.node.lastChild;
            while (child2) {
              stack.push({ node: child2, context: childContext, phase: walkDOM.ENTER });
              child2 = child2.previousSibling;
            }
          } else {
            if (callbacks.exit) {
              callbacks.exit(frame.node, frame.context);
            }
          }
        }
      }
      walkDOM.STOP = Symbol("walkDOM.STOP");
      walkDOM.ENTER = 0;
      walkDOM.EXIT = 1;
      function Document() {
        this.ownerDocument = this;
      }
      function _onAddAttribute(doc, el, newAttr) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
        }
      }
      function _onRemoveAttribute(doc, el, newAttr, remove) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
        }
      }
      function _onUpdateChild(doc, el, newChild) {
        if (doc && doc._inc) {
          doc._inc++;
          var cs = el.childNodes;
          if (newChild) {
            cs[cs.length++] = newChild;
          } else {
            var child2 = el.firstChild;
            var i = 0;
            while (child2) {
              cs[i++] = child2;
              child2 = child2.nextSibling;
            }
            cs.length = i;
            delete cs[cs.length];
          }
        }
      }
      function _removeChild(parentNode, child2) {
        var previous = child2.previousSibling;
        var next = child2.nextSibling;
        if (previous) {
          previous.nextSibling = next;
        } else {
          parentNode.firstChild = next;
        }
        if (next) {
          next.previousSibling = previous;
        } else {
          parentNode.lastChild = previous;
        }
        child2.parentNode = null;
        child2.previousSibling = null;
        child2.nextSibling = null;
        _onUpdateChild(parentNode.ownerDocument, parentNode);
        return child2;
      }
      function hasValidParentNodeType(node) {
        return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
      }
      function hasInsertableNodeType(node) {
        return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
      }
      function isDocTypeNode(node) {
        return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
      }
      function isElementNode(node) {
        return node && node.nodeType === Node.ELEMENT_NODE;
      }
      function isTextNode(node) {
        return node && node.nodeType === Node.TEXT_NODE;
      }
      function isElementInsertionPossible(doc, child2) {
        var parentChildNodes = doc.childNodes || [];
        if (find(parentChildNodes, isElementNode) || isDocTypeNode(child2)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child2 && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child2));
      }
      function isElementReplacementPossible(doc, child2) {
        var parentChildNodes = doc.childNodes || [];
        function hasElementChildThatIsNotChild(node) {
          return isElementNode(node) && node !== child2;
        }
        if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child2 && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child2));
      }
      function assertPreInsertionValidity1to5(parent, node, child2) {
        if (!hasValidParentNodeType(parent)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
        }
        if (child2 && child2.parentNode !== parent) {
          throw new DOMException(NOT_FOUND_ERR, "child not in parent");
        }
        if (
          // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
          !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
          // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
          // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
          // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
          isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE
        ) {
          throw new DOMException(
            HIERARCHY_REQUEST_ERR,
            "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
          );
        }
      }
      function assertPreInsertionValidityInDocument(parent, node, child2) {
        var parentChildNodes = parent.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementInsertionPossible(parent, child2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          if (find(parentChildNodes, isDocTypeNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child2 && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
          if (!child2 && parentElementChild) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
          }
        }
      }
      function assertPreReplacementValidityInDocument(parent, node, child2) {
        var parentChildNodes = parent.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementReplacementPossible(parent, child2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          let hasDoctypeChildThatIsNotChild2 = function(node2) {
            return isDocTypeNode(node2) && node2 !== child2;
          };
          var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
          if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child2 && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
        }
      }
      function _insertBefore(parent, node, child2, _inDocumentAssertion) {
        assertPreInsertionValidity1to5(parent, node, child2);
        if (parent.nodeType === Node.DOCUMENT_NODE) {
          (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child2);
        }
        var cp = node.parentNode;
        if (cp) {
          cp.removeChild(node);
        }
        if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
          var newFirst = node.firstChild;
          if (newFirst == null) {
            return node;
          }
          var newLast = node.lastChild;
        } else {
          newFirst = newLast = node;
        }
        var pre = child2 ? child2.previousSibling : parent.lastChild;
        newFirst.previousSibling = pre;
        newLast.nextSibling = child2;
        if (pre) {
          pre.nextSibling = newFirst;
        } else {
          parent.firstChild = newFirst;
        }
        if (child2 == null) {
          parent.lastChild = newLast;
        } else {
          child2.previousSibling = newLast;
        }
        do {
          newFirst.parentNode = parent;
          var targetDoc = parent.ownerDocument || parent;
          _updateOwnerDocument(newFirst, targetDoc);
        } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
        _onUpdateChild(parent.ownerDocument || parent, parent);
        if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
          node.firstChild = node.lastChild = null;
        }
        return node;
      }
      function _updateOwnerDocument(node, newOwnerDocument) {
        if (node.ownerDocument === newOwnerDocument) {
          return;
        }
        node.ownerDocument = newOwnerDocument;
        if (node.nodeType === ELEMENT_NODE && node.attributes) {
          for (var i = 0; i < node.attributes.length; i++) {
            var attr = node.attributes.item(i);
            if (attr) {
              attr.ownerDocument = newOwnerDocument;
            }
          }
        }
        var child2 = node.firstChild;
        while (child2) {
          _updateOwnerDocument(child2, newOwnerDocument);
          child2 = child2.nextSibling;
        }
      }
      function _appendSingleChild(parentNode, newChild) {
        if (newChild.parentNode) {
          newChild.parentNode.removeChild(newChild);
        }
        newChild.parentNode = parentNode;
        newChild.previousSibling = parentNode.lastChild;
        newChild.nextSibling = null;
        if (newChild.previousSibling) {
          newChild.previousSibling.nextSibling = newChild;
        } else {
          parentNode.firstChild = newChild;
        }
        parentNode.lastChild = newChild;
        _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
        var targetDoc = parentNode.ownerDocument || parentNode;
        _updateOwnerDocument(newChild, targetDoc);
        return newChild;
      }
      Document.prototype = {
        //implementation : null,
        nodeName: "#document",
        nodeType: DOCUMENT_NODE,
        /**
         * The DocumentType node of the document.
         *
         * @readonly
         * @type DocumentType
         */
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(newChild, refChild) {
          if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
            var child2 = newChild.firstChild;
            while (child2) {
              var next = child2.nextSibling;
              this.insertBefore(child2, refChild);
              child2 = next;
            }
            return newChild;
          }
          _insertBefore(this, newChild, refChild);
          _updateOwnerDocument(newChild, this);
          if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
            this.documentElement = newChild;
          }
          return newChild;
        },
        removeChild: function(oldChild) {
          if (this.documentElement == oldChild) {
            this.documentElement = null;
          }
          return _removeChild(this, oldChild);
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          _updateOwnerDocument(newChild, this);
          if (oldChild) {
            this.removeChild(oldChild);
          }
          if (isElementNode(newChild)) {
            this.documentElement = newChild;
          }
        },
        // Introduced in DOM Level 2:
        importNode: function(importedNode, deep) {
          return importNode(this, importedNode, deep);
        },
        // Introduced in DOM Level 2:
        getElementById: function(id) {
          var rtv = null;
          _visitNode(this.documentElement, function(node) {
            if (node.nodeType == ELEMENT_NODE) {
              if (node.getAttribute("id") == id) {
                rtv = node;
                return true;
              }
            }
          });
          return rtv;
        },
        /**
         * The `getElementsByClassName` method of `Document` interface returns an array-like object
         * of all child elements which have **all** of the given class name(s).
         *
         * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
         *
         *
         * Warning: This is a live LiveNodeList.
         * Changes in the DOM will reflect in the array as the changes occur.
         * If an element selected by this array no longer qualifies for the selector,
         * it will automatically be removed. Be aware of this for iteration purposes.
         *
         * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
         * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
         */
        getElementsByClassName: function(classNames) {
          var classNamesSet = toOrderedSet(classNames);
          return new LiveNodeList(this, function(base) {
            var ls = [];
            if (classNamesSet.length > 0) {
              _visitNode(base.documentElement, function(node) {
                if (node !== base && node.nodeType === ELEMENT_NODE) {
                  var nodeClassNames = node.getAttribute("class");
                  if (nodeClassNames) {
                    var matches = classNames === nodeClassNames;
                    if (!matches) {
                      var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                      matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                    }
                    if (matches) {
                      ls.push(node);
                    }
                  }
                }
              });
            }
            return ls;
          });
        },
        //document factory method:
        createElement: function(tagName) {
          var node = new Element();
          node.ownerDocument = this;
          node.nodeName = tagName;
          node.tagName = tagName;
          node.localName = tagName;
          node.childNodes = new NodeList();
          var attrs = node.attributes = new NamedNodeMap();
          attrs._ownerElement = node;
          return node;
        },
        createDocumentFragment: function() {
          var node = new DocumentFragment();
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          return node;
        },
        createTextNode: function(data) {
          var node = new Text();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        createComment: function(data) {
          var node = new Comment();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        /**
         * Returns a new CDATASection node whose data is `data`.
         *
         * __This implementation differs from the specification:__
         * - calling this method on an HTML document does not throw `NotSupportedError`.
         *
         * @param {string} data
         * @returns {CDATASection}
         * @throws DOMException with code `INVALID_CHARACTER_ERR` if `data` contains `"]]>"`.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection
         * @see https://dom.spec.whatwg.org/#dom-document-createcdatasection
         */
        createCDATASection: function(data) {
          if (data.indexOf("]]>") !== -1) {
            throw new DOMException(INVALID_CHARACTER_ERR, 'data contains "]]>"');
          }
          var node = new CDATASection();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        /**
         * Returns a ProcessingInstruction node whose target is target and data is data.
         *
         * __This implementation differs from the specification:__
         * - it does not do any input validation on the arguments and doesn't throw "InvalidCharacterError".
         *
         * Note: When the resulting document is serialized with `requireWellFormed: true`, the
         * serializer throws with code `INVALID_STATE_ERR` if `.data` contains `?>` (W3C DOM Parsing
         * §3.2.1.7). Without that option the data is emitted verbatim.
         *
         * @param {string} target
         * @param {string} data
         * @returns {ProcessingInstruction}
         * @see https://developer.mozilla.org/docs/Web/API/Document/createProcessingInstruction
         * @see https://dom.spec.whatwg.org/#dom-document-createprocessinginstruction
         * @see https://www.w3.org/TR/DOM-Parsing/#dfn-concept-serialize-xml §3.2.1.7
         */
        createProcessingInstruction: function(target, data) {
          var node = new ProcessingInstruction();
          node.ownerDocument = this;
          node.tagName = node.nodeName = node.target = target;
          node.nodeValue = node.data = data;
          return node;
        },
        createAttribute: function(name) {
          var node = new Attr();
          node.ownerDocument = this;
          node.name = name;
          node.nodeName = name;
          node.localName = name;
          node.specified = true;
          return node;
        },
        createEntityReference: function(name) {
          var node = new EntityReference();
          node.ownerDocument = this;
          node.nodeName = name;
          return node;
        },
        // Introduced in DOM Level 2:
        createElementNS: function(namespaceURI, qualifiedName) {
          var node = new Element();
          var pl = qualifiedName.split(":");
          var attrs = node.attributes = new NamedNodeMap();
          node.childNodes = new NodeList();
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.tagName = qualifiedName;
          node.namespaceURI = namespaceURI;
          if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
          } else {
            node.localName = qualifiedName;
          }
          attrs._ownerElement = node;
          return node;
        },
        // Introduced in DOM Level 2:
        createAttributeNS: function(namespaceURI, qualifiedName) {
          var node = new Attr();
          var pl = qualifiedName.split(":");
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.name = qualifiedName;
          node.namespaceURI = namespaceURI;
          node.specified = true;
          if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
          } else {
            node.localName = qualifiedName;
          }
          return node;
        }
      };
      _extends(Document, Node);
      function Element() {
        this._nsMap = {};
      }
      Element.prototype = {
        nodeType: ELEMENT_NODE,
        hasAttribute: function(name) {
          return this.getAttributeNode(name) != null;
        },
        getAttribute: function(name) {
          var attr = this.getAttributeNode(name);
          return attr && attr.value || "";
        },
        getAttributeNode: function(name) {
          return this.attributes.getNamedItem(name);
        },
        setAttribute: function(name, value) {
          var attr = this.ownerDocument.createAttribute(name);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        },
        removeAttribute: function(name) {
          var attr = this.getAttributeNode(name);
          attr && this.removeAttributeNode(attr);
        },
        //four real opeartion method
        appendChild: function(newChild) {
          if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
            return this.insertBefore(newChild, null);
          } else {
            return _appendSingleChild(this, newChild);
          }
        },
        setAttributeNode: function(newAttr) {
          return this.attributes.setNamedItem(newAttr);
        },
        setAttributeNodeNS: function(newAttr) {
          return this.attributes.setNamedItemNS(newAttr);
        },
        removeAttributeNode: function(oldAttr) {
          return this.attributes.removeNamedItem(oldAttr.nodeName);
        },
        //get real attribute name,and remove it by removeAttributeNode
        removeAttributeNS: function(namespaceURI, localName) {
          var old = this.getAttributeNodeNS(namespaceURI, localName);
          old && this.removeAttributeNode(old);
        },
        hasAttributeNS: function(namespaceURI, localName) {
          return this.getAttributeNodeNS(namespaceURI, localName) != null;
        },
        getAttributeNS: function(namespaceURI, localName) {
          var attr = this.getAttributeNodeNS(namespaceURI, localName);
          return attr && attr.value || "";
        },
        setAttributeNS: function(namespaceURI, qualifiedName, value) {
          var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        },
        getAttributeNodeNS: function(namespaceURI, localName) {
          return this.attributes.getNamedItemNS(namespaceURI, localName);
        },
        getElementsByTagName: function(tagName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        },
        getElementsByTagNameNS: function(namespaceURI, localName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        }
      };
      Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
      Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
      _extends(Element, Node);
      function Attr() {
      }
      Attr.prototype.nodeType = ATTRIBUTE_NODE;
      _extends(Attr, Node);
      function CharacterData() {
      }
      CharacterData.prototype = {
        data: "",
        substringData: function(offset, count) {
          return this.data.substring(offset, offset + count);
        },
        appendData: function(text) {
          text = this.data + text;
          this.nodeValue = this.data = text;
          this.length = text.length;
        },
        insertData: function(offset, text) {
          this.replaceData(offset, 0, text);
        },
        appendChild: function(newChild) {
          throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
        },
        deleteData: function(offset, count) {
          this.replaceData(offset, count, "");
        },
        replaceData: function(offset, count, text) {
          var start = this.data.substring(0, offset);
          var end = this.data.substring(offset + count);
          text = start + text + end;
          this.nodeValue = this.data = text;
          this.length = text.length;
        }
      };
      _extends(CharacterData, Node);
      function Text() {
      }
      Text.prototype = {
        nodeName: "#text",
        nodeType: TEXT_NODE,
        splitText: function(offset) {
          var text = this.data;
          var newText = text.substring(offset);
          text = text.substring(0, offset);
          this.data = this.nodeValue = text;
          this.length = text.length;
          var newNode = this.ownerDocument.createTextNode(newText);
          if (this.parentNode) {
            this.parentNode.insertBefore(newNode, this.nextSibling);
          }
          return newNode;
        }
      };
      _extends(Text, CharacterData);
      function Comment() {
      }
      Comment.prototype = {
        nodeName: "#comment",
        nodeType: COMMENT_NODE
      };
      _extends(Comment, CharacterData);
      function CDATASection() {
      }
      CDATASection.prototype = {
        nodeName: "#cdata-section",
        nodeType: CDATA_SECTION_NODE
      };
      _extends(CDATASection, CharacterData);
      function DocumentType() {
      }
      DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
      _extends(DocumentType, Node);
      function Notation() {
      }
      Notation.prototype.nodeType = NOTATION_NODE;
      _extends(Notation, Node);
      function Entity() {
      }
      Entity.prototype.nodeType = ENTITY_NODE;
      _extends(Entity, Node);
      function EntityReference() {
      }
      EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
      _extends(EntityReference, Node);
      function DocumentFragment() {
      }
      DocumentFragment.prototype.nodeName = "#document-fragment";
      DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
      _extends(DocumentFragment, Node);
      function ProcessingInstruction() {
      }
      ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
      _extends(ProcessingInstruction, Node);
      function XMLSerializer() {
      }
      XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter, options) {
        return nodeSerializeToString.call(node, isHtml, nodeFilter, options);
      };
      Node.prototype.toString = nodeSerializeToString;
      function nodeSerializeToString(isHtml, nodeFilter, options) {
        var requireWellFormed = !!options && !!options.requireWellFormed;
        var buf = [];
        var refNode = this.nodeType == 9 && this.documentElement || this;
        var prefix = refNode.prefix;
        var uri = refNode.namespaceURI;
        if (uri && prefix == null) {
          var prefix = refNode.lookupPrefix(uri);
          if (prefix == null) {
            var visibleNamespaces = [
              { namespace: uri, prefix: null }
              //{namespace:uri,prefix:''}
            ];
          }
        }
        serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces, requireWellFormed);
        return buf.join("");
      }
      function needNamespaceDefine(node, isHTML, visibleNamespaces) {
        var prefix = node.prefix || "";
        var uri = node.namespaceURI;
        if (!uri) {
          return false;
        }
        if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
          return false;
        }
        var i = visibleNamespaces.length;
        while (i--) {
          var ns = visibleNamespaces[i];
          if (ns.prefix === prefix) {
            return ns.namespace !== uri;
          }
        }
        return true;
      }
      function addSerializedAttribute(buf, qualifiedName, value) {
        buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
      }
      function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces, requireWellFormed) {
        if (!visibleNamespaces) {
          visibleNamespaces = [];
        }
        walkDOM(node, { ns: visibleNamespaces, isHTML }, {
          enter: function(n, ctx) {
            var ns = ctx.ns;
            var html = ctx.isHTML;
            if (nodeFilter) {
              n = nodeFilter(n);
              if (n) {
                if (typeof n == "string") {
                  buf.push(n);
                  return null;
                }
              } else {
                return null;
              }
            }
            switch (n.nodeType) {
              case ELEMENT_NODE:
                var attrs = n.attributes;
                var len = attrs.length;
                var nodeName = n.tagName;
                html = NAMESPACE.isHTML(n.namespaceURI) || html;
                var prefixedNodeName = nodeName;
                if (!html && !n.prefix && n.namespaceURI) {
                  var defaultNS;
                  for (var ai = 0; ai < attrs.length; ai++) {
                    if (attrs.item(ai).name === "xmlns") {
                      defaultNS = attrs.item(ai).value;
                      break;
                    }
                  }
                  if (!defaultNS) {
                    for (var nsi = ns.length - 1; nsi >= 0; nsi--) {
                      var nsEntry = ns[nsi];
                      if (nsEntry.prefix === "" && nsEntry.namespace === n.namespaceURI) {
                        defaultNS = nsEntry.namespace;
                        break;
                      }
                    }
                  }
                  if (defaultNS !== n.namespaceURI) {
                    for (var nsi = ns.length - 1; nsi >= 0; nsi--) {
                      var nsEntry = ns[nsi];
                      if (nsEntry.namespace === n.namespaceURI) {
                        if (nsEntry.prefix) {
                          prefixedNodeName = nsEntry.prefix + ":" + nodeName;
                        }
                        break;
                      }
                    }
                  }
                }
                buf.push("<", prefixedNodeName);
                var childNs = ns.slice();
                for (var i = 0; i < len; i++) {
                  var attr = attrs.item(i);
                  if (attr.prefix == "xmlns") {
                    childNs.push({ prefix: attr.localName, namespace: attr.value });
                  } else if (attr.nodeName == "xmlns") {
                    childNs.push({ prefix: "", namespace: attr.value });
                  }
                }
                for (var i = 0; i < len; i++) {
                  var attr = attrs.item(i);
                  if (needNamespaceDefine(attr, html, childNs)) {
                    var attrPrefix = attr.prefix || "";
                    var uri = attr.namespaceURI;
                    addSerializedAttribute(buf, attrPrefix ? "xmlns:" + attrPrefix : "xmlns", uri);
                    childNs.push({ prefix: attrPrefix, namespace: uri });
                  }
                  var filteredAttr = nodeFilter ? nodeFilter(attr) : attr;
                  if (filteredAttr) {
                    if (typeof filteredAttr === "string") {
                      buf.push(filteredAttr);
                    } else {
                      addSerializedAttribute(buf, filteredAttr.name, filteredAttr.value);
                    }
                  }
                }
                if (nodeName === prefixedNodeName && needNamespaceDefine(n, html, childNs)) {
                  var nodePrefix = n.prefix || "";
                  var uri = n.namespaceURI;
                  addSerializedAttribute(buf, nodePrefix ? "xmlns:" + nodePrefix : "xmlns", uri);
                  childNs.push({ prefix: nodePrefix, namespace: uri });
                }
                var child2 = n.firstChild;
                if (child2 || html && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
                  buf.push(">");
                  if (html && /^script$/i.test(nodeName)) {
                    while (child2) {
                      if (child2.data) {
                        buf.push(child2.data);
                      } else {
                        serializeToString(child2, buf, html, nodeFilter, childNs.slice(), requireWellFormed);
                      }
                      child2 = child2.nextSibling;
                    }
                    buf.push("</", nodeName, ">");
                    return null;
                  }
                  return { ns: childNs, isHTML: html, tag: prefixedNodeName };
                } else {
                  buf.push("/>");
                  return null;
                }
              case DOCUMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                return { ns: ns.slice(), isHTML: html, tag: null };
              case ATTRIBUTE_NODE:
                addSerializedAttribute(buf, n.name, n.value);
                return null;
              case TEXT_NODE:
                buf.push(n.data.replace(/[<&>]/g, _xmlEncoder));
                return null;
              case CDATA_SECTION_NODE:
                if (requireWellFormed && n.data.indexOf("]]>") !== -1) {
                  throw new DOMException(INVALID_STATE_ERR, 'The CDATASection data contains "]]>"');
                }
                buf.push("<![CDATA[", n.data.replace(/]]>/g, "]]]]><![CDATA[>"), "]]>");
                return null;
              case COMMENT_NODE:
                if (requireWellFormed && n.data.indexOf("-->") !== -1) {
                  throw new DOMException(INVALID_STATE_ERR, 'The comment node data contains "-->"');
                }
                buf.push("<!--", n.data, "-->");
                return null;
              case DOCUMENT_TYPE_NODE:
                if (requireWellFormed) {
                  if (n.publicId && !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(n.publicId)) {
                    throw new DOMException(INVALID_STATE_ERR, "DocumentType publicId is not a valid PubidLiteral");
                  }
                  if (n.systemId && !/^("[^"]*"|'[^']*')$/.test(n.systemId)) {
                    throw new DOMException(INVALID_STATE_ERR, "DocumentType systemId is not a valid SystemLiteral");
                  }
                  if (n.internalSubset && n.internalSubset.indexOf("]>") !== -1) {
                    throw new DOMException(INVALID_STATE_ERR, 'DocumentType internalSubset contains "]>"');
                  }
                }
                var pubid = n.publicId;
                var sysid = n.systemId;
                buf.push("<!DOCTYPE ", n.name);
                if (pubid) {
                  buf.push(" PUBLIC ", pubid);
                  if (sysid && sysid != ".") {
                    buf.push(" ", sysid);
                  }
                  buf.push(">");
                } else if (sysid && sysid != ".") {
                  buf.push(" SYSTEM ", sysid, ">");
                } else {
                  var sub = n.internalSubset;
                  if (sub) {
                    buf.push(" [", sub, "]");
                  }
                  buf.push(">");
                }
                return null;
              case PROCESSING_INSTRUCTION_NODE:
                if (requireWellFormed && n.data.indexOf("?>") !== -1) {
                  throw new DOMException(INVALID_STATE_ERR, 'The ProcessingInstruction data contains "?>"');
                }
                buf.push("<?", n.target, " ", n.data, "?>");
                return null;
              case ENTITY_REFERENCE_NODE:
                buf.push("&", n.nodeName, ";");
                return null;
              //case ENTITY_NODE:
              //case NOTATION_NODE:
              default:
                buf.push("??", n.nodeName);
                return null;
            }
          },
          exit: function(n, childCtx) {
            if (childCtx && childCtx.tag) {
              buf.push("</", childCtx.tag, ">");
            }
          }
        });
      }
      function importNode(doc, node, deep) {
        var destRoot;
        walkDOM(node, null, {
          enter: function(srcNode, destParent) {
            var destNode = srcNode.cloneNode(false);
            destNode.ownerDocument = doc;
            destNode.parentNode = null;
            if (destParent === null) {
              destRoot = destNode;
            } else {
              destParent.appendChild(destNode);
            }
            var shouldDeep = srcNode.nodeType === ATTRIBUTE_NODE || deep;
            return shouldDeep ? destNode : null;
          }
        });
        return destRoot;
      }
      function cloneNode(doc, node, deep) {
        var destRoot;
        walkDOM(node, null, {
          enter: function(srcNode, destParent) {
            var destNode = new srcNode.constructor();
            for (var n in srcNode) {
              if (Object.prototype.hasOwnProperty.call(srcNode, n)) {
                var v = srcNode[n];
                if (typeof v != "object") {
                  if (v != destNode[n]) {
                    destNode[n] = v;
                  }
                }
              }
            }
            if (srcNode.childNodes) {
              destNode.childNodes = new NodeList();
            }
            destNode.ownerDocument = doc;
            var shouldDeep = deep;
            switch (destNode.nodeType) {
              case ELEMENT_NODE:
                var attrs = srcNode.attributes;
                var attrs2 = destNode.attributes = new NamedNodeMap();
                var len = attrs.length;
                attrs2._ownerElement = destNode;
                for (var i = 0; i < len; i++) {
                  destNode.setAttributeNode(cloneNode(doc, attrs.item(i), true));
                }
                break;
              case ATTRIBUTE_NODE:
                shouldDeep = true;
            }
            if (destParent !== null) {
              destParent.appendChild(destNode);
            } else {
              destRoot = destNode;
            }
            return shouldDeep ? destNode : null;
          }
        });
        return destRoot;
      }
      function __set__(object, key, value) {
        object[key] = value;
      }
      try {
        if (Object.defineProperty) {
          Object.defineProperty(LiveNodeList.prototype, "length", {
            get: function() {
              _updateLiveList(this);
              return this.$$length;
            }
          });
          Object.defineProperty(Node.prototype, "textContent", {
            get: function() {
              if (this.nodeType === ELEMENT_NODE || this.nodeType === DOCUMENT_FRAGMENT_NODE) {
                var buf = [];
                walkDOM(this, null, {
                  enter: function(n) {
                    if (n.nodeType === ELEMENT_NODE || n.nodeType === DOCUMENT_FRAGMENT_NODE) {
                      return true;
                    }
                    if (n.nodeType === PROCESSING_INSTRUCTION_NODE || n.nodeType === COMMENT_NODE) {
                      return null;
                    }
                    buf.push(n.nodeValue);
                  }
                });
                return buf.join("");
              }
              return this.nodeValue;
            },
            set: function(data) {
              switch (this.nodeType) {
                case ELEMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                  while (this.firstChild) {
                    this.removeChild(this.firstChild);
                  }
                  if (data || String(data)) {
                    this.appendChild(this.ownerDocument.createTextNode(data));
                  }
                  break;
                default:
                  this.data = data;
                  this.value = data;
                  this.nodeValue = data;
              }
            }
          });
          __set__ = function(object, key, value) {
            object["$$" + key] = value;
          };
        }
      } catch (e) {
      }
      exports.DocumentType = DocumentType;
      exports.DOMException = DOMException;
      exports.DOMImplementation = DOMImplementation;
      exports.Element = Element;
      exports.Node = Node;
      exports.NodeList = NodeList;
      exports.walkDOM = walkDOM;
      exports.XMLSerializer = XMLSerializer;
    }
  });

  // node_modules/@xmldom/xmldom/lib/entities.js
  var require_entities = __commonJS({
    "node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
      "use strict";
      var freeze = require_conventions().freeze;
      exports.XML_ENTITIES = freeze({
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"'
      });
      exports.HTML_ENTITIES = freeze({
        Aacute: "\xC1",
        aacute: "\xE1",
        Abreve: "\u0102",
        abreve: "\u0103",
        ac: "\u223E",
        acd: "\u223F",
        acE: "\u223E\u0333",
        Acirc: "\xC2",
        acirc: "\xE2",
        acute: "\xB4",
        Acy: "\u0410",
        acy: "\u0430",
        AElig: "\xC6",
        aelig: "\xE6",
        af: "\u2061",
        Afr: "\u{1D504}",
        afr: "\u{1D51E}",
        Agrave: "\xC0",
        agrave: "\xE0",
        alefsym: "\u2135",
        aleph: "\u2135",
        Alpha: "\u0391",
        alpha: "\u03B1",
        Amacr: "\u0100",
        amacr: "\u0101",
        amalg: "\u2A3F",
        AMP: "&",
        amp: "&",
        And: "\u2A53",
        and: "\u2227",
        andand: "\u2A55",
        andd: "\u2A5C",
        andslope: "\u2A58",
        andv: "\u2A5A",
        ang: "\u2220",
        ange: "\u29A4",
        angle: "\u2220",
        angmsd: "\u2221",
        angmsdaa: "\u29A8",
        angmsdab: "\u29A9",
        angmsdac: "\u29AA",
        angmsdad: "\u29AB",
        angmsdae: "\u29AC",
        angmsdaf: "\u29AD",
        angmsdag: "\u29AE",
        angmsdah: "\u29AF",
        angrt: "\u221F",
        angrtvb: "\u22BE",
        angrtvbd: "\u299D",
        angsph: "\u2222",
        angst: "\xC5",
        angzarr: "\u237C",
        Aogon: "\u0104",
        aogon: "\u0105",
        Aopf: "\u{1D538}",
        aopf: "\u{1D552}",
        ap: "\u2248",
        apacir: "\u2A6F",
        apE: "\u2A70",
        ape: "\u224A",
        apid: "\u224B",
        apos: "'",
        ApplyFunction: "\u2061",
        approx: "\u2248",
        approxeq: "\u224A",
        Aring: "\xC5",
        aring: "\xE5",
        Ascr: "\u{1D49C}",
        ascr: "\u{1D4B6}",
        Assign: "\u2254",
        ast: "*",
        asymp: "\u2248",
        asympeq: "\u224D",
        Atilde: "\xC3",
        atilde: "\xE3",
        Auml: "\xC4",
        auml: "\xE4",
        awconint: "\u2233",
        awint: "\u2A11",
        backcong: "\u224C",
        backepsilon: "\u03F6",
        backprime: "\u2035",
        backsim: "\u223D",
        backsimeq: "\u22CD",
        Backslash: "\u2216",
        Barv: "\u2AE7",
        barvee: "\u22BD",
        Barwed: "\u2306",
        barwed: "\u2305",
        barwedge: "\u2305",
        bbrk: "\u23B5",
        bbrktbrk: "\u23B6",
        bcong: "\u224C",
        Bcy: "\u0411",
        bcy: "\u0431",
        bdquo: "\u201E",
        becaus: "\u2235",
        Because: "\u2235",
        because: "\u2235",
        bemptyv: "\u29B0",
        bepsi: "\u03F6",
        bernou: "\u212C",
        Bernoullis: "\u212C",
        Beta: "\u0392",
        beta: "\u03B2",
        beth: "\u2136",
        between: "\u226C",
        Bfr: "\u{1D505}",
        bfr: "\u{1D51F}",
        bigcap: "\u22C2",
        bigcirc: "\u25EF",
        bigcup: "\u22C3",
        bigodot: "\u2A00",
        bigoplus: "\u2A01",
        bigotimes: "\u2A02",
        bigsqcup: "\u2A06",
        bigstar: "\u2605",
        bigtriangledown: "\u25BD",
        bigtriangleup: "\u25B3",
        biguplus: "\u2A04",
        bigvee: "\u22C1",
        bigwedge: "\u22C0",
        bkarow: "\u290D",
        blacklozenge: "\u29EB",
        blacksquare: "\u25AA",
        blacktriangle: "\u25B4",
        blacktriangledown: "\u25BE",
        blacktriangleleft: "\u25C2",
        blacktriangleright: "\u25B8",
        blank: "\u2423",
        blk12: "\u2592",
        blk14: "\u2591",
        blk34: "\u2593",
        block: "\u2588",
        bne: "=\u20E5",
        bnequiv: "\u2261\u20E5",
        bNot: "\u2AED",
        bnot: "\u2310",
        Bopf: "\u{1D539}",
        bopf: "\u{1D553}",
        bot: "\u22A5",
        bottom: "\u22A5",
        bowtie: "\u22C8",
        boxbox: "\u29C9",
        boxDL: "\u2557",
        boxDl: "\u2556",
        boxdL: "\u2555",
        boxdl: "\u2510",
        boxDR: "\u2554",
        boxDr: "\u2553",
        boxdR: "\u2552",
        boxdr: "\u250C",
        boxH: "\u2550",
        boxh: "\u2500",
        boxHD: "\u2566",
        boxHd: "\u2564",
        boxhD: "\u2565",
        boxhd: "\u252C",
        boxHU: "\u2569",
        boxHu: "\u2567",
        boxhU: "\u2568",
        boxhu: "\u2534",
        boxminus: "\u229F",
        boxplus: "\u229E",
        boxtimes: "\u22A0",
        boxUL: "\u255D",
        boxUl: "\u255C",
        boxuL: "\u255B",
        boxul: "\u2518",
        boxUR: "\u255A",
        boxUr: "\u2559",
        boxuR: "\u2558",
        boxur: "\u2514",
        boxV: "\u2551",
        boxv: "\u2502",
        boxVH: "\u256C",
        boxVh: "\u256B",
        boxvH: "\u256A",
        boxvh: "\u253C",
        boxVL: "\u2563",
        boxVl: "\u2562",
        boxvL: "\u2561",
        boxvl: "\u2524",
        boxVR: "\u2560",
        boxVr: "\u255F",
        boxvR: "\u255E",
        boxvr: "\u251C",
        bprime: "\u2035",
        Breve: "\u02D8",
        breve: "\u02D8",
        brvbar: "\xA6",
        Bscr: "\u212C",
        bscr: "\u{1D4B7}",
        bsemi: "\u204F",
        bsim: "\u223D",
        bsime: "\u22CD",
        bsol: "\\",
        bsolb: "\u29C5",
        bsolhsub: "\u27C8",
        bull: "\u2022",
        bullet: "\u2022",
        bump: "\u224E",
        bumpE: "\u2AAE",
        bumpe: "\u224F",
        Bumpeq: "\u224E",
        bumpeq: "\u224F",
        Cacute: "\u0106",
        cacute: "\u0107",
        Cap: "\u22D2",
        cap: "\u2229",
        capand: "\u2A44",
        capbrcup: "\u2A49",
        capcap: "\u2A4B",
        capcup: "\u2A47",
        capdot: "\u2A40",
        CapitalDifferentialD: "\u2145",
        caps: "\u2229\uFE00",
        caret: "\u2041",
        caron: "\u02C7",
        Cayleys: "\u212D",
        ccaps: "\u2A4D",
        Ccaron: "\u010C",
        ccaron: "\u010D",
        Ccedil: "\xC7",
        ccedil: "\xE7",
        Ccirc: "\u0108",
        ccirc: "\u0109",
        Cconint: "\u2230",
        ccups: "\u2A4C",
        ccupssm: "\u2A50",
        Cdot: "\u010A",
        cdot: "\u010B",
        cedil: "\xB8",
        Cedilla: "\xB8",
        cemptyv: "\u29B2",
        cent: "\xA2",
        CenterDot: "\xB7",
        centerdot: "\xB7",
        Cfr: "\u212D",
        cfr: "\u{1D520}",
        CHcy: "\u0427",
        chcy: "\u0447",
        check: "\u2713",
        checkmark: "\u2713",
        Chi: "\u03A7",
        chi: "\u03C7",
        cir: "\u25CB",
        circ: "\u02C6",
        circeq: "\u2257",
        circlearrowleft: "\u21BA",
        circlearrowright: "\u21BB",
        circledast: "\u229B",
        circledcirc: "\u229A",
        circleddash: "\u229D",
        CircleDot: "\u2299",
        circledR: "\xAE",
        circledS: "\u24C8",
        CircleMinus: "\u2296",
        CirclePlus: "\u2295",
        CircleTimes: "\u2297",
        cirE: "\u29C3",
        cire: "\u2257",
        cirfnint: "\u2A10",
        cirmid: "\u2AEF",
        cirscir: "\u29C2",
        ClockwiseContourIntegral: "\u2232",
        CloseCurlyDoubleQuote: "\u201D",
        CloseCurlyQuote: "\u2019",
        clubs: "\u2663",
        clubsuit: "\u2663",
        Colon: "\u2237",
        colon: ":",
        Colone: "\u2A74",
        colone: "\u2254",
        coloneq: "\u2254",
        comma: ",",
        commat: "@",
        comp: "\u2201",
        compfn: "\u2218",
        complement: "\u2201",
        complexes: "\u2102",
        cong: "\u2245",
        congdot: "\u2A6D",
        Congruent: "\u2261",
        Conint: "\u222F",
        conint: "\u222E",
        ContourIntegral: "\u222E",
        Copf: "\u2102",
        copf: "\u{1D554}",
        coprod: "\u2210",
        Coproduct: "\u2210",
        COPY: "\xA9",
        copy: "\xA9",
        copysr: "\u2117",
        CounterClockwiseContourIntegral: "\u2233",
        crarr: "\u21B5",
        Cross: "\u2A2F",
        cross: "\u2717",
        Cscr: "\u{1D49E}",
        cscr: "\u{1D4B8}",
        csub: "\u2ACF",
        csube: "\u2AD1",
        csup: "\u2AD0",
        csupe: "\u2AD2",
        ctdot: "\u22EF",
        cudarrl: "\u2938",
        cudarrr: "\u2935",
        cuepr: "\u22DE",
        cuesc: "\u22DF",
        cularr: "\u21B6",
        cularrp: "\u293D",
        Cup: "\u22D3",
        cup: "\u222A",
        cupbrcap: "\u2A48",
        CupCap: "\u224D",
        cupcap: "\u2A46",
        cupcup: "\u2A4A",
        cupdot: "\u228D",
        cupor: "\u2A45",
        cups: "\u222A\uFE00",
        curarr: "\u21B7",
        curarrm: "\u293C",
        curlyeqprec: "\u22DE",
        curlyeqsucc: "\u22DF",
        curlyvee: "\u22CE",
        curlywedge: "\u22CF",
        curren: "\xA4",
        curvearrowleft: "\u21B6",
        curvearrowright: "\u21B7",
        cuvee: "\u22CE",
        cuwed: "\u22CF",
        cwconint: "\u2232",
        cwint: "\u2231",
        cylcty: "\u232D",
        Dagger: "\u2021",
        dagger: "\u2020",
        daleth: "\u2138",
        Darr: "\u21A1",
        dArr: "\u21D3",
        darr: "\u2193",
        dash: "\u2010",
        Dashv: "\u2AE4",
        dashv: "\u22A3",
        dbkarow: "\u290F",
        dblac: "\u02DD",
        Dcaron: "\u010E",
        dcaron: "\u010F",
        Dcy: "\u0414",
        dcy: "\u0434",
        DD: "\u2145",
        dd: "\u2146",
        ddagger: "\u2021",
        ddarr: "\u21CA",
        DDotrahd: "\u2911",
        ddotseq: "\u2A77",
        deg: "\xB0",
        Del: "\u2207",
        Delta: "\u0394",
        delta: "\u03B4",
        demptyv: "\u29B1",
        dfisht: "\u297F",
        Dfr: "\u{1D507}",
        dfr: "\u{1D521}",
        dHar: "\u2965",
        dharl: "\u21C3",
        dharr: "\u21C2",
        DiacriticalAcute: "\xB4",
        DiacriticalDot: "\u02D9",
        DiacriticalDoubleAcute: "\u02DD",
        DiacriticalGrave: "`",
        DiacriticalTilde: "\u02DC",
        diam: "\u22C4",
        Diamond: "\u22C4",
        diamond: "\u22C4",
        diamondsuit: "\u2666",
        diams: "\u2666",
        die: "\xA8",
        DifferentialD: "\u2146",
        digamma: "\u03DD",
        disin: "\u22F2",
        div: "\xF7",
        divide: "\xF7",
        divideontimes: "\u22C7",
        divonx: "\u22C7",
        DJcy: "\u0402",
        djcy: "\u0452",
        dlcorn: "\u231E",
        dlcrop: "\u230D",
        dollar: "$",
        Dopf: "\u{1D53B}",
        dopf: "\u{1D555}",
        Dot: "\xA8",
        dot: "\u02D9",
        DotDot: "\u20DC",
        doteq: "\u2250",
        doteqdot: "\u2251",
        DotEqual: "\u2250",
        dotminus: "\u2238",
        dotplus: "\u2214",
        dotsquare: "\u22A1",
        doublebarwedge: "\u2306",
        DoubleContourIntegral: "\u222F",
        DoubleDot: "\xA8",
        DoubleDownArrow: "\u21D3",
        DoubleLeftArrow: "\u21D0",
        DoubleLeftRightArrow: "\u21D4",
        DoubleLeftTee: "\u2AE4",
        DoubleLongLeftArrow: "\u27F8",
        DoubleLongLeftRightArrow: "\u27FA",
        DoubleLongRightArrow: "\u27F9",
        DoubleRightArrow: "\u21D2",
        DoubleRightTee: "\u22A8",
        DoubleUpArrow: "\u21D1",
        DoubleUpDownArrow: "\u21D5",
        DoubleVerticalBar: "\u2225",
        DownArrow: "\u2193",
        Downarrow: "\u21D3",
        downarrow: "\u2193",
        DownArrowBar: "\u2913",
        DownArrowUpArrow: "\u21F5",
        DownBreve: "\u0311",
        downdownarrows: "\u21CA",
        downharpoonleft: "\u21C3",
        downharpoonright: "\u21C2",
        DownLeftRightVector: "\u2950",
        DownLeftTeeVector: "\u295E",
        DownLeftVector: "\u21BD",
        DownLeftVectorBar: "\u2956",
        DownRightTeeVector: "\u295F",
        DownRightVector: "\u21C1",
        DownRightVectorBar: "\u2957",
        DownTee: "\u22A4",
        DownTeeArrow: "\u21A7",
        drbkarow: "\u2910",
        drcorn: "\u231F",
        drcrop: "\u230C",
        Dscr: "\u{1D49F}",
        dscr: "\u{1D4B9}",
        DScy: "\u0405",
        dscy: "\u0455",
        dsol: "\u29F6",
        Dstrok: "\u0110",
        dstrok: "\u0111",
        dtdot: "\u22F1",
        dtri: "\u25BF",
        dtrif: "\u25BE",
        duarr: "\u21F5",
        duhar: "\u296F",
        dwangle: "\u29A6",
        DZcy: "\u040F",
        dzcy: "\u045F",
        dzigrarr: "\u27FF",
        Eacute: "\xC9",
        eacute: "\xE9",
        easter: "\u2A6E",
        Ecaron: "\u011A",
        ecaron: "\u011B",
        ecir: "\u2256",
        Ecirc: "\xCA",
        ecirc: "\xEA",
        ecolon: "\u2255",
        Ecy: "\u042D",
        ecy: "\u044D",
        eDDot: "\u2A77",
        Edot: "\u0116",
        eDot: "\u2251",
        edot: "\u0117",
        ee: "\u2147",
        efDot: "\u2252",
        Efr: "\u{1D508}",
        efr: "\u{1D522}",
        eg: "\u2A9A",
        Egrave: "\xC8",
        egrave: "\xE8",
        egs: "\u2A96",
        egsdot: "\u2A98",
        el: "\u2A99",
        Element: "\u2208",
        elinters: "\u23E7",
        ell: "\u2113",
        els: "\u2A95",
        elsdot: "\u2A97",
        Emacr: "\u0112",
        emacr: "\u0113",
        empty: "\u2205",
        emptyset: "\u2205",
        EmptySmallSquare: "\u25FB",
        emptyv: "\u2205",
        EmptyVerySmallSquare: "\u25AB",
        emsp: "\u2003",
        emsp13: "\u2004",
        emsp14: "\u2005",
        ENG: "\u014A",
        eng: "\u014B",
        ensp: "\u2002",
        Eogon: "\u0118",
        eogon: "\u0119",
        Eopf: "\u{1D53C}",
        eopf: "\u{1D556}",
        epar: "\u22D5",
        eparsl: "\u29E3",
        eplus: "\u2A71",
        epsi: "\u03B5",
        Epsilon: "\u0395",
        epsilon: "\u03B5",
        epsiv: "\u03F5",
        eqcirc: "\u2256",
        eqcolon: "\u2255",
        eqsim: "\u2242",
        eqslantgtr: "\u2A96",
        eqslantless: "\u2A95",
        Equal: "\u2A75",
        equals: "=",
        EqualTilde: "\u2242",
        equest: "\u225F",
        Equilibrium: "\u21CC",
        equiv: "\u2261",
        equivDD: "\u2A78",
        eqvparsl: "\u29E5",
        erarr: "\u2971",
        erDot: "\u2253",
        Escr: "\u2130",
        escr: "\u212F",
        esdot: "\u2250",
        Esim: "\u2A73",
        esim: "\u2242",
        Eta: "\u0397",
        eta: "\u03B7",
        ETH: "\xD0",
        eth: "\xF0",
        Euml: "\xCB",
        euml: "\xEB",
        euro: "\u20AC",
        excl: "!",
        exist: "\u2203",
        Exists: "\u2203",
        expectation: "\u2130",
        ExponentialE: "\u2147",
        exponentiale: "\u2147",
        fallingdotseq: "\u2252",
        Fcy: "\u0424",
        fcy: "\u0444",
        female: "\u2640",
        ffilig: "\uFB03",
        fflig: "\uFB00",
        ffllig: "\uFB04",
        Ffr: "\u{1D509}",
        ffr: "\u{1D523}",
        filig: "\uFB01",
        FilledSmallSquare: "\u25FC",
        FilledVerySmallSquare: "\u25AA",
        fjlig: "fj",
        flat: "\u266D",
        fllig: "\uFB02",
        fltns: "\u25B1",
        fnof: "\u0192",
        Fopf: "\u{1D53D}",
        fopf: "\u{1D557}",
        ForAll: "\u2200",
        forall: "\u2200",
        fork: "\u22D4",
        forkv: "\u2AD9",
        Fouriertrf: "\u2131",
        fpartint: "\u2A0D",
        frac12: "\xBD",
        frac13: "\u2153",
        frac14: "\xBC",
        frac15: "\u2155",
        frac16: "\u2159",
        frac18: "\u215B",
        frac23: "\u2154",
        frac25: "\u2156",
        frac34: "\xBE",
        frac35: "\u2157",
        frac38: "\u215C",
        frac45: "\u2158",
        frac56: "\u215A",
        frac58: "\u215D",
        frac78: "\u215E",
        frasl: "\u2044",
        frown: "\u2322",
        Fscr: "\u2131",
        fscr: "\u{1D4BB}",
        gacute: "\u01F5",
        Gamma: "\u0393",
        gamma: "\u03B3",
        Gammad: "\u03DC",
        gammad: "\u03DD",
        gap: "\u2A86",
        Gbreve: "\u011E",
        gbreve: "\u011F",
        Gcedil: "\u0122",
        Gcirc: "\u011C",
        gcirc: "\u011D",
        Gcy: "\u0413",
        gcy: "\u0433",
        Gdot: "\u0120",
        gdot: "\u0121",
        gE: "\u2267",
        ge: "\u2265",
        gEl: "\u2A8C",
        gel: "\u22DB",
        geq: "\u2265",
        geqq: "\u2267",
        geqslant: "\u2A7E",
        ges: "\u2A7E",
        gescc: "\u2AA9",
        gesdot: "\u2A80",
        gesdoto: "\u2A82",
        gesdotol: "\u2A84",
        gesl: "\u22DB\uFE00",
        gesles: "\u2A94",
        Gfr: "\u{1D50A}",
        gfr: "\u{1D524}",
        Gg: "\u22D9",
        gg: "\u226B",
        ggg: "\u22D9",
        gimel: "\u2137",
        GJcy: "\u0403",
        gjcy: "\u0453",
        gl: "\u2277",
        gla: "\u2AA5",
        glE: "\u2A92",
        glj: "\u2AA4",
        gnap: "\u2A8A",
        gnapprox: "\u2A8A",
        gnE: "\u2269",
        gne: "\u2A88",
        gneq: "\u2A88",
        gneqq: "\u2269",
        gnsim: "\u22E7",
        Gopf: "\u{1D53E}",
        gopf: "\u{1D558}",
        grave: "`",
        GreaterEqual: "\u2265",
        GreaterEqualLess: "\u22DB",
        GreaterFullEqual: "\u2267",
        GreaterGreater: "\u2AA2",
        GreaterLess: "\u2277",
        GreaterSlantEqual: "\u2A7E",
        GreaterTilde: "\u2273",
        Gscr: "\u{1D4A2}",
        gscr: "\u210A",
        gsim: "\u2273",
        gsime: "\u2A8E",
        gsiml: "\u2A90",
        Gt: "\u226B",
        GT: ">",
        gt: ">",
        gtcc: "\u2AA7",
        gtcir: "\u2A7A",
        gtdot: "\u22D7",
        gtlPar: "\u2995",
        gtquest: "\u2A7C",
        gtrapprox: "\u2A86",
        gtrarr: "\u2978",
        gtrdot: "\u22D7",
        gtreqless: "\u22DB",
        gtreqqless: "\u2A8C",
        gtrless: "\u2277",
        gtrsim: "\u2273",
        gvertneqq: "\u2269\uFE00",
        gvnE: "\u2269\uFE00",
        Hacek: "\u02C7",
        hairsp: "\u200A",
        half: "\xBD",
        hamilt: "\u210B",
        HARDcy: "\u042A",
        hardcy: "\u044A",
        hArr: "\u21D4",
        harr: "\u2194",
        harrcir: "\u2948",
        harrw: "\u21AD",
        Hat: "^",
        hbar: "\u210F",
        Hcirc: "\u0124",
        hcirc: "\u0125",
        hearts: "\u2665",
        heartsuit: "\u2665",
        hellip: "\u2026",
        hercon: "\u22B9",
        Hfr: "\u210C",
        hfr: "\u{1D525}",
        HilbertSpace: "\u210B",
        hksearow: "\u2925",
        hkswarow: "\u2926",
        hoarr: "\u21FF",
        homtht: "\u223B",
        hookleftarrow: "\u21A9",
        hookrightarrow: "\u21AA",
        Hopf: "\u210D",
        hopf: "\u{1D559}",
        horbar: "\u2015",
        HorizontalLine: "\u2500",
        Hscr: "\u210B",
        hscr: "\u{1D4BD}",
        hslash: "\u210F",
        Hstrok: "\u0126",
        hstrok: "\u0127",
        HumpDownHump: "\u224E",
        HumpEqual: "\u224F",
        hybull: "\u2043",
        hyphen: "\u2010",
        Iacute: "\xCD",
        iacute: "\xED",
        ic: "\u2063",
        Icirc: "\xCE",
        icirc: "\xEE",
        Icy: "\u0418",
        icy: "\u0438",
        Idot: "\u0130",
        IEcy: "\u0415",
        iecy: "\u0435",
        iexcl: "\xA1",
        iff: "\u21D4",
        Ifr: "\u2111",
        ifr: "\u{1D526}",
        Igrave: "\xCC",
        igrave: "\xEC",
        ii: "\u2148",
        iiiint: "\u2A0C",
        iiint: "\u222D",
        iinfin: "\u29DC",
        iiota: "\u2129",
        IJlig: "\u0132",
        ijlig: "\u0133",
        Im: "\u2111",
        Imacr: "\u012A",
        imacr: "\u012B",
        image: "\u2111",
        ImaginaryI: "\u2148",
        imagline: "\u2110",
        imagpart: "\u2111",
        imath: "\u0131",
        imof: "\u22B7",
        imped: "\u01B5",
        Implies: "\u21D2",
        in: "\u2208",
        incare: "\u2105",
        infin: "\u221E",
        infintie: "\u29DD",
        inodot: "\u0131",
        Int: "\u222C",
        int: "\u222B",
        intcal: "\u22BA",
        integers: "\u2124",
        Integral: "\u222B",
        intercal: "\u22BA",
        Intersection: "\u22C2",
        intlarhk: "\u2A17",
        intprod: "\u2A3C",
        InvisibleComma: "\u2063",
        InvisibleTimes: "\u2062",
        IOcy: "\u0401",
        iocy: "\u0451",
        Iogon: "\u012E",
        iogon: "\u012F",
        Iopf: "\u{1D540}",
        iopf: "\u{1D55A}",
        Iota: "\u0399",
        iota: "\u03B9",
        iprod: "\u2A3C",
        iquest: "\xBF",
        Iscr: "\u2110",
        iscr: "\u{1D4BE}",
        isin: "\u2208",
        isindot: "\u22F5",
        isinE: "\u22F9",
        isins: "\u22F4",
        isinsv: "\u22F3",
        isinv: "\u2208",
        it: "\u2062",
        Itilde: "\u0128",
        itilde: "\u0129",
        Iukcy: "\u0406",
        iukcy: "\u0456",
        Iuml: "\xCF",
        iuml: "\xEF",
        Jcirc: "\u0134",
        jcirc: "\u0135",
        Jcy: "\u0419",
        jcy: "\u0439",
        Jfr: "\u{1D50D}",
        jfr: "\u{1D527}",
        jmath: "\u0237",
        Jopf: "\u{1D541}",
        jopf: "\u{1D55B}",
        Jscr: "\u{1D4A5}",
        jscr: "\u{1D4BF}",
        Jsercy: "\u0408",
        jsercy: "\u0458",
        Jukcy: "\u0404",
        jukcy: "\u0454",
        Kappa: "\u039A",
        kappa: "\u03BA",
        kappav: "\u03F0",
        Kcedil: "\u0136",
        kcedil: "\u0137",
        Kcy: "\u041A",
        kcy: "\u043A",
        Kfr: "\u{1D50E}",
        kfr: "\u{1D528}",
        kgreen: "\u0138",
        KHcy: "\u0425",
        khcy: "\u0445",
        KJcy: "\u040C",
        kjcy: "\u045C",
        Kopf: "\u{1D542}",
        kopf: "\u{1D55C}",
        Kscr: "\u{1D4A6}",
        kscr: "\u{1D4C0}",
        lAarr: "\u21DA",
        Lacute: "\u0139",
        lacute: "\u013A",
        laemptyv: "\u29B4",
        lagran: "\u2112",
        Lambda: "\u039B",
        lambda: "\u03BB",
        Lang: "\u27EA",
        lang: "\u27E8",
        langd: "\u2991",
        langle: "\u27E8",
        lap: "\u2A85",
        Laplacetrf: "\u2112",
        laquo: "\xAB",
        Larr: "\u219E",
        lArr: "\u21D0",
        larr: "\u2190",
        larrb: "\u21E4",
        larrbfs: "\u291F",
        larrfs: "\u291D",
        larrhk: "\u21A9",
        larrlp: "\u21AB",
        larrpl: "\u2939",
        larrsim: "\u2973",
        larrtl: "\u21A2",
        lat: "\u2AAB",
        lAtail: "\u291B",
        latail: "\u2919",
        late: "\u2AAD",
        lates: "\u2AAD\uFE00",
        lBarr: "\u290E",
        lbarr: "\u290C",
        lbbrk: "\u2772",
        lbrace: "{",
        lbrack: "[",
        lbrke: "\u298B",
        lbrksld: "\u298F",
        lbrkslu: "\u298D",
        Lcaron: "\u013D",
        lcaron: "\u013E",
        Lcedil: "\u013B",
        lcedil: "\u013C",
        lceil: "\u2308",
        lcub: "{",
        Lcy: "\u041B",
        lcy: "\u043B",
        ldca: "\u2936",
        ldquo: "\u201C",
        ldquor: "\u201E",
        ldrdhar: "\u2967",
        ldrushar: "\u294B",
        ldsh: "\u21B2",
        lE: "\u2266",
        le: "\u2264",
        LeftAngleBracket: "\u27E8",
        LeftArrow: "\u2190",
        Leftarrow: "\u21D0",
        leftarrow: "\u2190",
        LeftArrowBar: "\u21E4",
        LeftArrowRightArrow: "\u21C6",
        leftarrowtail: "\u21A2",
        LeftCeiling: "\u2308",
        LeftDoubleBracket: "\u27E6",
        LeftDownTeeVector: "\u2961",
        LeftDownVector: "\u21C3",
        LeftDownVectorBar: "\u2959",
        LeftFloor: "\u230A",
        leftharpoondown: "\u21BD",
        leftharpoonup: "\u21BC",
        leftleftarrows: "\u21C7",
        LeftRightArrow: "\u2194",
        Leftrightarrow: "\u21D4",
        leftrightarrow: "\u2194",
        leftrightarrows: "\u21C6",
        leftrightharpoons: "\u21CB",
        leftrightsquigarrow: "\u21AD",
        LeftRightVector: "\u294E",
        LeftTee: "\u22A3",
        LeftTeeArrow: "\u21A4",
        LeftTeeVector: "\u295A",
        leftthreetimes: "\u22CB",
        LeftTriangle: "\u22B2",
        LeftTriangleBar: "\u29CF",
        LeftTriangleEqual: "\u22B4",
        LeftUpDownVector: "\u2951",
        LeftUpTeeVector: "\u2960",
        LeftUpVector: "\u21BF",
        LeftUpVectorBar: "\u2958",
        LeftVector: "\u21BC",
        LeftVectorBar: "\u2952",
        lEg: "\u2A8B",
        leg: "\u22DA",
        leq: "\u2264",
        leqq: "\u2266",
        leqslant: "\u2A7D",
        les: "\u2A7D",
        lescc: "\u2AA8",
        lesdot: "\u2A7F",
        lesdoto: "\u2A81",
        lesdotor: "\u2A83",
        lesg: "\u22DA\uFE00",
        lesges: "\u2A93",
        lessapprox: "\u2A85",
        lessdot: "\u22D6",
        lesseqgtr: "\u22DA",
        lesseqqgtr: "\u2A8B",
        LessEqualGreater: "\u22DA",
        LessFullEqual: "\u2266",
        LessGreater: "\u2276",
        lessgtr: "\u2276",
        LessLess: "\u2AA1",
        lesssim: "\u2272",
        LessSlantEqual: "\u2A7D",
        LessTilde: "\u2272",
        lfisht: "\u297C",
        lfloor: "\u230A",
        Lfr: "\u{1D50F}",
        lfr: "\u{1D529}",
        lg: "\u2276",
        lgE: "\u2A91",
        lHar: "\u2962",
        lhard: "\u21BD",
        lharu: "\u21BC",
        lharul: "\u296A",
        lhblk: "\u2584",
        LJcy: "\u0409",
        ljcy: "\u0459",
        Ll: "\u22D8",
        ll: "\u226A",
        llarr: "\u21C7",
        llcorner: "\u231E",
        Lleftarrow: "\u21DA",
        llhard: "\u296B",
        lltri: "\u25FA",
        Lmidot: "\u013F",
        lmidot: "\u0140",
        lmoust: "\u23B0",
        lmoustache: "\u23B0",
        lnap: "\u2A89",
        lnapprox: "\u2A89",
        lnE: "\u2268",
        lne: "\u2A87",
        lneq: "\u2A87",
        lneqq: "\u2268",
        lnsim: "\u22E6",
        loang: "\u27EC",
        loarr: "\u21FD",
        lobrk: "\u27E6",
        LongLeftArrow: "\u27F5",
        Longleftarrow: "\u27F8",
        longleftarrow: "\u27F5",
        LongLeftRightArrow: "\u27F7",
        Longleftrightarrow: "\u27FA",
        longleftrightarrow: "\u27F7",
        longmapsto: "\u27FC",
        LongRightArrow: "\u27F6",
        Longrightarrow: "\u27F9",
        longrightarrow: "\u27F6",
        looparrowleft: "\u21AB",
        looparrowright: "\u21AC",
        lopar: "\u2985",
        Lopf: "\u{1D543}",
        lopf: "\u{1D55D}",
        loplus: "\u2A2D",
        lotimes: "\u2A34",
        lowast: "\u2217",
        lowbar: "_",
        LowerLeftArrow: "\u2199",
        LowerRightArrow: "\u2198",
        loz: "\u25CA",
        lozenge: "\u25CA",
        lozf: "\u29EB",
        lpar: "(",
        lparlt: "\u2993",
        lrarr: "\u21C6",
        lrcorner: "\u231F",
        lrhar: "\u21CB",
        lrhard: "\u296D",
        lrm: "\u200E",
        lrtri: "\u22BF",
        lsaquo: "\u2039",
        Lscr: "\u2112",
        lscr: "\u{1D4C1}",
        Lsh: "\u21B0",
        lsh: "\u21B0",
        lsim: "\u2272",
        lsime: "\u2A8D",
        lsimg: "\u2A8F",
        lsqb: "[",
        lsquo: "\u2018",
        lsquor: "\u201A",
        Lstrok: "\u0141",
        lstrok: "\u0142",
        Lt: "\u226A",
        LT: "<",
        lt: "<",
        ltcc: "\u2AA6",
        ltcir: "\u2A79",
        ltdot: "\u22D6",
        lthree: "\u22CB",
        ltimes: "\u22C9",
        ltlarr: "\u2976",
        ltquest: "\u2A7B",
        ltri: "\u25C3",
        ltrie: "\u22B4",
        ltrif: "\u25C2",
        ltrPar: "\u2996",
        lurdshar: "\u294A",
        luruhar: "\u2966",
        lvertneqq: "\u2268\uFE00",
        lvnE: "\u2268\uFE00",
        macr: "\xAF",
        male: "\u2642",
        malt: "\u2720",
        maltese: "\u2720",
        Map: "\u2905",
        map: "\u21A6",
        mapsto: "\u21A6",
        mapstodown: "\u21A7",
        mapstoleft: "\u21A4",
        mapstoup: "\u21A5",
        marker: "\u25AE",
        mcomma: "\u2A29",
        Mcy: "\u041C",
        mcy: "\u043C",
        mdash: "\u2014",
        mDDot: "\u223A",
        measuredangle: "\u2221",
        MediumSpace: "\u205F",
        Mellintrf: "\u2133",
        Mfr: "\u{1D510}",
        mfr: "\u{1D52A}",
        mho: "\u2127",
        micro: "\xB5",
        mid: "\u2223",
        midast: "*",
        midcir: "\u2AF0",
        middot: "\xB7",
        minus: "\u2212",
        minusb: "\u229F",
        minusd: "\u2238",
        minusdu: "\u2A2A",
        MinusPlus: "\u2213",
        mlcp: "\u2ADB",
        mldr: "\u2026",
        mnplus: "\u2213",
        models: "\u22A7",
        Mopf: "\u{1D544}",
        mopf: "\u{1D55E}",
        mp: "\u2213",
        Mscr: "\u2133",
        mscr: "\u{1D4C2}",
        mstpos: "\u223E",
        Mu: "\u039C",
        mu: "\u03BC",
        multimap: "\u22B8",
        mumap: "\u22B8",
        nabla: "\u2207",
        Nacute: "\u0143",
        nacute: "\u0144",
        nang: "\u2220\u20D2",
        nap: "\u2249",
        napE: "\u2A70\u0338",
        napid: "\u224B\u0338",
        napos: "\u0149",
        napprox: "\u2249",
        natur: "\u266E",
        natural: "\u266E",
        naturals: "\u2115",
        nbsp: "\xA0",
        nbump: "\u224E\u0338",
        nbumpe: "\u224F\u0338",
        ncap: "\u2A43",
        Ncaron: "\u0147",
        ncaron: "\u0148",
        Ncedil: "\u0145",
        ncedil: "\u0146",
        ncong: "\u2247",
        ncongdot: "\u2A6D\u0338",
        ncup: "\u2A42",
        Ncy: "\u041D",
        ncy: "\u043D",
        ndash: "\u2013",
        ne: "\u2260",
        nearhk: "\u2924",
        neArr: "\u21D7",
        nearr: "\u2197",
        nearrow: "\u2197",
        nedot: "\u2250\u0338",
        NegativeMediumSpace: "\u200B",
        NegativeThickSpace: "\u200B",
        NegativeThinSpace: "\u200B",
        NegativeVeryThinSpace: "\u200B",
        nequiv: "\u2262",
        nesear: "\u2928",
        nesim: "\u2242\u0338",
        NestedGreaterGreater: "\u226B",
        NestedLessLess: "\u226A",
        NewLine: "\n",
        nexist: "\u2204",
        nexists: "\u2204",
        Nfr: "\u{1D511}",
        nfr: "\u{1D52B}",
        ngE: "\u2267\u0338",
        nge: "\u2271",
        ngeq: "\u2271",
        ngeqq: "\u2267\u0338",
        ngeqslant: "\u2A7E\u0338",
        nges: "\u2A7E\u0338",
        nGg: "\u22D9\u0338",
        ngsim: "\u2275",
        nGt: "\u226B\u20D2",
        ngt: "\u226F",
        ngtr: "\u226F",
        nGtv: "\u226B\u0338",
        nhArr: "\u21CE",
        nharr: "\u21AE",
        nhpar: "\u2AF2",
        ni: "\u220B",
        nis: "\u22FC",
        nisd: "\u22FA",
        niv: "\u220B",
        NJcy: "\u040A",
        njcy: "\u045A",
        nlArr: "\u21CD",
        nlarr: "\u219A",
        nldr: "\u2025",
        nlE: "\u2266\u0338",
        nle: "\u2270",
        nLeftarrow: "\u21CD",
        nleftarrow: "\u219A",
        nLeftrightarrow: "\u21CE",
        nleftrightarrow: "\u21AE",
        nleq: "\u2270",
        nleqq: "\u2266\u0338",
        nleqslant: "\u2A7D\u0338",
        nles: "\u2A7D\u0338",
        nless: "\u226E",
        nLl: "\u22D8\u0338",
        nlsim: "\u2274",
        nLt: "\u226A\u20D2",
        nlt: "\u226E",
        nltri: "\u22EA",
        nltrie: "\u22EC",
        nLtv: "\u226A\u0338",
        nmid: "\u2224",
        NoBreak: "\u2060",
        NonBreakingSpace: "\xA0",
        Nopf: "\u2115",
        nopf: "\u{1D55F}",
        Not: "\u2AEC",
        not: "\xAC",
        NotCongruent: "\u2262",
        NotCupCap: "\u226D",
        NotDoubleVerticalBar: "\u2226",
        NotElement: "\u2209",
        NotEqual: "\u2260",
        NotEqualTilde: "\u2242\u0338",
        NotExists: "\u2204",
        NotGreater: "\u226F",
        NotGreaterEqual: "\u2271",
        NotGreaterFullEqual: "\u2267\u0338",
        NotGreaterGreater: "\u226B\u0338",
        NotGreaterLess: "\u2279",
        NotGreaterSlantEqual: "\u2A7E\u0338",
        NotGreaterTilde: "\u2275",
        NotHumpDownHump: "\u224E\u0338",
        NotHumpEqual: "\u224F\u0338",
        notin: "\u2209",
        notindot: "\u22F5\u0338",
        notinE: "\u22F9\u0338",
        notinva: "\u2209",
        notinvb: "\u22F7",
        notinvc: "\u22F6",
        NotLeftTriangle: "\u22EA",
        NotLeftTriangleBar: "\u29CF\u0338",
        NotLeftTriangleEqual: "\u22EC",
        NotLess: "\u226E",
        NotLessEqual: "\u2270",
        NotLessGreater: "\u2278",
        NotLessLess: "\u226A\u0338",
        NotLessSlantEqual: "\u2A7D\u0338",
        NotLessTilde: "\u2274",
        NotNestedGreaterGreater: "\u2AA2\u0338",
        NotNestedLessLess: "\u2AA1\u0338",
        notni: "\u220C",
        notniva: "\u220C",
        notnivb: "\u22FE",
        notnivc: "\u22FD",
        NotPrecedes: "\u2280",
        NotPrecedesEqual: "\u2AAF\u0338",
        NotPrecedesSlantEqual: "\u22E0",
        NotReverseElement: "\u220C",
        NotRightTriangle: "\u22EB",
        NotRightTriangleBar: "\u29D0\u0338",
        NotRightTriangleEqual: "\u22ED",
        NotSquareSubset: "\u228F\u0338",
        NotSquareSubsetEqual: "\u22E2",
        NotSquareSuperset: "\u2290\u0338",
        NotSquareSupersetEqual: "\u22E3",
        NotSubset: "\u2282\u20D2",
        NotSubsetEqual: "\u2288",
        NotSucceeds: "\u2281",
        NotSucceedsEqual: "\u2AB0\u0338",
        NotSucceedsSlantEqual: "\u22E1",
        NotSucceedsTilde: "\u227F\u0338",
        NotSuperset: "\u2283\u20D2",
        NotSupersetEqual: "\u2289",
        NotTilde: "\u2241",
        NotTildeEqual: "\u2244",
        NotTildeFullEqual: "\u2247",
        NotTildeTilde: "\u2249",
        NotVerticalBar: "\u2224",
        npar: "\u2226",
        nparallel: "\u2226",
        nparsl: "\u2AFD\u20E5",
        npart: "\u2202\u0338",
        npolint: "\u2A14",
        npr: "\u2280",
        nprcue: "\u22E0",
        npre: "\u2AAF\u0338",
        nprec: "\u2280",
        npreceq: "\u2AAF\u0338",
        nrArr: "\u21CF",
        nrarr: "\u219B",
        nrarrc: "\u2933\u0338",
        nrarrw: "\u219D\u0338",
        nRightarrow: "\u21CF",
        nrightarrow: "\u219B",
        nrtri: "\u22EB",
        nrtrie: "\u22ED",
        nsc: "\u2281",
        nsccue: "\u22E1",
        nsce: "\u2AB0\u0338",
        Nscr: "\u{1D4A9}",
        nscr: "\u{1D4C3}",
        nshortmid: "\u2224",
        nshortparallel: "\u2226",
        nsim: "\u2241",
        nsime: "\u2244",
        nsimeq: "\u2244",
        nsmid: "\u2224",
        nspar: "\u2226",
        nsqsube: "\u22E2",
        nsqsupe: "\u22E3",
        nsub: "\u2284",
        nsubE: "\u2AC5\u0338",
        nsube: "\u2288",
        nsubset: "\u2282\u20D2",
        nsubseteq: "\u2288",
        nsubseteqq: "\u2AC5\u0338",
        nsucc: "\u2281",
        nsucceq: "\u2AB0\u0338",
        nsup: "\u2285",
        nsupE: "\u2AC6\u0338",
        nsupe: "\u2289",
        nsupset: "\u2283\u20D2",
        nsupseteq: "\u2289",
        nsupseteqq: "\u2AC6\u0338",
        ntgl: "\u2279",
        Ntilde: "\xD1",
        ntilde: "\xF1",
        ntlg: "\u2278",
        ntriangleleft: "\u22EA",
        ntrianglelefteq: "\u22EC",
        ntriangleright: "\u22EB",
        ntrianglerighteq: "\u22ED",
        Nu: "\u039D",
        nu: "\u03BD",
        num: "#",
        numero: "\u2116",
        numsp: "\u2007",
        nvap: "\u224D\u20D2",
        nVDash: "\u22AF",
        nVdash: "\u22AE",
        nvDash: "\u22AD",
        nvdash: "\u22AC",
        nvge: "\u2265\u20D2",
        nvgt: ">\u20D2",
        nvHarr: "\u2904",
        nvinfin: "\u29DE",
        nvlArr: "\u2902",
        nvle: "\u2264\u20D2",
        nvlt: "<\u20D2",
        nvltrie: "\u22B4\u20D2",
        nvrArr: "\u2903",
        nvrtrie: "\u22B5\u20D2",
        nvsim: "\u223C\u20D2",
        nwarhk: "\u2923",
        nwArr: "\u21D6",
        nwarr: "\u2196",
        nwarrow: "\u2196",
        nwnear: "\u2927",
        Oacute: "\xD3",
        oacute: "\xF3",
        oast: "\u229B",
        ocir: "\u229A",
        Ocirc: "\xD4",
        ocirc: "\xF4",
        Ocy: "\u041E",
        ocy: "\u043E",
        odash: "\u229D",
        Odblac: "\u0150",
        odblac: "\u0151",
        odiv: "\u2A38",
        odot: "\u2299",
        odsold: "\u29BC",
        OElig: "\u0152",
        oelig: "\u0153",
        ofcir: "\u29BF",
        Ofr: "\u{1D512}",
        ofr: "\u{1D52C}",
        ogon: "\u02DB",
        Ograve: "\xD2",
        ograve: "\xF2",
        ogt: "\u29C1",
        ohbar: "\u29B5",
        ohm: "\u03A9",
        oint: "\u222E",
        olarr: "\u21BA",
        olcir: "\u29BE",
        olcross: "\u29BB",
        oline: "\u203E",
        olt: "\u29C0",
        Omacr: "\u014C",
        omacr: "\u014D",
        Omega: "\u03A9",
        omega: "\u03C9",
        Omicron: "\u039F",
        omicron: "\u03BF",
        omid: "\u29B6",
        ominus: "\u2296",
        Oopf: "\u{1D546}",
        oopf: "\u{1D560}",
        opar: "\u29B7",
        OpenCurlyDoubleQuote: "\u201C",
        OpenCurlyQuote: "\u2018",
        operp: "\u29B9",
        oplus: "\u2295",
        Or: "\u2A54",
        or: "\u2228",
        orarr: "\u21BB",
        ord: "\u2A5D",
        order: "\u2134",
        orderof: "\u2134",
        ordf: "\xAA",
        ordm: "\xBA",
        origof: "\u22B6",
        oror: "\u2A56",
        orslope: "\u2A57",
        orv: "\u2A5B",
        oS: "\u24C8",
        Oscr: "\u{1D4AA}",
        oscr: "\u2134",
        Oslash: "\xD8",
        oslash: "\xF8",
        osol: "\u2298",
        Otilde: "\xD5",
        otilde: "\xF5",
        Otimes: "\u2A37",
        otimes: "\u2297",
        otimesas: "\u2A36",
        Ouml: "\xD6",
        ouml: "\xF6",
        ovbar: "\u233D",
        OverBar: "\u203E",
        OverBrace: "\u23DE",
        OverBracket: "\u23B4",
        OverParenthesis: "\u23DC",
        par: "\u2225",
        para: "\xB6",
        parallel: "\u2225",
        parsim: "\u2AF3",
        parsl: "\u2AFD",
        part: "\u2202",
        PartialD: "\u2202",
        Pcy: "\u041F",
        pcy: "\u043F",
        percnt: "%",
        period: ".",
        permil: "\u2030",
        perp: "\u22A5",
        pertenk: "\u2031",
        Pfr: "\u{1D513}",
        pfr: "\u{1D52D}",
        Phi: "\u03A6",
        phi: "\u03C6",
        phiv: "\u03D5",
        phmmat: "\u2133",
        phone: "\u260E",
        Pi: "\u03A0",
        pi: "\u03C0",
        pitchfork: "\u22D4",
        piv: "\u03D6",
        planck: "\u210F",
        planckh: "\u210E",
        plankv: "\u210F",
        plus: "+",
        plusacir: "\u2A23",
        plusb: "\u229E",
        pluscir: "\u2A22",
        plusdo: "\u2214",
        plusdu: "\u2A25",
        pluse: "\u2A72",
        PlusMinus: "\xB1",
        plusmn: "\xB1",
        plussim: "\u2A26",
        plustwo: "\u2A27",
        pm: "\xB1",
        Poincareplane: "\u210C",
        pointint: "\u2A15",
        Popf: "\u2119",
        popf: "\u{1D561}",
        pound: "\xA3",
        Pr: "\u2ABB",
        pr: "\u227A",
        prap: "\u2AB7",
        prcue: "\u227C",
        prE: "\u2AB3",
        pre: "\u2AAF",
        prec: "\u227A",
        precapprox: "\u2AB7",
        preccurlyeq: "\u227C",
        Precedes: "\u227A",
        PrecedesEqual: "\u2AAF",
        PrecedesSlantEqual: "\u227C",
        PrecedesTilde: "\u227E",
        preceq: "\u2AAF",
        precnapprox: "\u2AB9",
        precneqq: "\u2AB5",
        precnsim: "\u22E8",
        precsim: "\u227E",
        Prime: "\u2033",
        prime: "\u2032",
        primes: "\u2119",
        prnap: "\u2AB9",
        prnE: "\u2AB5",
        prnsim: "\u22E8",
        prod: "\u220F",
        Product: "\u220F",
        profalar: "\u232E",
        profline: "\u2312",
        profsurf: "\u2313",
        prop: "\u221D",
        Proportion: "\u2237",
        Proportional: "\u221D",
        propto: "\u221D",
        prsim: "\u227E",
        prurel: "\u22B0",
        Pscr: "\u{1D4AB}",
        pscr: "\u{1D4C5}",
        Psi: "\u03A8",
        psi: "\u03C8",
        puncsp: "\u2008",
        Qfr: "\u{1D514}",
        qfr: "\u{1D52E}",
        qint: "\u2A0C",
        Qopf: "\u211A",
        qopf: "\u{1D562}",
        qprime: "\u2057",
        Qscr: "\u{1D4AC}",
        qscr: "\u{1D4C6}",
        quaternions: "\u210D",
        quatint: "\u2A16",
        quest: "?",
        questeq: "\u225F",
        QUOT: '"',
        quot: '"',
        rAarr: "\u21DB",
        race: "\u223D\u0331",
        Racute: "\u0154",
        racute: "\u0155",
        radic: "\u221A",
        raemptyv: "\u29B3",
        Rang: "\u27EB",
        rang: "\u27E9",
        rangd: "\u2992",
        range: "\u29A5",
        rangle: "\u27E9",
        raquo: "\xBB",
        Rarr: "\u21A0",
        rArr: "\u21D2",
        rarr: "\u2192",
        rarrap: "\u2975",
        rarrb: "\u21E5",
        rarrbfs: "\u2920",
        rarrc: "\u2933",
        rarrfs: "\u291E",
        rarrhk: "\u21AA",
        rarrlp: "\u21AC",
        rarrpl: "\u2945",
        rarrsim: "\u2974",
        Rarrtl: "\u2916",
        rarrtl: "\u21A3",
        rarrw: "\u219D",
        rAtail: "\u291C",
        ratail: "\u291A",
        ratio: "\u2236",
        rationals: "\u211A",
        RBarr: "\u2910",
        rBarr: "\u290F",
        rbarr: "\u290D",
        rbbrk: "\u2773",
        rbrace: "}",
        rbrack: "]",
        rbrke: "\u298C",
        rbrksld: "\u298E",
        rbrkslu: "\u2990",
        Rcaron: "\u0158",
        rcaron: "\u0159",
        Rcedil: "\u0156",
        rcedil: "\u0157",
        rceil: "\u2309",
        rcub: "}",
        Rcy: "\u0420",
        rcy: "\u0440",
        rdca: "\u2937",
        rdldhar: "\u2969",
        rdquo: "\u201D",
        rdquor: "\u201D",
        rdsh: "\u21B3",
        Re: "\u211C",
        real: "\u211C",
        realine: "\u211B",
        realpart: "\u211C",
        reals: "\u211D",
        rect: "\u25AD",
        REG: "\xAE",
        reg: "\xAE",
        ReverseElement: "\u220B",
        ReverseEquilibrium: "\u21CB",
        ReverseUpEquilibrium: "\u296F",
        rfisht: "\u297D",
        rfloor: "\u230B",
        Rfr: "\u211C",
        rfr: "\u{1D52F}",
        rHar: "\u2964",
        rhard: "\u21C1",
        rharu: "\u21C0",
        rharul: "\u296C",
        Rho: "\u03A1",
        rho: "\u03C1",
        rhov: "\u03F1",
        RightAngleBracket: "\u27E9",
        RightArrow: "\u2192",
        Rightarrow: "\u21D2",
        rightarrow: "\u2192",
        RightArrowBar: "\u21E5",
        RightArrowLeftArrow: "\u21C4",
        rightarrowtail: "\u21A3",
        RightCeiling: "\u2309",
        RightDoubleBracket: "\u27E7",
        RightDownTeeVector: "\u295D",
        RightDownVector: "\u21C2",
        RightDownVectorBar: "\u2955",
        RightFloor: "\u230B",
        rightharpoondown: "\u21C1",
        rightharpoonup: "\u21C0",
        rightleftarrows: "\u21C4",
        rightleftharpoons: "\u21CC",
        rightrightarrows: "\u21C9",
        rightsquigarrow: "\u219D",
        RightTee: "\u22A2",
        RightTeeArrow: "\u21A6",
        RightTeeVector: "\u295B",
        rightthreetimes: "\u22CC",
        RightTriangle: "\u22B3",
        RightTriangleBar: "\u29D0",
        RightTriangleEqual: "\u22B5",
        RightUpDownVector: "\u294F",
        RightUpTeeVector: "\u295C",
        RightUpVector: "\u21BE",
        RightUpVectorBar: "\u2954",
        RightVector: "\u21C0",
        RightVectorBar: "\u2953",
        ring: "\u02DA",
        risingdotseq: "\u2253",
        rlarr: "\u21C4",
        rlhar: "\u21CC",
        rlm: "\u200F",
        rmoust: "\u23B1",
        rmoustache: "\u23B1",
        rnmid: "\u2AEE",
        roang: "\u27ED",
        roarr: "\u21FE",
        robrk: "\u27E7",
        ropar: "\u2986",
        Ropf: "\u211D",
        ropf: "\u{1D563}",
        roplus: "\u2A2E",
        rotimes: "\u2A35",
        RoundImplies: "\u2970",
        rpar: ")",
        rpargt: "\u2994",
        rppolint: "\u2A12",
        rrarr: "\u21C9",
        Rrightarrow: "\u21DB",
        rsaquo: "\u203A",
        Rscr: "\u211B",
        rscr: "\u{1D4C7}",
        Rsh: "\u21B1",
        rsh: "\u21B1",
        rsqb: "]",
        rsquo: "\u2019",
        rsquor: "\u2019",
        rthree: "\u22CC",
        rtimes: "\u22CA",
        rtri: "\u25B9",
        rtrie: "\u22B5",
        rtrif: "\u25B8",
        rtriltri: "\u29CE",
        RuleDelayed: "\u29F4",
        ruluhar: "\u2968",
        rx: "\u211E",
        Sacute: "\u015A",
        sacute: "\u015B",
        sbquo: "\u201A",
        Sc: "\u2ABC",
        sc: "\u227B",
        scap: "\u2AB8",
        Scaron: "\u0160",
        scaron: "\u0161",
        sccue: "\u227D",
        scE: "\u2AB4",
        sce: "\u2AB0",
        Scedil: "\u015E",
        scedil: "\u015F",
        Scirc: "\u015C",
        scirc: "\u015D",
        scnap: "\u2ABA",
        scnE: "\u2AB6",
        scnsim: "\u22E9",
        scpolint: "\u2A13",
        scsim: "\u227F",
        Scy: "\u0421",
        scy: "\u0441",
        sdot: "\u22C5",
        sdotb: "\u22A1",
        sdote: "\u2A66",
        searhk: "\u2925",
        seArr: "\u21D8",
        searr: "\u2198",
        searrow: "\u2198",
        sect: "\xA7",
        semi: ";",
        seswar: "\u2929",
        setminus: "\u2216",
        setmn: "\u2216",
        sext: "\u2736",
        Sfr: "\u{1D516}",
        sfr: "\u{1D530}",
        sfrown: "\u2322",
        sharp: "\u266F",
        SHCHcy: "\u0429",
        shchcy: "\u0449",
        SHcy: "\u0428",
        shcy: "\u0448",
        ShortDownArrow: "\u2193",
        ShortLeftArrow: "\u2190",
        shortmid: "\u2223",
        shortparallel: "\u2225",
        ShortRightArrow: "\u2192",
        ShortUpArrow: "\u2191",
        shy: "\xAD",
        Sigma: "\u03A3",
        sigma: "\u03C3",
        sigmaf: "\u03C2",
        sigmav: "\u03C2",
        sim: "\u223C",
        simdot: "\u2A6A",
        sime: "\u2243",
        simeq: "\u2243",
        simg: "\u2A9E",
        simgE: "\u2AA0",
        siml: "\u2A9D",
        simlE: "\u2A9F",
        simne: "\u2246",
        simplus: "\u2A24",
        simrarr: "\u2972",
        slarr: "\u2190",
        SmallCircle: "\u2218",
        smallsetminus: "\u2216",
        smashp: "\u2A33",
        smeparsl: "\u29E4",
        smid: "\u2223",
        smile: "\u2323",
        smt: "\u2AAA",
        smte: "\u2AAC",
        smtes: "\u2AAC\uFE00",
        SOFTcy: "\u042C",
        softcy: "\u044C",
        sol: "/",
        solb: "\u29C4",
        solbar: "\u233F",
        Sopf: "\u{1D54A}",
        sopf: "\u{1D564}",
        spades: "\u2660",
        spadesuit: "\u2660",
        spar: "\u2225",
        sqcap: "\u2293",
        sqcaps: "\u2293\uFE00",
        sqcup: "\u2294",
        sqcups: "\u2294\uFE00",
        Sqrt: "\u221A",
        sqsub: "\u228F",
        sqsube: "\u2291",
        sqsubset: "\u228F",
        sqsubseteq: "\u2291",
        sqsup: "\u2290",
        sqsupe: "\u2292",
        sqsupset: "\u2290",
        sqsupseteq: "\u2292",
        squ: "\u25A1",
        Square: "\u25A1",
        square: "\u25A1",
        SquareIntersection: "\u2293",
        SquareSubset: "\u228F",
        SquareSubsetEqual: "\u2291",
        SquareSuperset: "\u2290",
        SquareSupersetEqual: "\u2292",
        SquareUnion: "\u2294",
        squarf: "\u25AA",
        squf: "\u25AA",
        srarr: "\u2192",
        Sscr: "\u{1D4AE}",
        sscr: "\u{1D4C8}",
        ssetmn: "\u2216",
        ssmile: "\u2323",
        sstarf: "\u22C6",
        Star: "\u22C6",
        star: "\u2606",
        starf: "\u2605",
        straightepsilon: "\u03F5",
        straightphi: "\u03D5",
        strns: "\xAF",
        Sub: "\u22D0",
        sub: "\u2282",
        subdot: "\u2ABD",
        subE: "\u2AC5",
        sube: "\u2286",
        subedot: "\u2AC3",
        submult: "\u2AC1",
        subnE: "\u2ACB",
        subne: "\u228A",
        subplus: "\u2ABF",
        subrarr: "\u2979",
        Subset: "\u22D0",
        subset: "\u2282",
        subseteq: "\u2286",
        subseteqq: "\u2AC5",
        SubsetEqual: "\u2286",
        subsetneq: "\u228A",
        subsetneqq: "\u2ACB",
        subsim: "\u2AC7",
        subsub: "\u2AD5",
        subsup: "\u2AD3",
        succ: "\u227B",
        succapprox: "\u2AB8",
        succcurlyeq: "\u227D",
        Succeeds: "\u227B",
        SucceedsEqual: "\u2AB0",
        SucceedsSlantEqual: "\u227D",
        SucceedsTilde: "\u227F",
        succeq: "\u2AB0",
        succnapprox: "\u2ABA",
        succneqq: "\u2AB6",
        succnsim: "\u22E9",
        succsim: "\u227F",
        SuchThat: "\u220B",
        Sum: "\u2211",
        sum: "\u2211",
        sung: "\u266A",
        Sup: "\u22D1",
        sup: "\u2283",
        sup1: "\xB9",
        sup2: "\xB2",
        sup3: "\xB3",
        supdot: "\u2ABE",
        supdsub: "\u2AD8",
        supE: "\u2AC6",
        supe: "\u2287",
        supedot: "\u2AC4",
        Superset: "\u2283",
        SupersetEqual: "\u2287",
        suphsol: "\u27C9",
        suphsub: "\u2AD7",
        suplarr: "\u297B",
        supmult: "\u2AC2",
        supnE: "\u2ACC",
        supne: "\u228B",
        supplus: "\u2AC0",
        Supset: "\u22D1",
        supset: "\u2283",
        supseteq: "\u2287",
        supseteqq: "\u2AC6",
        supsetneq: "\u228B",
        supsetneqq: "\u2ACC",
        supsim: "\u2AC8",
        supsub: "\u2AD4",
        supsup: "\u2AD6",
        swarhk: "\u2926",
        swArr: "\u21D9",
        swarr: "\u2199",
        swarrow: "\u2199",
        swnwar: "\u292A",
        szlig: "\xDF",
        Tab: "	",
        target: "\u2316",
        Tau: "\u03A4",
        tau: "\u03C4",
        tbrk: "\u23B4",
        Tcaron: "\u0164",
        tcaron: "\u0165",
        Tcedil: "\u0162",
        tcedil: "\u0163",
        Tcy: "\u0422",
        tcy: "\u0442",
        tdot: "\u20DB",
        telrec: "\u2315",
        Tfr: "\u{1D517}",
        tfr: "\u{1D531}",
        there4: "\u2234",
        Therefore: "\u2234",
        therefore: "\u2234",
        Theta: "\u0398",
        theta: "\u03B8",
        thetasym: "\u03D1",
        thetav: "\u03D1",
        thickapprox: "\u2248",
        thicksim: "\u223C",
        ThickSpace: "\u205F\u200A",
        thinsp: "\u2009",
        ThinSpace: "\u2009",
        thkap: "\u2248",
        thksim: "\u223C",
        THORN: "\xDE",
        thorn: "\xFE",
        Tilde: "\u223C",
        tilde: "\u02DC",
        TildeEqual: "\u2243",
        TildeFullEqual: "\u2245",
        TildeTilde: "\u2248",
        times: "\xD7",
        timesb: "\u22A0",
        timesbar: "\u2A31",
        timesd: "\u2A30",
        tint: "\u222D",
        toea: "\u2928",
        top: "\u22A4",
        topbot: "\u2336",
        topcir: "\u2AF1",
        Topf: "\u{1D54B}",
        topf: "\u{1D565}",
        topfork: "\u2ADA",
        tosa: "\u2929",
        tprime: "\u2034",
        TRADE: "\u2122",
        trade: "\u2122",
        triangle: "\u25B5",
        triangledown: "\u25BF",
        triangleleft: "\u25C3",
        trianglelefteq: "\u22B4",
        triangleq: "\u225C",
        triangleright: "\u25B9",
        trianglerighteq: "\u22B5",
        tridot: "\u25EC",
        trie: "\u225C",
        triminus: "\u2A3A",
        TripleDot: "\u20DB",
        triplus: "\u2A39",
        trisb: "\u29CD",
        tritime: "\u2A3B",
        trpezium: "\u23E2",
        Tscr: "\u{1D4AF}",
        tscr: "\u{1D4C9}",
        TScy: "\u0426",
        tscy: "\u0446",
        TSHcy: "\u040B",
        tshcy: "\u045B",
        Tstrok: "\u0166",
        tstrok: "\u0167",
        twixt: "\u226C",
        twoheadleftarrow: "\u219E",
        twoheadrightarrow: "\u21A0",
        Uacute: "\xDA",
        uacute: "\xFA",
        Uarr: "\u219F",
        uArr: "\u21D1",
        uarr: "\u2191",
        Uarrocir: "\u2949",
        Ubrcy: "\u040E",
        ubrcy: "\u045E",
        Ubreve: "\u016C",
        ubreve: "\u016D",
        Ucirc: "\xDB",
        ucirc: "\xFB",
        Ucy: "\u0423",
        ucy: "\u0443",
        udarr: "\u21C5",
        Udblac: "\u0170",
        udblac: "\u0171",
        udhar: "\u296E",
        ufisht: "\u297E",
        Ufr: "\u{1D518}",
        ufr: "\u{1D532}",
        Ugrave: "\xD9",
        ugrave: "\xF9",
        uHar: "\u2963",
        uharl: "\u21BF",
        uharr: "\u21BE",
        uhblk: "\u2580",
        ulcorn: "\u231C",
        ulcorner: "\u231C",
        ulcrop: "\u230F",
        ultri: "\u25F8",
        Umacr: "\u016A",
        umacr: "\u016B",
        uml: "\xA8",
        UnderBar: "_",
        UnderBrace: "\u23DF",
        UnderBracket: "\u23B5",
        UnderParenthesis: "\u23DD",
        Union: "\u22C3",
        UnionPlus: "\u228E",
        Uogon: "\u0172",
        uogon: "\u0173",
        Uopf: "\u{1D54C}",
        uopf: "\u{1D566}",
        UpArrow: "\u2191",
        Uparrow: "\u21D1",
        uparrow: "\u2191",
        UpArrowBar: "\u2912",
        UpArrowDownArrow: "\u21C5",
        UpDownArrow: "\u2195",
        Updownarrow: "\u21D5",
        updownarrow: "\u2195",
        UpEquilibrium: "\u296E",
        upharpoonleft: "\u21BF",
        upharpoonright: "\u21BE",
        uplus: "\u228E",
        UpperLeftArrow: "\u2196",
        UpperRightArrow: "\u2197",
        Upsi: "\u03D2",
        upsi: "\u03C5",
        upsih: "\u03D2",
        Upsilon: "\u03A5",
        upsilon: "\u03C5",
        UpTee: "\u22A5",
        UpTeeArrow: "\u21A5",
        upuparrows: "\u21C8",
        urcorn: "\u231D",
        urcorner: "\u231D",
        urcrop: "\u230E",
        Uring: "\u016E",
        uring: "\u016F",
        urtri: "\u25F9",
        Uscr: "\u{1D4B0}",
        uscr: "\u{1D4CA}",
        utdot: "\u22F0",
        Utilde: "\u0168",
        utilde: "\u0169",
        utri: "\u25B5",
        utrif: "\u25B4",
        uuarr: "\u21C8",
        Uuml: "\xDC",
        uuml: "\xFC",
        uwangle: "\u29A7",
        vangrt: "\u299C",
        varepsilon: "\u03F5",
        varkappa: "\u03F0",
        varnothing: "\u2205",
        varphi: "\u03D5",
        varpi: "\u03D6",
        varpropto: "\u221D",
        vArr: "\u21D5",
        varr: "\u2195",
        varrho: "\u03F1",
        varsigma: "\u03C2",
        varsubsetneq: "\u228A\uFE00",
        varsubsetneqq: "\u2ACB\uFE00",
        varsupsetneq: "\u228B\uFE00",
        varsupsetneqq: "\u2ACC\uFE00",
        vartheta: "\u03D1",
        vartriangleleft: "\u22B2",
        vartriangleright: "\u22B3",
        Vbar: "\u2AEB",
        vBar: "\u2AE8",
        vBarv: "\u2AE9",
        Vcy: "\u0412",
        vcy: "\u0432",
        VDash: "\u22AB",
        Vdash: "\u22A9",
        vDash: "\u22A8",
        vdash: "\u22A2",
        Vdashl: "\u2AE6",
        Vee: "\u22C1",
        vee: "\u2228",
        veebar: "\u22BB",
        veeeq: "\u225A",
        vellip: "\u22EE",
        Verbar: "\u2016",
        verbar: "|",
        Vert: "\u2016",
        vert: "|",
        VerticalBar: "\u2223",
        VerticalLine: "|",
        VerticalSeparator: "\u2758",
        VerticalTilde: "\u2240",
        VeryThinSpace: "\u200A",
        Vfr: "\u{1D519}",
        vfr: "\u{1D533}",
        vltri: "\u22B2",
        vnsub: "\u2282\u20D2",
        vnsup: "\u2283\u20D2",
        Vopf: "\u{1D54D}",
        vopf: "\u{1D567}",
        vprop: "\u221D",
        vrtri: "\u22B3",
        Vscr: "\u{1D4B1}",
        vscr: "\u{1D4CB}",
        vsubnE: "\u2ACB\uFE00",
        vsubne: "\u228A\uFE00",
        vsupnE: "\u2ACC\uFE00",
        vsupne: "\u228B\uFE00",
        Vvdash: "\u22AA",
        vzigzag: "\u299A",
        Wcirc: "\u0174",
        wcirc: "\u0175",
        wedbar: "\u2A5F",
        Wedge: "\u22C0",
        wedge: "\u2227",
        wedgeq: "\u2259",
        weierp: "\u2118",
        Wfr: "\u{1D51A}",
        wfr: "\u{1D534}",
        Wopf: "\u{1D54E}",
        wopf: "\u{1D568}",
        wp: "\u2118",
        wr: "\u2240",
        wreath: "\u2240",
        Wscr: "\u{1D4B2}",
        wscr: "\u{1D4CC}",
        xcap: "\u22C2",
        xcirc: "\u25EF",
        xcup: "\u22C3",
        xdtri: "\u25BD",
        Xfr: "\u{1D51B}",
        xfr: "\u{1D535}",
        xhArr: "\u27FA",
        xharr: "\u27F7",
        Xi: "\u039E",
        xi: "\u03BE",
        xlArr: "\u27F8",
        xlarr: "\u27F5",
        xmap: "\u27FC",
        xnis: "\u22FB",
        xodot: "\u2A00",
        Xopf: "\u{1D54F}",
        xopf: "\u{1D569}",
        xoplus: "\u2A01",
        xotime: "\u2A02",
        xrArr: "\u27F9",
        xrarr: "\u27F6",
        Xscr: "\u{1D4B3}",
        xscr: "\u{1D4CD}",
        xsqcup: "\u2A06",
        xuplus: "\u2A04",
        xutri: "\u25B3",
        xvee: "\u22C1",
        xwedge: "\u22C0",
        Yacute: "\xDD",
        yacute: "\xFD",
        YAcy: "\u042F",
        yacy: "\u044F",
        Ycirc: "\u0176",
        ycirc: "\u0177",
        Ycy: "\u042B",
        ycy: "\u044B",
        yen: "\xA5",
        Yfr: "\u{1D51C}",
        yfr: "\u{1D536}",
        YIcy: "\u0407",
        yicy: "\u0457",
        Yopf: "\u{1D550}",
        yopf: "\u{1D56A}",
        Yscr: "\u{1D4B4}",
        yscr: "\u{1D4CE}",
        YUcy: "\u042E",
        yucy: "\u044E",
        Yuml: "\u0178",
        yuml: "\xFF",
        Zacute: "\u0179",
        zacute: "\u017A",
        Zcaron: "\u017D",
        zcaron: "\u017E",
        Zcy: "\u0417",
        zcy: "\u0437",
        Zdot: "\u017B",
        zdot: "\u017C",
        zeetrf: "\u2128",
        ZeroWidthSpace: "\u200B",
        Zeta: "\u0396",
        zeta: "\u03B6",
        Zfr: "\u2128",
        zfr: "\u{1D537}",
        ZHcy: "\u0416",
        zhcy: "\u0436",
        zigrarr: "\u21DD",
        Zopf: "\u2124",
        zopf: "\u{1D56B}",
        Zscr: "\u{1D4B5}",
        zscr: "\u{1D4CF}",
        zwj: "\u200D",
        zwnj: "\u200C"
      });
      exports.entityMap = exports.HTML_ENTITIES;
    }
  });

  // node_modules/@xmldom/xmldom/lib/sax.js
  var require_sax = __commonJS({
    "node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
      var NAMESPACE = require_conventions().NAMESPACE;
      var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
      var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
      var S_TAG = 0;
      var S_ATTR = 1;
      var S_ATTR_SPACE = 2;
      var S_EQ = 3;
      var S_ATTR_NOQUOT_VALUE = 4;
      var S_ATTR_END = 5;
      var S_TAG_SPACE = 6;
      var S_TAG_CLOSE = 7;
      function ParseError(message, locator) {
        this.message = message;
        this.locator = locator;
        if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
      }
      ParseError.prototype = new Error();
      ParseError.prototype.name = ParseError.name;
      function XMLReader() {
      }
      XMLReader.prototype = {
        parse: function(source, defaultNSMap, entityMap) {
          var domBuilder = this.domBuilder;
          domBuilder.startDocument();
          _copy(defaultNSMap, defaultNSMap = {});
          parse(
            source,
            defaultNSMap,
            entityMap,
            domBuilder,
            this.errorHandler
          );
          domBuilder.endDocument();
        }
      };
      function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
        function fixedFromCharCode(code) {
          if (code > 65535) {
            code -= 65536;
            var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
            return String.fromCharCode(surrogate1, surrogate2);
          } else {
            return String.fromCharCode(code);
          }
        }
        function entityReplacer(a2) {
          var k = a2.slice(1, -1);
          if (Object.hasOwnProperty.call(entityMap, k)) {
            return entityMap[k];
          } else if (k.charAt(0) === "#") {
            return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
          } else {
            errorHandler.error("entity not found:" + a2);
            return a2;
          }
        }
        function appendText(end2) {
          if (end2 > start) {
            var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
            locator && position(start);
            domBuilder.characters(xt, 0, end2 - start);
            start = end2;
          }
        }
        function position(p, m) {
          while (p >= lineEnd && (m = linePattern.exec(source))) {
            lineStart = m.index;
            lineEnd = lineStart + m[0].length;
            locator.lineNumber++;
          }
          locator.columnNumber = p - lineStart + 1;
        }
        var lineStart = 0;
        var lineEnd = 0;
        var linePattern = /.*(?:\r\n?|\n)|.*$/g;
        var locator = domBuilder.locator;
        var parseStack = [{ currentNSMap: defaultNSMapCopy }];
        var closeMap = {};
        var start = 0;
        while (true) {
          try {
            var tagStart = source.indexOf("<", start);
            if (tagStart < 0) {
              if (!source.substr(start).match(/^\s*$/)) {
                var doc = domBuilder.doc;
                var text = doc.createTextNode(source.substr(start));
                doc.appendChild(text);
                domBuilder.currentElement = text;
              }
              return;
            }
            if (tagStart > start) {
              appendText(tagStart);
            }
            switch (source.charAt(tagStart + 1)) {
              case "/":
                var end = source.indexOf(">", tagStart + 3);
                var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
                var config = parseStack.pop();
                if (end < 0) {
                  tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                  errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                  end = tagStart + 1 + tagName.length;
                } else if (tagName.match(/\s</)) {
                  tagName = tagName.replace(/[\s<].*/, "");
                  errorHandler.error("end tag name: " + tagName + " maybe not complete");
                  end = tagStart + 1 + tagName.length;
                }
                var localNSMap = config.localNSMap;
                var endMatch = config.tagName == tagName;
                var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
                if (endIgnoreCaseMach) {
                  domBuilder.endElement(config.uri, config.localName, tagName);
                  if (localNSMap) {
                    for (var prefix in localNSMap) {
                      if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                        domBuilder.endPrefixMapping(prefix);
                      }
                    }
                  }
                  if (!endMatch) {
                    errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                  }
                } else {
                  parseStack.push(config);
                }
                end++;
                break;
              // end elment
              case "?":
                locator && position(tagStart);
                end = parseInstruction(source, tagStart, domBuilder);
                break;
              case "!":
                locator && position(tagStart);
                end = parseDCC(source, tagStart, domBuilder, errorHandler);
                break;
              default:
                locator && position(tagStart);
                var el = new ElementAttributes();
                var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
                var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
                var len = el.length;
                if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                  el.closed = true;
                  if (!entityMap.nbsp) {
                    errorHandler.warning("unclosed xml attribute");
                  }
                }
                if (locator && len) {
                  var locator2 = copyLocator(locator, {});
                  for (var i = 0; i < len; i++) {
                    var a = el[i];
                    position(a.offset);
                    a.locator = copyLocator(locator, {});
                  }
                  domBuilder.locator = locator2;
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                  domBuilder.locator = locator;
                } else {
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                }
                if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                  end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
                } else {
                  end++;
                }
            }
          } catch (e) {
            if (e instanceof ParseError) {
              throw e;
            }
            errorHandler.error("element parse error: " + e);
            end = -1;
          }
          if (end > start) {
            start = end;
          } else {
            appendText(Math.max(tagStart, start) + 1);
          }
        }
      }
      function copyLocator(f, t) {
        t.lineNumber = f.lineNumber;
        t.columnNumber = f.columnNumber;
        return t;
      }
      function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
        function addAttribute(qname, value2, startIndex) {
          if (el.attributeNames.hasOwnProperty(qname)) {
            errorHandler.fatalError("Attribute " + qname + " redefined");
          }
          el.addValue(
            qname,
            // @see https://www.w3.org/TR/xml/#AVNormalize
            // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
            // - recursive replacement of (DTD) entity references
            // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
            value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
            startIndex
          );
        }
        var attrName;
        var value;
        var p = ++start;
        var s = S_TAG;
        while (true) {
          var c = source.charAt(p);
          switch (c) {
            case "=":
              if (s === S_ATTR) {
                attrName = source.slice(start, p);
                s = S_EQ;
              } else if (s === S_ATTR_SPACE) {
                s = S_EQ;
              } else {
                throw new Error("attribute equal must after attrName");
              }
              break;
            case "'":
            case '"':
              if (s === S_EQ || s === S_ATTR) {
                if (s === S_ATTR) {
                  errorHandler.warning('attribute value must after "="');
                  attrName = source.slice(start, p);
                }
                start = p + 1;
                p = source.indexOf(c, start);
                if (p > 0) {
                  value = source.slice(start, p);
                  addAttribute(attrName, value, start - 1);
                  s = S_ATTR_END;
                } else {
                  throw new Error("attribute value no end '" + c + "' match");
                }
              } else if (s == S_ATTR_NOQUOT_VALUE) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start);
                errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
                start = p + 1;
                s = S_ATTR_END;
              } else {
                throw new Error('attribute value must after "="');
              }
              break;
            case "/":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  s = S_TAG_CLOSE;
                  el.closed = true;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                  break;
                case S_ATTR_SPACE:
                  el.closed = true;
                  break;
                //case S_EQ:
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              errorHandler.error("unexpected end of input");
              if (s == S_TAG) {
                el.setTagName(source.slice(start, p));
              }
              return p;
            case ">":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  break;
                //normal
                case S_ATTR_NOQUOT_VALUE:
                //Compatible state
                case S_ATTR:
                  value = source.slice(start, p);
                  if (value.slice(-1) === "/") {
                    el.closed = true;
                    value = value.slice(0, -1);
                  }
                case S_ATTR_SPACE:
                  if (s === S_ATTR_SPACE) {
                    value = attrName;
                  }
                  if (s == S_ATTR_NOQUOT_VALUE) {
                    errorHandler.warning('attribute "' + value + '" missed quot(")!');
                    addAttribute(attrName, value, start);
                  } else {
                    if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                      errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                    }
                    addAttribute(value, value, start);
                  }
                  break;
                case S_EQ:
                  throw new Error("attribute value missed!!");
              }
              return p;
            /*xml space '\x20' | #x9 | #xD | #xA; */
            case "\x80":
              c = " ";
            default:
              if (c <= " ") {
                switch (s) {
                  case S_TAG:
                    el.setTagName(source.slice(start, p));
                    s = S_TAG_SPACE;
                    break;
                  case S_ATTR:
                    attrName = source.slice(start, p);
                    s = S_ATTR_SPACE;
                    break;
                  case S_ATTR_NOQUOT_VALUE:
                    var value = source.slice(start, p);
                    errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                    addAttribute(attrName, value, start);
                  case S_ATTR_END:
                    s = S_TAG_SPACE;
                    break;
                }
              } else {
                switch (s) {
                  //case S_TAG:void();break;
                  //case S_ATTR:void();break;
                  //case S_ATTR_NOQUOT_VALUE:void();break;
                  case S_ATTR_SPACE:
                    var tagName = el.tagName;
                    if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                      errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                    }
                    addAttribute(attrName, attrName, start);
                    start = p;
                    s = S_ATTR;
                    break;
                  case S_ATTR_END:
                    errorHandler.warning('attribute space is required"' + attrName + '"!!');
                  case S_TAG_SPACE:
                    s = S_ATTR;
                    start = p;
                    break;
                  case S_EQ:
                    s = S_ATTR_NOQUOT_VALUE;
                    start = p;
                    break;
                  case S_TAG_CLOSE:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
              }
          }
          p++;
        }
      }
      function appendElement(el, domBuilder, currentNSMap) {
        var tagName = el.tagName;
        var localNSMap = null;
        var i = el.length;
        while (i--) {
          var a = el[i];
          var qName = a.qName;
          var value = a.value;
          var nsp = qName.indexOf(":");
          if (nsp > 0) {
            var prefix = a.prefix = qName.slice(0, nsp);
            var localName = qName.slice(nsp + 1);
            var nsPrefix = prefix === "xmlns" && localName;
          } else {
            localName = qName;
            prefix = null;
            nsPrefix = qName === "xmlns" && "";
          }
          a.localName = localName;
          if (nsPrefix !== false) {
            if (localNSMap == null) {
              localNSMap = {};
              _copy(currentNSMap, currentNSMap = {});
            }
            currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
            a.uri = NAMESPACE.XMLNS;
            domBuilder.startPrefixMapping(nsPrefix, value);
          }
        }
        var i = el.length;
        while (i--) {
          a = el[i];
          var prefix = a.prefix;
          if (prefix) {
            if (prefix === "xml") {
              a.uri = NAMESPACE.XML;
            }
            if (prefix !== "xmlns") {
              a.uri = currentNSMap[prefix || ""];
            }
          }
        }
        var nsp = tagName.indexOf(":");
        if (nsp > 0) {
          prefix = el.prefix = tagName.slice(0, nsp);
          localName = el.localName = tagName.slice(nsp + 1);
        } else {
          prefix = null;
          localName = el.localName = tagName;
        }
        var ns = el.uri = currentNSMap[prefix || ""];
        domBuilder.startElement(ns, localName, tagName, el);
        if (el.closed) {
          domBuilder.endElement(ns, localName, tagName);
          if (localNSMap) {
            for (prefix in localNSMap) {
              if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
          }
        } else {
          el.currentNSMap = currentNSMap;
          el.localNSMap = localNSMap;
          return true;
        }
      }
      function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
        if (/^(?:script|textarea)$/i.test(tagName)) {
          var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
          var text = source.substring(elStartEnd + 1, elEndStart);
          if (/[&<]/.test(text)) {
            if (/^script$/i.test(tagName)) {
              domBuilder.characters(text, 0, text.length);
              return elEndStart;
            }
            text = text.replace(/&#?\w+;/g, entityReplacer);
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
        }
        return elStartEnd + 1;
      }
      function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
        var pos = closeMap[tagName];
        if (pos == null) {
          pos = source.lastIndexOf("</" + tagName + ">");
          if (pos < elStartEnd) {
            pos = source.lastIndexOf("</" + tagName);
          }
          closeMap[tagName] = pos;
        }
        return pos < elStartEnd;
      }
      function _copy(source, target) {
        for (var n in source) {
          if (Object.prototype.hasOwnProperty.call(source, n)) {
            target[n] = source[n];
          }
        }
      }
      function parseDCC(source, start, domBuilder, errorHandler) {
        var next = source.charAt(start + 2);
        switch (next) {
          case "-":
            if (source.charAt(start + 3) === "-") {
              var end = source.indexOf("-->", start + 4);
              if (end > start) {
                domBuilder.comment(source, start + 4, end - start - 4);
                return end + 3;
              } else {
                errorHandler.error("Unclosed comment");
                return -1;
              }
            } else {
              return -1;
            }
          default:
            if (source.substr(start + 3, 6) == "CDATA[") {
              var end = source.indexOf("]]>", start + 9);
              domBuilder.startCDATA();
              domBuilder.characters(source, start + 9, end - start - 9);
              domBuilder.endCDATA();
              return end + 3;
            }
            var matchs = split(source, start);
            var len = matchs.length;
            if (len > 1 && /!doctype/i.test(matchs[0][0])) {
              var name = matchs[1][0];
              var pubid = false;
              var sysid = false;
              if (len > 3) {
                if (/^public$/i.test(matchs[2][0])) {
                  pubid = matchs[3][0];
                  sysid = len > 4 && matchs[4][0];
                } else if (/^system$/i.test(matchs[2][0])) {
                  sysid = matchs[3][0];
                }
              }
              var lastMatch = matchs[len - 1];
              domBuilder.startDTD(name, pubid, sysid);
              domBuilder.endDTD();
              return lastMatch.index + lastMatch[0].length;
            }
        }
        return -1;
      }
      function parseInstruction(source, start, domBuilder) {
        var end = source.indexOf("?>", start);
        if (end) {
          var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)$/);
          if (match) {
            var len = match[0].length;
            domBuilder.processingInstruction(match[1], match[2]);
            return end + 2;
          } else {
            return -1;
          }
        }
        return -1;
      }
      function ElementAttributes() {
        this.attributeNames = {};
      }
      ElementAttributes.prototype = {
        setTagName: function(tagName) {
          if (!tagNamePattern.test(tagName)) {
            throw new Error("invalid tagName:" + tagName);
          }
          this.tagName = tagName;
        },
        addValue: function(qName, value, offset) {
          if (!tagNamePattern.test(qName)) {
            throw new Error("invalid attribute:" + qName);
          }
          this.attributeNames[qName] = this.length;
          this[this.length++] = { qName, value, offset };
        },
        length: 0,
        getLocalName: function(i) {
          return this[i].localName;
        },
        getLocator: function(i) {
          return this[i].locator;
        },
        getQName: function(i) {
          return this[i].qName;
        },
        getURI: function(i) {
          return this[i].uri;
        },
        getValue: function(i) {
          return this[i].value;
        }
        //	,getIndex:function(uri, localName)){
        //		if(localName){
        //
        //		}else{
        //			var qName = uri
        //		}
        //	},
        //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
        //	getType:function(uri,localName){}
        //	getType:function(i){},
      };
      function split(source, start) {
        var match;
        var buf = [];
        var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
        reg.lastIndex = start;
        reg.exec(source);
        while (match = reg.exec(source)) {
          buf.push(match);
          if (match[1]) return buf;
        }
      }
      exports.XMLReader = XMLReader;
      exports.ParseError = ParseError;
    }
  });

  // node_modules/@xmldom/xmldom/lib/dom-parser.js
  var require_dom_parser = __commonJS({
    "node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
      var conventions = require_conventions();
      var dom = require_dom();
      var entities = require_entities();
      var sax = require_sax();
      var DOMImplementation = dom.DOMImplementation;
      var NAMESPACE = conventions.NAMESPACE;
      var ParseError = sax.ParseError;
      var XMLReader = sax.XMLReader;
      function normalizeLineEndings(input) {
        return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
      }
      function DOMParser2(options) {
        this.options = options || { locator: {} };
      }
      DOMParser2.prototype.parseFromString = function(source, mimeType) {
        var options = this.options;
        var sax2 = new XMLReader();
        var domBuilder = options.domBuilder || new DOMHandler();
        var errorHandler = options.errorHandler;
        var locator = options.locator;
        var defaultNSMap = options.xmlns || {};
        var isHTML = /\/x?html?$/.test(mimeType);
        var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
        if (locator) {
          domBuilder.setDocumentLocator(locator);
        }
        sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
        sax2.domBuilder = options.domBuilder || domBuilder;
        if (isHTML) {
          defaultNSMap[""] = NAMESPACE.HTML;
        }
        defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
        var normalize = options.normalizeLineEndings || normalizeLineEndings;
        if (source && typeof source === "string") {
          sax2.parse(
            normalize(source),
            defaultNSMap,
            entityMap
          );
        } else {
          sax2.errorHandler.error("invalid doc source");
        }
        return domBuilder.doc;
      };
      function buildErrorHandler(errorImpl, domBuilder, locator) {
        if (!errorImpl) {
          if (domBuilder instanceof DOMHandler) {
            return domBuilder;
          }
          errorImpl = domBuilder;
        }
        var errorHandler = {};
        var isCallback = errorImpl instanceof Function;
        locator = locator || {};
        function build(key) {
          var fn = errorImpl[key];
          if (!fn && isCallback) {
            fn = errorImpl.length == 2 ? function(msg) {
              errorImpl(key, msg);
            } : errorImpl;
          }
          errorHandler[key] = fn && function(msg) {
            fn("[xmldom " + key + "]	" + msg + _locator(locator));
          } || function() {
          };
        }
        build("warning");
        build("error");
        build("fatalError");
        return errorHandler;
      }
      function DOMHandler() {
        this.cdata = false;
      }
      function position(locator, node) {
        node.lineNumber = locator.lineNumber;
        node.columnNumber = locator.columnNumber;
      }
      DOMHandler.prototype = {
        startDocument: function() {
          this.doc = new DOMImplementation().createDocument(null, null, null);
          if (this.locator) {
            this.doc.documentURI = this.locator.systemId;
          }
        },
        startElement: function(namespaceURI, localName, qName, attrs) {
          var doc = this.doc;
          var el = doc.createElementNS(namespaceURI, qName || localName);
          var len = attrs.length;
          appendElement(this, el);
          this.currentElement = el;
          this.locator && position(this.locator, el);
          for (var i = 0; i < len; i++) {
            var namespaceURI = attrs.getURI(i);
            var value = attrs.getValue(i);
            var qName = attrs.getQName(i);
            var attr = doc.createAttributeNS(namespaceURI, qName);
            this.locator && position(attrs.getLocator(i), attr);
            attr.value = attr.nodeValue = value;
            el.setAttributeNode(attr);
          }
        },
        endElement: function(namespaceURI, localName, qName) {
          var current = this.currentElement;
          var tagName = current.tagName;
          this.currentElement = current.parentNode;
        },
        startPrefixMapping: function(prefix, uri) {
        },
        endPrefixMapping: function(prefix) {
        },
        processingInstruction: function(target, data) {
          var ins = this.doc.createProcessingInstruction(target, data);
          this.locator && position(this.locator, ins);
          appendElement(this, ins);
        },
        ignorableWhitespace: function(ch, start, length) {
        },
        characters: function(chars, start, length) {
          chars = _toString.apply(this, arguments);
          if (chars) {
            if (this.cdata) {
              var charNode = this.doc.createCDATASection(chars);
            } else {
              var charNode = this.doc.createTextNode(chars);
            }
            if (this.currentElement) {
              this.currentElement.appendChild(charNode);
            } else if (/^\s*$/.test(chars)) {
              this.doc.appendChild(charNode);
            }
            this.locator && position(this.locator, charNode);
          }
        },
        skippedEntity: function(name) {
        },
        endDocument: function() {
          this.doc.normalize();
        },
        setDocumentLocator: function(locator) {
          if (this.locator = locator) {
            locator.lineNumber = 0;
          }
        },
        //LexicalHandler
        comment: function(chars, start, length) {
          chars = _toString.apply(this, arguments);
          var comm = this.doc.createComment(chars);
          this.locator && position(this.locator, comm);
          appendElement(this, comm);
        },
        startCDATA: function() {
          this.cdata = true;
        },
        endCDATA: function() {
          this.cdata = false;
        },
        startDTD: function(name, publicId, systemId) {
          var impl = this.doc.implementation;
          if (impl && impl.createDocumentType) {
            var dt = impl.createDocumentType(name, publicId, systemId);
            this.locator && position(this.locator, dt);
            appendElement(this, dt);
            this.doc.doctype = dt;
          }
        },
        /**
         * @see org.xml.sax.ErrorHandler
         * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
         */
        warning: function(error) {
          console.warn("[xmldom warning]	" + error, _locator(this.locator));
        },
        error: function(error) {
          console.error("[xmldom error]	" + error, _locator(this.locator));
        },
        fatalError: function(error) {
          throw new ParseError(error, this.locator);
        }
      };
      function _locator(l) {
        if (l) {
          return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
        }
      }
      function _toString(chars, start, length) {
        if (typeof chars == "string") {
          return chars.substr(start, length);
        } else {
          if (chars.length >= start + length || start) {
            return new java.lang.String(chars, start, length) + "";
          }
          return chars;
        }
      }
      "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
        DOMHandler.prototype[key] = function() {
          return null;
        };
      });
      function appendElement(hander, node) {
        if (!hander.currentElement) {
          hander.doc.appendChild(node);
        } else {
          hander.currentElement.appendChild(node);
        }
      }
      exports.__DOMHandler = DOMHandler;
      exports.normalizeLineEndings = normalizeLineEndings;
      exports.DOMParser = DOMParser2;
    }
  });

  // node_modules/@xmldom/xmldom/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@xmldom/xmldom/lib/index.js"(exports) {
      var dom = require_dom();
      exports.DOMImplementation = dom.DOMImplementation;
      exports.XMLSerializer = dom.XMLSerializer;
      exports.DOMParser = require_dom_parser().DOMParser;
    }
  });

  // lib/parser.js
  function multistatus(string) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(string, "text/xml");
    let result = traverse.multistatus(child(doc, "multistatus"));
    debug(`input:
${string}
output:
${JSON.stringify(result)}
`);
    return result;
  }
  function complex(node, childspec, collapse) {
    let result = {};
    for (let key in childspec) {
      if (childspec[key]) {
        result[key] = [];
      }
    }
    childNodes(node).forEach(
      (childNode) => traverseChild(node, childNode, childspec, result)
    );
    return maybeCollapse(result, childspec, collapse);
  }
  function traverseChild(node, childNode, childspec, result) {
    if (childNode.nodeType === 3 && /^\s+$/.test(childNode.nodeValue)) {
      return;
    }
    let localName = camelize(childNode.localName, "-");
    if (!(localName in childspec)) {
      debug("Unexpected node of type " + localName + " encountered while parsing " + node.localName + " node!");
      let value = childNode.textContent;
      if (localName in result) {
        if (!Array.isArray(result[camelCase])) {
          result[localName] = [result[localName]];
        }
        result[localName].push(value);
        return;
      }
      result[localName] = value;
      return;
    }
    let traversal = traverse[localName](childNode);
    if (childspec[localName]) {
      result[localName].push(traversal);
    } else {
      result[localName] = traversal;
    }
  }
  function maybeCollapse(result, childspec, collapse) {
    if (!collapse) {
      return result;
    }
    if (!childspec[collapse]) {
      return result[collapse];
    }
    return result[collapse].reduce((a, b) => a.concat(b), []);
  }
  function childNodes(node) {
    let result = node.childNodes;
    if (!Array.isArray(result)) {
      result = Array.prototype.slice.call(result);
    }
    return result;
  }
  function children(node, localName) {
    return childNodes(node).filter((childNode) => childNode.localName === localName);
  }
  function child(node, localName) {
    return children(node, localName)[0];
  }
  var debug, DOMParser, traverse;
  var init_parser = __esm({
    "lib/parser.js"() {
      init_camelize();
      debug = require_debug()("dav:parser");
      DOMParser = require_lib().DOMParser;
      traverse = {
        // { response: [x, y, z] }
        multistatus: (node) => complex(node, { response: true }),
        // { propstat: [x, y, z] }
        response: (node) => complex(node, { propstat: true, href: false }),
        // { prop: x }
        propstat: (node) => complex(node, { prop: false }),
        // {
        //   resourcetype: x
        //   supportedCalendarComponentSet: y,
        //   supportedReportSet: z
        // }
        prop: (node) => {
          return complex(node, {
            resourcetype: false,
            supportedCalendarComponentSet: false,
            supportedReportSet: false,
            currentUserPrincipal: false,
            groups: false,
            invite: false
          });
        },
        resourcetype: (node) => {
          return childNodes(node).map((childNode) => childNode.localName);
        },
        groups: (node) => complex(node, { group: true }, "group"),
        group: (node) => {
          return childNodes(node).map((childNode) => childNode.nodeValue);
        },
        invite: (node) => complex(node, { user: true }, "user"),
        user: (node) => complex(node, { href: false, access: false }),
        access: (node) => complex(node, {}),
        //access: node => {
        //  return childNodes(node).map(childNode => childNode.localName);
        //},
        // [x, y, z]
        supportedCalendarComponentSet: (node) => complex(node, { comp: true }, "comp"),
        // [x, y, z]
        supportedReportSet: (node) => {
          return complex(node, { supportedReport: true }, "supportedReport");
        },
        comp: (node) => node.getAttribute("name"),
        // x
        supportedReport: (node) => complex(node, { report: false }, "report"),
        report: (node) => {
          return childNodes(node).map((childNode) => childNode.localName);
        },
        href: (node) => {
          return decodeURIComponent(childNodes(node)[0].nodeValue);
        },
        currentUserPrincipal: (node) => {
          return complex(node, { href: false }, "href");
        }
      };
    }
  });

  // lib/template/prop.js
  function prop(item) {
    if (!item.children || !item.children.length) {
      if (typeof item.value === "undefined") {
        return `<${xmlnsPrefix(item.namespace)}:${item.name} />`;
      }
      return `<${xmlnsPrefix(item.namespace)}:${item.name}>${item.value}</${xmlnsPrefix(item.namespace)}:${item.name}>`;
    }
    let children2 = item.children.map(prop);
    return `<${xmlnsPrefix(item.namespace)}:${item.name}>
            ${children2}
          </${xmlnsPrefix(item.namespace)}:${item.name}>`;
  }
  function xmlnsPrefix(namespace) {
    switch (namespace) {
      case DAV:
        return "d";
      case CALENDAR_SERVER:
        return "cs";
      case CALDAV:
        return "c";
      case CARDDAV:
        return "card";
      case OC:
        return "oc";
      default:
        throw new Error("Unrecognized xmlns " + namespace);
    }
  }
  var init_prop = __esm({
    "lib/template/prop.js"() {
      init_namespace();
    }
  });

  // lib/template/address_book_query.js
  var address_book_query_exports = {};
  __export(address_book_query_exports, {
    default: () => addressBookQuery
  });
  function addressBookQuery(object) {
    return `<card:addressbook-query xmlns:card="urn:ietf:params:xml:ns:carddav"
                          xmlns:d="DAV:">
    <d:prop>
      ${object.props.map(prop)}
    </d:prop>
    <!-- According to http://stackoverflow.com/questions/23742568/google-carddav-api-addressbook-multiget-returns-400-bad-request,
         Google's CardDAV server requires a filter element. I don't think all addressbook-query calls need a filter in the spec though? -->
  </card:addressbook-query>`;
  }
  var init_address_book_query = __esm({
    "lib/template/address_book_query.js"() {
      init_prop();
    }
  });

  // lib/template/filter.js
  function filter(item) {
    if (!item.children || !item.children.length) {
      return `<c:${item.type} ${formatAttrs(item.attrs)}/>`;
    }
    let children2 = item.children.map(filter);
    return `<c:${item.type} ${formatAttrs(item.attrs)}>
            ${children2}
          </c:${item.type}>`;
  }
  function formatAttrs(attrs) {
    if (typeof attrs !== "object") {
      return "";
    }
    return Object.keys(attrs).map((attr) => `${attr}="${attrs[attr]}"`).join(" ");
  }
  var init_filter = __esm({
    "lib/template/filter.js"() {
    }
  });

  // lib/template/calendar_query.js
  var calendar_query_exports = {};
  __export(calendar_query_exports, {
    default: () => calendarQuery
  });
  function calendarQuery(object) {
    return `<c:calendar-query xmlns:c="urn:ietf:params:xml:ns:caldav"
                    xmlns:cs="http://calendarserver.org/ns/"
                    xmlns:d="DAV:">
    <d:prop>
      ${object.props.map(prop)}
    </d:prop>
    <c:filter>
      ${object.filters.map(filter)}
    </c:filter>
    ${object.timezone ? "<c:timezone>" + object.timezone + "</c:timezone>" : ""}
  </c:calendar-query>`;
  }
  var init_calendar_query = __esm({
    "lib/template/calendar_query.js"() {
      init_filter();
      init_prop();
    }
  });

  // lib/template/propfind.js
  var propfind_exports = {};
  __export(propfind_exports, {
    default: () => propfind
  });
  function propfind(object) {
    return `<d:propfind xmlns:c="urn:ietf:params:xml:ns:caldav"
              xmlns:card="urn:ietf:params:xml:ns:carddav"
              xmlns:cs="http://calendarserver.org/ns/"
              xmlns:oc="http://owncloud.org/ns"
              xmlns:d="DAV:">
    <d:prop>
      ${object.props.map(prop)}
    </d:prop>
  </d:propfind>`;
  }
  var init_propfind = __esm({
    "lib/template/propfind.js"() {
      init_prop();
    }
  });

  // lib/template/sync_collection.js
  var sync_collection_exports = {};
  __export(sync_collection_exports, {
    default: () => syncCollection
  });
  function syncCollection(object) {
    return `<d:sync-collection xmlns:c="urn:ietf:params:xml:ns:caldav"
                     xmlns:card="urn:ietf:params:xml:ns:carddav"
                     xmlns:d="DAV:">
    <d:sync-level>${object.syncLevel}</d:sync-level>
    <d:sync-token>${object.syncToken}</d:sync-token>
    <d:prop>
      ${object.props.map(prop)}
    </d:prop>
  </d:sync-collection>`;
  }
  var init_sync_collection = __esm({
    "lib/template/sync_collection.js"() {
      init_prop();
    }
  });

  // lib/template/mkcol.js
  var mkcol_exports = {};
  __export(mkcol_exports, {
    default: () => mkcol
  });
  function mkcol(object) {
    return `<d:mkcol xmlns:c="urn:ietf:params:xml:ns:caldav"
              xmlns:card="urn:ietf:params:xml:ns:carddav"
              xmlns:cs="http://calendarserver.org/ns/"
              xmlns:d="DAV:">
    <d:set>
      <d:prop>
        ${object.props.map(prop)}
      </d:prop>
    </d:set>
  </d:mkcol>`;
  }
  var init_mkcol = __esm({
    "lib/template/mkcol.js"() {
      init_prop();
    }
  });

  // lib/template/proppatch.js
  var proppatch_exports = {};
  __export(proppatch_exports, {
    default: () => proppatch
  });
  function proppatch(object) {
    return `<d:propertyupdate xmlns:c="urn:ietf:params:xml:ns:caldav"
              xmlns:card="urn:ietf:params:xml:ns:carddav"
              xmlns:cs="http://calendarserver.org/ns/"
              xmlns:d="DAV:">
    <d:set>
      <d:prop>
        ${object.props.map(prop)}
      </d:prop>
    </d:set>
  </d:propertyupdate>`;
  }
  var init_proppatch = __esm({
    "lib/template/proppatch.js"() {
      init_prop();
    }
  });

  // lib/template/index.js
  var require_template = __commonJS({
    "lib/template/index.js"(exports) {
      exports.addressBookQuery = (init_address_book_query(), __toCommonJS(address_book_query_exports));
      exports.calendarQuery = (init_calendar_query(), __toCommonJS(calendar_query_exports));
      exports.propfind = (init_propfind(), __toCommonJS(propfind_exports));
      exports.syncCollection = (init_sync_collection(), __toCommonJS(sync_collection_exports));
      exports.mkcol = (init_mkcol(), __toCommonJS(mkcol_exports));
      exports.proppatch = (init_proppatch(), __toCommonJS(proppatch_exports));
    }
  });

  // lib/request.js
  var request_exports = {};
  __export(request_exports, {
    Request: () => Request,
    addressBookQuery: () => addressBookQuery3,
    basic: () => basic,
    calendarQuery: () => calendarQuery3,
    collectionQuery: () => collectionQuery,
    getProps: () => getProps,
    mergeProps: () => mergeProps,
    mkcol: () => mkcol3,
    propfind: () => propfind3,
    proppatch: () => proppatch3,
    setRequestHeaders: () => setRequestHeaders,
    syncCollection: () => syncCollection3
  });
  function addressBookQuery3(options) {
    return collectionQuery(
      template.addressBookQuery({ props: options.props || [] }),
      { depth: options.depth }
    );
  }
  function basic(options) {
    function transformRequest(xhr) {
      setRequestHeaders(xhr, options);
    }
    return new Request({
      method: options.method,
      requestData: options.data,
      transformRequest
    });
  }
  function calendarQuery3(options) {
    return collectionQuery(
      template.calendarQuery({
        props: options.props || [],
        filters: options.filters || [],
        timezone: options.timezone
      }),
      {
        depth: options.depth
      }
    );
  }
  function collectionQuery(requestData, options) {
    function transformRequest(xhr) {
      setRequestHeaders(xhr, options);
    }
    function transformResponse(xhr) {
      return multistatus(xhr.responseText).response.map((res) => {
        return { href: res.href, props: getProps(res.propstat) };
      });
    }
    return new Request({
      method: "REPORT",
      requestData,
      transformRequest,
      transformResponse
    });
  }
  function mkcol3(options) {
    let requestData = template.mkcol({ props: options.props });
    function transformRequest(xhr) {
      setRequestHeaders(xhr, options);
    }
    return new Request({
      method: "MKCOL",
      requestData,
      transformRequest
    });
  }
  function proppatch3(options) {
    let requestData = template.proppatch({ props: options.props });
    function transformRequest(xhr) {
      setRequestHeaders(xhr, options);
    }
    return new Request({
      method: "PROPPATCH",
      requestData,
      transformRequest
    });
  }
  function propfind3(options) {
    let requestData = template.propfind({ props: options.props });
    function transformRequest(xhr) {
      setRequestHeaders(xhr, options);
    }
    function transformResponse(xhr) {
      let responses = multistatus(xhr.responseText).response.map((res) => {
        return { href: res.href, props: getProps(res.propstat) };
      });
      if (!options.mergeResponses) {
        return responses;
      }
      let merged = mergeProps(responses.map((res) => res.props));
      let hrefs = responses.map((res) => res.href);
      return { props: merged, hrefs };
    }
    return new Request({
      method: "PROPFIND",
      requestData,
      transformRequest,
      transformResponse
    });
  }
  function syncCollection3(options) {
    let requestData = template.syncCollection({
      props: options.props,
      syncLevel: options.syncLevel,
      syncToken: options.syncToken
    });
    function transformRequest(xhr) {
      setRequestHeaders(xhr, options);
    }
    function transformResponse(xhr) {
      let object = multistatus(xhr.responseText);
      let responses = object.response.map((res) => {
        return { href: res.href, props: getProps(res.propstat) };
      });
      return { responses, syncToken: object.syncToken };
    }
    return new Request({
      method: "REPORT",
      requestData,
      transformRequest,
      transformResponse
    });
  }
  function getProp(propstat) {
    if (/404/g.test(propstat.status)) {
      return null;
    }
    if (/5\d{2}/g.test(propstat.status) || /4\d{2}/g.test(propstat.status)) {
      throw new Error("Bad status on propstat: " + propstat.status);
    }
    return "prop" in propstat ? propstat.prop : null;
  }
  function mergeProps(props) {
    return props.reduce((a, b) => Object.assign(a, b), {});
  }
  function getProps(propstats) {
    return mergeProps(
      propstats.map(getProp).filter((prop2) => prop2 && typeof prop2 === "object")
    );
  }
  function setRequestHeaders(request, options) {
    if ("contentType" in options) {
      request.setRequestHeader("Content-Type", options.contentType);
    } else {
      request.setRequestHeader("Content-Type", "application/xml;charset=utf-8");
    }
    if ("depth" in options) {
      request.setRequestHeader("Depth", options.depth);
    }
    if ("etag" in options) {
      request.setRequestHeader("If-Match", options.etag);
    }
    if ("destination" in options) {
      request.setRequestHeader("Destination", options.destination);
    }
    if ("overwrite" in options) {
      request.setRequestHeader("Overwrite", options.overwrite);
    }
  }
  var template, Request;
  var init_request = __esm({
    "lib/request.js"() {
      init_parser();
      template = __toESM(require_template());
      Request = class {
        constructor(options = {}) {
          Object.assign(this, {
            method: null,
            requestData: null,
            transformRequest: null,
            transformResponse: null,
            onerror: null
          }, options);
        }
      };
    }
  });

  // node_modules/co/index.js
  var require_co = __commonJS({
    "node_modules/co/index.js"(exports, module) {
      var slice = Array.prototype.slice;
      module.exports = co5["default"] = co5.co = co5;
      co5.wrap = function(fn) {
        createPromise.__generatorFunction__ = fn;
        return createPromise;
        function createPromise() {
          return co5.call(this, fn.apply(this, arguments));
        }
      };
      function co5(gen) {
        var ctx = this;
        var args = slice.call(arguments, 1);
        return new Promise(function(resolve, reject) {
          if (typeof gen === "function") gen = gen.apply(ctx, args);
          if (!gen || typeof gen.next !== "function") return resolve(gen);
          onFulfilled();
          function onFulfilled(res) {
            var ret;
            try {
              ret = gen.next(res);
            } catch (e) {
              return reject(e);
            }
            next(ret);
          }
          function onRejected(err) {
            var ret;
            try {
              ret = gen.throw(err);
            } catch (e) {
              return reject(e);
            }
            next(ret);
          }
          function next(ret) {
            if (ret.done) return resolve(ret.value);
            var value = toPromise.call(ctx, ret.value);
            if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
            return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "' + String(ret.value) + '"'));
          }
        });
      }
      function toPromise(obj) {
        if (!obj) return obj;
        if (isPromise(obj)) return obj;
        if (isGeneratorFunction(obj) || isGenerator(obj)) return co5.call(this, obj);
        if ("function" == typeof obj) return thunkToPromise.call(this, obj);
        if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
        if (isObject(obj)) return objectToPromise.call(this, obj);
        return obj;
      }
      function thunkToPromise(fn) {
        var ctx = this;
        return new Promise(function(resolve, reject) {
          fn.call(ctx, function(err, res) {
            if (err) return reject(err);
            if (arguments.length > 2) res = slice.call(arguments, 1);
            resolve(res);
          });
        });
      }
      function arrayToPromise(obj) {
        return Promise.all(obj.map(toPromise, this));
      }
      function objectToPromise(obj) {
        var results = new obj.constructor();
        var keys = Object.keys(obj);
        var promises = [];
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var promise = toPromise.call(this, obj[key]);
          if (promise && isPromise(promise)) defer(promise, key);
          else results[key] = obj[key];
        }
        return Promise.all(promises).then(function() {
          return results;
        });
        function defer(promise2, key2) {
          results[key2] = void 0;
          promises.push(promise2.then(function(res) {
            results[key2] = res;
          }));
        }
      }
      function isPromise(obj) {
        return "function" == typeof obj.then;
      }
      function isGenerator(obj) {
        return "function" == typeof obj.next && "function" == typeof obj.throw;
      }
      function isGeneratorFunction(obj) {
        var constructor = obj.constructor;
        if (!constructor) return false;
        if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
        return isGenerator(constructor.prototype);
      }
      function isObject(val) {
        return Object == val.constructor;
      }
    }
  });

  // node_modules/querystring/decode.js
  var require_decode = __commonJS({
    "node_modules/querystring/decode.js"(exports, module) {
      "use strict";
      function hasOwnProperty(obj, prop2) {
        return Object.prototype.hasOwnProperty.call(obj, prop2);
      }
      module.exports = function(qs, sep, eq, options) {
        sep = sep || "&";
        eq = eq || "=";
        var obj = {};
        if (typeof qs !== "string" || qs.length === 0) {
          return obj;
        }
        var regexp = /\+/g;
        qs = qs.split(sep);
        var maxKeys = 1e3;
        if (options && typeof options.maxKeys === "number") {
          maxKeys = options.maxKeys;
        }
        var len = qs.length;
        if (maxKeys > 0 && len > maxKeys) {
          len = maxKeys;
        }
        for (var i = 0; i < len; ++i) {
          var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
          if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
          } else {
            kstr = x;
            vstr = "";
          }
          k = decodeURIComponent(kstr);
          v = decodeURIComponent(vstr);
          if (!hasOwnProperty(obj, k)) {
            obj[k] = v;
          } else if (Array.isArray(obj[k])) {
            obj[k].push(v);
          } else {
            obj[k] = [obj[k], v];
          }
        }
        return obj;
      };
    }
  });

  // node_modules/querystring/encode.js
  var require_encode = __commonJS({
    "node_modules/querystring/encode.js"(exports, module) {
      "use strict";
      var stringifyPrimitive = function(v) {
        switch (typeof v) {
          case "string":
            return v;
          case "boolean":
            return v ? "true" : "false";
          case "number":
            return isFinite(v) ? v : "";
          default:
            return "";
        }
      };
      module.exports = function(obj, sep, eq, name) {
        sep = sep || "&";
        eq = eq || "=";
        if (obj === null) {
          obj = void 0;
        }
        if (typeof obj === "object") {
          return Object.keys(obj).map(function(k) {
            var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
            if (Array.isArray(obj[k])) {
              return obj[k].map(function(v) {
                return ks + encodeURIComponent(stringifyPrimitive(v));
              }).join(sep);
            } else {
              return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
            }
          }).join(sep);
        }
        if (!name) return "";
        return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
      };
    }
  });

  // node_modules/querystring/index.js
  var require_querystring = __commonJS({
    "node_modules/querystring/index.js"(exports) {
      "use strict";
      exports.decode = exports.parse = require_decode();
      exports.encode = exports.stringify = require_encode();
    }
  });

  // ../../../shims/xmlhttprequest.js
  var require_xmlhttprequest = __commonJS({
    "../../../shims/xmlhttprequest.js"(exports, module) {
      module.exports = { XMLHttpRequest: typeof self !== "undefined" && self.XMLHttpRequest };
    }
  });

  // node_modules/url/node_modules/punycode/punycode.js
  var require_punycode = __commonJS({
    "node_modules/url/node_modules/punycode/punycode.js"(exports, module) {
      (function(root) {
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = typeof module == "object" && module && !module.nodeType && module;
        var freeGlobal = typeof global == "object" && global;
        if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
          root = freeGlobal;
        }
        var punycode, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
          "overflow": "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
        function error(type) {
          throw RangeError(errors[type]);
        }
        function map(array, fn) {
          var length = array.length;
          var result = [];
          while (length--) {
            result[length] = fn(array[length]);
          }
          return result;
        }
        function mapDomain(string, fn) {
          var parts = string.split("@");
          var result = "";
          if (parts.length > 1) {
            result = parts[0] + "@";
            string = parts[1];
          }
          string = string.replace(regexSeparators, ".");
          var labels = string.split(".");
          var encoded = map(labels, fn).join(".");
          return result + encoded;
        }
        function ucs2decode(string) {
          var output = [], counter = 0, length = string.length, value, extra;
          while (counter < length) {
            value = string.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length) {
              extra = string.charCodeAt(counter++);
              if ((extra & 64512) == 56320) {
                output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                output.push(value);
                counter--;
              }
            } else {
              output.push(value);
            }
          }
          return output;
        }
        function ucs2encode(array) {
          return map(array, function(value) {
            var output = "";
            if (value > 65535) {
              value -= 65536;
              output += stringFromCharCode(value >>> 10 & 1023 | 55296);
              value = 56320 | value & 1023;
            }
            output += stringFromCharCode(value);
            return output;
          }).join("");
        }
        function basicToDigit(codePoint) {
          if (codePoint - 48 < 10) {
            return codePoint - 22;
          }
          if (codePoint - 65 < 26) {
            return codePoint - 65;
          }
          if (codePoint - 97 < 26) {
            return codePoint - 97;
          }
          return base;
        }
        function digitToBasic(digit, flag) {
          return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        }
        function adapt(delta, numPoints, firstTime) {
          var k = 0;
          delta = firstTime ? floor(delta / damp) : delta >> 1;
          delta += floor(delta / numPoints);
          for (; delta > baseMinusTMin * tMax >> 1; k += base) {
            delta = floor(delta / baseMinusTMin);
          }
          return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
        }
        function decode(input) {
          var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic2, j, index, oldi, w, k, digit, t, baseMinusT;
          basic2 = input.lastIndexOf(delimiter);
          if (basic2 < 0) {
            basic2 = 0;
          }
          for (j = 0; j < basic2; ++j) {
            if (input.charCodeAt(j) >= 128) {
              error("not-basic");
            }
            output.push(input.charCodeAt(j));
          }
          for (index = basic2 > 0 ? basic2 + 1 : 0; index < inputLength; ) {
            for (oldi = i, w = 1, k = base; ; k += base) {
              if (index >= inputLength) {
                error("invalid-input");
              }
              digit = basicToDigit(input.charCodeAt(index++));
              if (digit >= base || digit > floor((maxInt - i) / w)) {
                error("overflow");
              }
              i += digit * w;
              t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (digit < t) {
                break;
              }
              baseMinusT = base - t;
              if (w > floor(maxInt / baseMinusT)) {
                error("overflow");
              }
              w *= baseMinusT;
            }
            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            if (floor(i / out) > maxInt - n) {
              error("overflow");
            }
            n += floor(i / out);
            i %= out;
            output.splice(i++, 0, n);
          }
          return ucs2encode(output);
        }
        function encode(input) {
          var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
          input = ucs2decode(input);
          inputLength = input.length;
          n = initialN;
          delta = 0;
          bias = initialBias;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < 128) {
              output.push(stringFromCharCode(currentValue));
            }
          }
          handledCPCount = basicLength = output.length;
          if (basicLength) {
            output.push(delimiter);
          }
          while (handledCPCount < inputLength) {
            for (m = maxInt, j = 0; j < inputLength; ++j) {
              currentValue = input[j];
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
            }
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
              error("overflow");
            }
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for (j = 0; j < inputLength; ++j) {
              currentValue = input[j];
              if (currentValue < n && ++delta > maxInt) {
                error("overflow");
              }
              if (currentValue == n) {
                for (q = delta, k = base; ; k += base) {
                  t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) {
                    break;
                  }
                  qMinusT = q - t;
                  baseMinusT = base - t;
                  output.push(
                    stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
                  );
                  q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
            ++delta;
            ++n;
          }
          return output.join("");
        }
        function toUnicode(input) {
          return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
          });
        }
        function toASCII(input) {
          return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
          });
        }
        punycode = {
          /**
           * A string representing the current Punycode.js version number.
           * @memberOf punycode
           * @type String
           */
          "version": "1.3.2",
          /**
           * An object of methods to convert from JavaScript's internal character
           * representation (UCS-2) to Unicode code points, and back.
           * @see <https://mathiasbynens.be/notes/javascript-encoding>
           * @memberOf punycode
           * @type Object
           */
          "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
          },
          "decode": decode,
          "encode": encode,
          "toASCII": toASCII,
          "toUnicode": toUnicode
        };
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          define("punycode", function() {
            return punycode;
          });
        } else if (freeExports && freeModule) {
          if (module.exports == freeExports) {
            freeModule.exports = punycode;
          } else {
            for (key in punycode) {
              punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
            }
          }
        } else {
          root.punycode = punycode;
        }
      })(exports);
    }
  });

  // node_modules/url/url.js
  var require_url = __commonJS({
    "node_modules/url/url.js"(exports) {
      var punycode = require_punycode();
      exports.parse = urlParse;
      exports.resolve = urlResolve;
      exports.resolveObject = urlResolveObject;
      exports.format = urlFormat;
      exports.Url = Url;
      function Url() {
        this.protocol = null;
        this.slashes = null;
        this.auth = null;
        this.host = null;
        this.port = null;
        this.hostname = null;
        this.hash = null;
        this.search = null;
        this.query = null;
        this.pathname = null;
        this.path = null;
        this.href = null;
      }
      var protocolPattern = /^([a-z0-9.+-]+:)/i;
      var portPattern = /:[0-9]*$/;
      var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
      var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
      var autoEscape = ["'"].concat(unwise);
      var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
      var hostEndingChars = ["/", "?", "#"];
      var hostnameMaxLen = 255;
      var hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/;
      var hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/;
      var unsafeProtocol = {
        "javascript": true,
        "javascript:": true
      };
      var hostlessProtocol = {
        "javascript": true,
        "javascript:": true
      };
      var slashedProtocol = {
        "http": true,
        "https": true,
        "ftp": true,
        "gopher": true,
        "file": true,
        "http:": true,
        "https:": true,
        "ftp:": true,
        "gopher:": true,
        "file:": true
      };
      var querystring2 = require_querystring();
      function urlParse(url4, parseQueryString, slashesDenoteHost) {
        if (url4 && isObject(url4) && url4 instanceof Url) return url4;
        var u = new Url();
        u.parse(url4, parseQueryString, slashesDenoteHost);
        return u;
      }
      Url.prototype.parse = function(url4, parseQueryString, slashesDenoteHost) {
        if (!isString(url4)) {
          throw new TypeError("Parameter 'url' must be a string, not " + typeof url4);
        }
        var rest = url4;
        rest = rest.trim();
        var proto = protocolPattern.exec(rest);
        if (proto) {
          proto = proto[0];
          var lowerProto = proto.toLowerCase();
          this.protocol = lowerProto;
          rest = rest.substr(proto.length);
        }
        if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var slashes = rest.substr(0, 2) === "//";
          if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
          }
        }
        if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
          var hostEnd = -1;
          for (var i = 0; i < hostEndingChars.length; i++) {
            var hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
              hostEnd = hec;
          }
          var auth, atSign;
          if (hostEnd === -1) {
            atSign = rest.lastIndexOf("@");
          } else {
            atSign = rest.lastIndexOf("@", hostEnd);
          }
          if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = decodeURIComponent(auth);
          }
          hostEnd = -1;
          for (var i = 0; i < nonHostChars.length; i++) {
            var hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
              hostEnd = hec;
          }
          if (hostEnd === -1)
            hostEnd = rest.length;
          this.host = rest.slice(0, hostEnd);
          rest = rest.slice(hostEnd);
          this.parseHost();
          this.hostname = this.hostname || "";
          var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
          if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for (var i = 0, l = hostparts.length; i < l; i++) {
              var part = hostparts[i];
              if (!part) continue;
              if (!part.match(hostnamePartPattern)) {
                var newpart = "";
                for (var j = 0, k = part.length; j < k; j++) {
                  if (part.charCodeAt(j) > 127) {
                    newpart += "x";
                  } else {
                    newpart += part[j];
                  }
                }
                if (!newpart.match(hostnamePartPattern)) {
                  var validParts = hostparts.slice(0, i);
                  var notHost = hostparts.slice(i + 1);
                  var bit = part.match(hostnamePartStart);
                  if (bit) {
                    validParts.push(bit[1]);
                    notHost.unshift(bit[2]);
                  }
                  if (notHost.length) {
                    rest = "/" + notHost.join(".") + rest;
                  }
                  this.hostname = validParts.join(".");
                  break;
                }
              }
            }
          }
          if (this.hostname.length > hostnameMaxLen) {
            this.hostname = "";
          } else {
            this.hostname = this.hostname.toLowerCase();
          }
          if (!ipv6Hostname) {
            var domainArray = this.hostname.split(".");
            var newOut = [];
            for (var i = 0; i < domainArray.length; ++i) {
              var s = domainArray[i];
              newOut.push(s.match(/[^A-Za-z0-9_-]/) ? "xn--" + punycode.encode(s) : s);
            }
            this.hostname = newOut.join(".");
          }
          var p = this.port ? ":" + this.port : "";
          var h = this.hostname || "";
          this.host = h + p;
          this.href += this.host;
          if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            if (rest[0] !== "/") {
              rest = "/" + rest;
            }
          }
        }
        if (!unsafeProtocol[lowerProto]) {
          for (var i = 0, l = autoEscape.length; i < l; i++) {
            var ae = autoEscape[i];
            var esc = encodeURIComponent(ae);
            if (esc === ae) {
              esc = escape(ae);
            }
            rest = rest.split(ae).join(esc);
          }
        }
        var hash = rest.indexOf("#");
        if (hash !== -1) {
          this.hash = rest.substr(hash);
          rest = rest.slice(0, hash);
        }
        var qm = rest.indexOf("?");
        if (qm !== -1) {
          this.search = rest.substr(qm);
          this.query = rest.substr(qm + 1);
          if (parseQueryString) {
            this.query = querystring2.parse(this.query);
          }
          rest = rest.slice(0, qm);
        } else if (parseQueryString) {
          this.search = "";
          this.query = {};
        }
        if (rest) this.pathname = rest;
        if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
          this.pathname = "/";
        }
        if (this.pathname || this.search) {
          var p = this.pathname || "";
          var s = this.search || "";
          this.path = p + s;
        }
        this.href = this.format();
        return this;
      };
      function urlFormat(obj) {
        if (isString(obj)) obj = urlParse(obj);
        if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
        return obj.format();
      }
      Url.prototype.format = function() {
        var auth = this.auth || "";
        if (auth) {
          auth = encodeURIComponent(auth);
          auth = auth.replace(/%3A/i, ":");
          auth += "@";
        }
        var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
        if (this.host) {
          host = auth + this.host;
        } else if (this.hostname) {
          host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
          if (this.port) {
            host += ":" + this.port;
          }
        }
        if (this.query && isObject(this.query) && Object.keys(this.query).length) {
          query = querystring2.stringify(this.query);
        }
        var search = this.search || query && "?" + query || "";
        if (protocol && protocol.substr(-1) !== ":") protocol += ":";
        if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
          host = "//" + (host || "");
          if (pathname && pathname.charAt(0) !== "/") pathname = "/" + pathname;
        } else if (!host) {
          host = "";
        }
        if (hash && hash.charAt(0) !== "#") hash = "#" + hash;
        if (search && search.charAt(0) !== "?") search = "?" + search;
        pathname = pathname.replace(/[?#]/g, function(match) {
          return encodeURIComponent(match);
        });
        search = search.replace("#", "%23");
        return protocol + host + pathname + search + hash;
      };
      function urlResolve(source, relative) {
        return urlParse(source, false, true).resolve(relative);
      }
      Url.prototype.resolve = function(relative) {
        return this.resolveObject(urlParse(relative, false, true)).format();
      };
      function urlResolveObject(source, relative) {
        if (!source) return relative;
        return urlParse(source, false, true).resolveObject(relative);
      }
      Url.prototype.resolveObject = function(relative) {
        if (isString(relative)) {
          var rel = new Url();
          rel.parse(relative, false, true);
          relative = rel;
        }
        var result = new Url();
        Object.keys(this).forEach(function(k) {
          result[k] = this[k];
        }, this);
        result.hash = relative.hash;
        if (relative.href === "") {
          result.href = result.format();
          return result;
        }
        if (relative.slashes && !relative.protocol) {
          Object.keys(relative).forEach(function(k) {
            if (k !== "protocol")
              result[k] = relative[k];
          });
          if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
            result.path = result.pathname = "/";
          }
          result.href = result.format();
          return result;
        }
        if (relative.protocol && relative.protocol !== result.protocol) {
          if (!slashedProtocol[relative.protocol]) {
            Object.keys(relative).forEach(function(k) {
              result[k] = relative[k];
            });
            result.href = result.format();
            return result;
          }
          result.protocol = relative.protocol;
          if (!relative.host && !hostlessProtocol[relative.protocol]) {
            var relPath = (relative.pathname || "").split("/");
            while (relPath.length && !(relative.host = relPath.shift())) ;
            if (!relative.host) relative.host = "";
            if (!relative.hostname) relative.hostname = "";
            if (relPath[0] !== "") relPath.unshift("");
            if (relPath.length < 2) relPath.unshift("");
            result.pathname = relPath.join("/");
          } else {
            result.pathname = relative.pathname;
          }
          result.search = relative.search;
          result.query = relative.query;
          result.host = relative.host || "";
          result.auth = relative.auth;
          result.hostname = relative.hostname || relative.host;
          result.port = relative.port;
          if (result.pathname || result.search) {
            var p = result.pathname || "";
            var s = result.search || "";
            result.path = p + s;
          }
          result.slashes = result.slashes || relative.slashes;
          result.href = result.format();
          return result;
        }
        var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
        if (psychotic) {
          result.hostname = "";
          result.port = null;
          if (result.host) {
            if (srcPath[0] === "") srcPath[0] = result.host;
            else srcPath.unshift(result.host);
          }
          result.host = "";
          if (relative.protocol) {
            relative.hostname = null;
            relative.port = null;
            if (relative.host) {
              if (relPath[0] === "") relPath[0] = relative.host;
              else relPath.unshift(relative.host);
            }
            relative.host = null;
          }
          mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
        }
        if (isRelAbs) {
          result.host = relative.host || relative.host === "" ? relative.host : result.host;
          result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
          result.search = relative.search;
          result.query = relative.query;
          srcPath = relPath;
        } else if (relPath.length) {
          if (!srcPath) srcPath = [];
          srcPath.pop();
          srcPath = srcPath.concat(relPath);
          result.search = relative.search;
          result.query = relative.query;
        } else if (!isNullOrUndefined(relative.search)) {
          if (psychotic) {
            result.hostname = result.host = srcPath.shift();
            var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
            if (authInHost) {
              result.auth = authInHost.shift();
              result.host = result.hostname = authInHost.shift();
            }
          }
          result.search = relative.search;
          result.query = relative.query;
          if (!isNull(result.pathname) || !isNull(result.search)) {
            result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
          }
          result.href = result.format();
          return result;
        }
        if (!srcPath.length) {
          result.pathname = null;
          if (result.search) {
            result.path = "/" + result.search;
          } else {
            result.path = null;
          }
          result.href = result.format();
          return result;
        }
        var last = srcPath.slice(-1)[0];
        var hasTrailingSlash = (result.host || relative.host) && (last === "." || last === "..") || last === "";
        var up = 0;
        for (var i = srcPath.length; i >= 0; i--) {
          last = srcPath[i];
          if (last == ".") {
            srcPath.splice(i, 1);
          } else if (last === "..") {
            srcPath.splice(i, 1);
            up++;
          } else if (up) {
            srcPath.splice(i, 1);
            up--;
          }
        }
        if (!mustEndAbs && !removeAllDots) {
          for (; up--; up) {
            srcPath.unshift("..");
          }
        }
        if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
          srcPath.unshift("");
        }
        if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
          srcPath.push("");
        }
        var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
        if (psychotic) {
          result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
          var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        mustEndAbs = mustEndAbs || result.host && srcPath.length;
        if (mustEndAbs && !isAbsolute) {
          srcPath.unshift("");
        }
        if (!srcPath.length) {
          result.pathname = null;
          result.path = null;
        } else {
          result.pathname = srcPath.join("/");
        }
        if (!isNull(result.pathname) || !isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        }
        result.auth = relative.auth || result.auth;
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      };
      Url.prototype.parseHost = function() {
        var host = this.host;
        var port = portPattern.exec(host);
        if (port) {
          port = port[0];
          if (port !== ":") {
            this.port = port.substr(1);
          }
          host = host.substr(0, host.length - port.length);
        }
        if (host) this.hostname = host;
      };
      function isString(arg) {
        return typeof arg === "string";
      }
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      function isNull(arg) {
        return arg === null;
      }
      function isNullOrUndefined(arg) {
        return arg == null;
      }
    }
  });

  // lib/fuzzy_url_equals.js
  function fuzzyUrlEquals(one, other) {
    other = encodeURI(other);
    return fuzzyIncludes(one, other) || fuzzyIncludes(other, one);
  }
  function fuzzyIncludes(one, other) {
    return one.indexOf(other) !== -1 || other.charAt(other.length - 1) === "/" && one.indexOf(other.slice(0, -1)) !== -1;
  }
  var init_fuzzy_url_equals = __esm({
    "lib/fuzzy_url_equals.js"() {
      "use strict";
    }
  });

  // lib/model.js
  var Account, Credentials, DAVCollection, AddressBook, Calendar, DAVObject, CalendarObject, VCard;
  var init_model = __esm({
    "lib/model.js"() {
      Account = class {
        constructor(options) {
          Object.assign(this, {
            server: null,
            credentials: null,
            rootUrl: null,
            principalUrl: null,
            homeUrl: null,
            calendars: null,
            addressBooks: null
          }, options);
        }
      };
      Credentials = class {
        constructor(options) {
          Object.assign(this, {
            username: null,
            password: null,
            clientId: null,
            clientSecret: null,
            authorizationCode: null,
            redirectUrl: null,
            tokenUrl: null,
            accessToken: null,
            refreshToken: null,
            expiration: null
          }, options);
        }
      };
      DAVCollection = class {
        constructor(options) {
          Object.assign(this, {
            data: null,
            objects: null,
            account: null,
            ctag: null,
            description: null,
            displayName: null,
            reports: null,
            resourcetype: null,
            syncToken: null,
            url: null
          }, options);
        }
      };
      AddressBook = class extends DAVCollection {
        constructor(options) {
          super(options);
        }
      };
      Calendar = class extends DAVCollection {
        constructor(options) {
          super(options);
          Object.assign(this, {
            components: null,
            timezone: null
          }, options);
        }
      };
      DAVObject = class {
        constructor(options) {
          Object.assign(this, {
            data: null,
            etag: null,
            url: null
          }, options);
        }
      };
      CalendarObject = class extends DAVObject {
        constructor(options) {
          super(options);
          Object.assign(this, {
            calendar: null,
            calendarData: null
          }, options);
        }
      };
      VCard = class extends DAVObject {
        constructor(options) {
          super(options);
          Object.assign(this, {
            addressBook: null,
            addressData: null
          }, options);
        }
      };
    }
  });

  // lib/webdav.js
  function createObject(objectUrl, objectData2, options) {
    var req = basic({ method: "PUT", data: objectData2, contentType: "text/vcard;charset=utf-8" });
    return options.xhr.send(req, objectUrl, { sandbox: options.sandbox });
  }
  function updateObject(objectUrl, objectData2, etag, options) {
    var req = basic({ method: "PUT", data: objectData2, etag, contentType: "text/vcard;charset=utf-8" });
    return options.xhr.send(req, objectUrl, { sandbox: options.sandbox });
  }
  function deleteObject(objectUrl, etag, options) {
    var req = basic({ method: "DELETE", etag });
    return options.xhr.send(req, objectUrl, { sandbox: options.sandbox });
  }
  function syncCollection4(collection, options) {
    let syncMethod;
    if ("syncMethod" in options) {
      syncMethod = options.syncMethod;
    } else if (collection.reports && collection.reports.indexOf("syncCollection") !== -1) {
      syncMethod = "webdav";
    } else {
      syncMethod = "basic";
    }
    if (syncMethod === "webdav") {
      debug3("rfc 6578 sync.");
      return options.webdavSync(collection, options);
    } else {
      debug3("basic sync.");
      return options.basicSync(collection, options);
    }
  }
  function updateProperties(objectUrl, options) {
    var req = proppatch3({
      props: options.props
    });
    return options.xhr.send(req, objectUrl, { sandbox: options.sandbox });
  }
  function createCollection(collectionUrl, options) {
    var req = mkcol3({
      props: options.props
    });
    return options.xhr.send(req, collectionUrl, { sandbox: options.sandbox });
  }
  function deleteCollection(collectionUrl, options) {
    var req = basic({ method: "DELETE" });
    return options.xhr.send(req, collectionUrl, { sandbox: options.sandbox });
  }
  var import_co2, debug3, supportedReportSet, isCollectionDirty;
  var init_webdav = __esm({
    "lib/webdav.js"() {
      import_co2 = __toESM(require_co());
      init_fuzzy_url_equals();
      init_namespace();
      init_request();
      debug3 = require_debug()("dav:webdav");
      supportedReportSet = import_co2.default.wrap(function* (collection, options) {
        debug3("Checking supported report set for collection at " + collection.url);
        var req = propfind3({
          props: [{ name: "supported-report-set", namespace: DAV }],
          depth: 1,
          mergeResponses: true
        });
        let response = yield options.xhr.send(req, collection.url, {
          sandbox: options.sandbox
        });
        return response.props.supportedReportSet;
      });
      isCollectionDirty = import_co2.default.wrap(function* (collection, options) {
        if (!collection.ctag) {
          debug3("Missing ctag.");
          return false;
        }
        debug3("Fetch remote getctag prop.");
        var req = propfind3({
          props: [{ name: "getctag", namespace: CALENDAR_SERVER }],
          depth: 0
        });
        let responses = yield options.xhr.send(req, collection.account.homeUrl, {
          sandbox: options.sandbox
        });
        let response = responses.filter((response2) => {
          return fuzzyUrlEquals(collection.url, response2.href);
        })[0];
        if (!response) {
          throw new Error("Could not find collection on remote. Was it deleted?");
        }
        debug3("Check whether cached ctag matches remote.");
        return collection.ctag !== response.props.getctag;
      });
    }
  });

  // lib/calendars.js
  var calendars_exports = {};
  __export(calendars_exports, {
    createCalendarObject: () => createCalendarObject,
    deleteCalendarObject: () => deleteCalendarObject,
    listCalendarObjects: () => listCalendarObjects,
    listCalendars: () => listCalendars,
    syncCaldavAccount: () => syncCaldavAccount,
    syncCalendar: () => syncCalendar,
    updateCalendarObject: () => updateCalendarObject
  });
  function createCalendarObject(calendar, options) {
    var objectUrl = import_url.default.resolve(calendar.url, options.filename);
    return createObject(objectUrl, options.data, options);
  }
  function updateCalendarObject(calendarObject, options) {
    return updateObject(
      calendarObject.url,
      calendarObject.calendarData,
      calendarObject.etag,
      options
    );
  }
  function deleteCalendarObject(calendarObject, options) {
    return deleteObject(
      calendarObject.url,
      calendarObject.etag,
      options
    );
  }
  function syncCalendar(calendar, options) {
    options.basicSync = basicSync;
    options.webdavSync = webdavSync;
    return syncCollection4(calendar, options);
  }
  var import_co3, import_url, debug4, ICAL_OBJS, listCalendars, listCalendarObjects, syncCaldavAccount, basicSync, webdavSync;
  var init_calendars = __esm({
    "lib/calendars.js"() {
      import_co3 = __toESM(require_co());
      import_url = __toESM(require_url());
      init_fuzzy_url_equals();
      init_model();
      init_namespace();
      init_request();
      init_webdav();
      debug4 = require_debug()("dav:calendars");
      ICAL_OBJS = /* @__PURE__ */ new Set([
        "VEVENT",
        "VTODO",
        "VJOURNAL",
        "VFREEBUSY",
        "VTIMEZONE",
        "VALARM"
      ]);
      listCalendars = import_co3.default.wrap(function* (account, options) {
        debug4(`Fetch calendars from home url ${account.homeUrl}`);
        var req = propfind3({
          props: [
            { name: "calendar-description", namespace: CALDAV },
            { name: "calendar-timezone", namespace: CALDAV },
            { name: "displayname", namespace: DAV },
            { name: "getctag", namespace: CALENDAR_SERVER },
            { name: "resourcetype", namespace: DAV },
            { name: "supported-calendar-component-set", namespace: CALDAV },
            { name: "sync-token", namespace: DAV }
          ],
          depth: 1
        });
        let responses = yield options.xhr.send(req, account.homeUrl, {
          sandbox: options.sandbox
        });
        debug4(`Found ${responses.length} calendars.`);
        let cals = responses.filter((res) => {
          let components = res.props.supportedCalendarComponentSet || [];
          return components.reduce((hasObjs, component) => {
            return hasObjs || ICAL_OBJS.has(component);
          }, false);
        }).map((res) => {
          debug4(`Found calendar ${res.props.displayname},
             props: ${JSON.stringify(res.props)}`);
          return new Calendar({
            data: res,
            account,
            description: res.props.calendarDescription,
            timezone: res.props.calendarTimezone,
            url: import_url.default.resolve(account.rootUrl, res.href),
            ctag: res.props.getctag,
            displayName: res.props.displayname,
            components: res.props.supportedCalendarComponentSet,
            resourcetype: res.props.resourcetype,
            syncToken: res.props.syncToken
          });
        });
        yield cals.map(import_co3.default.wrap(function* (cal) {
          cal.reports = yield supportedReportSet(cal, options);
        }));
        return cals;
      });
      listCalendarObjects = import_co3.default.wrap(function* (calendar, options) {
        debug4(`Doing REPORT on calendar ${calendar.url} which belongs to
         ${calendar.account.credentials.username}`);
        let filters = options.filters || [{
          type: "comp-filter",
          attrs: { name: "VCALENDAR" },
          children: [{
            type: "comp-filter",
            attrs: { name: "VEVENT" }
          }]
        }];
        let req = calendarQuery3({
          depth: 1,
          props: [
            { name: "getetag", namespace: DAV },
            { name: "calendar-data", namespace: CALDAV }
          ],
          filters
        });
        let responses = yield options.xhr.send(req, calendar.url, {
          sandbox: options.sandbox
        });
        return responses.map((res) => {
          debug4(`Found calendar object with url ${res.href}`);
          return new CalendarObject({
            data: res,
            calendar,
            url: import_url.default.resolve(calendar.account.rootUrl, res.href),
            etag: res.props.getetag,
            calendarData: res.props.calendarData
          });
        });
      });
      syncCaldavAccount = import_co3.default.wrap(function* (account, options = {}) {
        options.loadObjects = false;
        if (!account.calendars) account.calendars = [];
        let cals = yield listCalendars(account, options);
        cals.filter((cal) => {
          return account.calendars.every((prev) => !fuzzyUrlEquals(prev.url, cal.url));
        }).forEach((cal) => {
          account.calendars.push(cal);
        });
        options.loadObjects = true;
        yield account.calendars.map(import_co3.default.wrap(function* (cal, index) {
          try {
            yield syncCalendar(cal, options);
          } catch (error) {
            debug4(`Sync calendar ${cal.displayName} failed with ${error}`);
            account.calendars.splice(index, 1);
          }
        }));
        return account;
      });
      basicSync = import_co3.default.wrap(function* (calendar, options) {
        let sync = yield isCollectionDirty(calendar, options);
        if (!sync) {
          debug4("Local ctag matched remote! No need to sync :).");
          return calendar;
        }
        debug4("ctag changed so we need to fetch stuffs.");
        calendar.objects = yield listCalendarObjects(calendar, options);
        return calendar;
      });
      webdavSync = import_co3.default.wrap(function* (calendar, options) {
        var req = syncCollection3({
          props: [
            { name: "getetag", namespace: DAV },
            { name: "calendar-data", namespace: CALDAV }
          ],
          syncLevel: 1,
          syncToken: calendar.syncToken
        });
        let result = yield options.xhr.send(req, calendar.url, {
          sandbox: options.sandbox
        });
        result.responses.forEach(function(response) {
          var calendarObject = calendar.objects.filter(function(object) {
            return fuzzyUrlEquals(object.url, response.href);
          })[0];
          if (!calendarObject) {
            return;
          }
          calendarObject.etag = response.props.getetag;
          calendarObject.calendarData = response.props.calendarData;
        });
        calendar.syncToken = result.syncToken;
        return calendar;
      });
    }
  });

  // lib/contacts.js
  var contacts_exports = {};
  __export(contacts_exports, {
    createAddressBook: () => createAddressBook,
    createCard: () => createCard,
    deleteAddressBook: () => deleteAddressBook,
    deleteCard: () => deleteCard,
    getAddressBook: () => getAddressBook,
    listAddressBooks: () => listAddressBooks,
    listVCards: () => listVCards,
    renameAddressBook: () => renameAddressBook,
    syncAddressBook: () => syncAddressBook,
    syncCarddavAccount: () => syncCarddavAccount,
    updateCard: () => updateCard
  });
  function getAddressBook(options) {
    let addressBookUrl = import_url2.default.resolve(options.url, options.displayName);
    var req = propfind3({
      props: [
        { name: "displayname", namespace: DAV },
        { name: "owner", namespace: DAV },
        { name: "getctag", namespace: CALENDAR_SERVER },
        { name: "resourcetype", namespace: DAV },
        { name: "sync-token", namespace: DAV },
        //{ name: 'groups', namespace: ns.OC },
        { name: "invite", namespace: OC }
      ],
      depth: 1
    });
    return options.xhr.send(req, addressBookUrl);
  }
  function createAddressBook(options) {
    let collectionUrl = import_url2.default.resolve(options.url, options.displayName);
    options.props = [
      {
        name: "resourcetype",
        namespace: DAV,
        children: [
          { name: "collection", namespace: DAV },
          { name: "addressbook", namespace: CARDDAV }
        ]
      },
      { name: "displayname", value: options.displayName, namespace: DAV }
    ];
    return createCollection(collectionUrl, options);
  }
  function deleteAddressBook(addressBook, options) {
    return deleteCollection(addressBook.url, options);
  }
  function renameAddressBook(addressBook, options) {
    options.props = [
      { name: "displayname", value: options.displayName, namespace: DAV }
    ];
    return updateProperties(addressBook.url, options);
  }
  function createCard(addressBook, options) {
    let objectUrl = import_url2.default.resolve(addressBook.url, options.filename);
    return createObject(objectUrl, options.data, options);
  }
  function updateCard(card, options) {
    return updateObject(
      card.url,
      card.addressData,
      card.etag,
      options
    );
  }
  function deleteCard(card, options) {
    return deleteObject(
      card.url,
      card.etag,
      options
    );
  }
  function syncAddressBook(addressBook, options) {
    options.basicSync = basicSync2;
    options.webdavSync = webdavSync2;
    return syncCollection4(addressBook, options);
  }
  var import_co4, import_url2, debug5, listAddressBooks, listVCards, syncCarddavAccount, basicSync2, webdavSync2;
  var init_contacts = __esm({
    "lib/contacts.js"() {
      import_co4 = __toESM(require_co());
      import_url2 = __toESM(require_url());
      init_fuzzy_url_equals();
      init_model();
      init_namespace();
      init_request();
      init_webdav();
      debug5 = require_debug()("dav:contacts");
      listAddressBooks = import_co4.default.wrap(function* (account, options) {
        debug5(`Fetch address books from home url ${account.homeUrl}`);
        var req = propfind3({
          props: [
            { name: "displayname", namespace: DAV },
            { name: "owner", namespace: DAV },
            { name: "getctag", namespace: CALENDAR_SERVER },
            { name: "resourcetype", namespace: DAV },
            { name: "sync-token", namespace: DAV },
            //{ name: 'groups', namespace: ns.OC },
            { name: "invite", namespace: OC }
          ],
          depth: 1
        });
        let responses = yield options.xhr.send(req, account.homeUrl, {
          sandbox: options.sandbox
        });
        let addressBooks = responses.filter((res) => {
          return typeof res.props.displayname === "string";
        }).map((res) => {
          debug5(`Found address book named ${res.props.displayname},
             props: ${JSON.stringify(res.props)}`);
          return new AddressBook({
            data: res,
            account,
            url: import_url2.default.resolve(account.rootUrl, res.href),
            ctag: res.props.getctag,
            displayName: res.props.displayname,
            resourcetype: res.props.resourcetype,
            syncToken: res.props.syncToken
          });
        });
        yield addressBooks.map(import_co4.default.wrap(function* (addressBook) {
          addressBook.reports = yield supportedReportSet(addressBook, options);
        }));
        return addressBooks;
      });
      listVCards = import_co4.default.wrap(function* (addressBook, options) {
        debug5(`Doing REPORT on address book ${addressBook.url} which belongs to
        ${addressBook.account.credentials.username}`);
        var req = addressBookQuery3({
          depth: 1,
          props: [
            { name: "getetag", namespace: DAV },
            { name: "address-data", namespace: CARDDAV }
          ]
        });
        let responses = yield options.xhr.send(req, addressBook.url, {
          sandbox: options.sandbox
        });
        return responses.map((res) => {
          debug5(`Found vcard with url ${res.href}`);
          return new VCard({
            data: res,
            addressBook,
            url: import_url2.default.resolve(addressBook.account.rootUrl, res.href),
            etag: res.props.getetag,
            addressData: res.props.addressData
          });
        });
      });
      syncCarddavAccount = import_co4.default.wrap(function* (account, options = {}) {
        options.loadObjects = false;
        if (!account.addressBooks) {
          account.addressBooks = [];
        }
        let addressBooks = yield listAddressBooks(account, options);
        addressBooks.filter(function(addressBook) {
          return account.addressBooks.every(
            (prev) => !fuzzyUrlEquals(prev.url, addressBook.url)
          );
        }).forEach((addressBook) => account.addressBooks.push(addressBook));
        options.loadObjects = true;
        yield account.addressBooks.map(import_co4.default.wrap(function* (addressBook, index) {
          try {
            yield syncAddressBook(addressBook, options);
          } catch (error) {
            debug5(`Syncing ${addressBook.displayName} failed with ${error}`);
            account.addressBooks.splice(index, 1);
          }
        }));
        return account;
      });
      basicSync2 = import_co4.default.wrap(function* (addressBook, options) {
        let sync = isCollectionDirty(addressBook, options);
        if (!sync) {
          debug5("Local ctag matched remote! No need to sync :).");
          return addressBook;
        }
        debug5("ctag changed so we need to fetch stuffs.");
        addressBook.objects = yield listVCards(addressBook, options);
        return addressBook;
      });
      webdavSync2 = import_co4.default.wrap(function* (addressBook, options) {
        var req = syncCollection3({
          props: [
            { name: "getetag", namespace: DAV },
            { name: "address-data", namespace: CARDDAV }
          ],
          syncLevel: 1,
          syncToken: addressBook.syncToken
        });
        let result = yield options.xhr.send(req, addressBook.url, {
          sandbox: options.sandbox
        });
        result.responses.forEach((response) => {
          let vcard = addressBook.objects.filter((object) => {
            return fuzzyUrlEquals(object.url, response.href);
          })[0];
          if (!vcard) return;
          vcard.etag = response.props.getetag;
          vcard.addressData = response.props.addressData;
        });
        addressBook.syncToken = result.syncToken;
        return addressBook;
      });
    }
  });

  // lib/accounts.js
  var require_accounts = __commonJS({
    "lib/accounts.js"(exports) {
      var import_co5 = __toESM(require_co());
      var import_url4 = __toESM(require_url());
      init_calendars();
      init_contacts();
      init_fuzzy_url_equals();
      init_model();
      init_namespace();
      init_request();
      var debug8 = require_debug()("dav:accounts");
      var defaults = {
        accountType: "caldav",
        loadCollections: true,
        loadObjects: false
      };
      var serviceDiscovery = import_co5.default.wrap(function* (account, options) {
        debug8("Attempt service discovery.");
        let endpoint = import_url4.default.parse(account.server);
        endpoint.protocol = endpoint.protocol || "http";
        let uri = import_url4.default.format({
          protocol: endpoint.protocol,
          host: endpoint.host,
          pathname: !options.useProvidedPath ? "/.well-known/" + options.accountType : endpoint.pathname
        });
        let req = basic({ method: "GET" });
        try {
          let xhr = yield options.xhr.send(req, uri, { sandbox: options.sandbox });
          if (xhr.status >= 300 && xhr.status < 400) {
            let location = xhr.getResponseHeader("Location");
            if (typeof location === "string" && location.length) {
              debug8(`Discovery redirected to ${location}`);
              return import_url4.default.format({
                protocol: endpoint.protocol,
                host: endpoint.host,
                pathname: location
              });
            }
          }
        } catch (error) {
          debug8("Discovery failed... failover to the provided url");
        }
        return endpoint.href;
      });
      var principalUrl = import_co5.default.wrap(function* (account, options) {
        debug8(`Fetch principal url from context path ${account.rootUrl}.`);
        let req = propfind3({
          props: [{ name: "current-user-principal", namespace: DAV }],
          depth: 0,
          mergeResponses: true
        });
        let res = yield options.xhr.send(req, account.rootUrl, {
          sandbox: options.sandbox
        });
        let container = res.props;
        debug8(`Received principal: ${container.currentUserPrincipal}`);
        return import_url4.default.resolve(account.rootUrl, container.currentUserPrincipal);
      });
      var homeUrl = import_co5.default.wrap(function* (account, options) {
        debug8(`Fetch home url from principal url ${account.principalUrl}.`);
        let prop2;
        if (options.accountType === "caldav") {
          prop2 = { name: "calendar-home-set", namespace: CALDAV };
        } else if (options.accountType === "carddav") {
          prop2 = { name: "addressbook-home-set", namespace: CARDDAV };
        }
        var req = propfind3({ props: [prop2] });
        let responses = yield options.xhr.send(req, account.principalUrl, {
          sandbox: options.sandbox
        });
        let response = responses.find((response2) => {
          return fuzzyUrlEquals(account.principalUrl, response2.href);
        });
        let container = response.props;
        let href;
        if (options.accountType === "caldav") {
          debug8(`Received home: ${container.calendarHomeSet}`);
          href = container.calendarHomeSet;
        } else if (options.accountType === "carddav") {
          debug8(`Received home: ${container.addressbookHomeSet}`);
          href = container.addressbookHomeSet;
        }
        return import_url4.default.resolve(account.rootUrl, href);
      });
      exports.createAccount = import_co5.default.wrap(function* (options) {
        options = Object.assign({}, defaults, options);
        if (typeof options.loadObjects !== "boolean") {
          options.loadObjects = options.loadCollections;
        }
        let account = new Account({
          server: options.server,
          credentials: options.xhr.credentials
        });
        account.rootUrl = yield serviceDiscovery(account, options);
        account.principalUrl = yield principalUrl(account, options);
        account.homeUrl = yield homeUrl(account, options);
        if (!options.loadCollections) {
          return account;
        }
        let key, loadCollections, loadObjects;
        if (options.accountType === "caldav") {
          key = "calendars";
          loadCollections = listCalendars;
          loadObjects = listCalendarObjects;
        } else if (options.accountType === "carddav") {
          key = "addressBooks";
          loadCollections = listAddressBooks;
          loadObjects = listVCards;
        }
        var collections = yield loadCollections(account, options);
        account[key] = collections;
        if (!options.loadObjects) {
          return account;
        }
        yield collections.map(import_co5.default.wrap(function* (collection) {
          try {
            collection.objects = yield loadObjects(collection, options);
          } catch (error) {
            collection.error = error;
          }
        }));
        account[key] = account[key].filter(function(collection) {
          return !collection.error;
        });
        return account;
      });
    }
  });

  // lib/index.js
  var index_exports = {};
  __export(index_exports, {
    Account: () => Account,
    AddressBook: () => AddressBook,
    Calendar: () => Calendar,
    CalendarObject: () => CalendarObject,
    Client: () => Client,
    Credentials: () => Credentials,
    DAVCollection: () => DAVCollection,
    DAVObject: () => DAVObject,
    Request: () => Request,
    Sandbox: () => Sandbox,
    VCard: () => VCard,
    createAccount: () => import_accounts.createAccount,
    createAddressBook: () => createAddressBook,
    createCalendarObject: () => createCalendarObject,
    createCard: () => createCard,
    createSandbox: () => createSandbox,
    debug: () => import_debug.default,
    deleteAddressBook: () => deleteAddressBook,
    deleteCalendarObject: () => deleteCalendarObject,
    deleteCard: () => deleteCard,
    getAddressBook: () => getAddressBook,
    listAddressBooks: () => listAddressBooks,
    listCalendarObjects: () => listCalendarObjects,
    listCalendars: () => listCalendars,
    listVCards: () => listVCards,
    ns: () => namespace_exports,
    renameAddressBook: () => renameAddressBook,
    request: () => request_exports,
    syncAddressBook: () => syncAddressBook,
    syncCaldavAccount: () => syncCaldavAccount,
    syncCalendar: () => syncCalendar,
    syncCarddavAccount: () => syncCarddavAccount,
    transport: () => transport_exports,
    updateCalendarObject: () => updateCalendarObject,
    updateCard: () => updateCard,
    version: () => version
  });
  var import_debug = __toESM(require_debug());
  init_namespace();
  init_request();

  // lib/transport.js
  var transport_exports = {};
  __export(transport_exports, {
    Basic: () => Basic,
    OAuth2: () => OAuth2,
    Transport: () => Transport
  });
  var import_co = __toESM(require_co());
  var import_querystring = __toESM(require_querystring());

  // lib/xmlhttprequest.js
  var debug2 = require_debug()("dav:xmlhttprequest");
  var Native;
  if (typeof self !== "undefined" && "XMLHttpRequest" in self) {
    Native = self.XMLHttpRequest;
  } else {
    Native = require_xmlhttprequest().XMLHttpRequest;
  }
  var XMLHttpRequest = class {
    constructor(options) {
      this.request = new Native(options);
      this.sandbox = null;
      [
        "response",
        "responseText",
        "responseType",
        "responseXML",
        "timeout",
        "upload",
        "withCredentials"
      ].forEach((attribute) => {
        Object.defineProperty(this, attribute, {
          get: function() {
            return this.request[attribute];
          },
          set: function(value) {
            this.request[attribute] = value;
          }
        });
      });
      [
        "status",
        "statusText"
      ].forEach((attribute) => {
        Object.defineProperty(this, attribute, {
          get: function() {
            return this.request[attribute];
          }
        });
      });
    }
    abort() {
      return this._callNative("abort", arguments);
    }
    getAllResponseHeaders() {
      return this._callNative("getAllResponseHeaders", arguments);
    }
    getResponseHeader() {
      return this._callNative("getResponseHeader", arguments);
    }
    open() {
      return this._callNative("open", arguments);
    }
    overrideMimeType() {
      return this._callNative("overrideMimeType", arguments);
    }
    setRequestHeader() {
      return this._callNative("setRequestHeader", arguments);
    }
    send(data) {
      debug2(`Sending request data: ${data}`);
      if (this.sandbox) this.sandbox.add(this);
      let request = this.request;
      request.send(data);
      return new Promise(function(resolve, reject) {
        request.onreadystatechange = function() {
          if (request.readyState !== 4) {
            return;
          }
          if (request.status < 200 || request.status >= 400) {
            return reject(request);
          }
          return resolve(request.responseText);
        };
        request.ontimeout = function() {
          reject(new Error(`Request timed out after ${request.timeout} ms`));
        };
      });
    }
    _callNative(method, args) {
      return this.request[method].apply(this.request, args);
    }
  };

  // lib/transport.js
  var Transport = class {
    /**
     * @param {dav.Credentials} credentials user authorization.
     */
    constructor(credentials) {
      this.credentials = credentials || null;
    }
    /**
     * @param {dav.Request} request object with request info.
     * @return {Promise} a promise that will be resolved with an xhr request after
     *     its readyState is 4 or the result of applying an optional request
     *     `transformResponse` function to the xhr object after its readyState is 4.
     *
     * Options:
     *
     *   (Object) sandbox - optional request sandbox.
     */
    send() {
    }
  };
  var Basic = class extends Transport {
    /**
     * @param {dav.Credentials} credentials user authorization.
     */
    constructor(credentials) {
      super(credentials);
    }
    send(request, url4, options) {
      return (0, import_co.default)(function* () {
        let sandbox = options && options.sandbox;
        let transformRequest = request.transformRequest;
        let transformResponse = request.transformResponse;
        let onerror = request.onerror;
        let xhr = new XMLHttpRequest();
        if (sandbox) sandbox.add(xhr);
        xhr.open(
          request.method,
          url4,
          true,
          this.credentials.username,
          this.credentials.password
        );
        if (transformRequest) transformRequest(xhr);
        let result;
        try {
          xhr.setRequestHeader("requesttoken", oc_requesttoken);
          yield xhr.send(request.requestData);
          result = transformResponse ? transformResponse(xhr) : xhr;
        } catch (error) {
          if (onerror) onerror(error);
          throw error;
        }
        return result;
      }.bind(this));
    }
  };
  var OAuth2 = class extends Transport {
    constructor(credentials) {
      super(credentials);
    }
    send(request, url4, options = {}) {
      return (0, import_co.default)(function* () {
        let sandbox = options.sandbox;
        let transformRequest = request.transformRequest;
        let transformResponse = request.transformResponse;
        let onerror = request.onerror;
        if (!("retry" in options)) options.retry = true;
        let result, xhr;
        try {
          let token = yield access(this.credentials, options);
          xhr = new XMLHttpRequest();
          if (sandbox) sandbox.add(xhr);
          xhr.open(
            request.method,
            url4,
            true
            /* async */
          );
          xhr.setRequestHeader("Authorization", `Bearer ${token}`);
          if (transformRequest) transformRequest(xhr);
          xhr.setRequestHeader("requesttoken", oc_requesttoken);
          yield xhr.send(request.requestData);
          result = transformResponse ? transformResponse(xhr) : xhr;
        } catch (error) {
          if (options.retry && xhr.status === 401) {
            this.credentials.expiration = 0;
            options.retry = false;
            return this.send(request, url4, options);
          }
          if (onerror) onerror(error);
          throw error;
        }
        return result;
      }.bind(this));
    }
  };
  function access(credentials, options) {
    if (!credentials.accessToken) {
      return getAccessToken(credentials, options);
    }
    if (credentials.refreshToken && isExpired(credentials)) {
      return refreshAccessToken(credentials, options);
    }
    return Promise.resolve(credentials.accessToken);
  }
  function isExpired(credentials) {
    return typeof credentials.expiration === "number" && Date.now() > credentials.expiration;
  }
  var getAccessToken = import_co.default.wrap(function* (credentials, options) {
    let sandbox = options.sandbox;
    let xhr = new XMLHttpRequest();
    if (sandbox) sandbox.add(xhr);
    xhr.open(
      "POST",
      credentials.tokenUrl,
      true
      /* async */
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let data = import_querystring.default.stringify({
      code: credentials.authorizationCode,
      redirect_uri: credentials.redirectUrl,
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
      grant_type: "authorization_code"
    });
    let now = Date.now();
    yield xhr.send(data);
    let response = JSON.parse(xhr.responseText);
    credentials.accessToken = response.access_token;
    credentials.refreshToken = "refresh_token" in response ? response.refresh_token : null;
    credentials.expiration = "expires_in" in response ? now + response.expires_in : null;
    return response.access_token;
  });
  var refreshAccessToken = import_co.default.wrap(function* (credentials, options) {
    let sandbox = options.sandbox;
    let xhr = new XMLHttpRequest();
    if (sandbox) sandbox.add(xhr);
    xhr.open(
      "POST",
      credentials.tokenUrl,
      true
      /* async */
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let data = import_querystring.default.stringify({
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
      refresh_token: credentials.refreshToken,
      grant_type: "refresh_token"
    });
    let now = Date.now();
    yield xhr.send(data);
    let response = JSON.parse(xhr.responseText);
    credentials.accessToken = response.access_token;
    credentials.expiration = "expires_in" in response ? now + response.expires_in : null;
    return response.access_token;
  });

  // package.json
  var version = "1.8.0";

  // lib/index.js
  var import_accounts = __toESM(require_accounts());
  init_calendars();

  // lib/client.js
  var import_url3 = __toESM(require_url());
  var accounts = __toESM(require_accounts());
  init_calendars();
  init_contacts();
  var Client = class {
    constructor(xhr, options = {}) {
      this.xhr = xhr;
      Object.assign(this, options);
      this._accounts = accounts;
      this._calendars = calendars_exports;
      this._contacts = contacts_exports;
    }
    /**
     * @param {dav.Request} req - dav request.
     * @param {String} uri - where to send request.
     * @return {Promise} a promise that will be resolved with an xhr request
     *     after its readyState is 4 or the result of applying an optional
     *     request `transformResponse` function to the xhr object after its
     *     readyState is 4.
     *
     * Options:
     *
     *   (Object) sandbox - optional request sandbox.
     */
    send(req, uri, options) {
      if (this.baseUrl) {
        let urlObj = import_url3.default.parse(uri);
        uri = import_url3.default.resolve(this.baseUrl, urlObj.path);
      }
      return this.xhr.send(req, uri, options);
    }
    createAccount(options = {}) {
      options.xhr = options.xhr || this.xhr;
      return accounts.createAccount(options);
    }
    createCalendarObject(calendar, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return createCalendarObject(calendar, options);
    }
    updateCalendarObject(calendarObject, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return updateCalendarObject(calendarObject, options);
    }
    deleteCalendarObject(calendarObject, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return deleteCalendarObject(calendarObject, options);
    }
    syncCalendar(calendar, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return syncCalendar(calendar, options);
    }
    syncCaldavAccount(account, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return syncCaldavAccount(account, options);
    }
    getAddressBook(options = {}) {
      options.xhr = options.xhr || this.xhr;
      return getAddressBook(options);
    }
    createAddressBook(options = {}) {
      options.xhr = options.xhr || this.xhr;
      return createAddressBook(options);
    }
    deleteAddressBook(addressBook, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return deleteAddressBook(addressBook, options);
    }
    renameAddressBook(addressBook, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return renameAddressBook(addressBook, options);
    }
    createCard(addressBook, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return createCard(addressBook, options);
    }
    updateCard(card, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return updateCard(card, options);
    }
    deleteCard(card, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return deleteCard(card, options);
    }
    syncAddressBook(addressBook, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return syncAddressBook(addressBook, options);
    }
    syncCarddavAccount(account, options = {}) {
      options.xhr = options.xhr || this.xhr;
      return syncCarddavAccount(account, options);
    }
  };

  // lib/index.js
  init_contacts();
  init_model();
  init_request();

  // lib/sandbox.js
  var debug6 = require_debug()("dav:sandbox");
  var Sandbox = class {
    constructor() {
      this.requestList = [];
    }
    add(request) {
      debug6("Adding request to sandbox.");
      this.requestList.push(request);
    }
    abort() {
      debug6("Aborting sandboxed requests.");
      this.requestList.forEach((request) => request.abort());
    }
  };
  function createSandbox() {
    return new Sandbox();
  }
  return __toCommonJS(index_exports);
})();
/*! Bundled license information:

punycode/punycode.js:
  (*! https://mths.be/punycode v1.3.2 by @mathias *)
*/
