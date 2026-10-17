---
permalink: /faq/
add_faq_json_ld: true
toc: true
toc_sticky: true
search: true
layout: simple_single
title: "常見問題"
description: "邱忠榮物理治療師秉持『手心合一』理念，具備理大手法治療碩士、針灸文憑及龍氏正骨等多項專業資歷，曾任職於理大康復治療診所，擅長處理骨科痛症及跑步受傷。曾受邀擔任港台《做個健康快活人》嘉賓。我們位於尖沙咀地鐵站旁，立即致電或 WhatsApp +852 6357 8708 預約諮詢。"
---

{% for item in site.data.mark.faq %}
## {{ item.q }}
{{ item.a | markdownify }}
{% endfor %}