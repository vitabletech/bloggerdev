import React from 'react';
import { CodeExample } from './types';

export interface Tip {
  title: string;
  description: React.ReactNode;
  codeExample?: CodeExample;
}

export const tips: Tip[] = [
  {
    title: 'Force Specific Image Sizes with `resizeImage`',
    // FIX: Replaced JSX with React.createElement to support .ts files without JSX compilation.
    description: React.createElement(
      'p',
      null,
      'Instead of relying on CSS to resize thumbnails, you can use the `resizeImage` operator to generate a new image on the fly. This is much better for performance as it serves a smaller, optimized image. The syntax is `resizeImage(imageUrl, newSize, optionalRatio)`.',
    ),
    codeExample: {
      title: 'Generate a 400x400 Cropped Thumbnail',
      language: 'xml',
      code: `<b:if cond='data:post.thumbnailUrl'>
  <img expr:src='resizeImage(data:post.thumbnailUrl, 400, "1:1")' alt='Post thumbnail'/>
</b:if>`,
    },
  },
  {
    title: 'Conditionally Display a "Read More" Link',
    // FIX: Replaced JSX with React.createElement to support .ts files without JSX compilation.
    description: React.createElement(
      'p',
      null,
      'On index pages, you might not want the "Read More" link to show if the post is short and the full content is already displayed. You can use `data:post.hasJumpLink` to check if a "jump break" was inserted in the post editor.',
    ),
    codeExample: {
      title: 'Show "Read More" Only When Needed',
      language: 'xml',
      code: `<b:if cond='data:post.hasJumpLink'>
  <a class='read-more' expr:href='data:post.url'>Read More &raquo;</a>
</b:if>`,
    },
  },
  {
    title: 'Filter Posts by Label with Lambda Expressions',
    // FIX: Replaced JSX with React.createElement to support .ts files without JSX compilation.
    description: React.createElement(
      'p',
      null,
      'The `b:loop` tag has a powerful, lesser-known feature: lambda expressions. You can use them to filter and manipulate data directly in your theme. This is great for creating a "Featured Posts" section without JavaScript. The example below loops through all posts and only displays ones with the "Featured" label.',
    ),
    codeExample: {
      title: 'Loop Through Posts with a "Featured" Label',
      language: 'xml',
      code: `<b:loop values='data:posts where (p => p.labels any (l => l.name == "Featured"))' var='post'>
  <div class='featured-post-item'>
    <h3><a expr:href='data:post.url'><data:post.title/></a></h3>
    <!-- ... post content ... -->
  </div>
</b:loop>`,
    },
  },
  {
    title: 'Use `data:view` for Page-Specific CSS Classes',
    // FIX: Replaced JSX with React.createElement to support .ts files without JSX compilation.
    description: React.createElement(
      'p',
      null,
      'You can make your CSS much more powerful by adding dynamic classes to the `<body>` or `<html>` tag based on the current page view. This lets you apply specific styles for the homepage, post pages, or archive pages without complex selectors.',
    ),
    codeExample: {
      title: 'Dynamic Body Class',
      language: 'xml',
      code: `<body expr:class='
  "page-" + data:view.type + 
  (data:view.isHomepage ? " page-homepage" : "") +
  (data:view.isPost ? " page-post" : "") +
  (data:view.isSearch ? " page-search" : "")
'>
  <!-- Your content here -->
</body>`,
    },
  },
  {
    title: 'Get a Post Excerpt of a Specific Length',
    // FIX: Replaced JSX with React.createElement to support .ts files without JSX compilation.
    description: React.createElement(
      'p',
      null,
      'The `data:post.snippet` tag provides an auto-generated excerpt of your post. For more control, you can use the `snippet` operator to create a snippet of a specific length from the full post body, and you can customize the trailing text (e.g., "...").',
    ),
    codeExample: {
      title: 'Create a 150-Character Snippet',
      language: 'xml',
      code: `<p>
  <b:eval expr='snippet(data:post.body, {
    length: 150,
    links: false,
    linebreaks: false,
    ellipsis: "..."
  })'/>
</p>`,
    },
  },
  {
    title: 'Quickly Find XML Errors',
    // FIX: Replaced JSX with React.createElement to support .ts files without JSX compilation.
    description: React.createElement(
      'p',
      null,
      "If Blogger gives you the \"Could not parse XML\" error, it's often due to a simple syntax mistake. Instead of searching line by line, you can copy your entire theme code and paste it into an online XML validator. These tools will often pinpoint the exact line and character where the error is.",
    ),
  },
];
