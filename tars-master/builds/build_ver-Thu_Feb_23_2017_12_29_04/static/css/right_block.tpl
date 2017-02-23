<aside class="aside-sub-container">
    <div class="popular-article-block">
        <div class="popular-article-block__title">Популярные статьи</div>
        <ol class="popular-article-block__body">
        {% if newsTop%}
            {% for newsTop in newsTop %}
                <li class="popular-article-block__body__anons">
                    <a href="/news/newspost/id/{{newsTop.id}}">
                        <h6 class="popular-article-block__body__anons_titile-anons">{{newsTop.preview}}</h6>
                        <div class="popular-article-block__body__anons_image-anons">
                            <img src="{{newsTop.photo}}" alt="{{newsTop.preview}}">
                        </div>
                    </a>
                </li>
            {%endfor%}
        {%else%}
            На данный момент популярных новостей нет!
        {%endif%}
        </ol>
    </div>
	
		<a href="https://vk.com/neposedagazeta" target="_blank" class="banner">
			<img src="/static/img/general/banner.jpg" alt="Дерево добра">
		</a>
    <div class="baner-box">
		<a href="https://shop.yuniline.ru/" target="_blank" class="banner sticky-block">
			<img src="/static/img/general/banner_shop.jpg" alt="Магазин ЮНИЛАЙН">
		</a>
	</div>
</aside>