---
layout: page
title: Speakers
permalink: /speakers/
---

<div class="categories">
    
  {% assign sorted_categories = (site.categories | sort:0) %}
  {% for category in sorted_categories %}
    
    <h2>
      <a href="{{site.url}}{{site.baseurl}}/{{category | first}}/">
        {{category | first }}
      </a>
    </h2>
      
  {% endfor %}
     
</div>