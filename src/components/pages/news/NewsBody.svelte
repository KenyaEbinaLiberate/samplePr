<script lang="ts">
  import FormattedDate from "@components/FormattedDate.svelte";
  import InternalAnchor from "@components/InternalAnchor.svelte";
  import MicroCMSPicture from "@components/MicroCMSPicture.svelte";
  import type { News } from "@types/microcms/news";

  export let content: News;
</script>

<div class="articleWrap">
  <h1 class="">
    {content.title}
  </h1>

  <FormattedDate
    date={content.publishedAt ?? content.createdAt}
    class="postDate"
  />

  <div class="articleThumb">
    <MicroCMSPicture
      src={content.thumbnail.url}
      widths={[320, 640, 960]}
      width={320}
      height={320}
      sizes="20rem"
      alt=""
    />
  </div>

  <div class="articleBody">
    {@html content.body}
  </div>

  <div class="backBtn">
    <InternalAnchor href="/news/1" direction="left">BACK</InternalAnchor>
  </div>
</div>
