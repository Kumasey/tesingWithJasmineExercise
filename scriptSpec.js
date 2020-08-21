//                                  replaceWith

describe("replaceWith",function(){
    it("is to replace a string",  function(){
        expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz");
    });
    it('is case sensitive', function(){
        expect(replaceWith("Foo", "F", "B")).toEqual("Boo");
    });
});

//                                      expand

describe("expand",function(){
    it("takes in array and a number and returns array according to specified number",function(){
        expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3]);
    });
});

//                                  acceptNumbersOnly
describe("acceptNumbersOnly",function(){
    it("takes in values and returns true if they are the same",function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toEqual(true);
    });
    it("returns false if NaN is passed",function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toEqual(false);
    });
    it("returns false if string is passed together with number",function(){
        expect(acceptNumbersOnly(1,"foo")).toEqual(false);
    });
    });


//                                      mergedArray

describe("mergedArrays",function(){
    it("sorted merged arrays",function(){
    expect(mergedArrays([ 2 , 1 ],[ 3 , 4 ])).toEqual([1,2,3,4]);
    });
});

  
//                                      mergedObjects

describe("mergeObjects",function(){
    it("returns two merged objects",function(){
        var obj1= {
            name: "Foo",
            num: 33
        };
        var obj2 = {
            test: "thing",
            num: 55
        };   
    expect(mergeObjects(obj1, obj2)).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        });
   
    });
});

