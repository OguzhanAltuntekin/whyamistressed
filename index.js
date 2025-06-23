const startButton = document.getElementById('startButton');
const buttonContainer = document.getElementById(`buttonContainer`)
const buttonContainer2 = document.getElementById(`buttonContainer2`)
const approvedButton = document.getElementById(`approvedButton`)
const deniedButton = document.getElementById(`deniedButton`)
const resetButton = document.getElementById(`resetButton`)
const turnBackButton = document.getElementById(`turnBackButton`)
const firstH1 = document.getElementById(`firstH1`)

resetButton.onclick = function(){
   if (window.confirm("You are going the start point, are you sure about it?")) {

    window.location.reload();
   }

}

const Q1 = "Do you think your stress might have a physical (body-based) cause?"
//PHYSICAL BRANCH (Q2 → Q9)             YES LEADS TO / NO LEADS TO
const Q2 = "Are you hungry?" // Q3/Q4
const Q3 = "Is there something stopping you from eating right now?" // Q3a/S1
const Q3a = "Is the barrier lack of time?" // S2/Q3b
const Q3b = "Is the barrier lack of money?" //  S3/ Q3c
const Q3c = "Is the barrier no appetite?" //  S4/S5
const Q4 = "Are you thirsty?" // Q4a/Q5
const Q4a = "Do you mostly drink caffeine / sugary drinks instead of water?" // S6/S3
const Q5 = "Did you sleep less than 6 hours in the last 24 h?" // Q5a/Q6
const Q5a = "Can you take a short nap right now?" // S7/S8
const Q6 = "Have you exercised in the last 3 days?" // Q6a/Q7
const Q6a = "Do you feel extremely tired or sore?" // S9/S10
const Q7 = "Do you have noticeable pain or aches?" // Q7a/Q8
const Q7a = "Does the pain affect daily tasks?" // S11/S12
const Q8 = "Could alcohol or nicotine be cranking up your stress?" // S13/Q9
const Q9 = "Feeling signs of fever, infection, or hormonal shifts?" // S14/Q10

//MIND – ENVIRONMENT – SOCIAL BRANCH (Q10 → Q27)
const Q10 = "Is there an urgent deadline / exam hanging over you?" //
const Q11 = "Are you stressed because you procrastinated?" //
const Q12 = "Is the task so complex you don’t know where to start?" //
const Q13 = "Do you have enough resources / support for the task?" //
const Q14 = "Are your own expectations realistic?" //
const Q15 = "Do you feel lonely right now?" //
const Q16 = "Can you reach someone right now?" //
const Q17 = "Are you willing to try a new group / community?" //
const Q18 = "Have you had a recent relationship conflict?" //
const Q19 = "Can talking it out realistically solve it?" //
const Q20 = "Are money worries on your mind?" //
const Q21 = "Do you keep a clear budget?" //
const Q22 = "Are your expenses exceeding income?" //
const Q23 = "Stuck in a loop of negative thoughts?" //
const Q24 = "Is the loop focused on the past?" //
const Q25 = "Is the loop about future worries?" //
const Q26 = "Do you feel a lack of meaning / purpose in life?" //
const Q27 = "Are your short- or mid-term goals clear?" //

/* ───────────── SOLUTION CONSTANTS ───────────── */

const S1  = "Eat now stabilise blood sugar with a quick snack.";
const S2  = "5 minute snack kit  prep grab and go options.";
const S3  = "Cheap & nutritious menu lentils, eggs, tuna, seasonal fruit.";
const S4  = "Liquid / light option smoothie, soup, protein shake.";
const S5  = "Remove other food barriers ask a friend or order fast delivery.";
const S6  = "Hydrate and cut excess caffeine/sugar.";
const S7  = "Take a 20 minute power nap.";
const S8  = "Bright light + one coffee, then a short walk.";
const S9  = "Stretch and active recovery for soreness.";
const S10 = "Add a light 15 minute walk or bodyweight routine.";
const S11 = "Seek professional medical help for persistent pain.";
const S12 = "Hot/cold compress plus gentle stretching.";
const S13 = "Reduce alcohol/nicotine intake; seek support if needed.";
const S14 = "Consult a doctor for fever, infection, or hormonal issues.";
const S15 = "Start a 25-5 Pomodoro focus session.";
const S16 = "Break the task into 3 micro-steps and begin step 1.";
const S17 = "Identify missing resources and ask for help.";
const S18 = "Prioritise tasks and delegate or defer lower priorities.";
const S19 = "Lower expectations aim for an MVP or 80 % rule.";
const S20 = "Reach out to someone right now via text or call.";
const S21 = "Join a new community or group, online or local.";
const S22 = "Loneliness toolkit  journal, walk, cosy ritual, pet time.";
const S23 = "Use 3-step communication: feel, need, request.";
const S24 = "Set clear boundaries; consider counselling.";
const S25 = "Draft a simple 50-30-20 budget.";
const S26 = "Cut costs or find small freelance gigs for extra income.";
const S27 = "Start building an emergency fund (10 % of income).";
const S28 = "Self-compassion letter to process past events.";
const S29 = "Future-control checklist and action plan.";
const S30 = "Grounding + 4-7-8 breathing for general anxiety.";
const S31 = "Consider therapy if stress source remains unclear.";
const S32 = "Write SMART goals for the next period.";
const S33 = "Clarify values and create a vision board.";



