const message = document.getElementById("user-prompt");
const button = document.getElementById("send-prompt");
const responseElement = document.getElementById("response");

const load_response = async () => {
    try{
        const prompt = message.value;
        const params = new URLSearchParams({
            prompt: prompt,
        });

        const headers = {
            "Accept": "text/plain",
        };

        const result = await fetch("https://dont-pani.cc/generate?" + params.toString(), {method: "GET", headers: headers});

        if(!result.status === 200){
            throw new Error("failed to generate response");
        }

        const response = await result.text();
        console.log(response);

        responseElement.innerHTML = response;

        message.value = "";

    }catch (error) {
        console.error(error);
    }
};

button.addEventListener("click", load_response);
