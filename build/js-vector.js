////////////////////////////////////////////////////////////////////////////////////////
//                                   JS - Vector                                      //
////////////////////////////////////////////////////////////////////////////////////////
// Vector class module                                                                //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// MIT License                                                                        //
//                                                                                    //
// Copyright (c) 2023 Jacob Dutra-Salemi                                              //
//                                                                                    //
// Permission is hereby granted, free of charge, to any person obtaining a copy       //
// of this software and associated documentation files (the "Software"), to deal      //
// in the Software without restriction, including without limitation the rights       //
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell          //
// copies of the Software, and to permit persons to whom the Software is              //
// furnished to do so, subject to the following conditions:                           //
//                                                                                    //
// The above copyright notice and this permission notice shall be included in all     //
// copies or substantial portions of the Software.                                    //
//                                                                                    //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR         //
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,           //
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE        //
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER             //
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,      //
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE      //
// SOFTWARE.                                                                          //
////////////////////////////////////////////////////////////////////////////////////////
var Vector = /** @class */ (function () {
    ////////////////////////////////////////////
    //                 Methods                //
    ////////////////////////////////////////////
    //////////////////////
    //    constructor   //
    //////////////////////
    function Vector(inX, inY, inZ) {
        if (inX === void 0) { inX = 0; }
        if (inY === void 0) { inY = 0; }
        if (inZ === void 0) { inZ = 0; }
        this.x = inX;
        this.y = inY;
        this.z = inZ;
    }
    //////////////////////
    //    basic maths   //
    //////////////////////
    Vector.prototype.add = function (x, y, z) {
        if (z === void 0) { z = 0; }
        return new Vector(this.x + x, this.y + y, this.z + z);
    };
    Vector.prototype.sub = function (x, y, z) {
        if (z === void 0) { z = 0; }
        return new Vector(this.x - x, this.y - y, this.z - z);
    };
    Vector.prototype.mul = function (scalar) {
        return new Vector(this.x + scalar, this.y + scalar, this.z + scalar);
    };
    Vector.prototype.div = function (scalar) {
        return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
    };
    //////////////////////
    //   length maths   //
    //////////////////////
    Vector.prototype.magnitude = function () {
        return Math.sqrt(Math.pow(this.x, 2)
            + Math.pow(this.y, 2)
            + Math.pow(this.z, 2));
    };
    Vector.prototype.sqrMag = function () {
        return (Math.pow(this.x, 2)
            + Math.pow(this.y, 2)
            + Math.pow(this.z, 2));
    };
    Vector.prototype.normalize = function () {
        return this.div(this.magnitude());
    };
    //////////////////////
    //   vector maths   //
    //////////////////////
    Vector.prototype.dotProduct = function (vec) {
        return (this.x * vec.x) + (this.y * vec.y);
    };
    //////////////////////
    //  utility maths   //
    //////////////////////
    Vector.prototype.set = function (inX, inY, inZ) {
        this.x = inX;
        this.y = inY;
        this.z = inZ;
    };
    Vector.prototype.clone = function (vec) {
        this.set(vec.x, vec.y, vec.z);
    };
    Vector.prototype.copy = function () {
        return new Vector(this.x, this.y, this.z);
    };
    return Vector;
}());
