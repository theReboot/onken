---
layout: default
title: The Accountability Ecosystem in Kenya Today
permalink: /accountability-ecosystem-kenya/
---

<section class="introduction wrapper content">
  {% capture introduction %}{% include /content/2.0_introduction.md %}{% endcapture %}
    {{ introduction | markdownify }}
</section>

<section id="government" class="government">
  <div class="wrapper content">
  <img class="profile" src="{{ site.baseurl }}/assets/img/on_illustration_government@2x.png" alt="Illustration of government actors in Kenya"/>
  {% capture government %}{% include /content/2.1_government.md %}{% endcapture %}
    {{ government | markdownify }}
  </div>
  <div class="bg--white">
    <div class="wrapper content">
    {% capture incentives %}{% include /content/2.1.1_incentives.md %}{% endcapture %}
      {{ incentives | markdownify }}
    </div>
  </div>
  <div class="bg--lightGrey">
    <div class="wrapper content">
    {% capture copingStrategies %}{% include /content/2.1.2_copingStrategies.md %}{% endcapture %}
      {{ copingStrategies | markdownify }}
    </div>
  </div>
</section>

<section id="citizens" class="citizens">
  <div class="wrapper content">
    {% capture citizens %}{% include /content/2.2_citizens.md %}{% endcapture %}
      {{ citizens | markdownify }}
  </div>
  <div class="bg--white">
    <div class="wrapper content">
    {% capture incentives %}{% include /content/2.2.1_incentives.md %}{% endcapture %}
      {{ incentives | markdownify }}
    </div>
  </div>
  <div class="bg--lightGrey">
    <div class="wrapper content">
    {% capture copingStrategies %}{% include /content/2.2.2_copingStrategies.md %}{% endcapture %}
      {{ copingStrategies | markdownify }}
    </div>
  </div>
</section>

<section id="civilSociety" class="civilSociety">
  <div class="wrapper content">
    {% capture civilSociety %}{% include /content/2.3_civilSociety.md %}{% endcapture %}
      {{ civilSociety | markdownify }}
  </div>
  <div class="bg--white">
    <div class="wrapper content">
    {% capture incentives %}{% include /content/2.3.1_incentives.md %}{% endcapture %}
      {{ incentives | markdownify }}
    </div>
  </div>
  <div class="bg--lightGrey">
    <div class="wrapper content">
    {% capture copingStrategies %}{% include /content/2.3.2_copingStrategies.md %}{% endcapture %}
      {{ copingStrategies | markdownify }}
    </div>
  </div>
</section>

<section id="media" class="media">
  <div class="wrapper content">
    <img class="profile" src="{{ site.baseurl }}/assets/img/on_illustration_media@2x.png" alt="Illustration of media actors in Kenya"/>
    {% capture media %}{% include /content/2.4_media.md %}{% endcapture %}
      {{ media | markdownify }}
  </div>
  <div class="bg--white">
    <div class="wrapper content">
    {% capture incentives %}{% include /content/2.4.1_incentives.md %}{% endcapture %}
      {{ incentives | markdownify }}
    </div>
  </div>
  <div class="bg--lightGrey">
    <div class="wrapper content">
    {% capture copingStrategies %}{% include /content/2.4.2_copingStrategies.md %}{% endcapture %}
      {{ copingStrategies | markdownify }}
    </div>
  </div>
  <div class="bg--white">
    <div class="wrapper content">
    {% capture incentives %}{% include /content/2.4.3_incentives.md %}{% endcapture %}
      {{ incentives | markdownify }}
    </div>
  </div>
  <div class="bg--lightGrey">
    <div class="wrapper content">
    {% capture copingStrategies %}{% include /content/2.4.4_copingStrategies.md %}{% endcapture %}
      {{ copingStrategies | markdownify }}
    </div>
  </div>
</section>
