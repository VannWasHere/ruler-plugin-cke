<template>
  <div class="test"></div>
  <div class="main-container" id="editor">
    <div
      class="editor-container editor-container_classic-editor editor-container_include-style"
      ref="editorContainerElement">
      <div class="editor-container__editor">
        <div ref="editorElement">
          <ckeditor
            v-if="editor && config"
            :modelValue="config.initialData"
            :editor="editor"
            :config="config"
            @ready="onEditorReady" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=docs#installation/NoJgNARCB0Cs0AYKQIwIJwDYGZAdhRTwA4FYUQAWWPEdSgZgZI0OIfQdhCquQgCmAO2QIwwFGDFjJsgLqQQxFADMEAgMYQ5QA===
 */

import { computed, ref, onMounted, watchEffect, useTemplateRef } from "vue";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";
import "../public/ckeditor5.css";
import "../public/ckeditor5-premium.css";
import "../public/document-style.css"
import "../public/styledocs.css"
import "../public/my_custom_ck_editor.css"

import {
  ClassicEditor,
  InlineEditor,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BlockQuote,
  Bold,
  Bookmark,
  CloudServices,
  Code,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  ImageBlock,
  ImageCaption,
  ImageEditing,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  ImageUtils,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  ResizeObserver,
  Rect,
} from "ckeditor5";
import {
  CaseChange,
  ExportPdf,
  ExportWord,
  Pagination,
  FormatPainter,
  ImportWord,
  MergeFields,
  PasteFromOfficeEnhanced,
  SlashCommand,
  TableOfContents,
  Template,
} from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import Ruler from "../ckeditor5-ruler/src/ruler";

const LICENSE_KEY = import.meta.env.VITE_CKEDITOR_LICENSE_KEY;

/**
 * Please update the following values with your tokens.
 * Instructions on how to obtain them: https://ckeditor.com/docs/trial/latest/guides/real-time/quick-start.html
 */
const editorMenuBar = useTemplateRef("editorMenuBarElement");

const isLayoutReady = ref(false);

const editor = InlineEditor;

