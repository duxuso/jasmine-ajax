/**
 * Created by xuesongdu on 25/08/15.
 */
$.fn.styleWords = function () {
    return this.each(function () {

        var el = $(this);

        // var words = $(this).text().split(' ');
        var words = el.text().split(' ');
        //console.log(words);

        // var wrapper = $('<span></span>').text(words[0]);
        var wrapper = $('<span></span>').text(words.shift());
        //console.log(wrapper);

        //var html = $('<div>').append(wrapper).html();
        wrapper = $('<div>').append(wrapper).html();
        //console.log(html);

        //var ret = html + ' '+words.join(' ');
        //wrapper = [wrapper].concat(words).join(' ');
        //return [wrapper].concat(words).join(' ');

        //console.log(ret);
        //console.log(wrapper);
        //
        // console.log([wrapper].concat(words).join(' '));

        // return [wrapper].concat(words).join(' ');
        // or
        // $(this).html(function () {
        el.html(function(){
            return [wrapper].concat(words).join(' ');
        });


        /* third test
        var s = $('<span></span>').text(words[0]);
        console.log(s);
        */
        /* second test
            $(this).text('nice');
            console.log(this);
        */
        // $(this).text('Lorem ipsum dolar sit amet.') // first test
    });
};