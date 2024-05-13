function shiftLeft() {
  const boxes = document.querySelectorAll(".box");
  const tmpNode = boxes[0];
  boxes[0].className = "box move-out-from-left";
  setTimeout(function() {
   if (boxes.length > 5) {
   tmpNode.classList.add("box--hide");
   boxes[5].className = "box move-to-position5-from-left";
   }
   boxes[1].className = "box move-to-position1-from-left";
   boxes[2].className = "box move-to-position2-from-left";
   boxes[3].className = "box move-to-position3-from-left";
   boxes[4].className = "box move-to-position4-from-left";
   boxes[0].remove();
   document.querySelector(".cards__container").appendChild(tmpNode);
  }, 500);
  }
  function shiftRight() {
  const boxes = document.querySelectorAll(".box");
  boxes[4].className = "box move-out-from-right";
  setTimeout(function() {
   const noOfCards = boxes.length;
   if (noOfCards > 4) {
   boxes[4].className = "box box--hide";
   }
   const tmpNode = boxes[noOfCards - 1];
   tmpNode.classList.remove("box--hide");
   boxes[noOfCards - 1].remove();
   let parentObj = document.querySelector(".cards__container");
   parentObj.insertBefore(tmpNode, parentObj.firstChild);
   tmpNode.className = "box move-to-position1-from-right";
   боксы[0].className = "бокс переместить в позицию 2 справа";
   боксы[1].className = "бокс переместить в позицию 3 справа";
   боксы[2].className = "бокс переместить в позицию 4 справа";
   боксы[3].className = "бокс переместить в позицию 5 справа";
  }, 500);
  }