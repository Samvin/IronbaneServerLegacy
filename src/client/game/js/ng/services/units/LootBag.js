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

var itemSpritePath = 'images/items/';

IronbaneApp.factory("LootBag",["Billboard", function(Billboard){
    var LootBag = function(position, id, param) {



        this._super(position, 0, id, param);

        this.dynamic = true;
        this.enableGravity = true;


    };
    LootBag.prototype.Add = function () {

    //console.warn(this.position.x);
        var image;

        switch(this.param) {
                case LootBagTypeEnum.COMMON:
                        image = 4;
                        break;
                case LootBagTypeEnum.UNCOMMON:
                        image = 4;
                        break;
                case LootBagTypeEnum.EPIC:
                        image = 4;
                        break;
                case LootBagTypeEnum.LEGENDARY:
                        image = 4;
                        break;
        }


        var texture = itemSpritePath + ''+image+'.png';


        this.texture = ironbane.textureHandler.getTexture( texture, true);


        this.TryToBuildMesh();


    };
    return LootBag;
}]);


