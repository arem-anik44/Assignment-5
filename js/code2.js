const loadContainer=()=>{
    const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url).then(res=>res.json()).then(data=>{
        
        console.log(data);
        displayContainer(data.data);
    });
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
        
            <button class=" shadow-lg space-y-4 rounded pt-5 h-full">
                <div class="flex justify-between items-center px-6">
                    ${card.status === 'open'
                        ? `<img src="./assets/Open-Status.png" alt="">`
                        : `<img src="./assets/Closed- Status .png" alt="">`
                    }
                    <h4 class="btn bg-[#FEECEC] rounded-2xl text-red-500 text-[12px]">${card.priority.toUpperCase()}</h4>
                </div>
                <div class="px-4 text-left space-y-3  ">
                    <h2 class="font-semibold  ">${card.title}</h2>
                    <p class="text-[14px] text-[#64748B]">${card.description}</p>
                    <div id="labels" class="flex items-center gap-2 ">
                        <h4 class="btn bg-[#FDE68A] rounded-2xl text-[#D97706]">bug</h4>
                        <h4 class="btn bg-[#FDE68A] rounded-2xl text-[#D97706]">help Wanted</h4>
                    </div>
                </div>

                <div class="text-left text-[#64748B] px-5 border-t border-gray-300">
                    <p class="pt-2">#1 by ${card.assignee}</p>
                    <p>1/15/2024</p>
                </div>
            </button>
        
        
        `;

        cardsContainer.append(cardHolder);


    });
};


loadContainer();
