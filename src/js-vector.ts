////////////////////////////////////////////////////////////////////////////////////////
//                                   JS - Vector                                      //
////////////////////////////////////////////////////////////////////////////////////////
// Javascript Vector class module                                                     //
////////////////////////////////////////////////////////////////////////////////////////

class Vector {
    ////////////////////////////////////////////
    //               Properties               //
    ////////////////////////////////////////////
    x:number;
    y:number;
    z:number;

    ////////////////////////////////////////////
    //                 Methods                //
    ////////////////////////////////////////////

    //////////////////////
    //    constructor   //
    //////////////////////
    constructor ( inX:number = 0, inY:number = 0, inZ:number = 0 ) {
        this.x = inX;
        this.y = inY;
        this.z = inZ;
    }

    //////////////////////
    //    basic maths   //
    //////////////////////
    add ( x:number, y:number, z:number = 0 ): Vector {
        return new Vector(this.x + x, this.y + y, this.z + z);
    }

    sub ( x:number, y:number, z:number = 0 ): Vector {
        return new Vector(this.x - x, this.y - y, this.z - z);
    }

    mul ( scalar:number ): Vector {
        return new Vector(this.x + scalar, this.y + scalar, this.z + scalar);
    }

    div ( scalar:number ): Vector {
        return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    //////////////////////
    //   length maths   //
    //////////////////////

    magnitude(): number {
        return Math.sqrt ( Math.pow(this.x,2)
                         + Math.pow(this.y,2)
                         + Math.pow(this.z,2) );
    }

    sqrMag():number {
        return ( Math.pow(this.x,2)
               + Math.pow(this.y,2)
               + Math.pow(this.z,2) );
    }

    normalize():Vector {
        return this.div(this.magnitude());
    }

    //////////////////////
    //   vector maths   //
    //////////////////////
    dotProduct ( vec:Vector ):number {
        return (this.x * vec.x) + (this.y * vec.y);
    }

    //////////////////////
    //  utility maths   //
    //////////////////////
    set ( inX:number, inY:number, inZ:number ):void {
        this.x = inX;
        this.y = inY;
        this.z = inZ;
    }

    clone ( vec:Vector ):void {
        this.set(vec.x,vec.y,vec.z);
    }

    copy(): Vector {
        return new Vector(this.x, this.y, this.z);
    }

}

////////////////////////////////////////////////////////////////////////////////////////
//                                     Exports                                        //
////////////////////////////////////////////////////////////////////////////////////////
export default Vector;