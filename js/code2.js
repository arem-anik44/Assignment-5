




const loadContainer=(st='all')=>{
    const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url).then(res=>res.json()).then(data=>{
        
        if(st==="all"){displayContainer(data.data);}
        else  {displayContainerSpecific(data.data, st);}
        
    });
};
const removeActive = () => {
  const lessonButtons = document.querySelectorAll(".click-btn");
  
  lessonButtons.forEach((btn) => btn.classList.remove("active"));
};

// {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },

const displayContainer=(cards)=>{

    
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML ="";
    cards.forEach(card => {
        console.log(card);

        const cardHolder= document.createElement("div");
        cardHolder.innerHTML = `
        
            <button class=" shadow-lg space-y-4 rounded pt-5 h-full flex flex-col ">
                <div class="flex justify-between items-center px-6 h-[40px]">
                    ${card.status === 'open'
                        ? `<img src="./assets/Open-Status.png" alt="">`
                        : `<img src="./assets/Closed- Status .png" alt="">`
                    }
                    <h4 class="btn bg-[#FEECEC] rounded-2xl text-red-500 text-[12px]">${card.priority.toUpperCase()}</h4>
                </div>
                <div class="px-4 text-left space-y-3 flex-1 flex flex-col">
                    <div class="flex-1">
                        <h2 class="font-semibold  ">${card.title}</h2>
                    <p class="text-[14px] text-[#64748B]">${card.description}</p>
                    </div>
                    
                    <div id="labels" class="flex items-center gap-2 h-14 ">
                        <h4 class="btn bg-[#FDE68A] rounded-2xl text-[#D97706]">bug</h4>
                        <h4 class="btn bg-[#FDE68A] rounded-2xl text-[#D97706]">help Wanted</h4>
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
};
const displayContainerSpecific=(cards,st)=>{

    
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML ="";
    cards.forEach(card => {

    let count =0;

    if(card.status === st){
        console.log(card);
        count=count+1;

        const cardHolder= document.createElement("div");
        cardHolder.innerHTML = `
        
            <button class=" shadow-lg space-y-4 rounded pt-5 h-full flex flex-col ">
                <div class="flex justify-between items-center px-6 h-[40px]">
                    ${card.status === 'open'
                        ? `<img src="./assets/Open-Status.png" alt="">`
                        : `<img src="./assets/Closed- Status .png" alt="">`
                    }
                    <h4 class="btn bg-[#FEECEC] rounded-2xl text-red-500 text-[12px]">${card.priority.toUpperCase()}</h4>
                </div>
                <div class="px-4 text-left space-y-3 flex-1 flex flex-col">
                    <div class="flex-1">
                        <h2 class="font-semibold  ">${card.title}</h2>
                    <p class="text-[14px] text-[#64748B]">${card.description}</p>
                    </div>
                    
                    <div id="labels" class="flex items-center gap-2 h-14 ">
                        <h4 class="btn bg-[#FDE68A] rounded-2xl text-[#D97706]">bug</h4>
                        <h4 class="btn bg-[#FDE68A] rounded-2xl text-[#D97706]">help Wanted</h4>
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

    
        

    });
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
