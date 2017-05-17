---
title: 17th Annual/2011 Living Legends Award Banquet
layout: photogalleries
datafile: LLF_18TH_ANNUAL
---

<div class="am-container" id="am-container">
  {% assign gal = page.datafile %}
  <span id="whatgal" style="display:none;">{{gal}}</span>
  {% for item in site.data.galleries.LLF_18TH_ANNUAL %}
<a target="_blank" data-lightbox="18th_annual" href="https://s3-us-west-1.amazonaws.com/llf-photogalleries/{{gal}}{{item.img_path}}"><img width="20%" src="https://s3-us-west-1.amazonaws.com/llf-photogalleries/{{gal}}{{item.img_path}}" title="{{item.img_caption}}"></a>
{% endfor %}
</div>