---
layout: default
title: Opportunities
permalink: /opportunities/
---

<section class="introduction wrapper content">
{% capture introduction %}{% include /content/3.0_introduction.md %}{% endcapture %}
  {{ introduction | markdownify }}
</section>
<section>
  <div class="wrapper content">
    {% capture fundingPrinciples %}{% include /content/3.1_fundingPrinciples.md %}{% endcapture %}
      {{ fundingPrinciples | markdownify }}
  </div>
</section>
<section>
  <div class="wrapper content">
    <div class="fullWidth">
    {% include graphic-matrix.html %}
    </div>
  </div>
</section>
