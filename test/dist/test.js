/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var array = require( '@stdlib/ndarray-array' );
var isReadOnly = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isReadOnly, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a read-only ndarray', function test( t ) {
	var values;
	var bool;
	var opts;
	var i;

	opts = {
		'readonly': true
	};
	values = [
		array( [ 1, 2, 3, 4 ], opts ),
		array( [ [ 1, 2 ], [ 3, 4 ] ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = isReadOnly( values[ i ] );
		t.strictEqual( bool, true, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a read-only ndarray', function test( t ) {
	var values;
	var bool;
	var opts;
	var i;

	opts = {
		'readonly': false
	};
	values = [
		array( [ 1, 2, 3, 4 ] ),
		array( [ [ 1, 2 ], [ 3, 4 ] ] ),
		array( [ 1, 2, 3, 4 ], opts ),
		array( [ [ 1, 2 ], [ 3, 4 ] ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = isReadOnly( values[ i ] );
		t.strictEqual( bool, false, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
