---
layout: default
title: The Accountability Ecosystem in Kenya Today
permalink: /accountability-ecosystem-kenya/
---

<section class="introduction wrapper content">
  {% capture introduction %}{% include /content/2.0_introduction.md %}{% endcapture %}
    {{ introduction | markdownify }}
</section>

<section id="government" class="government constituent">
  <div class="constituentCard">
    <div class="constituentCard__top">
      <div class="twoColumnWrap">
        <img class="profile" src="{{ site.baseurl }}/assets/img/on_illustration_government.svg" alt="Illustration of government actors in Kenya"/>
      </div>
    </div>
    <div class="constituentCard__bottom">
      <div class="twoColumnWrap">
        <h2>
          <span class="preTitle">Constituent 1:</span>
          <span class="title">Government</span>
        </h2>
      </div>
    </div>
  </div>
  <div class="wrapper content">
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

<section id="citizens" class="citizens constituent">
  <div class="constituentCard">
    <div class="constituentCard__top">
      <div class="twoColumnWrap">
        <img class="profile" src="{{ site.baseurl }}/assets/img/on_illustration_citizens.svg" alt="Illustration of citizens in Kenya"/>
      </div>
    </div>
    <div class="constituentCard__bottom">
      <div class="twoColumnWrap">
        <h2>
          <span class="preTitle">Constituent 2:</span>
          <span class="title">Citizens</span>
        </h2>
      </div>
    </div>
  </div>
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

<section id="civilSociety" class="civilSociety constituent">
  <div class="constituentCard">
    <div class="constituentCard__top">
      <div class="twoColumnWrap">
        <img class="profile" src="{{ site.baseurl }}/assets/img/on_illustration_csos.svg" alt="Illustration of CSOs in Kenya"/>
      </div>
    </div>
    <div class="constituentCard__bottom">
      <div class="twoColumnWrap">
        <h2>
          <span class="preTitle">Constituent 3:</span>
          <span class="title">Civil Society</span>
        </h2>
      </div>
    </div>
  </div>
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

<section id="media" class="media constituent">
  <div class="constituentCard">
    <div class="constituentCard__top">
      <div class="twoColumnWrap">
        <img class="profile" src="{{ site.baseurl }}/assets/img/on_illustration_media.svg" alt="Illustration of media actors in Kenya"/>
      </div>
    </div>
    <div class="constituentCard__bottom">
      <div class="twoColumnWrap">
        <h2>
          <span class="preTitle">Constituent 4:</span>
          <span class="title">Media</span>
        </h2>
      </div>
    </div>
  </div>
  <div class="wrapper content">
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
  <div class="wrapper content">
    {% capture media %}{% include /content/2.5_localJournalism.md %}{% endcapture %}
      {{ media | markdownify }}
  </div>
  <div class="bg--white">
    <div class="wrapper content">
    {% capture incentives %}{% include /content/2.5.1_incentives.md %}{% endcapture %}
      {{ incentives | markdownify }}
    </div>
  </div>
  <div class="bg--lightGrey">
    <div class="wrapper content">
    {% capture copingStrategies %}{% include /content/2.5.2_copingStrategies.md %}{% endcapture %}
      {{ copingStrategies | markdownify }}
    </div>
  </div>
</section>
