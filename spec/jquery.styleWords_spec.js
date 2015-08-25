/**
 * Created by xuesongdu on 25/08/15.
 */
describe("jQuery.styleWords", function () {

    var frag;
    beforeEach(function () {
        frag = $(readFixtures('fragment.html'));
    });

    it("should be available on the jQuery object", function () {
        expect($.fn.styleWords).toBeDefined();
    });

    it("should be chainable", function () {
        expect(frag.styleWords()).toBe(frag);
    });

    it("should wrap a specified number of words within a span tag", function () {
        frag.styleWords();
        expect(frag.find('span').length).toBe(1);
    });



});