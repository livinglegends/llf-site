---
layout: photogalleries
title: test gallery
datafile: 2030_Banquet
---
<div class="am-container" id="am-container">
  {% assign gal = page.datafile %}
  <span id="whatgal" style="display:none;">{{gal}}</span>
<!-- DATAFILE GOES HERE -->
  {% for item in site.data.galleries.2014_BANQUET %}
<a target="_blank"><img width="20%" src="https://s3-us-west-1.amazonaws.com/llf-photogalleries/{{gal}}{{item.img_path}}" title="{{item.img_caption}}"></a>
{% endfor %}
</div>



<!-- 1. Create Datafile for galleries
2. upload to s3
3. create .md

FOLLOW NAMING CONVENTIONS -->
