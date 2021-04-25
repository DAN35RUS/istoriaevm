const wrapper = document.getElementById("quest-wrapper");
let totalBall = 0;
let ball = 0;
let currentNumber = 0;
let check = 0;

const quest = [
    {
        q: "Вопрос 1: Какова была продолжительность у электромеханического периода? ",
        a1: {txt: "1895-1950 гг.", w: 0},
        a2: {txt: "1805-1900 гг.", w: 0},
        a3: {txt: "1888-1945 гг.", w: 1},
        a4: {txt: "1888-1950 гг.", w: 0}
    },
    {
        q: "Вопрос 2: Кто построил статистический табулятор?",
        a1: {txt: "Герман Холлерит", w: 1},
        a2: {txt: "Чарльз Беббидж", w: 0},
        a3: {txt: "Клод Шеннон", w: 0},
        a4: {txt: "Ванневер Буш", w: 0}  
    },
    {
        q: "Вопрос 3: Что навело Холлерита на идею использования перфокарт? ",
        a1: {txt: "Железнодорожные билеты с перфорацией", w: 1},
        a2: {txt: "Способ шуллерства в картах", w: 0},
        a3: {txt: "Его идея появилась во сне", w: 0},
        a4: {txt: "Станок Жаккара", w: 1}
   },
   {
        q: "Вопрос 4: Когда появилась фирма IBM?",
        a1: {txt: "В 1930 году", w: 0},
        a2: {txt: "В 1927 году", w: 0},
        a3: {txt: "В 1924 году", w: 1},
        a4: {txt: "В 1925 году", w: 0}
    },
    {
        q: "Вопрос 5: Где главным образом сначала использовалась перфорационная техника?",
        a1: {txt: "В статистике", w: 1},
        a2: {txt: "В политике", w: 0},
        a3: {txt: "В военной промышленности", w: 0},
        a4: {txt: "В образовании", w: 0}
   },
   {
        q: "Вопрос 6: К какому времени зарубежные САК появились в СССР?",
        a1: {txt: "В 1940-х гг.", w: 0},
        a2: {txt: "В 1920-х гг.х", w: 0},
        a3: {txt: "В 1910-х гг.", w: 0},
        a4: {txt: "В 1930-х гг.", w: 1}
    },
    {
        q: "Вопрос 7: Когда появился первый отечественный табулятор САК?",
        a1: {txt: "В 1950-е гг.", w: 1},
        a2: {txt: "В 1940-е гг.", w: 0},
        a3: {txt: "В 1945-е гг.", w: 0},
        a4: {txt: "В 1930-е гг.", w: 0}
    },
    {
        q: "Вопрос 8: Расшифруйте «РВМ-1»",
        a1: {txt: "Российская вычислительная машина-1", w: 0},
        a2: {txt: "Релейная вычислительная машина–1", w: 1},
        a3: {txt: "Ранняя вычислительная машина-1", w: 0},
        a4: {txt: "Рязанская вычислительная машина-1", w: 0}
    },
    {
        q: "Вопрос 9: Кто является автором дифференциального анализатора?",
        a1: {txt: "Ванневер Буш", w: 1},
        a2: {txt: "Клод Шеннон", w: 0},
        a3: {txt: "Герман Холлерит", w: 0},
        a4: {txt: "Конард Цузе", w: 0}
    },
    {
        q: "Вопрос 10: В какой системе счисления проводились расчеты на механическом анализаторе В. Буша?",
        a1: {txt: "В двоичной", w: 0},
        a2: {txt: "В восьмиричной", w: 0},
        a3: {txt: "В десятичной", w: 1},
        a4: {txt: "В шестнадцатеричной", w: 0}
    },
    {
        q: "Воппрос 11: Кто ввёл определение бит?",
        a1: {txt: "Ванневер Буш", w: 0},
        a2: {txt: "Клод Шеннон", w: 1},
        a3: {txt: "Конард Цузе", w: 0},
        a4: {txt: "Герман Холлерит", w: 0}
    },
    {
        q: 'Вопрос 12: Кто ввёл "машинное слово", word?',
        a1: {txt: "Ванневер Буш", w: 0},
        a2: {txt: "Клод Шеннон", w: 0},
        a3: {txt: "Конард Цузе", w: 1},
        a4: {txt: "Герман Холлерит", w: 0}
    },
    {
        q: "Вопрос 13: Кто предложил использовать двоичную систему счисления в вычислительных машинах?",
        a1: {txt: "Ванневер Буш", w: 0},
        a2: {txt: "Конард Цузе", w: 1},
        a3: {txt: "Клод Шеннон", w: 0},
        a4: {txt: "Герман Холлерит", w: 0}
    },
    {
        q: "Вопрос 14: Кто первым собрал двоичный сумматор?",
        a1: {txt: "Ванневер Буш", w: 0},
        a2: {txt: "Клод Шеннон", w: 0},
        a3: {txt: "Конард Цузе", w: 0},
        a4: {txt: "Джордж Стибиц", w: 1}
    },
    {
        q: 'Вопрос 15: Кто был создателем вычислительной машины "Mark-1"?',
        a1: {txt: "Ванневер Буш", w: 0},
        a2: {txt: "Говард Эйкен", w: 1},
        a3: {txt: "Конард Цузе", w: 0},
        a4: {txt: "Герман Холлерит", w: 0}
    },
]

