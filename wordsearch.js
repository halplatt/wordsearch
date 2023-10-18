// Add an event listener for the keydown event
document.addEventListener("keydown", function(event) {
    // Check if the key pressed is enter
    if (event.key === "Enter") {
      // Call the displayHello function
      performSearch();
    }
  });


// Function to perform the search
function performSearch() {
    const regexInput = document.getElementById("regexInput");
    const resultList = document.getElementById("resultList");
    const pattern = regexInput.value;
    
    // Clear previous results
    resultList.innerHTML = "";

try {
        // Escape the user input and create the regular expression
   dict.forEach(word => {
        const regexPattern = new RegExp(pattern, 'i');
        if (regexPattern.test(word)) {
            const listItem = document.createElement("li");
            listItem.textContent = word;
            listItem.addEventListener("click", () => copyToClipboard(word));
            resultList.appendChild(listItem);
        }
    });
} catch (error) {
    // Handle the error by displaying an alert
    alert(`Regular Expression ${pattern} Error: ${error.message}`);
}

// After looping through dict
if (resultList.innerHTML === "") {
    const noResults = document.createElement("li");
    noResults.textContent = "No results found";
    resultList.appendChild(noResults);
  }

}

// Function to copy text to clipboard
function copyToClipboard(text) {
    const clipboardInput = document.getElementById("clipboardInput");
    clipboardInput.value = text;
    clipboardInput.select();
    document.execCommand("copy");
    clipboardInput.value = "";
    openInNewTab(text)
}

//Function to open in new tab
function openInNewTab(text) {
    url='djshorthand.html?x='+text
    var newTab = window.open('', 'DJshorthand');

    // This part is executed in the context of the newly opened window/tab.
    if (newTab.location.href === "about:blank") {
        // If the tab is new and hasn't loaded any page yet, load our URL
        newTab.location.href = url;
    } else {
        // If the tab already has content, refresh with the new URL
        newTab.location.replace(url);
    }

    // Bring the tab to front
    newTab.focus();
 
};


// Attach the search function to the button click event
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", performSearch);



