var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartArr);
  displaydata(cartArr);

  function displaydata(products) {
    var container = document.getElementById("container");
    container.innerHTML = "";

    products.forEach(function (ele, i) {
      var card = document.createElement("div");

      var image = document.createElement("img");
      image.src = ele.imageUrl;

      var h4 = document.createElement("h4");
      h4.textContent = ele.name;

      var price = document.createElement("p");
      price.textContent = ele.price;

      var btn = document.createElement("button");
      btn.className = "btn";
      btn.textContent = "Remove from cart";
      btn.addEventListener("click", function () {
        removeFromCart(ele, i);
      });

      card.append(image, h4, price, btn);
      container.append(card);
    });
  }

  function removeFromCart(ele, i) {
    console.log("remove");
    cartArr.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    displaydata(cartArr);
  }