function starting(){
    startButton.textContent = Q1;
    firstH1.style.display = `none`;
    startButton.style.marginBottom = `15px`;
    startButton.style.backgroundColor = `#b497ff`;
    startButton.style.fontSize =`30px`;
    startButton.style.color=`white`;
    startButton.style.marginTop = `vh`;
    startButton.style.pointerEvents = 'none'; 
    startButton.style.cursor = 'not-allowed'; 
    startButton.style.scale = `1.2`;
    startButton.disabled = true;
    buttonContainer.style.display = `flex`;
    buttonContainer.style.marginTop = `10vh`;
    buttonContainer2.style.display = `block`;  
    approvedButton.onclick = function () {
        startButton.textContent = Q2;      // kullanıcı “Yes” dedi → Q2
        going1();                           // şimdi ikinci seviye (Q2 → Q3/Q4) handler’larını kur
      };
      deniedButton.onclick = function () {
        startButton.textContent =  Q10 ;     // kullanıcı “No” dedi → Q10
        going2();
      };
    
}

function going1(){
    approvedButton.onclick = function () {
        startButton.textContent =  Q3 ;
        going3 ();
      };
      deniedButton.onclick = function () {
        startButton.textContent =  Q4 ;
        going4();
      };
    
    
}

function going2 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q11 ;
    going5();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q15 ;
    going6();
  };

}

function going3 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q3a ;
    going7();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S1;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going4 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q4a ;
    going8();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q5 ;
    going9();
  };

}

function going5 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S15 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q12 ;
    going10();
  };

}

function going6 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q16 ;
    going11();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q18 ;
    going12();
  };

}

function going7 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S2 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q3b ;
    going13();
  };

}

function going8 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S6 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S3 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going9 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q5a ;
    going14();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q6 ;
    going15();
  };

}

function going10 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S16 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q13 ;
    going16();
  };

}

function going11 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S20 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q17 ;
    going17();
  };

}

function going12 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q19 ;
    going18();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q20 ;
    going19();
  };

}

function going13 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S3 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q3b ;
    going20();
  };

}

function going14 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S7 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S8 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going15 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q6a ;
    going21();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q7 ;
    going22();
  };

}

function going16 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q14 ;
    going23();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S17 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going17 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S21 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S22 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going18 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S23 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S24 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going19 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q21 ;
    going24();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q23 ;
    going25();
  };

}

function going20 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S3 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q3c ;
    going26();
  };

}

function going21 (){
    approvedButton.onclick = function () {
    startButton.textContent = S9 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S10 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going22 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q7a ;
    going27();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q8 ;
    going28();
  };

}

function going23 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S18 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S19 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going24 (){
    approvedButton.onclick = function () {
    startButton.textContent = Q22 ;
    going29();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S25 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going25 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q24 ;
    going30();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q26 ;
    going31();
  };

}

function going26 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S4 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S5 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going27 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S11 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S12 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going28 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S13 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q9 ;
    going32();
  };

}

function going29 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S26 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S27 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going30 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S28 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q25 ;
    going33();
  };

}

function going31 (){
    approvedButton.onclick = function () {
    startButton.textContent =  Q27 ;
    going34();
  };
  deniedButton.onclick = function () {
    startButton.textContent =  S31 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };

}

function going32 (){
    approvedButton.onclick = function () {
    startButton.textContent =  S14 ;
    buttonContainer.style.display =`none`;
    startButton.style.fontSize =`40px`;
    startButton.style.backgroundColor = `#007e4e`;
  };
  deniedButton.onclick = function () {
    startButton.textContent =  Q10 ;
    going2();
  };

}

startButton.onclick = starting;
