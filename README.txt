js-vector

Description:
Javascript vector module. Basic vector class and calculations

 - Usage -

Basic:
import Vector from "js-vector"
let myVector = new Vector(x,y);

myVector.x // Can get or set properties directly.

All constructor parameters are optional and default to 0.

Instance methods:
NOTE: the following methods DO NOT modify the vector. A new vector is returned.
  add(x,y,z) or add(vector)
   - Adds input (x,y,z values or another vector) to vector.
  sub(x,y,z) or sub(vector)
   - Subtracts input (x,y,z values or another vector) from vector.
  mul(number)
   - Multiplies vector my number.
  div(number)
   - Divides vector by number.

  magnitude()
   - Returns the magnitude of the vector.
  sqrMag()
   - Returns the squared magnitude of the vector.
  normalize()
   - Returns the normalized fork of the vector.
  dotProduct(vector)
   - Returns the Dot Product of the vector and the input vector.
  copy()
   - Returns a copy of the vector.

NOTE: The following methods DO modify the vector.
  set(x,y,z)
   - Sets the vectors x,y,z values. Does not return anything.
  clone(vector)
   - Sets the vectors x,y,z values to the input vectors values.
