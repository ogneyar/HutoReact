// MainPage

import { useState } from 'react'
import Repair from '../../components/repair/Repair'

import './MainPage.css'
import './contain.css'


const MainPage = () => {

    const [ aboutMe, setAboutMe ] = useState(false)

    const onClickButtonAboutMe = () => {
        setAboutMe(!aboutMe)
    }

    return (
        <div 
            className="MainPage"
        > 
            <div 
                className="globalStylePage_title"
            >
                <h1>Добро пожаловать!</h1>
                <p>Это официальный сайт блогера ХуторянинЪ.</p>
            </div>

            <div className="MainPage_imageBox">

                <div className="MainPage_imageBox_image"> 
                    <h2 className="MainPage_imageBox_image_caption">Азъ есмь Огънеяръ!</h2>
                    <img 
                        className="MainPage_imageBox_image_img75" 
                        src="images/ya.jpg" 
                        alt="моё фото" 
                    />	
                    <h2 className="MainPage_imageBox_image_caption-two">Азъ есмь Огънеяръ!</h2>
                </div>
                
                <div
                    className="MainPage_imageBox_aboutBox"
                >
                    <div 
                        className="MainPage_imageBox_aboutBox_aboutBtn"
                        id="about"
                        onClick={() => onClickButtonAboutMe()}
                    >
                        <h4>Обо мне.</h4>
                    </div>
                    
                    {aboutMe &&
                    <div 
                        className="MainPage_imageBox_aboutBox_aboutText"
                    >
                        <br/><br/>
                        <p className="centerText">Здравствуйте все! Я блогер, ютубер ХуторянинЪ. </p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Программист по образованию (по специальности), а уже кузнец по случайности, немного столяр, математик и даже чу-чуть певец. Славянин, наречён Весътой именем Огънеяръ. Друзья и близкие так и зовут - Огнеяр или просто Яр, имя данное родителями Михаил переменил официально через ЗАГС. Я сын Валерия и Ольги (Звенирады), внук Сергея и Томары, а так же Леонида и Татьяны. Слава Роду! Слава наша - Богам и Предкам!</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;По специальности устроился лишь в ноябре 2022 года - до это программировал так, для себя, как хобби, теперь хобби тоже программирование но в сфере микроконтроллеров (плюс разработка плат, пайка компонентов). А вообще трудился я во многих сферах, был охранником, грущиком, кладовщиком, зав.складом, мастером по установке спутникового оборудования, инженером-ремонтником холодильного оборудования и инженером пекарни. С февраля 2017 года веду свой блог на ютуб-канале <a className="btn btn-outline-danger" href="https://www.youtube.com/@hutoryanin" target="_blank" rel="noopener noreferrer">ХуторянинЪ</a>. Запуская этот сайт оформился ещё и как самозанятый, что бы официально торговать собственными изделиями ручного производства и продуктами умственного труда.</p>
                        <br/> 
                        {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;Кстати все мои видео с ютуб-канала можно посмотреть здесь на сайте, во вкладке <a className="btn btn-outline-dark" href="/public/1">Публикации</a> нажав тут или в меню на верху. Жду Ваш одобряющий лайк и, когда перейдёте на ютуб, Ваш комментарий под видео, это способствует продвижению канала, заранее благодарю. Обязательно подпишитесь, если ещё не подписанны и жмите колокольчик чтобы не пропускать мои новые видео.</p>
                        <br/> */}
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Этот сайт я сделал сам. Обновляю постепенно, добовляю что-либо, приукрашаю. Пока что ничего особого в нём нет, но это временно, надеюсь на Вашы советы, подсказки. Если есть идеи оформления сайта или увидели какой-нибудь недочёт, просьба написать в <a className="btn btn-outline-warning" href="/support">тех.поддержку</a></p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Немного технической информации касаемой сайта (если кому интересно): это мой третий сайт, изначально он был написан на python 3, фреймворк django, css стили изначально брал от bootstrap'а, хостинг на heroku. Потом я его переписал на ReactJS потому что увлёкся JavaScript'ом и NodeJS. Первый свой сайт писал сам, без фреймворка, на php, css'ки тоже сам прописывал и знаете что, устал, это просто жесть. Сейчас этот сайт не работает, я его отключил, поэтому его глянуть не получится.&nbsp;
                            {/* <a className="btn btn-outline-dark" href="https://prizmarket.ru" target="_blank" rel="noopener noreferrer">Вот он</a> посмотрите. */}        
                        Но вот второй сайт это практически его копия, только расцветку сменил, <a className="btn btn-outline-danger" href="https://7yanika-rostov.ru" target="_blank" rel="noopener noreferrer">вот он</a> посмотрите.</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;В работе сайтов использую телеграм-ботов, они очень помогают в решении разных задач. На первом сайте использовалась вообще "целая армия" ботов, каждый сделан под определённую задачу.</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Мне было интересно усвоить новый язык программирования, вот я и стал изучать python. А так, я коснулся даже программирования приложений под android, поработал немного с языком java, но к нему я наверное ещё вернусь, когда решу в каком виде должно быть приложение для Хуторянина.</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Не совсем-то "немного тех. информации" получилось, увлёкся. ;)</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Периодически кую... или поковываю... Ковать интересно, но быстро устает рука молотком махать, с пневмо-молотом было бы по веселей (или гидро-молотом, или электро, это не так важно). Менее меня увлекает столярка, обтачивать деталь нудно как-то, но как же душа радуется когда процесс подходит к концу и видишь результат своих стараний.</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Иногда точу на деревообрабатывающем станке. Чаще всего это ложки для мёда, иногда скалку, подсвечник, дверные ручки и ножки для тумбочки. В общем любые круглые предметы могу на станке сделать. Станок самодельный, достался мне вместе с поддворьем от предыдущих хозяев. Хороший станок.</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;На этом сайте решил сделать интернет магазин, где предлагаю товары сделанные своими руками и умом. Такие как ножи, ложки, скалки, подсвечники, сайты, боты и платы Хуторино (аналогия с Arduino). Может и странное сочетание, но так уж вышло, так уж сложилась судьба. Я думаю не спроста мне на дипломную работу в институте выпало сделать именно интернет-магазин. Правда название у диплома было жёсткое, я еле понял что имеется ввиду - "Распределительная система управления формированием заказов и их исполнением".</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Заходите по ссылке <a className="btn btn-outline-primary" href="/products">Товары</a> здесь или в верхнем меню, заказывайте понравившийся товар или услугу, жду Вас.</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Периодически провожу различные <a className="btn btn-outline-success" href="/promo">Акции</a> следите за ними, получайте разные подарки, будь то ложки, скалки, ножи или скидки на товары.</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Благодарю всех кто дочитал до этих строк, прошу, по учавствуйте в создании этого сайта, мне нужны Ваши идеи, подсказки. Жду от Вас советов касаемых улучшения сайта, буду рад разным предложениям по видеосъёмке, может есть идеи для моих будущих видео-постов? Пишите в <a className="btn btn-outline-warning" href="/support">тех.поддержку</a></p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Всем удачи! Пока.</p>
                    </div>
                    }
                        
                </div>

            </div>





            <br/>
            <br/>

            {/* <div className="benefit">
                <h2 className="benefit_text_top">Что можно приобрести?!</h2>
                
                <p style="text-align: center;">Всем авторизованным пользователям доступна скидка {{ discount }}%.</p>
                
                <br/><br/>
                <a href="{% url 'middle_knife' %}" >
                    <div className="benefit_img1">
                        <img src="{% static 'img/middle_knife(rectangle).png'%}" alt="Ножи"/>
                        <h3 className="benefit_img_text">Нож "Друг" за <span className="g">1000р</span>&nbsp;<a href="{% url 'middle_knife' %}" className="btn btn-outline-danger" id="btn-buy-1">Смотреть</a></h3>
                    </div>
                </a>

                <a href="{% url 'high_knife_bee' %}?color=red" >
                    <div className="benefit_img2">
                        <img src="{% static 'img/high_knife_bee_red(rectangle).png'%}" alt="high_knife_bee_red"/>
                        <h3 className="benefit_img_text">Нож "Красный Шмель" за <span className="g">2000р</span>&nbsp;<a href="{% url 'high_knife_bee' %}?color=red" className="btn btn-outline-danger" id="btn-buy-2">Смотреть</a></h3>
                    </div>
                </a>

                <a href="{% url 'high_spoon' %}" >
                    <div className="benefit_img3">
                        <img src="{% static 'img/sp1.png'%}" alt="Ложка"/>
                        <h3 className="benefit_img_text">Ложка "Царица" за <span className="g">300р</span>&nbsp;<a href="{% url 'high_spoon' %}" className="btn btn-outline-danger" id="btn-buy-3">Смотреть</a></h3>
                    </div>
                </a>

                <h3 className="benefit_text_bottom"><a href="/products" className="btn btn-outline-primary">Посмотреть все товары</a></h3>
            </div> */}

            <div 
                // className="help"
            > 
                
                <h3>Вопросы и предложения.</h3>
                <br/>
                {/* <form method="post" action="/sendmail/" id='form'>
                    <input type="hidden" name="login" id="login" value="test">
                        
                    <label>Ваш Email:</label><br/>
                    <input type="text" placeholder="Укажите Ваш Email" name="email" id="email" maxlength="100"/><br/><br/>
                        
                    <label>Текст сообщения:</label><br>
                    
                    <div contenteditable="true">
                        <textarea placeholder="Здесь напишите Ваш вопрос или предложение" name="message" id="message" maxlength="1200" wrap="soft"></textarea>
                    </div>	<br>
                        
                    <div align="center">
                        
                        <button class="btn btn-primary submit_sendmail g-recaptcha" 
                            data-sitekey="6LfZqBEaAAAAAHJaSJOIgdCHfShi3Va6YrWcljlF" 
                            data-callback='onSubmit' 
                            data-action='submit'>Отправить</button>
                    </div>
                </form> */}

                
                <br/>
                <br/>

                <Repair minimal={true}/>

                <br/>
                <br/>

            </div>
            
        </div>
    )
}

export default MainPage

