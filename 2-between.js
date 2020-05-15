'use strict';

// Implementation

const between = (str, quotes) => {
    let i = str.indexOf(quotes[0]);
    if (i === -1) return '';
    str = str.substring(i + 1);
    if (quotes[i]) {
        i = str.indexOf(quotes[i]);
        if (i === -1) return '';
        str = str.substring(0, i);
    }
    return str;
};

// Tests

const assert = require('assert').strict;

{
    const line = 'Marcus Aurelius <marcus@spqr.re>';
    const email = between(line, '<>');
    const expected = 'marcus@spqr.re';
    assert.equal(email, expected);
}
{
    const line = 'Marcus Aurelius email is <>';
    const email = between(line, '<>');
    const expected = '';
    assert.equal(email, expected);
}
{
    const line = 'Marcus Aurelius email is <marcus@spqr.re>';
    const email = between(line, '<>');
    const expected = '';
    assert.equal(email, expected);
}
{
    const line = 'Marcus Aurelius >marcus@spqr.re<';
    const email = between(line, '<>');
    const expected = '';
    assert.equal(email, expected);
}