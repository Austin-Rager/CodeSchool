//get the elements

const textbox = document.querySelector("#text_box");
const button = document.querySelector("#add_button");
const container = document.querySelector("#container");

//creating a function to delete element parent to be bound
//to onclick event
const delete_item = (click) => {
    //will get the button that was clicked and the parent of the button
    const target = click.target.parentElement;
    target.remove();
}

//the main button adds item to the list
button.onclick = () => {
    //get the text that the user has inputted
    const text = textbox.value;
    //sample text
    textbox.value = "Type name here";

    //creating a new div container containing two children
    const new_div = document.createElement("div");
    //apply the class name to style it with css
    new_div.classList.add("list-item");

    //create a text label for the name entered
    const new_text = document.createElement("div");
    new_text.innerHTML = text;

    //create an x button to delete the button and text
    const new_button = document.createElement("button");
    new_button.innerHTML = "X";
    //binding the click event to onclick
    new_button.onclick = delete_item;

    //appending the children to the parent element
    new_div.appendChild(new_text);
    new_div.appendChild(new_button);

    //append the list entry for rendering
    container.appendChild(new_div);
};

