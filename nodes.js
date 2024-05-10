(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    // set attributes
    dialog.setAttribute("header-text", "Ana stie Javascript !");
    footer.setAttribute("slot", "footer");
    // content
//content.innerHTML = "This dialog was created by third party JS file";
content.innerHTML = '<object type="text/html" data="https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript"></object>';
    content.style.padding = "1rem";
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    // open dialog
    dialog.show();
})();
