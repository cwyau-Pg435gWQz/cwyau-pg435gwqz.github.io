---
permalink: /syntax/
search: false
sitemap: false
toc: true
toc_sticky: true
---

#  文章編輯語法

##  注意事項

1. 文章檔名格式: yyyy-mm-dd-題目.md
2. 圖片宜先用<a href="https://squoosh.app/" style="color: #0366d6; text-decoration: none;">Squoosh</a>轉化為webp檔, 以減低檔案大小並使網頁更快加載完成
3. 文章第一段需要簡介文章內容, SEO用.

##  結構化文本元素

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">名稱</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">標題<br><small>Headings</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}# 標題 1
###  標題 2
####  標題 3{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <h1 style="margin: 4px 0; font-size: 1.5em; border-bottom: none; padding: 0;">標題 1</h1>
        <h2 style="margin: 4px 0; font-size: 1.3em; border-bottom: none; padding: 0;">標題 2</h2>
        <h3 style="margin: 4px 0; font-size: 1.1em; padding: 0;">標題 3</h3>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">引用區塊<br><small>Blockquotes</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}> 這是一個引言區塊。
> 可以包含多行文字。{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <blockquote style="margin: 0; padding: 0 10px; color: #6a737d; border-left: 0.25em solid #dfe2e5;">
          這是一個引言區塊。<br>可以包含多行文字。
        </blockquote>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">嵌套引用區塊<br><small>Nested Blockquotes</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}> 主要引用
>> 嵌套在內部的引用{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <blockquote style="margin: 0; padding: 0 10px; color: #6a737d; border-left: 0.25em solid #dfe2e5;">
          主要引用
          <blockquote style="margin: 4px 0 0 10px; padding: 0 10px; color: #6a737d; border-left: 0.25em solid #dfe2e5;">
            嵌套在內部的引用
          </blockquote>
        </blockquote>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">水平分割線<br><small>Horizontal Rules</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}---{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <hr style="height: 0.25em; padding: 0; margin: 8px 0; background-color: #e1e4e6; border: 0;">
      </td>
    </tr>
  </tbody>
</table>

##  文字格式

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">名稱</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">加粗<br><small>Bold (Strong)</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}使用 **雙星號** 加粗{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">使用 <strong>雙星號</strong> 加粗</td>
    </tr>
    <tr>
      <td class="syntax-col-name">斜體<br><small>Italics (Emphasis)</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}使用 *單星號* 變為斜體{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">使用 <em>單星號</em> 變為斜體</td>
    </tr>
    <tr>
      <td class="syntax-col-name">刪除線<br><small>Strikethrough</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}~~這段文字已被刪除~~{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain"><del>這段文字已被刪除</del></td>
    </tr>
    <tr>
      <td class="syntax-col-name">靠左對齊文本<br><small>Left Aligned Text</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}靠左對齊文本
{: .text-left}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain" style="text-align: left;">靠左對齊文本</td>
    </tr>
    <tr>
      <td class="syntax-col-name">置中對齊文本<br><small>Center Aligned Text</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}置中對齊文本。
{: .text-center}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain" style="text-align: center;">置中對齊文本。</td>
    </tr>
    <tr>
      <td class="syntax-col-name">靠右對齊文本<br><small>Right Aligned Text</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}靠右對齊文本。
{: .text-right}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain" style="text-align: right;">靠右對齊文本。</td>
    </tr>
    <tr>
      <td class="syntax-col-name">兩端對齊文本<br><small>Justified Text</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}兩端對齊文本。
{: .text-justify}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain" style="text-align: justify; text-justify: inter-word;">兩端對齊文本。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eleifend odio.</td>
    </tr>
  </tbody>
</table>


