---
layout: clean 
---
{%- if site.data.circuitjs1.ads -%}
<div class="sidebar-section">
<ul>
{%- for ad in site.data.circuitjs1.ads -%}
<li><a href="{{ad.url}}">{{ad.title}}</a></li>
{%- endfor -%}
</ul>
</div>
{%- endif -%}