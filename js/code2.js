
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("card-container").classList.add("hidden");
  } else {
    document.getElementById("card-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};


const loadCardDetail = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data);
};

// {"id": 33,"title": "Add bulk operations support","description": "Allow users to perform bulk actions like delete, update status on multiple items at once.","status": "open","labels": ["enhancement"],"priority": "low","author": "bulk_barry","assignee": "","createdAt": "2024-02-02T10:00:00Z","updatedAt": "2024-02-02T10:00:00Z"}

const displayWordDetails = (word) => {
  console.log(word);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
    <div class=" text-left   ">
            <div class="p space-y-3">
                <h2 class="font-bold text-3xl">${word.title}</h2>
                <div class="flex items-center gap-3">
                    <p class="btn btn-primary rounded-3xl py-1 text-[14px] text-white">Opened</p>
                    <img src="./assets/Ellipse 5.png" alt="">
                    <p class="text-[#64748B]">Open by Fahim Ahmed</p>
                    <img src="./assets/Ellipse 5.png" alt="">
                    <p class="text-[#64748B]">22/02/2026</p>
                </div>
                <div class="mt-6">
                    ${createElements(word.labels)}
                </div>

                <div class="mt-6">
                    <p class="text-[#64748B]">${word.description}</p>
                </div>

                <div class="bg-[#F8FAFC] flex gap-40 items-center p-8 rounded mt-6">
                    <div>
                        <h5 class="text-[#64748B] mb-2">Assignee: </h6>
                        <h3>${(word.assignee) ? word.assignee: "assignee_not_found"}</h3>
                    </div>
                    <div class="text-center">
                        <h5 class="text-[#64748B] mb-1">Priority: </h5>
                        <h4 class="btn bg-[#FEECEC] rounded-2xl text-red-500 text-[12px]">${word.priority.toUpperCase()}</h4>
                    </div>
                </div>
            </div>
        </div>
    `;
  document.getElementById("word_modal").showModal();
};



const loadContainer=(st='all')=>{
    
    const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url).then(res=>res.json()).then(data=>{
        
        if(st==="all"){displayContainer(data.data,st);}
        else  {displayContainerSpecific(data.data, st);}

        
        
    });
};

const createElements = (arr) => {
  const htmlElements = arr.map((el) => `<h4 class="btn bg-[#FDE68A] rounded-2xl text-[#D97706]">${el}</h4>`);
  return htmlElements.join(" ");
};

const removeActive = () => {
  const lessonButtons = document.querySelectorAll(".click-btn");
  
  lessonButtons.forEach((btn) => btn.classList.remove("active"));
};


const updateNumberLogo = (count, st) => {
    document.getElementById("numberUpdate").innerText = count;

    const element = document.getElementById("imageUpdate");

    element.innerHTML = `
        ${st === 'all'
            ? '<img src="./assets/Aperture.png" class="bg-[#ECE4FF] rounded-full p-2">'
            : '<img src="./assets/list-ul-solid.png" class="bg-[#ECE4FF] rounded-full p-2 w-12 h-12">'
        }
    `;
};


const displayContainer=(cards,st)=>{

    let count =0;
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML ="";
    cards.forEach(card => {
        
        count =count +1;
        const cardHolder= document.createElement("div");
        cardHolder.innerHTML = `
        
            <button onclick="loadCardDetail(${card.id})" class=" shadow-lg space-y-4 rounded pt-5 h-full flex flex-col ">
                <div class="flex justify-between items-center px-6 h-[40px]">
                    ${card.status === 'open'
                        ? `<img src="./assets/Open-Status.png" alt="">`
                        : `<img src="./assets/Closed- Status .png" alt="">`
                    }
                    <h4 class="btn bg-[#FEECEC] rounded-2xl text-red-500 text-[12px]">${card.priority.toUpperCase()}</h4>
                </div>
                <div class="px-4 text-left space-y-3 flex-1 flex flex-col">
                    <div class="flex-1 space-y-3">
                        <h2 class="font-semibold  ">${card.title}</h2>
                    <p class="text-[14px] text-[#64748B]">${card.description}</p>
                    </div>
                    
                    <div id="labels" class="flex items-center gap-2 h-14 flex-wrap  ">
                         ${createElements(card.labels)}
                    </div>
                </div>

                <div class="text-left text-[#64748B] px-5 border-t border-gray-300 h-[80px]">
                    <p class="pt-2">#1 by ${(card.author) ? card.author: "author_not_found"}</p>
                    <p><p>${new Date(card.createdAt).toLocaleDateString()}</p></p>
                </div>
            </button>
        
        
        `;

        cardsContainer.append(cardHolder);


    });
    updateNumberLogo(count,st);
    
};



const displayContainerSpecific=(cards,st)=>{

    let count =0;
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML ="";
    cards.forEach(card => {

    

    if(card.status === st){
        
        count=count+1;

        const cardHolder= document.createElement("div");
        cardHolder.innerHTML = `
        
            <button onclick="loadCardDetail(${card.id})" class=" shadow-lg space-y-4 rounded pt-5 h-full flex flex-col ">
                <div class="flex justify-between items-center px-6 h-[40px]">
                    ${card.status === 'open'
                        ? `<img src="./assets/Open-Status.png" alt="">`
                        : `<img src="./assets/Closed- Status .png" alt="">`
                    }
                    <h4 class="btn bg-[#FEECEC] rounded-2xl text-red-500 text-[12px]">${card.priority.toUpperCase()}</h4>
                </div>
                <div class="px-4 text-left space-y-3 flex-1 flex flex-col">
                    <div class="flex-1 space-y-3">
                        <h2 class="font-semibold  ">${card.title}</h2>
                    <p class="text-[14px] text-[#64748B]">${card.description}</p>
                    </div>
                    
                    <div id="labels" class="flex items-center gap-2 h-14 ">
                        ${createElements(card.labels)}
                    </div>
                </div>

                <div class="text-left text-[#64748B] px-5 border-t border-gray-300 h-[80px]">
                    <p class="pt-2">#1 by ${(card.author) ? card.author: "author_not_found"}</p>
                    <p><p>${new Date(card.createdAt).toLocaleDateString()}</p></p>
                </div>
            </button>
        
        
        `;

        cardsContainer.append(cardHolder);

    }

    
        

    }
    

);
updateNumberLogo(count,st);

};


loadContainer();


const showOpen=()=>{
    removeActive();
    document.getElementById("open-btn").classList.add("active");
    loadContainer("open");
};

const showAll=()=>{
    removeActive();
    document.getElementById("all-btn").classList.add("active");
    loadContainer();
};

const showClosed=()=>{
    removeActive();
    document.getElementById("closed-btn").classList.add("active");
    loadContainer("closed");
};



document.getElementById("btn-search").addEventListener("click", () => {
  removeActive();
  const input = document.getElementById("input-search");
  const searchValue = input.value.trim().toLowerCase();
  

  url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      

      displayLevelWord(data.data);
    });
});


const displayLevelWord=(cards)=>{
    let count=0;
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML ="";
    cards.forEach(card => {
        count= count+1;
     const cardHolder= document.createElement("div");
        cardHolder.innerHTML = `
        
            <button onclick="loadCardDetail(${card.id})" class=" shadow-lg space-y-4 rounded pt-5 h-full flex flex-col ">
                <div class="flex justify-between items-center px-6 h-[40px]">
                    ${card.status === 'open'
                        ? `<img src="./assets/Open-Status.png" alt="">`
                        : `<img src="./assets/Closed- Status .png" alt="">`
                    }
                    <h4 class="btn bg-[#FEECEC] rounded-2xl text-red-500 text-[12px]">${card.priority.toUpperCase()}</h4>
                </div>
                <div class="px-4 text-left space-y-3 flex-1 flex flex-col">
                    <div class="flex-1 space-y-3">
                        <h2 class="font-semibold  ">${card.title}</h2>
                    <p class="text-[14px] text-[#64748B]">${card.description}</p>
                    </div>
                    
                    <div id="labels" class="flex items-center gap-2 h-14 ">
                        ${createElements(card.labels)}
                    </div>
                </div>

                <div class="text-left text-[#64748B] px-5 border-t border-gray-300 h-[80px]">
                    <p class="pt-2">#1 by ${(card.author) ? card.author: "author_not_found"}</p>
                    <p><p>${new Date(card.createdAt).toLocaleDateString()}</p></p>
                </div>
            </button>
        
        
        `;

        cardsContainer.append(cardHolder);

    });
    updateNumberLogo(count,"search");
    
};



