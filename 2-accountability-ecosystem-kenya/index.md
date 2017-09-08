---
layout: default
title: The Accountability Ecosystem in Kenya Today
permalink: /accountability-ecosystem-kenya/
---

<section class="introduction wrapper">

{% capture introduction %}{% include /content/2.0_introduction.md %}{% endcapture %}
  {{ introduction | markdownify }}

</section>

<div class="bg--white">
  <section id="government" class="wrapper">
  {% capture government %}{% include /content/2.1_government.md %}{% endcapture %}
    {{ government | markdownify }}
  </section>
</div>

<div class="fullWidth"></div>

<section id="citizens" class="wrapper">

{% capture citizens %}{% include /content/2.2_citizens.md %}{% endcapture %}
  {{ citizens | markdownify }}

</section>

<div class="fullWidth"></div>

<section id="civilSociety" class="wrapper">

{% capture civilSociety %}{% include /content/2.3_civilSociety.md %}{% endcapture %}
  {{ civilSociety | markdownify }}

</section>

<div class="fullWidth"></div>

<section id="media" class="wrapper">

{% capture media %}{% include /content/2.4_media.md %}{% endcapture %}
  {{ media | markdownify }}

</section>
