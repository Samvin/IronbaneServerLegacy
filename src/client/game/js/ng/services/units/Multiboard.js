/*
    This file is part of Ironbane MMO.

    Ironbane MMO is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Ironbane MMO is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Ironbane MMO.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var multiboardSpritePath = 'images/multiboards/';

IronbaneApp.factory("Multiboard", ["Unit", function(Unit){
    var Multiboard = function(position, rotY, id, param) {
        this._super(position, rotY, id, 'Multiboard', param);

        //        this.targetPosition.x = 1.0;
        //        this.targetPosition.z = 1.0;

        this.dynamic = false;
        this.enableGravity = false;


    };
	Multiboard.prototype.Add = function () {



	};
    Multiboard.prototype.tick = function(dTime) {

        this._super(dTime);

		//this.displayUVFrame(0, this.getDirectionSpriteIndex(), 1, 8);

    };
    return Multiboard;
}]);