const showQ = (num) => {
    if (num < quest.length)
    {div.innerHTML = `<p class="question h6 list-group-item card-title mx-3 mb-0 mt-3 text-white bg-secondary">`+quest[num].q+`</p>
    <div class="card-body">
        <p>
            <label class="ans text-secondary list-group-item" value="`+quest[num].a1.w+`">
                <input style="margin-right: 10px;" class="point form-check-input me-2" name="1" value="`+quest[num].a1.w+`" type="radio" >`+quest[num].a1.txt+`
            </label>
        </p>
        <p>
            <label class="ans text-secondary list-group-item" value="`+quest[num].a2.w+`">
                <input style="margin-right: 10px;" class="point form-check-input me-2" name="1" value="`+quest[num].a2.w+`" type="radio">`+quest[num].a2.txt+`
            </label>
        </p>
        <p>
            <label class="ans text-secondary list-group-item" value="`+quest[num].a3.w+`">
                <input style="margin-right: 10px;" class="point form-check-input me-2" name="1" value="`+quest[num].a3.w+`" type="radio">`+quest[num].a3.txt+`
            </label>
        </p>
        <p>
            <label class="ans text-secondary list-group-item" value="`+quest[num].a4.w+`">
                <input style="margin-right: 10px;" class="point form-check-input me-2" name="1" value="`+quest[num].a4.w+`" type="radio">`+quest[num].a4.txt+`
            </label>
        </p>
        <p>
            <label style="margin-right: 10px;"   class="ans text-secondary list-group-item" value="0">
            <input style="margin-right: 10px;" class="point form-check-input me-2" name="1" value="0" type="radio">Пропустить
             </label>
        </p>
        <p id="answer1" class="btn btn-lg btn-outline-primary" >Ответить</p>
    </div>`;
                currentNumber = currentNumber + 1;
                totalBall = totalBall + Number(ball);} else {
                    totalBall = totalBall + Number(ball);
                    ball =0;
                    div.innerHTML = `<p class="question"> Тест завершен. </p><p>Вы набрали: <b style ="color: red">`+totalBall+`</> из 15 баллов</p>`
                }
                
}

const nextQ = (event) => {
    if (event.target.id == 'answer1' && check >0) {
        console.log(event.target);
        showQ(currentNumber);
        check = 0;
    } else if ((event.target.className == 'ans text-secondary list-group-item') || (event.target.className == 'point form-check-input me-2')) {
        ball = event.target.getAttribute('value');
        check = 1;
    } else if (event.target.id == 'answer1' && check ==   0){
        alert('Выберите вариант ответа')
    };
} ;

let div = document.createElement('div');
div.className = "msg";
showQ(0);
const answer = document.getElementById('answer1');
wrapper.append(div);
document.addEventListener("click", nextQ);