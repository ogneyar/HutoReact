// MainPage

import { useState } from 'react'
import Repair from '../../components/repair/Repair'

import './MainPage.css'
import './contain.css'
import './image.css'


const MainPage = () => {

    const [ aboutMe, setAboutMe ] = useState(false)

    const onClickButtonAboutMe = () => {
        setAboutMe(!aboutMe)
    }

    return (
        <div 
            className="MainPage globalStylePage"
        > 
            {/* <div 
                className="MainPage_title globalStylePage_title"
            > */}
                <div className="globalStylePage_title">
                    <h1>Добро пожаловать!</h1>
                    <p>Это официальный сайт блогера ХуторянинЪ.</p>
                </div>
            {/* </div> */}

                <div className="image">  
                    <h2 className="caption">Азъ есмь Огънеяръ!</h2>
                    <img className="img100" src="images/ya.jpg" alt="моё фото" />		
                </div>

                <div className="contain contain-home">

                    <div 
                        className="about-btn"
                        id="about"
                        onClick={() => onClickButtonAboutMe()}
                    >
                        <h4>Обо мне.</h4>
                    </div>
                    
                    {aboutMe &&
                    <div 
                        // className="textAboutMe"
                        className="about-text"
                    >
                        <br/><br/>
                        <p>Здравствуйте все! Я блогер, ютубер ХуторянинЪ. </p>

                        <p>Программист по образованию (по специальности), а уже кузнец по случайности, немного столяр, математик и даже чу-чуть певец. Славянин, наречён Весътой именем Огънеяръ. Друзья и близкие так и зовут - Огнеяр, в миру Михаил (Яковлев Михаил Валерьевич). Сын Валерия и Ольги (Звенирады), внук Сергея и Томары, а так же Леонида и Татьяны. Слава Роду! Слава наша - Богам и Предкам! </p>
                            
                        <p>Трудился я во многих сферах, по специальности кстати никогда - это хобби, был грущиком, кладовщиком, зав.складом, мастером по установке спутникового оборудования, инженером-ремонтником холодильного оборудования, инженером пекарни, а сейчас несу службу в охране и плюс вольный блогер ютуб-канала. Запуская этот сайт оформился ещё и как самозанятый, что бы официально торговать собственными изделиями ручного производства и продуктами умственного труда.</p>
                            
                        <p>Кстати все мои видео с ютуб-канала можно посмотреть здесь на сайте, во вкладке <a className="btn btn-outline-dark" href="/public/1">Публикации</a> нажав тут или в меню на верху. Жду Ваш одобряющий лайк и, когда перейдёте на ютуб, Ваш комментарий под видео, это способствует продвижению канала, заранее благодарю. Обязательно подпишитесь, если ещё не подписанны и жмите колокольчик чтобы не пропускать мои новые видео.</p>
                            
                        <p>Этот сайт я сделал сам. Обновляю постепенно, добовляю что-либо, приукрашаю. Пока что ничего особого в нём нет, но это временно, надеюсь на Вашу помощь, подсказки - совету всегда рад. Если есть идеи оформления сайта или увидели какой-нибудь недочёт, просьба написать в <a className="btn btn-outline-warning" href="/support">тех.поддержку</a></p>
                            
                        <p>Немного технической информации касаемой сайта (если кому интересно): это мой третий сайт, он написан на python 3, фреймворк django, css стили изначально брал от bootstrap'а, хостинг на heroku. Первый свой сайт писал сам, без фреймворка, на php, css'ки тоже сам прописывал и знаете что, устал, это просто жесть. <a className="btn btn-outline-dark" href="https://prizmarket.ru" target="_blank" rel="noopener noreferrer">Вот он</a> посмотрите. Второй сайт это практически его копия, только расцветку сменил, <a className="btn btn-outline-danger" href="https://7yanika-rostov.ru" target="_blank" rel="noopener noreferrer">вот и он</a> сравните. Их  постопенно тоже модернизирую.</p>
                            
                        <p>В работе сайтов использую телеграм-ботов, они очень помогают в решении разных задач. В первом сайте используется вообще "целая армия" ботов, каждый сделан под определённую задачу. Написаны на php, а в этом сайте мне помогает пока только один, конечно же написан он на python.</p>
                            
                        <p>Мне было интересно усвоить новый язык программирования, вот я и стал изучать python. А так, я коснулся даже программирования приложений под android, поработал немного с языком java, но к нему я ещё обязательно вернусь когда решу в каком виде должно быть приложение для Хуторянина.</p>
                            
                        <p>Не совсем-то "немного тех. информации" получилось, увлёкся. ;)</p>
                            
                        <p>Периодически кую... или поковываю... Ковать интересно, но быстро устает рука молотком махать, с пневмо-молотом было бы по веселей (или гидро-молотом, или электро, это не так важно). Менее меня увлекает столярка, обтачивать деталь нудно как-то, но как же душа радуется когда процесс подходит к концу и видишь результат своих стараний.</p>
                            
                        <p>Иногда точу на деревообрабатывающем станке. Чаще всего это ложки для мёда, иногда скалку, подсвечник, дверные ручки и ножки для тумбочки. В общем любые круглые предметы могу на станке сделать. Станок самодельный, достался мне вместе с домом от предыдущих хозяев. Хороший станок.</p>
                            
                        <p>На этом сайте решил сделать интернет магазин, где предлагаю товары сделанные своими руками и умом. Такие как ножи, ложки, скалки, подсвечники, сайты и боты. Может и странное сочетание, но так уж вышло, так уж сложилась судьба. Я думаю не спроста мне на дипломную работу в институте выпало сделать именно интернет-магазин. Правда название у диплома было жёсткое, я еле понял что имеется ввиду - "Распределительная система управления формированием заказов и их исполнением".</p>
                            
                        <p>Заходите по ссылке <a className="btn btn-outline-primary" href="/products">Товары</a> здесь или в верхнем меню, заказывайте понравившийся товар или услугу, жду Вас.</p>
                            
                        <p>Периодически провожу различные <a className="btn btn-outline-success" href="/promo">Акции</a> следите за ними, получайте разные подарки, будь то ложки, скалки, ножи или скидки на товары.</p>
                            
                        <p>Благодарю всех кто дочитал до этих строк, прошу, по учавствуйте в создании этого сайта, мне нужны Ваши идеи, подсказки. Жду от Вас советов касаемых улучшения сайта, буду рад разным предложениям по видеосъёмке, может есть идеи для моих будущих видео-постов? Пишите в <a className="btn btn-outline-warning" href="/support">тех.поддержку</a></p>
                            
                        <p>Всем удачи! Пока.</p>
                    </div>
                    }
                        
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

                <div className="help"> 
                    
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

                </div>


            
        </div>
    )
}

export default MainPage

