---
layout: default
title: Opportunities/Recommendations
permalink: /opportunities-recommendations/
---

<section class="introduction wrapper content">
{% capture introduction %}{% include /content/3.0_introduction.md %}{% endcapture %}
  {{ introduction | markdownify }}
{% include graphic-matrix.html %}
{% capture content %}{% include /content/3.1_content.md %}{% endcapture %}
  {{ content | markdownify }}
</section>
