
var loader = document.querySelector(".preloader")

window.addEventListener("load", vanish);
function vanish() {
  
    loader.classList.add("disppear");
}



//------------------

//progresss bar js script


let url = window.location.href;
fetch(url+'/v1/api/rocky/')
.then(response => response.json())
.then(output =>
    {
        //to show progress bar
        datas = output[0]["skills"];
        
        
        
        
        for(let i = 0 ;i < datas.length;i++){

           let  skill_name = datas[i]["skill"];
           
          
           
          let fill_class = `.progress-fill-${skill_name}`;
          let cover_class = `.progress-cover-${skill_name}`;
          let percentage = datas[i]["percentage"]/100;
          
          
          const STYLEfill = document.createElement('style');
          STYLEfill.innerHTML = `${fill_class}{position: absolute;top: 100%;left: 0;width: inherit;height: 100%;background: var(--green-color);transform-origin: center top;transform: rotate(${(percentage / 2)}turn);transition: transform 3.5s ease-out;}`;
          document.body.appendChild(STYLEfill);
          

          const STYLEcover = document.createElement('style');
          STYLEcover.innerHTML = `${cover_class}{width: 75%;height: 150%;background: #1e1e24;border-radius: 50%;position: absolute;top: 25%;left: 50%;transform: translateX(-50%); display: flex;align-items: center;justify-content: center;padding-bottom: 25%;box-sizing: border-box;font-family: 'Ron','Courier New', Courier, monospace;font-size: 25px;}`;
          document.body.appendChild(STYLEcover);
          document.querySelector(cover_class).textContent = `${Math.round(percentage * 100)}%`;


        }

        //to display project imgs
        data = output[1]["projects"];

    for (let i=0;i<data.length;i++){
        var type_id = data[i]["id"];
        const textId= `#text-${type_id}`;
       
    
        var typed = new Typed(textId, {
            strings: ['Here is your', data[i]["title"]],
            typeSpeed: 100,
            backDelay: 1500,
            showCursor: true,
            cursorChar: '',
            autoInsertCss: true,
        
          });
        var openProBtn = document.querySelector(`.Open-project-${data[i]['id']}`);
        const STYLEBtn = document.createElement('style');
          STYLEBtn.innerHTML =`.Open-project-${data[i]['id']}{width: fit-content;height: 35px;font-family: 'Press Start 2P', cursive;font-size: 15px;}.Open-project-${data[i]['id']}:hover{ transform: scale(1.5);color: var(--bg-secondary);}`;
          document.body.appendChild(STYLEBtn);
        var codeClass = `.open-code-${data[i]['id']}`;
        var code = document.querySelector(codeClass);
        openProBtn.onclick = function() {
          var redirectWindow = window.open(data[i]['link'], '_blank');
          redirectWindow.location;
      };
        code.addEventListener("click", ()=>{
        anime({
                targets: codeClass,
                keyframes: [{translateY: 20}],
                duration: 4000,
                easing: 'easeOutElastic(1, .8)',
                loop: false
            });
        
        });
        
        var filename = data[i]["file"] + ".jpg"
        fetch('/get_url_rocky_projects/' + filename)
        .then(response => response.text())
        .then(url => {
            var id = document.getElementById(data[i]["file"]);
            id.src=url;

        }).catch(error => {
            console.error('An error occurred:', error);
          });
        
        }
        
    }

  ).catch(err => { throw err });




  function clickin(){
    var elmntToView = document.getElementById("signal");
    elmntToView.scrollIntoView();
    var top = document.querySelector(".top");
    var topElement = document.getElementById("contacts");
  
    top.style.transform = "rotateZ(0deg)";
    var signalWave = document.getElementById("signal-wave");

      setTimeout(() => {
        signalWave.style.height = `100vh`; 
        setTimeout(() => {
          signalWave.style.height = "0vh";
          top.style.transform = "rotateZ(30deg)";
          setTimeout(() => {
            topElement.scrollIntoView();
          }, 1000);
          
        }, 1000);
        
      }, 1000);


    }      


    var home = document.getElementById("home-link");
    var homeId= document.getElementById("home");
    var about = document.getElementById("about-link");
    var aboutId = document.getElementById("about");
    var skill = document.getElementById("skills-link");
    var skillId = document.getElementById("skills")
    var project = document.getElementById("projects-link");
    var projectId = document.getElementById("projects")
    var contact = document.getElementById("contacts-link");
    var contactId = document.getElementById("contacts")
    
    home.addEventListener("click",()=>{
      homeId.scrollIntoView({behavior: "smooth"});
    });
    about.addEventListener("click",()=>{
      aboutId.scrollIntoView();
    });
    skill.addEventListener("click",()=>{
    skillId.scrollIntoView();
    });
    project.addEventListener("click",()=>{
      projectId.scrollIntoView();
    
    });
    contact.addEventListener("click",()=>{
    contactId.scrollIntoView({behavior: "smooth"});
    });