const config = computed(() => {
  if (!isLayoutReady.value) {
    return null;
  }

  return {
    toolbar: {
      items: [
        "insertMergeField",
        "previewMergeFields",
        "|",
        "importWord",
        "exportWord",
        "exportPdf",
        "formatPainter",
        "caseChange",
        "findAndReplace",
        "|",
        "heading",
        "style",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "subscript",
        "superscript",
        "code",
        "removeFormat",
        "|",
        "specialCharacters",
        "horizontalLine",
        "pageBreak",
        "link",
        "bookmark",
        "insertImage",
        "insertImageViaUrl",
        "insertTable",
        "tableOfContents",
        "insertTemplate",
        "highlight",
        "blockQuote",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "outdent",
        "indent",
        "pagination",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      Alignment,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      BlockQuote,
      Bold,
      Bookmark,
      CaseChange,
      CloudServices,
      Code,
      Essentials,
      ExportPdf,
      ExportWord,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      FormatPainter,
      GeneralHtmlSupport,
      Heading,
      Highlight,
      HorizontalLine,
      ImageBlock,
      ImageCaption,
      ImageEditing,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      ImageUtils,
      ImportWord,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Mention,
      MergeFields,
      PageBreak,
      Paragraph,
      PasteFromOffice,
      PasteFromOfficeEnhanced,
      PictureEditing,
      RemoveFormat,
      SlashCommand,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Style,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableOfContents,
      TableProperties,
      TableToolbar,
      Template,
      TextTransformation,
      TodoList,
      Underline,
      Pagination,
      PageBreak,
      Ruler, // Add Ruler plugin
    ],
    exportPdf: {
      stylesheets: [
        "../public/fonts.css",
        "../public/my_custom_ck_editor.css",
        "../public/ckeditor5-premium.css",
        '../public/style_document.css',
        "../public/ckeditor5.css",
      ],
      fileName: "export-pdf-demo.pdf",
      converterOptions: {
        format: 'A4',
        margin_top: '20mm',
        margin_bottom: '20mm',
        margin_right: '12mm',
        margin_left: '12mm',
        page_orientation: 'portrait',
        header_html: undefined,
        footer_html : '<p>1</p>',
        header_and_footer_css : 'p {color: #333; text-align: right; font-size: 12px; padding-bottom: 50px; padding-right: 50px; } '
      }
    },
    pagination: {
      pageWidth: "21cm",
      pageHeight: "29.7cm",
      pageMargins: {
        top: "20mm",
        bottom: "20mm",
        left: "12mm",
        right: "12mm",
      },
    },
    exportWord: {
      stylesheets: [
        /* This path should point to the content stylesheets on your assets server. */
        /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word.html */
        "./export-style.css",
        /* Export Word needs access to stylesheets that style the content. */
        "https://cdn.ckeditor.com/ckeditor5/45.0.0/ckeditor5.css",
        "https://cdn.ckeditor.com/ckeditor5-premium-features/45.0.0/ckeditor5-premium-features.css",
      ],
      fileName: "export-word-demo.docx",
      converterOptions: {
        document: {
          orientation: "portrait",
          size: "Tabloid",
          margins: {
            top: "20mm",
            bottom: "20mm",
            right: "24mm",
            left: "24mm",
          },
        },
      },
    },
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true,
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
        "|",
      ],
    },
    initialData:
      `
      <div class='ck-content'><figure class='table' style='width:100%;'>
<table class='ck-table-resized table-kop-surat' style='border:0px solid hsl(0, 0%, 100%);'>
<colgroup><col style='width:20%;'><col style='width:60%;'><col style='width:20%;'></colgroup>
<tbody>
<tr>
<td style='border-color:hsl(0, 0%, 100%);border-style:solid;'>
<figure class='image image-style-align-left' style='margin:0 auto;'>
<img style='aspect-ratio:238px/75px;' src='data:image/png;base64,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'>
</figure>
</td>
<td style='border-color:hsl(0, 0%, 100%);border-style:solid;'>
<p style='text-align:center;'>
<span style='font-size: 22px;'>
<strong>SIARAN PERS</strong>
</span>
</p>
</td>
<td style='border-color:hsl(0, 0%, 100%);border-style:solid;'>
&nbsp;
</td>
</tr>
</tbody>
</table>
</figure>
<figure class="image image_resized" style="width:33.31%;"><picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/119.webp 119w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/238.webp 238w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/357.webp 357w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/476.webp 476w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/595.webp 595w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/714.webp 714w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/833.webp 833w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/952.webp 952w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/1071.webp 1071w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/1181.webp 1181w" type="image/webp" sizes="(max-width: 1181px) 100vw, 1181px"><img src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/86b4f2f3yeLR/images/1181.png" alt="" width="1181" height="1181"></picture></figure><h2 id="ed6c798b5b5b3a0fefe8c7d9eeae3d185"><strong>EKONOMI INDONESIA: POTENSI, TANTANGAN, DAN ARAH MASA DEPAN</strong></h2><h3 id="e5d69ba795f7f3722675fd0112f3b9f10"><strong>1. Pendahuluan</strong></h3><p>Indonesia merupakan negara kepulauan terbesar di dunia dengan lebih dari 270 juta jiwa, menjadikannya pasar domestik yang sangat potensial. Posisi strategis di antara dua benua dan dua samudra membuat Indonesia memiliki keuntungan geografis dalam perdagangan internasional. Sebagai negara berkembang, ekonomi Indonesia terus mengalami transformasi dari sektor agraris menuju sektor industri dan jasa.</p><p>Sejak krisis moneter 1998, Indonesia telah menunjukkan ketahanan ekonomi yang cukup kuat. Dalam dua dekade terakhir, pertumbuhan ekonomi rata-rata berkisar di angka 5% per tahun, walaupun sempat mengalami kontraksi pada masa pandemi COVID-19. Artikel ini akan mengulas kondisi ekonomi Indonesia secara menyeluruh, termasuk sektor unggulan, tantangan utama, serta arah pembangunan ekonomi ke depan.</p><figure class="image image_resized" style="width:67%;"><picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/KpTWBXvJ-AUF/images/2560.png" alt="" width="2560" height="1460"></picture></figure><h3 id="ee9b705eba69eb6e07bb0410038f6bb60"><strong>2. Struktur Ekonomi Indonesia</strong></h3><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="e43c1ff4b40596fcb875f762049bbed25">a. <strong>Sektor Pertanian</strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu, sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia.</p><h4 id="e83278c261b882c0f6e9813abaa7b77ca">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertambangan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="ee2739a7df13ef22bd20c5dbe2042b47b">c. <strong>Sektor Jasa<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-left" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture></strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-commerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transformasi digital di kalangan masyarakat.</p><h3 id="e3930a4894479e1fd12c47f242c943710"><strong>3. Tantangan Ekonomi Indonesia</strong></h3><p>Meskipun potensial, ekonomi Indonesia menghadapi beberapa tantangan yang cukup kompleks:</p><h4 id="e31454404cced72d9ce9dfd3647af8470">a. <strong>Ketimpangan Ekonomi</strong></h4><p>Masih terdapat ketimpangan pembangunan antara wilayah barat dan timur Indonesia. Selain itu, kesenjangan pendapatan antara kelompok kaya dan miskin menjadi isu sosial yang cukup krusial.</p><h4 id="e516358f455f08596e823d7a92cc22728">b. <strong>Ketergantungan pada Komoditas Ekspor</strong></h4><p>Indonesia masih terlalu bergantung pada ekspor komoditas primer. Ketika harga komoditas global turun, neraca perdagangan dan nilai tukar rupiah ikut terdampak.</p><h4 id="e9dd592b0dc0906e851b16f3c6b2454b9">c. <strong>Kualitas SDM</strong></h4><p>Tingkat pendidikan dan produktivitas tenaga kerja masih menjadi hambatan untuk menuju negara berpenghasilan tinggi. Program vokasi dan pelatihan kerja masih perlu ditingkatkan secara masif.</p><h4 id="ecc20f6602a98b8b22ca83eeb45ec0e04">d. <strong>Infrastruktur dan Birokrasi</strong></h4><p>Kekurangan infrastruktur dasar seperti jalan, pelabuhan, dan logistik di luar Pulau Jawa menghambat konektivitas nasional. Birokrasi dan regulasi yang tumpang tindih juga masih menjadi kendala bagi dunia usaha.</p><h3 id="ec5ba25c43c526afd0df51cddfbf042cc"><strong>4. Peluang dan Arah Pembangunan Ekonomi</strong></h3><p>Indonesia memiliki peluang besar untuk menjadi salah satu kekuatan ekonomi dunia di masa depan. Beberapa strategi utama yang sedang dan perlu terus dikembangkan antara lain:</p><figure class="image image_resized" style="width:61.84%;"><picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/192.webp 192w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/384.webp 384w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/576.webp 576w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/960.webp 960w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/1152.webp 1152w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/1344.webp 1344w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/1728.webp 1728w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/1919.webp 1919w" type="image/webp" sizes="(max-width: 1919px) 100vw, 1919px"><img src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/_tJHYYXZCzkI/images/1919.png" alt="" width="1919" height="1079"></picture></figure><h4 id="ebeb46369ac9a1b57cc864e7cb87ab06e">a. <strong>Pembangunan Infrastruktur</strong></h4><p>Proyek strategis nasional seperti tol laut, jalan tol trans-Sumatra, dan pembangunan pelabuhan/logistik akan memperkuat konektivitas dan efisiensi ekonomi antarwilayah.</p><h4 id="e72e4dbff7ff07ace7c2b54e03232d814">b. <strong>Transformasi Digital</strong></h4><p>Pemerintah mendorong adopsi teknologi dalam UMKM, layanan publik, dan industri. Ekonomi digital diproyeksikan menjadi tulang punggung pertumbuhan ekonomi baru.</p><h4 id="e304e63ac6afa67244dae074bf396ed0a">c. <strong>Pengembangan SDM</strong></h4><p>Investasi pada pendidikan tinggi, riset, dan pelatihan kerja menjadi prioritas agar tenaga kerja Indonesia dapat bersaing secara global, khususnya di era industri 4.0.</p><h4 id="e1fb164bad0162d696bc9caf4c6222ca6">d. <strong>Ekonomi Hijau dan Berkelanjutan</strong></h4><p>Indonesia mulai mendorong transisi ke ekonomi rendah karbon, seperti pengembangan energi terbarukan, elektrifikasi transportasi, dan praktik pertanian ramah lingkungan.</p><h3 id="e3394cfe5de19154c2b078b86fd601c0f"><strong>5. Kesimpulan</strong></h3><p>Ekonomi Indonesia memiliki fondasi yang cukup kuat untuk tumbuh berkelanjutan. Potensi pasar domestik yang besar, kekayaan sumber daya alam, dan bonus demografi adalah keunggulan yang tidak dimiliki semua negara.</p><figure class="image image_resized image-style-align-left" style="width:53.77%;"><picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture></figure><p>Namun, untuk mencapai visi Indonesia Emas 2045 menjadi negara maju, berbagai tantangan struktural harus diatasi dengan serius: ketimpangan, kualitas SDM, birokrasi, hingga transformasi digital dan energi. Kolaborasi antara pemerintah, dunia usaha, dan masyarakat menjadi kunci utama.</p><p>Dengan arah kebijakan yang tepat dan implementasi yang konsisten, Indonesia memiliki peluang besar untuk menjadi kekuatan ekonomi utama di Asia bahkan dunia.</p><p>Kalau kamu mau versi dokumennya dalam format Word atau PDF, tinggal bilang aja, Boss. Atau mau versi infografik atau versi singkat 1 halaman juga bisa!</p><h3 id="e025c5662ccf1556090b1b48bb2cb31a4"><strong>2. Struktur Ekonomi Indonesia</strong></h3><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="e9269a13f241003a8dc4cbcf8462015d2">a. <strong>Sektor Pertanian</strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu, sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia.</p><h4 id="e44394ca0b2a032855457612b64fd3eb3">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertambangan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="e40f913ecc051f0977b4a2bcaa7f0f77c">c. <strong>Sektor Jasa</strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-co<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-left" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture>mmerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transformasi digital di kalangan masyarakat.</p><h3 id="e1dcf2b22b87183e4fc0f9fe9e8e25ac4"><strong>2. Struktur Ekonomi Indonesia</strong></h3><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="ee199db742f5cbf199487713613ce9069">a. <strong>Sektor Pertanian</strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu, sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia.</p><h4 id="ebb894b46e4f363134285ecb0b2648f78">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertambangan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="e145937ad83da8f5e5cf2abc938db3f6c">c. <strong>Sektor Jasa</strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-commerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transform<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-left" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture>asi digital di kalangan masyarakat.<strong>2. Struktur Ekonomi Indonesia</strong></p><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="e886d0a36db488b48fbfc3295e2f1c662">a. <strong>Sektor Pertanian</strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu, sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia.</p><h4 id="e22298947f81cf4070dc4f50b40611e60">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertambangan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="eda4760aeae2e8b69ba4e62120e47a8ca">c. <strong>Sektor Jasa</strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-commerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transformasi digital di kalangan masyarakat.<strong>2. Struktur Ekonomi Indonesia</strong></p><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="e451b5b061fd273f5a4ae413361665506">a. <strong>Sektor Pertanian<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-right" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture></strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu, sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia.</p><h4 id="e93877aef46029afcf7c27a23b7cc9bbd">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertambangan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="ea9aa515133a28602eac658750d9d1af1">c. <strong>Sektor Jasa</strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-commerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transformasi digital di kalangan masyarakat.<strong>2. Struktur Ekonomi Indonesia</strong></p><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="e3a032cd370e5f28f0ed0e542859378e7">a. <strong>Sektor Pertanian</strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu,<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-left" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture>&nbsp;sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia.</p><h4 id="e91abeff8d960ffffe01856a3e84bab33">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertambangan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="eb93d9f09efd37ff1d4ab2687d4e5d0d8">c. <strong>Sektor Jasa</strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-commerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transformasi digital di kalangan masyarakat.<strong>2. Struktur Ekonomi Indonesia</strong></p><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="ea154bb60f10a07c4c4ae88f04f0e2b76">a. <strong>Sektor Pertanian</strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu, sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia.</p><h4 id="e06861463d477b05756011c67a708012c">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertamban<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-left" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture>gan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="e4300d8c5013024d076426a6c00296b6b">c. <strong>Sektor Jasa</strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-commerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transformasi digital di kalangan masyarakat.<strong>2. Struktur Ekonomi Indonesia</strong></p><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="e54511097ad68a8fc5e2c49185f1cd282">a. <strong>Sektor Pertanian</strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu, sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia.</p><h4 id="ec4e4af0f5dcecee229dd8808dddc37b3">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertambangan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="e0dfc20ee18922ce2172bbc18ee852bcc">c. <strong>Sektor Jasa<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-left" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture></strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-commerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transformasi digital di kalangan masyarakat.<strong>2. Struktur Ekonomi Indonesia</strong></p><p>Ekonomi Indonesia ditopang oleh tiga sektor utama, yaitu:</p><h4 id="efd3938ab00f4445acea8bd556be0f458">a. <strong>Sektor Pertanian</strong></h4><p>Meskipun kontribusinya terhadap PDB menurun seiring waktu, sektor pertanian masih menjadi penyedia lapangan kerja terbesar, terutama di daerah pedesaan. Komoditas utama meliputi padi, kelapa sawit, karet, kopi, dan kakao. Indonesia merupakan salah<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-right" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture>&nbsp;satu produsen kelapa sawit terbesar di dunia.</p><h4 id="e7b8fc97aed95fd10edb24cc169f4e6c6">b. <strong>Sektor Industri</strong></h4><p>Sektor industri berkontribusi sekitar 19–21% terhadap PDB. Industri manufaktur Indonesia mencakup makanan-minuman, tekstil, elektronik, serta otomotif. Pemerintah juga mendorong pengembangan industri hilirisasi, terutama pada sektor pertambangan seperti nikel dan bauksit, untuk meningkatkan nilai tambah ekspor.</p><h4 id="e4ba23ecb943f72d3ce00de6ca8d19568">c. <strong>Sektor Jasa</strong></h4><p>Sektor ini kini menjadi penyumbang terbesar PDB, terutama dari perdagangan, transportasi, pariwisata, serta jasa keuangan dan digital. E-commerce dan fintech berkembang pesat, seiring dengan meningkatnya penetrasi internet dan transformasi digita<picture><source srcset="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/256.webp 256w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/512.webp 512w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/768.webp 768w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1024.webp 1024w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1280.webp 1280w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1536.webp 1536w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/1792.webp 1792w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2048.webp 2048w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2304.webp 2304w,https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.webp 2560w" type="image/webp" sizes="(max-width: 2560px) 100vw, 2560px"><img class="image_resized image-style-align-left" style="width:53.77%;" src="https://dev-ckbox-ckeditor.apps.development.corp.bi.go.id/ef811b1a5ad0599a5c99/assets/7TEBL6cbSw-Q/images/2560.png" alt="" width="2560" height="1460"></picture>l di kalangan masyarakat.</p><p></p></div><p></p></div><p></p></div><p></p></div><p></p></div><p></p></div>
      `,
    licenseKey: LICENSE_KEY,
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    mention: {
      feeds: [
        {
          marker: "@",
          feed: [
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
          ],
        },
      ],
    },
    menuBar: {
      isVisible: true,
    },
    mergeFields: {
      /* Read more: https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html#configuration */
    },
    placeholder: "Type or paste your content here!",
    style: {
      definitions: [
        {
          name: "Article category",
          element: "h3",
          classes: ["category"],
        },
        {
          name: "Title",
          element: "h2",
          classes: ["document-title"],
        },
        {
          name: "Subtitle",
          element: "h3",
          classes: ["document-subtitle"],
        },
        {
          name: "Info box",
          element: "p",
          classes: ["info-box"],
        },
        {
          name: "CTA Link Primary",
          element: "a",
          classes: ["button", "button--green"],
        },
        {
          name: "CTA Link Secondary",
          element: "a",
          classes: ["button", "button--black"],
        },
        {
          name: "Marker",
          element: "span",
          classes: ["marker"],
        },
        {
          name: "Spoiler",
          element: "span",
          classes: ["spoiler"],
        },
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
    template: {
      definitions: [
        {
          title: "Introduction",
          description: "Simple introduction to an article",
          icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <g id="icons/article-image-right">\n        <rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>\n        <g id="page" filter="url(#filter0_d_1_507)">\n            <path d="M9 41H36V12L28 5H9V41Z" fill="white"/>\n            <path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>\n        </g>\n        <g id="image">\n            <path id="Rectangle 22" d="M21.5 23C21.5 22.1716 22.1716 21.5 23 21.5H31C31.8284 21.5 32.5 22.1716 32.5 23V29C32.5 29.8284 31.8284 30.5 31 30.5H23C22.1716 30.5 21.5 29.8284 21.5 29V23Z" fill="#B6E3FC" stroke="#333333"/>\n            <path id="Vector 1" d="M24.1184 27.8255C23.9404 27.7499 23.7347 27.7838 23.5904 27.9125L21.6673 29.6268C21.5124 29.7648 21.4589 29.9842 21.5328 30.178C21.6066 30.3719 21.7925 30.5 22 30.5H32C32.2761 30.5 32.5 30.2761 32.5 30V27.7143C32.5 27.5717 32.4391 27.4359 32.3327 27.3411L30.4096 25.6268C30.2125 25.451 29.9127 25.4589 29.7251 25.6448L26.5019 28.8372L24.1184 27.8255Z" fill="#44D500" stroke="#333333" stroke-linejoin="round"/>\n            <circle id="Ellipse 1" cx="26" cy="25" r="1.5" fill="#FFD12D" stroke="#333333"/>\n        </g>\n        <rect id="Rectangle 23" x="13" y="13" width="12" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 24" x="13" y="17" width="19" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 25" x="13" y="21" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 26" x="13" y="25" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 27" x="13" y="29" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 28" x="13" y="33" width="16" height="2" rx="1" fill="#B4B4B4"/>\n    </g>\n    <defs>\n        <filter id="filter0_d_1_507" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n            <feOffset dx="1" dy="1"/>\n            <feComposite in2="hardAlpha" operator="out"/>\n            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>\n            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_507"/>\n            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_507" result="shape"/>\n        </filter>\n    </defs>\n</svg>\n',
          data: "<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>",
        },
      ],
    },
  };
});

onMounted(() => {
  isLayoutReady.value = true;
});

// Execute additional code when the editor is ready
function onEditorReady(editor) {
  let inlineEditorResizeObserver;

  const rulerPlugin = editor.plugins.get("Ruler");
  const toolbarBalloonPanelContent = editor.ui.view.panel.content;
  const domRoot = editor.editing.view.getDomRoot();

  // Make sure the inline editor toolbar has the same width as the editing root for the ruler
  // to be aligned properly.
  inlineEditorResizeObserver = new ResizeObserver(
    editor.editing.view.getDomRoot(),
    () => {
      editor.ui.view.panel.element.style.width = new Rect(domRoot).width + "px";
    }
  );

  // Add the ruler view to the panel that hosts the inline editor toolbar.
  toolbarBalloonPanelContent.add(
    rulerPlugin.rulerView,
    toolbarBalloonPanelContent.length
  );
}
</script>

<style>
.editor-container{
  margin-top: 120px;
}

.ck-content {
  padding: 20px;
}

.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
  padding-left: 40px;
  padding-right: 40px;
}
</style>

