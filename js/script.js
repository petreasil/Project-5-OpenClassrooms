
var first = [
	'"Clear ',
	'"Love ',
	'"Adventure ',
	'"Patience ',
	'"Fear ',
	'"Excitement ',
	'"Danger'
	]

var middle = [
	'you have ',
	'must have ',
	'they have ',
	'you will',
	'he must',
	'she will',
	'they must '
	]
var end =[
	'earned."',
	'lose."',
	'win."',
	'forgotten."',
	'learn."',
	'earn. "',
	'achieve."'
]

var wiseQuotes = [ 
	{ 
	    quote: "If no mistake have you made, yet losing you are… a different game you should play.", 
	    author: "Master Yoda-The Empire Strikes Back"
	},
	{ 
	    quote: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.", 
	    author: "Master Yoda-Revenge of the Sith"
	},
	{ 
	    quote: "Truly wonderful, the mind of a child is.", 
	    author: "Master Yoda-Attack of the Clones"
	},
	{ 
	    quote: "When nine hundred years old you reach, look as good you will not.", 
	    author: "Master Yoda-Return of the Jedi"
	},
	{ 
	    quote: "Adventure. Excitement. A Jedi craves not these things.", 
	    author: "Master Yoda-Rogue One: A Star Wars Story"
	},
	{ 
	    quote: "Judge me by my size, do you?", 
	    author: "Master Yoda-The Empire Strikes Back"
	},
	{ 
	    quote: "A Jedi uses the Force for knowledge and defense, never for attack.", 
	    author: "Master Yoda-The Phantom Menace"
	},
	{ 
	    quote: "Wars not make one great.", 
	    author: "Master Yoda-The Empire Strikes Back"
	},
	{ 
	    quote: "Luminous beings are we…not this crude matter.", 
	    author: "Master Yoda-The Empire Strikes Back"
	},
	{ 
	    quote: "Do. Or do not. There is no try.", 
	    author: "Master Yoda-The Empire Strikes Back"
	}	
]

	//slider Display the default slider value
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value;
	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
	output.innerHTML = this.value;
	}
	
	//using animate.css 
	$('#logo2').addClass('animated tada');
	$('h1').addClass('animated rubberBand');

	// Returns random array value function
	function rand(array){ 	
		var rand = array[Math.floor(Math.random() * array.length)];
		return rand;
	}
	
	//main Generate Quotes function
	function quote(selectedQuotes){
		var quoteText_first,quoteText_middle,quoteText_end;
		var quoteNumber = document.getElementById('myRange').value;
		var quotes = [];
		var newQuote = [];
		$('#insert').html('');
		
		if (selectedQuotes === 'yodaQuotes') {
			for (var i = 0; i < quoteNumber; i++) {
			
				do {
					quoteText_first = rand(first);
					quoteText_middle = rand(middle);
					quoteText_end = rand(end);

					newQuote = quoteText_first + ' ' + quoteText_middle + ' ' + quoteText_end;
				} while (quotes.indexOf(newQuote)!=-1);

				quotes.push(newQuote);
				
				$('#insert').append('<blockquote class="blockquote mb-0"><p>'
		    	+quotes[i]+'</p></blockquote>');
			
				
				
		    }
		}else if (selectedQuotes === 'wiseQuotes'){
			for (let i = 0; i < quoteNumber; i++) {
			
				do {
					newQuote = rand(wiseQuotes);
				} while (quotes.indexOf(newQuote)!=-1);

				quotes.push(newQuote);

				$('#insert').append('<blockquote class="blockquote mb-0"><p class="text-center">"'
		    	+quotes[i].quote+'"<br><footer class="blockquote-footer">'
		    	+quotes[i].author+'</footer></p></blockquote>');
				
		    }
		}
			
	}
	
	
	var selectedQuotes = 'yodaQuotes';
	document.getElementById('btn1').addEventListener("click", function(){
		 selectedQuotes = 'yodaQuotes';
		 document.getElementById('btn1').classList.add("btn-outline-dark");
		 document.getElementById('btn2').classList.remove("btn-outline-dark");
		 
	});
	
	document.getElementById('btn2').addEventListener("click", function(){
		 selectedQuotes = 'wiseQuotes';
		 document.getElementById('btn1').classList.remove("btn-outline-dark");
		 document.getElementById('btn2').classList.add("btn-outline-dark");
	});
	
	//generate button
	document.getElementById('quoteBtn').addEventListener("click", function(){
		quote(selectedQuotes);
		document.getElementById('content').style.display = 'block';
		$('#logo2').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#logo2').removeClass('animated fadeInLeft');
    });
		$(this).addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated rubberBand');
	});
	});



