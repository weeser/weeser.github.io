/* 
 * Author = Philip Cooksey
 * Edited = September 2018
 * Website = https://github.com/pcooksey/bibtex-js
 * Credit = Henrik Mühe
 *
 * Issues:
 *  no comment handling within strings
 *  no string concatenation
 *  no variable values yet
 
 * Grammar implemented here:
 *  bibtex -> (string | preamble | comment | entry)*;
 *  string -> '@STRING' '{' key_equals_value '}';
 *  preamble -> '@PREAMBLE' '{' value '}';
 *  comment -> '@COMMENT' '{' value '}';
 *  entry -> '@' key '{' key ',' key_value_list '}';
 *  key_value_list -> key_equals_value (',' key_equals_value)*;
 *  key_equals_value -> key '=' value;
 *  value -> value_quotes | value_braces | key;
 *  value_quotes -> '"' .*? '"'; // not quite
 *  value_braces -> '{' .*? '"'; // not quite
 *
 */

export function BibtexParser() {
    this.pos = 0;
    this.input = "";

    this.entries = {};
    this.strings = {
        JAN: "January",
        FEB: "February",
        MAR: "March",
        APR: "April",
        MAY: "May",
        JUN: "June",
        JUL: "July",
        AUG: "August",
        SEP: "September",
        OCT: "October",
        NOV: "November",
        DEC: "December"
    };
    this.currentKey = "";
    this.rawCurrentKey = "";
    this.currentEntry = "";


    this.setInput = function(t) {
        this.input = t;
    }

    this.getEntries = function() {
        return this.entries;
    }

    this.getBibTexRaw = function() {
        return this.bibtexraw;
    }

    this.errorThrown = function(str) {
        $("#bibtex_errors").html(str);
    }

    this.isWhitespace = function(s) {
        return (s == ' ' || s == '\r' || s == '\t' || s == '\n');
    }

    this.match = function(s) {
        this.skipWhitespace();
        if (this.input.substring(this.pos, this.pos + s.length) == s) {
            this.pos += s.length;
        } else {
            throw "Token mismatch, expected " + s + ", found " + this.input.substring(this.pos);
        }
        this.skipWhitespace();
    }

    this.tryMatch = function(s) {
        this.skipWhitespace();
        if (this.input.substring(this.pos, this.pos + s.length) == s) {
            return true;
        } else {
            return false;
        }
        this.skipWhitespace();
    }

    this.skipWhitespace = function() {
        while (this.isWhitespace(this.input[this.pos])) {
            this.pos++;
        }
        if (this.input[this.pos] == "%") {
            while (this.input[this.pos] != "\n") {
                this.pos++;
            }
            this.skipWhitespace();
        }
    }

    this.value_braces = function() {
        var bracecount = 0;
        this.match("{");
        var start = this.pos;
        while (true) {
            if (this.input[this.pos] == '}' && this.input[this.pos - 1] != '\\') {
                if (bracecount > 0) {
                    bracecount--;
                } else {
                    var end = this.pos;
                    this.match("}");
                    return this.input.substring(start, end);
                }
            } else if (this.input[this.pos] == '{') {
                bracecount++;
            } else if (this.pos == this.input.length - 1) {
                throw "Unterminated value";
            }
            this.pos++;
        }
    }

    this.value_quotes = function() {
        var bracecount = 0;
        this.match('"');
        var start = this.pos;
        while (true) {
            if (this.input[this.pos] == '"' && this.input[this.pos - 1] != '\\' && bracecount == 0) {
                var end = this.pos;
                this.match('"');
                return this.input.substring(start, end);
            } else if (this.input[this.pos] == '{') {
                bracecount++;
            } else if (this.input[this.pos] == '}') {
                if (bracecount > 0) {
                    bracecount--;
                }
            } else if (this.pos == this.input.length - 1) {
                throw "Unterminated value:" + this.input.substring(start);
            }
            this.pos++;
        }
    }

    this.single_value = function() {
        var start = this.pos;
        if (this.tryMatch("{")) {
            return this.value_braces();
        } else if (this.tryMatch('"')) {
            return this.value_quotes();
        } else {
            var k = this.key();
            if (this.strings[k.toUpperCase()]) {
                return this.strings[k];
            } else if (k.match("^[0-9]+$")) {
                return k;
            } else {
                throw "Value expected:" + this.input.substring(start);
            }
        }
    }

    this.value = function() {
        var values = [];
        values.push(this.single_value());
        while (this.tryMatch("#")) {
            this.match("#");
            values.push(this.single_value());
        }
        return values.join("");
    }

    this.key = function() {
        var start = this.pos;
        while (true) {
            if (this.pos == this.input.length) {
                throw "Runaway key";
            }

            if (this.input[this.pos].match("[a-zA-Z0-9_:?\\./'\\+\\-\\*]")) {
                this.pos++
            } else {
                this.rawCurrentKey = this.input.substring(start, this.pos);
                return this.rawCurrentKey.toUpperCase();
            }
        }
    }


    this.key_equals_value = function() {
        var key = this.key();
        if (this.tryMatch("=")) {
            this.match("=");
            var val = this.value();
            return [key, val];
        } else {
            throw "... = value expected, equals sign missing:" + this.input.substring(this.pos);
        }
    }

    this.key_value_list = function() {
        var kv = this.key_equals_value();
        this.entries[this.currentEntry][kv[0]] = kv[1];
        while (this.tryMatch(",")) {
            this.match(",");
            // fixes problems with commas at the end of a list
            if (this.tryMatch("}") || this.tryMatch(")")) {
                break;
            }
            kv = this.key_equals_value();
            this.entries[this.currentEntry][kv[0]] = kv[1];
        }
    }

    this.entry_body = function(directive) {
        this.currentEntry = this.key();
        this.entries[this.currentEntry] = new Object();
        this.entries[this.currentEntry]["BIBTEXKEY"] = this.rawCurrentKey;
        if (directive == "@INCOLLECTION") {
            this.entries[this.currentEntry]["BIBTEXTYPE"] = "book chapter";
        } else if (directive == "@INPROCEEDINGS") {
            this.entries[this.currentEntry]["BIBTEXTYPE"] = "conference, workshop";
        } else if (directive == "@ARTICLE") {
            this.entries[this.currentEntry]["BIBTEXTYPE"] = "journal";
        } else if (directive == "@TECHREPORT") {
            this.entries[this.currentEntry]["BIBTEXTYPE"] = "technical report";
        }
        this.entries[this.currentEntry]["BIBTEXTYPEKEY"] = directive.substr(1);
        this.match(",");
        this.key_value_list();
    }

    this.directive = function() {
        this.match("@");
        return "@" + this.key();
    }

    this.string = function() {
        var kv = this.key_equals_value();
        this.strings[kv[0].toUpperCase()] = kv[1];
    }

    this.preamble = function() {
        this.value();
    }

    this.comment = function() {
        this.pos = this.input.indexOf("}", this.pos);
    }

    this.entry = function(directive) {
        this.entry_body(directive);
    }

    this.bibtex = function() {
        var start = 0;
        var end = 0;
        while (this.tryMatch("@")) {
            start = this.pos;
            var d = this.directive().toUpperCase();
            if (this.tryMatch("{")) {
                this.match("{");
            } else {
                this.match("(");
            }
            if (d == "@STRING") {
                this.string();
            } else if (d == "@PREAMBLE") {
                this.preamble();
            } else if (d == "@COMMENT") {
                this.comment();
            } else {
                this.entry(d);
            }
            end = this.pos + 1;
            if (this.tryMatch("}")) {
                this.match("}");
            } else {
                this.match(")");
            }
            if (this.tryMatch(",")) {
                this.match(",");
            }
            // In case there is extra stuff in between entries
            this.pos = end + this.input.substring(end, this.input.length).indexOf("@");
            this.entries[this.currentEntry]["BIBTEXRAW"] = this.input.substring(start, end);
        }
    }
}