##  超連結與媒體

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">名稱</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">文本連結<br><small>Basic Text Links</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}{% include custom/ext_link url="https://www.google.com" text="Google" %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain"><a href="https://www.google.com" style="color: #0366d6; text-decoration: none;">Google</a></td>
    </tr>
    <tr>
      <td class="syntax-col-name">圖片嵌入<br><small>Image Embeds</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}![替代文字](/assets/images/favicon/favicon-32x32.png){% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
        <div style="margin-top: 6px; font-size: 0.85em; color: #555;">圖片宜先用<a href="https://squoosh.app/" style="color: #0366d6; text-decoration: none;">Squoosh</a>轉化為webp檔</div>
      </td>
      <td class="syntax-col-explain"><img src="/assets/images/favicon/favicon-32x32.png" alt="替代文字" style="max-width: 40px; height: auto;"></td>
    </tr>
    <tr>
      <td class="syntax-col-name">Youtube影片<br><small>Youtube Video</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}{% include custom/youtube_video id="{id 放響度}" title="{title 放響度} | YouTube 影片" %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain"> -- </td>
    </tr>
  </tbody>
</table>

##  清單及表格

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">名稱</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">無序清單<br><small>Unordered Lists</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}- 項目一
- 項目二
  - 嵌套項目{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <ul style="margin: 0; padding-left: 20px;">
          <li>項目一</li>
          <li>項目二
            <ul style="margin: 0; padding-left: 20px; list-style-type: circle;">
              <li>嵌套項目</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">有序清單<br><small>Ordered Lists</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}1. 第一步
2. 第二步{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <ol style="margin: 0; padding-left: 20px;">
          <li>第一步</li>
          <li>第二步</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">任務清單<br><small>Task Lists</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}- [x] 已完成任務
- [ ] 未完成任務{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <ul style="list-style: none; margin: 0; padding-left: 0;">
          <li><input type="checkbox" checked disabled> 已完成任務</li>
          <li><input type="checkbox" disabled> 未完成任務</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">表格<br><small>Tables</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}| 項目 | 價格 |

| :--- | ---: |
| 蘋果 | $1.00 |{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
          <thead>
            <tr style="background: #f8f9fa;">
              <th style="border: 1px solid #eee; padding: 4px; text-align: left;">項目</th>
              <th style="border: 1px solid #eee; padding: 4px; text-align: right;">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #eee; padding: 4px;">蘋果</td>
              <td style="border: 1px solid #eee; padding: 4px;">$1.00</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

##  學術特性

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">名稱</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">腳註 (Kramdown)<br><small>Footnotes</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}文本。[^1]

[^1]: 說明。{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        文本。<sup><a href="#fn1" style="color: #0366d6; text-decoration: none;">[1]</a></sup>
        <hr style="margin: 10px 0 5px 0; border: 0; border-top: 1px solid #eee;">
        <small style="color: #555;" id="fn1">1. 說明。</small>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">縮寫定義 (Kramdown)<br><small>Abbreviation Definitions</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}查看 HTML 效果。

*[HTML]: HyperText{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        查看 <abbr title="HyperText Markup Language" style="text-decoration: underline dotted; cursor: help;">HTML</abbr> 效果。
      </td>
    </tr>
  </tbody>
</table>


##  提示方塊與警告框

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">名稱</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">預設提示框<br><small>Default Notice</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}這是預設提示內容。
{: .notice}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <div style="padding: 1em; margin: 4px 0; background-color: #f2f3f5; border-left: 0.25em solid #7a8288; border-radius: 4px; font-size: 0.9em; color: #24292e;">
          <strong>Watch out!</strong> 這是預設提示內容。
        </div>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">主要提示框<br><small>Primary Notice</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}這是主要提示內容。
{: .notice--primary}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <div style="padding: 1em; margin: 4px 0; background-color: #f2f3f5; border-left: 0.25em solid #111; border-radius: 4px; font-size: 0.9em; color: #111;">
          <strong>Watch out!</strong> 這是主要提示內容。
        </div>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">訊息提示框<br><small>Info Notice</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}這是資訊提示內容。
{: .notice--info}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <div style="padding: 1em; margin: 4px 0; background-color: #e8f4fd; border-left: 0.25em solid #0366d6; border-radius: 4px; font-size: 0.9em; color: #0366d6;">
          <strong>Watch out!</strong> 這是資訊提示內容.
        </div>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">警告提示框<br><small>Warning Notice</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}這是警告提示內容。
{: .notice--warning}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <div style="padding: 1em; margin: 4px 0; background-color: #fff9e6; border-left: 0.25em solid #b08000; border-radius: 4px; font-size: 0.9em; color: #b08000;">
          <strong>Watch out!</strong> 這是警告提示內容。
        </div>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">成功提示框<br><small>Success Notice</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}這是成功提示內容。
{: .notice--success}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <div style="padding: 1em; margin: 4px 0; background-color: #e6f6ec; border-left: 0.25em solid #28a745; border-radius: 4px; font-size: 0.9em; color: #28a745;">
          <strong>Watch out!</strong> 這是成功提示內容。
        </div>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">危險提示框<br><small>Danger Notice</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}這是危險提示內容。
{: .notice--danger}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <div style="padding: 1em; margin: 4px 0; background-color: #ffeef0; border-left: 0.25em solid #cb2431; border-radius: 4px; font-size: 0.9em; color: #cb2431;">
          <strong>Watch out!</strong> 這是危險提示內容。
        </div>
      </td>
    </tr>
  </tbody>
</table>

##  工具

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">名稱</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">說明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">費用表格元件<br><small>Fees Table Tool</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}{% include custom/blog_tools.html tool='fees_table' %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        在文章指定位置手動插入「費用表格」。<br>
        <strong>備註：</strong>若未在文章中手動呼叫此標籤，系統會在文章最底部自動加載該費用表格。
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">客戶評價輪播圖<br><small>Reviews Grid Carousel</small></td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}{% include custom/blog_tools.html tool='reviews_grid' %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        在文章指定位置手動插入「客戶評價輪播牆」。<br>
        <strong>備註：</strong>若未指定特定評價來源，系統預設會載入所有評價。與費用表格相同，若未手動呼叫，此元件也會在文章最底部自動加載。
      </td>
    </tr>
  </tbody>
</table>

##  互動區

###  完整範例

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">情境範例</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">
        <strong>範例 1</strong>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}*Group_1:*
{% include custom/form.html object="checkbox" group="Group_1" label="選項1" default_checked=true %}
{% include custom/form.html object="checkbox" group="Group_1" label="選項2" %}
{% include custom/form.html object="checkbox" group="Group_1" label="選項3" %}
*Group_2:*
{% include custom/form.html object="checkbox" group="Group_2" label="選項1" %}
{% include custom/form.html object="checkbox" group="Group_2" label="選項2" %}
---
*結果區* (Group_1 + Group_2至少共選3 個)
{% include custom/form.html object="result_start" id="check1-result" rule="(Group_1, Group_2).COUNT >= 3" %}
OK!
{% include custom/form.html object="result_end" %}
---
*結果區* (Group_1至少選1個 + Group_2至少選1 個)
{% include custom/form.html object="result_start" id="check2-result" rule="Group_1.COUNT >= 1 AND Group_2.COUNT >=1" %}
OK!
{% include custom/form.html object="result_end" %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <b>Group_1:</b>
        {% include custom/form.html object="checkbox" group="Group_1" label="選項1" default_checked=true %}
        {% include custom/form.html object="checkbox" group="Group_1" label="選項2" %}
        {% include custom/form.html object="checkbox" group="Group_1" label="選項3" %}
        <b>Group_2:</b>
        {% include custom/form.html object="checkbox" group="Group_2" label="選項1" %}
        {% include custom/form.html object="checkbox" group="Group_2" label="選項2" %}
        <hr>
        <b>結果區</b> (Group_1 + Group_2至少共選3 個)
        {% include custom/form.html object="result_start" id="check1-result" rule="(Group_1, Group_2).COUNT >= 3" %}
        OK!
        {% include custom/form.html object="result_end" %}
        <hr>
        <b>結果區</b> (Group_1至少選1個 + Group_2至少選1 個)
        {% include custom/form.html object="result_start" id="check2-result" rule="Group_1.COUNT >= 1 AND Group_2.COUNT >=1" %}
        OK!
        {% include custom/form.html object="result_end" %}
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>範例 2</strong>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}*Group_3:*
{% include custom/form.html object="checkbox" group="Group_3" label="選項1" %}
{% include custom/form.html object="decimalbox" id="Number_1" label="Number_1: " group="Group_3" size="5" default_value="10" %}
*Group_4:*
{% include custom/form.html object="decimalbox" id="Number_2" label="Number_2: " group="Group_4" size="5" default_value="20" %}
{% include custom/form.html object="decimalbox" id="Number_3" label="Number_3: " group="Group_4" size="5" default_value="30" %}
---
*結果區* (Group_3至少選1 個 + Number_2 > 50)
{% include custom/form.html object="result_start" id="check2-result" rule="Group_3.COUNT >=1 AND Number_2.VALUE > 50" %}
OK!
{% include custom/form.html object="result_end" %}
---
*結果區* (Number_1 > 50 或 Group_4 總和 > 80)
{% include custom/form.html object="result_start" id="check2-result" rule="Number_1.VALUE > 50 OR Group_4.SUM > 80" %}
OK!
{% include custom/form.html object="result_end" %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <b>Group_3:</b>
        {% include custom/form.html object="checkbox" group="Group_3" label="選項1" %}
        {% include custom/form.html object="decimalbox" id="Number_1" label="Number_1: " group="Group_3" size="5" default_value="10" %}
        <b>Group_4:</b>
        {% include custom/form.html object="decimalbox" id="Number_2" label="Number_2: " group="Group_4" size="5" default_value="20" %}
        {% include custom/form.html object="decimalbox" id="Number_3" label="Number_3: " group="Group_4" size="5" default_value="30" %}
        <hr>
        <b>結果區</b> (Group_3至少選1 個 + Number_2 > 50)
        {% include custom/form.html object="result_start" id="check2-result" rule="Group_3.COUNT >=1 AND Number_2.VALUE > 50" %}
        OK!
        {% include custom/form.html object="result_end" %}
        <hr>
        <b>結果區</b> (Number_1 > 50 或 Group_4 總和 > 80)
        {% include custom/form.html object="result_start" id="check2-result" rule="Number_1.VALUE > 50 OR Group_4.SUM > 80" %}
        OK!
        {% include custom/form.html object="result_end" %}
      </td>
    </tr>
  </tbody>
</table>

###  輸入輪出物件

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">名稱</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">說明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">
        <strong>核取方塊</strong><br><small>Checkbox Object</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}{% include custom/form.html object="checkbox" group="Core" label="選項文字" default_checked=true %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <strong>參數說明：</strong><br>
        • <code>group</code>: Group 名稱（只能用大小寫英文字母、數字及底線(_)）<br>
        • <code>label</code>: Checkbox 右邊的文字<br>
        • <code>default_checked</code>: 預設值： <code>true</code> 為勾選，<code>false</code>則不勾選
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>數字輸入</strong><br><small>Decimalbox Object</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}{% include custom/form.html object="decimalbox" id="Number" label="數字: " group="Storage" size="5" default_value="50" %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <strong>參數說明：</strong><br>
        • <code>id</code>: 名稱（只能用大小寫英文字母、數字及底線(_)）<br>
        • <code>label</code>: DecimalBox 左邊的文字<br>
        • <code>size</code>: 輸入框的寬度（單位為字元）<br>
        • <code>default_value</code>: 預設值<br>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>結果顯示區塊</strong><br><small>Result Area Block</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}{% include custom/form.html object="result_start" id="block_id" rule="條件式" %}
這裡放置要顯示/隱藏的內容
{% include custom/form.html object="result_end" %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <strong>參數說明：</strong><br>
        • <code>object="result_start"</code> 與 <code>"result_end"</code> 必須成對出現<br>
        • <code>rule</code>: 放置核心邏輯規則。當條件為真時，區塊會顯示，否則隱藏
      </td>
    </tr>
  </tbody>
</table>

####  例子

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">情境範例</th>
      <th class="syntax-col-code">代碼</th>
      <th class="syntax-col-explain">效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">
        <strong>核取方塊</strong><br><small>Checkbox Object</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}{% include custom/form.html object="checkbox" group="Any_Name" label="預設為勾選" default_checked=true %}
{% include custom/form.html object="checkbox" group="Any_Name" label="預設不勾選" default_checked=false %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        {% include custom/form.html object="checkbox" group="Any_Name" label="預設為勾選" default_checked=true %}
        {% include custom/form.html object="checkbox" group="Any_Name" label="預設不勾選" default_checked=false %}
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>數字輸入</strong><br><small>Decimalbox Object</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}*改變 size (5 -> 10):*
{% include custom/form.html object="decimalbox" id="root_gb" label="數字: " group="Any_Name" size="5" default_value="50" %}
{% include custom/form.html object="decimalbox" id="root_gb" label="數字: " group="Any_Name" size="10" default_value="50" %}
*改變 label:*
{% include custom/form.html object="decimalbox" id="root_gb" label="第1數字: " group="Any_Name" size="5" default_value="50" %}
{% include custom/form.html object="decimalbox" id="root_gb" label="第2數字: " group="Any_Name" size="5" default_value="50" %}
*改變 default_value (10 -> 50):*
{% include custom/form.html object="decimalbox" id="root_gb" label="數字: " group="Any_Name" size="5" default_value="10" %}
{% include custom/form.html object="decimalbox" id="root_gb" label="數字: " group="Any_Name" size="5" default_value="50" %}{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        <b>改變 size (5 -> 10):</b>
        {% include custom/form.html object="decimalbox" id="root_gb" label="數字: " group="Any_Name" size="5" default_value="50" %}
        {% include custom/form.html object="decimalbox" id="root_gb" label="數字: " group="Any_Name" size="10" default_value="50" %}
        <b>改變 label:</b>
        {% include custom/form.html object="decimalbox" id="root_gb" label="第1數字: " group="Any_Name" size="5" default_value="50" %}
        {% include custom/form.html object="decimalbox" id="root_gb" label="第2數字: " group="Any_Name" size="5" default_value="50" %}
        <b>改變 default_value (10 -> 50):</b>
        {% include custom/form.html object="decimalbox" id="root_gb" label="數字: " group="Any_Name" size="5" default_value="10" %}
        {% include custom/form.html object="decimalbox" id="root_gb" label="數字: " group="Any_Name" size="5" default_value="50" %}
      </td>
    </tr>
  </tbody>
</table>

###  結果區語法

<table class="syntax-table">
  <thead>
    <tr class="syntax-header">
      <th class="syntax-col-name">語法</th>
      <th class="syntax-col-code">規則範例</th>
      <th class="syntax-col-explain">說明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="syntax-col-name">
        <strong>群組內Checkbox計數</strong><br><small>Group.COUNT</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}Group_1.COUNT == 3{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        統計群組"Group_1"中<strong>被勾選</strong>的Checkbox總數量。<br>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>群組內DecimalBox總和</strong><br><small>Group.SUM</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}Group_1.SUM > 500{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        計算群組"Group_1"內所有 DecimalBox 中由使用者填寫的數字總和。<br>
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>多群組合併</strong><br><small>(GroupA, GroupB)</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}(Group_1, Group_2).COUNT >= 4{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        必須在圓括號 <code>()</code> 內使用逗號 <code>,</code> 分隔要合併的群組<br>
        群組合併後可使用 <code>.COUNT</code> 或 <code>.SUM</code> 進行統計
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>獨立物件取值</strong><br><small>id.VALUE</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}unlimited_swap.VALUE == 1{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        調取<strong>單個</strong>擁有唯一 <code>id</code> 物件的即時數值：<br>
        • <strong>Checkbox：</strong>若被勾選傳回 <code>1</code>，未被勾選傳回 <code>0</code><br>
        • <strong>Decimalbox：</strong>傳回數字，若未填寫則為0
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>數學運算</strong><br><small>Math Operations</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}system_ram.VALUE + system_swap.VALUE > 16{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        支援數值加減（<code>+</code>, <code>-</code>）與比較運算（<code>==</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>）。
      </td>
    </tr>
    <tr>
      <td class="syntax-col-name">
        <strong>邏輯連接</strong><br><small>AND / OR / NOT</small>
      </td>
      <td class="syntax-col-code">
        <pre class="syntax-code"><code>{% raw %}Core.COUNT == 3 AND NOT root_gb.VALUE < 100{% endraw %}</code></pre>
        {% include custom/copy_code_button.html %}
      </td>
      <td class="syntax-col-explain">
        使用大寫的 <code>AND</code>、<code>OR</code>、<code>NOT</code> 連接詞來自由組合、串聯多個比較判定式。
      </td>
    </tr>
  </tbody>
</table>
