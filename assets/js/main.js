
// <!-- ======================== Toggle Why Us Sec ======================== --> 

const cardWhyUs = document.querySelectorAll(".card-why-us");
const cardWhyUsText = document.querySelectorAll(".card-why-us p");
let activeElement = null;

if (cardWhyUs) {
  cardWhyUs.forEach((element, index) => {
    cardWhyUsText[0].classList.add("active");
    element.addEventListener("click", function () {
      removeActiveLi();
      element.classList.toggle("active");
      let hight = cardWhyUsText[index].scrollHeight;

      if (activeElement !== element) {
        cardWhyUsText[index].classList.add("active");
        cardWhyUsText[index].style.height = `${hight}px`;
        activeElement = element;
      } else {
        cardWhyUsText[index].style.height = `${0}px`;
        cardWhyUsText[index].classList.remove("active");
        activeElement = null;
      }
    });
  });
}

function removeActiveLi() {
  cardWhyUs.forEach((element) => {
    element.classList.remove("active");
  });
  cardWhyUsText.forEach((element) => {
    element.classList.remove("active");
    element.style.height = `${0}px`;
  });
}


// <!-- ======================== Add Light On Hover Card ======================== --> 

const cardLight = document.querySelectorAll('.card-light')

if (cardLight) {
  const UPDATE = ({ x, y }) => {
    cardLight.forEach(element => {
      const BOUNDS = element.getBoundingClientRect()
      const posX = x - BOUNDS.x
      const posY = y - BOUNDS.y
      const ratioX = posX / BOUNDS.width
      const ratioY = posY / BOUNDS.height
      element.style.setProperty('--ratio-x', ratioX)
      element.style.setProperty('--ratio-y', ratioY)
    });
  }
  document.body.addEventListener('pointermove', UPDATE)
}



// <!-- ======================== Toggle NavPar Phone   ======================== --> 


const toggle = document.querySelector('.toggle')
const listWebsite = document.querySelector('.list-website')


if (toggle) {
  toggle.addEventListener("click", () => {
    listWebsite.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (!listWebsite.contains(event.target) && event.target !== toggle) {
      listWebsite.classList.remove("active");
    }
  });
}




// <!-- ======================== Submit Search   ======================== -->



const resultsPop = document.querySelector(".results-pop");
const submitSearch = document.querySelector(".submit-search");
const xResults = document.querySelector(".x-results");
const submitSearchCard = document.querySelector(".results-pop .card-div");

if (submitSearch) {
  submitSearch.addEventListener("click", (event) => {
    event.preventDefault()
    resultsPop.classList.add("active");
  })

  xResults.addEventListener("click", (event) => {
    event.stopPropagation();
    resultsPop.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (resultsPop.classList.contains("active") && !submitSearchCard.contains(event.target) && !submitSearch.contains(event.target)) {
      resultsPop.classList.remove("active");
    }
  });

}



// <!-- ======================== Toggle Popup Request Demo   ======================== --> 

const requestDemoButton = document.querySelectorAll(".request-demo-button");
const requestDemoPop = document.querySelector(".request-demo-pop");
const xRequestDemo = document.querySelector(".x-request-demo");
const RequestDemoCard = document.querySelector(".request-demo-pop .card-div");


if (xRequestDemo) {
  requestDemoButton.forEach(element => {
    element.addEventListener("click", () => {
      resultsPop.classList.remove("active");
      requestDemoPop.classList.add("active");
    });
  });

  xRequestDemo.addEventListener("click", (event) => {
    event.stopPropagation();
    requestDemoPop.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (requestDemoPop.classList.contains("active") && !RequestDemoCard.contains(event.target) && !isDescendant(requestDemoButton, event.target)) {
      requestDemoPop.classList.remove("active");
    }
  });

  function isDescendant(parents, child) {
    for (let i = 0; i < parents.length; i++) {
      if (parents[i].contains(child)) {
        return true;
      }
    }
    return false;
  }
}

// <!-- ======================== Register Div Pop   ======================== -->

const registerDiv = document.querySelectorAll(".register-div .register")
const registerPop = document.querySelector(".register-pop")
const xRegisterPop = document.querySelector(".x-register-pop")

if (registerDiv) {
  registerDiv.forEach(element => {
    element.addEventListener("click", () => {
      registerPop.classList.add("active");
    })
  });

  xRegisterPop.addEventListener("click", () => {
    registerPop.classList.remove("active");
  })
}


// <!-- ======================== Subscribe Alert   ======================== -->


const subscribeAlert = document.querySelector(".subscribe-alert")
const xSubscribePop = document.querySelector(".x-subscribe-pop")

xSubscribePop.addEventListener("click", () => {
  subscribeAlert.classList.remove("active");
})




// <!-- ======================== Form Request Demo   ======================== -->


const formRequestDemo = document.querySelector(".form-request-demo")
const cardDivChild = document.querySelector(".card-div-child")
const emailSendDiv = document.querySelector(".email-send-div")
const inputCardDivChild = document.querySelectorAll(".card-div-child input")


if (formRequestDemo) {

  formRequestDemo.addEventListener("submit", (e) => {
    e.preventDefault()

    cardDivChild.classList.add("disabled")
    emailSendDiv.classList.remove("disabled")

    setTimeout(() => {
      cardDivChild.classList.remove("disabled")
      emailSendDiv.classList.add("disabled")

      inputCardDivChild.forEach(element => {
        element.value = ""
      });
    }, 10000);

  })
}


// <!-- ======================== alert error   ======================== -->

let alertError = document.querySelector(".alert-error")

if (alertError) {
  setTimeout(() => {
    alertError.classList.remove("active")
  }, 5000);
}

