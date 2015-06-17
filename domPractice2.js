//gets input from the input field when the submit button is clicked and prints it to a list

//removes the added input when you click on the list item

var form = document.getElementById("input-form"),
    list = document.getElementById("list"); //need this later so we can remove items from the list


function getInput(event) {
    event.preventDefault();
    var inputValue = document.getElementById("input-field").value

    console.log(inputValue)
    form.reset(); // _______________Reset method 

    document.getElementById("list").innerHTML += "<li>" + inputValue + "</li>";
}

form.addEventListener("submit", getInput, false)

function removeListItem(e) {
    var target = e.target;
    console.log(target);
    //_______________________________BEGIN Conditional logic to check if element is not an LI
    if (target.tagName !== 'LI') {
        return undefined
    }
//_______________________________END Conditional logic to check if element is not an LI
    target.parentNode.removeChild(target);// Select the parent node and remove the child
    }
}

list.addEventListener('mouseover', removeListItem); //this is basically calling the function 
//whenever the user's mouse hovers over the list item