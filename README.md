# Scrimba - The Frontend Developer Career Path - Module 4 - CSS Fundamentals: Challenges - Solo Project - Oldagram

This is a solution to the [CSS Fundamentals: Challenges - Solo Project - Oldagram](https://scrimba.com/playlist/pywanCG) solo project.

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!

## Table of contents

- [Scrimba - The Frontend Developer Career Path - Module 4 - CSS Fundamentals: Challenges - Solo Project - Oldagram](#scrimba---the-frontend-developer-career-path---module-4---css-fundamentals-challenges---solo-project---oldagram)
  - [About Scrimba](#about-scrimba)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Requirements:

- Create the first post
- Use semantic HTML
- Add hover effects to the icons

Stretch Goals:

- Use JavaScript to render out all three posts
- Increase the likes when double clicking the post

### Screenshot

![Mobile Screen Recording](imgs/ss-mobile.gif)

### Links

- Solution URL: [Github Repo](https://github.com/varonalearns/Scrimba-Solo-Project-Oldagram)
- Live Site URL: [Netlify Live Site](https://chimerical-puppy-76ebed.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

In this solo project, I wanted to challenge myself a bit. I learned how to inject HTML to the DOM using JavaScript. This allowed me to parse a JSON object and insert elements into the HTML. Once I got over my fear, it was much easier to achieve than I thought. Just one line of code after setting up the elements I want to inject into the DOM.

``` js
cardsPosts.innerHTML = strPosts

```

I also learned how to create a counter of sorts either through a single click on the like button or through the post itself. I'm sure there is an easier way to do this but it worked for my purposes and with the knowledge I currently have:

``` js
const likeBtn = document.querySelectorAll(".like-btn")
const likeValue = document.querySelectorAll(".likes")
function addLikesByButton() {
    for(let i = 0; i < likeBtn.length; i++) {
        likeBtn[i].addEventListener("click", function() {
            let likeCount = parseInt(likeValue[i].querySelector(".value").textContent, 10)
            likeCount++
            likeValue[i].querySelector(".value").textContent = likeCount
        })
    }
}
addLikesByButton()

const post = document.querySelectorAll(".post-img")
function addLikesByDblCLick() {
    for(let i = 0; i < post.length; i++) {
        post[i].addEventListener('dblclick', function() {
            let likeCount = parseInt(likeValue[i].querySelector(".value").textContent, 10)
            likeCount++
            likeValue[i].querySelector(".value").textContent = likeCount
        })
    }
}
addLikesByDblCLick()

```

### Continued development

I am excited to continue to push my knowledge with JavaScript so I can add more features and make a project even more interactive. I am glad I decided to do some stretch goals. I want to continue to develop my JavaScript skills and make my code as efficient and effective as it can be. 

### Useful resources

- [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) - This helped me understand how to add HTML to the DOM using JavaScript.
- [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) - This helped me understand that I can grab more than just ids from the DOM.
- [Document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) - This helped me understand that I can grab a list of the document's elements that match the specified group of selectors.

## Author

- Website - [Evalia Varona](https://www.evaliavarona.com)
- Hashnode - [@evavarona](https://evaliavarona.hashnode.dev)
