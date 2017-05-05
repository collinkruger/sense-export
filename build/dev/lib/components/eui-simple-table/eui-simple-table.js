/*!

* sense-export - Just a simple button to export data in your Qlik Sense application without displaying them in a table first.
*
* @version v1.1.0
* @link 
* @author [object Object]
* @license MIT
*/


/*global define*/
define( [
	'jquery',
	'qvangular',
	'text!./eui-simple-table.ng.html',
	'text!./eui-simple-table.css'

], function ( $, qvangular, ngTemplate, cssContent ) {
	'use strict';

	function addStyleToHeader ( cssContent, id ) {
		if ( id && typeof id === 'string' ) {
			if ( !$( '#' + id ).length ) {
				$( "<style>" )
						.attr( 'id', id )
						.html( cssContent ).appendTo( "head" );
			}
		} else {
			$( "<style>" ).html( cssContent ).appendTo( "head" );
		}
	}
	addStyleToHeader( cssContent, 'eui-simple-table');

	qvangular.directive( 'euiSimpleTable', [function () {

		return {
			restrict: 'EA',
			scope: {
				hyperCube: '='
			},
			template: ngTemplate,
			link: function ( $scope ) {
				console.log( 'eui-simple-table:data', $scope.hyperCube );
			}
		};

	}] );

} );