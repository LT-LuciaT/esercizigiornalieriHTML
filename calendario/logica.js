let now = new Date();

function DaysInThisMonth (){
    let getYear = now.getFullYear();
    let getMonth = now.getMonth ();

    let lastDayDate = new Date(getYear, getMonth +1, 0);
    let lastDayOfTheMonth = lastDayDate.getDate();
}


function CratDays(days) {
        let calendar = document.querySelector('#calendar');

        for(let i=0; i<=lastDayOfTheMonth; i++) {
        let dayCellNode = document.createElement('div')
        dayCellNode.className = 'day';
        let day = document.createElement('he');
        day.innerText = i;

        let today = now.getDate();
        if(i === today){
        day.classList.add('color-epic')
    }

    dayCellNode.appendChild(day);
    calendar.appendChild(dayCellNode);
    }


}
let days = DaysInThisMonth();
CratDays(days)