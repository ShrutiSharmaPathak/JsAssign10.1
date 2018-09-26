class rectangle //class declaration
{
   
    constructor(length,breadth) //class constructor
    {
        this.length=length;
        this.breadth=breadth;
    }
    calculatearea() //method in the class
    {
        return this.length*this.breadth;
    }

}
function calculate() //function calculate to be called onclick of the button
{
   //collecting the valueof width and breadth of the rectangle
    var width=document.getElementById("width").value;
    var breadth=document.getElementById('breadth').value;
    var rect1=new rectangle(width,breadth); //creating the object rec1 of the class rectangle
    console.log("area of the rectangle is "+ rect1.calculatearea());
    //calling the method claculatearea of the class
    document.getElementById('result').innerHTML='Area of the rectangle is'+rect1.calculatearea(); 
}