// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
	let average = 0;
  for (let i=0; i<data.length; i++) {
    	average = average + data[i].price
    }
    average = average / data.length;
    console.log (average);
    return average
  // Answer:
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  	let cost = []
  		for (i=0; i<data.length; i++) {
  			if (data[i].price > 14.00 && data[i].price < 18.00) {
  				cost.push (data[i])
  			}
  		}
  		console.log(cost);
  		return cost
  // Answer:
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (let i=0; i<data.length; i++) {
  	if (data[i].currency_code === "GBP") {
  		console.log(data[i].price + " " + data[i].title)
  	}
  }
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  for (let i=0; i<data.length; i++) {
  	for (let j=0; j<data[i].materials.length; j++){
  		if (data[i].materials[j] === "wood"){
  			console.log(data[i])
  		}
  	}

  	}

}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
	for (let i=0; i<data.length; i++) {
		if (data[i].materials.length > 7 ) {
			console.log(data[i].title + data[i] + data[i].materials)
			}
		}
	}
  // Answer:


// 6: How many items were made by their sellers?
// Answer:
let items = 0
function question6 () {
	for (let i=0; i<data.length; i++) {
		if (data[i].who_made === "i_did") {
			items = items + 1;
			
		}
	}
	console.log(items)
  return items// Answer:
}