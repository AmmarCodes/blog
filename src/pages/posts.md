---
layout: page
title: Posts
---

<section class="mb-12">
  <h1 class="text-4xl font-bold text-neutral-900 mb-6">All Posts</h1>
  <p class="text-lg text-neutral-700 mb-8">
    Thoughts on software development, productivity, and books I've read.
  </p>
</section>

<section class="mb-12">
  <div class="space-y-8">
  {%- for post in collections.post reversed %}
    <article
      class="border-l-4 border-neutral-200 pl-6 hover:border-neutral-400 transition-colors duration-200"
    >
      <div class="flex items-start justify-between">
        <div>
          <h2 class="text-2xl font-medium text-neutral-900 mb-3">
            <a
              href="{{ post.url }}"
              class="hover:text-neutral-600 transition-colors duration-200"
              >{{ post.data.title }}</a
            >
          </h2>
          {% if post.data.excerpt %}
          <p class="text-neutral-600 mb-3">{{ post.data.excerpt }}</p>
          {% endif %}
          <time class="text-sm text-neutral-500"
            >{{ post.date | htmlDateString }}</time
          >
          {% if post.data.tags %}
          <div class="flex items-center space-x-2 mt-3">
            {% for tag in post.data.tags %}
            <span
              class="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs font-medium"
              >{{ tag }}</span
            >
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
