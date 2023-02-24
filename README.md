# week_11

1. Сколько детей (дочерних DOM-узлов) у элемента `<ul>` в примере ниже:

   ```jsx
   <ul>
     <li>Привет</li>
     <li>Мир</li>
   </ul>;

   2;
   ```

2. Есть такой элемент: `<input id= "input" value = "Привет">`. Какой вызов поменяет значение в нём?

   let input=document.getElementById ('input'); input.value="Change"; или input.setAttribute("value", "change")

3. Сколько потомков будет у `<div>` после кода ниже?

   ```jsx
   <div id="div"></div>
   <p id="p">Привет</p>

   <script>
     div.append(p);
     div.append(p);
   </script>

            3 потомка
   ```

4. В каких случаях для элемента elem не верно `elem.firstChild == elem.lastChild`?

- Когда у elem два или более потомков - в этом случае
- Когда у elem единственный потомок
- Когда у elem нет потомков - в этом случае
- Нет такого варианта ответа

5.  Какое свойство задает класс элемента?

        Element.className

6.  Для чего используется запись: `setAttribute(name, value)`? - устанавливает значение атрибута
7.  Назовите метод добавления текста к документу. - textContent
8.  Как получить HTML-содержимое DOM-элемента elem?

    console.log (elem.innerHTML)

9.  Что такое объект события и какие у него могут быть свойства?

        Объект event. Он содержит информацию и о произошедшем событии, и о «кликнутом» элементе. Свойства:
        bubbles – логическое значение, указывающее на то является ли данное событие всплывающим;
        cancelable – определяет можно ли событие отменить;
        cancelBubble – при установке true предотвращает всплытие события, т.е. оно всплывать не будет (является псевдонимом метода stopPropagation);
        composed – указывает может ли событие всплывать через из теневого DOM (внутреннего DOM конкретного элемента) в обычный DOM документа;
        currentTarget – элемент, привязанный к обработчику события;
        defaultPrevented – показывает был ли для события вызван метод preventDefault;
        eventPhase – число, указывающее фазу процесса распространения события (0 – не обрабатывается, 1 – погружение, 2 – целевой элемент, 3 – всплытие);
        isTrusted – указывает вызвано ли событие действием пользователя или программно (посредством использования метода dispatchEvent);
        returnValue – альтернатива для preventDefault;
        target – элемент, который создал событие;
        timestamp – время, когда произошло событие;
        type – тип (имя) события.

10. Что такое BOM и DOM?

Объектная модель браузера (Browser Object Model, BOM) — это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа. DOM — это независящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.

11. Есть вот такая страница:

    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <form name="search">
          <label>Поиск: <input type="text" name="search" /> </label>
          <input type="submit" value="Search!" />
        </form>
        <hr />
        <form name="search-person">
          Поиск по посетителям:
          <table id="age-table">
            <tr>
              <td>Возраст:</td>
              <td id="age-list">
                <label> <input type="radio" name="age" value="young" />до 18</label>
                <label> <input type="radio" name="age" value="mature" />18-50</label>
                <label> <input type="radio" name="age" value="senior" />старше 50</label>
              </td>
            </tr>
            <tr>
              <td>Дополнительно:</td>
              <td>
                <input type="text" name="info" />
                <input type="text" name="info" />
                <input type="text" name="info" />
              </td>
            </tr>
          </table>
          <input type="button" value="Search!" />
        </form>
      </body>
    </html>
    ```

    Как найти в ней:

    1.  Таблицу с `id="age-table"`
    2.  Все элементы `label` **внутри** этой таблицы (их три)
    3.  Форму `form` с именем `name="search-person"`

            let ageTable = document.querySelector('#age-table');
            let label = ageTable.querySelectorAll ('label');
            console.log(label);
            console.log(ageTable);
            console.log(ageTable.closest('form'));

12. Как сделать переход на другую страницу при клике на кнопку (без `<a href=...>`, только средствами JavaScript)?

onclick="document.location='page/new.html'"

Задание на развитие мягких навыков (soft skills)

Я научилась делать страницы более отзывчивыми с помощью js

Я поняла, что js гораздо сложнее и интереснее html и css

Теперь я могу сказать, что действительно начинаю программировать

Для меня было открытием то, что информация не укладывается в голове так легко, как это было раньше

Мне показалось важным делать заметки и сохранять результаты промежуточных заданий на будущее
