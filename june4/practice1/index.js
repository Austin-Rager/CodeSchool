const image = document.getElementById("fox-img");
const button = document.getElementById("get-fox");

const load_fox = async () => {
    try {
        const response = await fetch("https://randomfox.ca/floof");
        if (!response.status === 200){
            throw new Error("unable to get fox");
        }
        const json = await response.json();
        image.src = json.image;
    } catch (error) {
        console.error(error);
    }
};

button.addEventListener("click", load_fox);
window.addEventListener("DOMContentLoaded", load_fox);