function display(val) 
		{ 
            
             console.log(val)
            document.getElementById("result").value+=val 
             
		} 

	function solve() 
		{ 
			let x = document.getElementById("result").value 
            let y = eval(x)
            document.getElementById("result").value = y 
            console.log(y) 
		} 
		
	function cancel() 
		{ 
			document.getElementById("result").value = "" 
		}