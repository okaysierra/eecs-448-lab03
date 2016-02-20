var images = ["resources/marie_curie.png" , "resources/python.png", "resources/sphere.png",
              "resources/tree.png", "resources/unscientific.png"];
var i =0;


  document.write("<img src="+images[i]+" width=500px />");


function next()
{
  
  if(i==images.length-1)
  {
    i=0;

  }
  else
  {
    i++;

  }

  document.write("<img src="+images[i]+" width=500px />");
  document.write("<input type=button id=previous value=previous onclick=previous() />");
  document.write("<input type=button id=next value=next onclick=next() />");




}

function previous()
{
  if(i==0)
    {
      i=images.length-1;

    }
  else
    {
      i--;

    }
    document.write("<img src ="+images[i]+" width=500px>");
}
