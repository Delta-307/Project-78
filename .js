var images = [
    "https://www.awesomescreenshot.com/image/31381992?key=ecfa4d58a709db643c5788551ce2d1bf",
      "https://i.pinimg.com/736x/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBfN6QwV6MZglblwp8Hr839pJhpIPp0P5PA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9bOhOmwfotKbZXCn3aaERyadYo-SZRKPuA&usqp=CAU",
      "https://image.shutterstock.com/image-illustration/super-hero-daddy-260nw-766098340.jpg",
      "https://st2.depositphotos.com/4323461/8278/v/600/depositphotos_82784348-stock-illustration-old-woman-grandma.jpg",
      "https://image.shutterstock.com/image-vector/cute-grandfather-cartoon-260nw-726215185.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg"
    ];
    
    
    var names = [
    "The Family Book","Sid","Mayra","Dad", "MOM","Aryan","Ananya"
    ];
    
    
    var i=0;
    var  images_length = 6;
    
    function update()
    {
      if (i > images_length)
      {
        i = 0;
      }
      var famimg = images[i];
      var textinput  = names[i];
      document.getElementById("famimg").src = famimg;
      document.getElementById("textinput").innerHTML = textinput;
      i++;
    }