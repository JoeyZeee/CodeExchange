

let globalPostNumber = 2;

// These will be found in the database... This is just for demonstration... All values are random.
let userProfileNames = ["James Smith", "Michael Smith", "Robert Smith", "Maria Garcia", "David Smith", "Maria Rodriguez", "Maria Hernandez"];
let userProfileImages = ["img/profile-images/profileImage1.png", "img/profile-images/profileImage2.png", "img/profile-images/profileImage3.png", "img/profile-images/profileImage4.png", "img/profile-images/profileImage5.png", "img/profile-images/profileImage6.png", "img/profile-images/profileImage7.png", "img/profile-images/profileImage8.png", "img/profile-images/profileImage9.png", "img/profile-images/profileImage10.png", "img/profile-images/profileImage11.png", "img/profile-images/profileImage12", "img/profile-images/profileImage13.png", "img/profile-images/profileImage14.png", "img/profile-images/profileImage15.png"];
let programmingLanguages = ["javascript"];
let codeOptions = ["const contract = new web3.eth.Contract(ContractAbi,contractAddress);"];
let explanationOptions = ["My calling smart contract method is: Transfer ethers and use alchemy . when clicking the button call"]


function createNewPost(postNumber = globalPostNumber++, userProfileName = chooseOption(userProfileNames), userProfileImage = chooseOption(userProfileImages), programmingLanguage = chooseOption(programmingLanguages), code = chooseOption(codeOptions), explanation = chooseOption(explanationOptions)) {
    // postNumber = globalPostNumber++;
    // userProfileName = chooseOption(userProfileNames);
    // userProfileImage = chooseOption(userProfileImages);
    // programmingLanguage = chooseOption(programmingLanguages);
    // code = chooseOption(codeOptions);
    // explanation = chooseOption(explanationOptions);

    let post = document.createElement("div");
    post.classList.add("post");
    post.classList.add("post" + postNumber);
    // post.className("post");
    // post.className("post" + postNumber);

    // Create elements for inside of user-profile
    // let userProfileImg = document.createElement("img").id("user-profile-image");
    let userProfileImg = document.createElement("img");
    userProfileImg.setAttribute("id", "user-profile-image");
    userProfileImg.src = userProfileImage;

    let userProfileNme = document.createElement("h1");
    userProfileNme.setAttribute("id", "user-profile-name");
    userProfileNme.innerHTML += userProfileName;

    // Create and add elements to user-profile
    // let userProfile = document.createElement("div").id("user-profile");
    let userProfile = document.createElement("div");
    userProfile.setAttribute("id", "user-profile");
    userProfile.appendChild(userProfileImg);
    userProfile.appendChild(userProfileNme);

    // let codeSection = document.createElement("div").id("code-section");
    let codeSection = document.createElement("div");
    codeSection.setAttribute("id", "code-section");


    let preThing = document.createElement("pre");

    // let codeThing = document.createElement("code").className(programmingLanguage);
    let codeThing = document.createElement("code");
    // codeThing.classList.add(programmingLanguage);
    codeThing.classList.add("javascript");
    // codeThing.classList.add("hljs");
    codeThing.innerHTML += code;

    preThing.appendChild(codeThing);
    codeSection.appendChild(preThing);

    let explanationThing = document.createElement("div");
    explanationThing.setAttribute("id", "explanation");
    let explanationPg = document.createElement("p");
    explanationPg.innerHTML += explanation;

    explanationThing.appendChild(explanationPg);

    post.appendChild(userProfile);
    post.appendChild(codeSection);
    post.appendChild(explanationThing);

    return post;
}

function chooseOption(options) {
    let randomNum = Math.floor(Math.random() * options.length); // + 1 normally
    return options[randomNum];
}

// window.addEventListener("load", () => {
//     document.querySelector(".feed").appendChild(createNewPost());
//     // document.body.getElementsByClassName("feed").appendChild(createNewPost());
//     // document.body.appendChild(createNewPost());
// });

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});