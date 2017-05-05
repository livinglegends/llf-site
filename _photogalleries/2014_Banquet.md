---
title: 18th Annual/2014 Annual Living Legends Award Banquet
layout: photogalleries
datafile: LLF_2014_BANQUET
---

<div class="am-container" id="am-container">
  {% assign gal = page.datafile %}
  <span id="whatgal" style="display:none;">{{gal}}</span>
  {% for item in site.data.galleries.LLF_2014_BANQUET %}
<a target="_blank" data-lightbox="2014_banquet" href="https://s3-us-west-1.amazonaws.com/llf-photogalleries/{{gal}}{{item.img_path}}"><img width="20%" src="https://s3-us-west-1.amazonaws.com/llf-photogalleries/{{gal}}{{item.img_path}}" title="{{item.img_caption}}"></a>
{% endfor %}
</div>
