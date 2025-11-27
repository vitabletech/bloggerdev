import React from 'react';
import { Module } from './types';
import Slider from './components/Slider';

// Sample data for the slider
const sampleSlides = [
  { imageUrl: 'https://picsum.photos/id/1018/800/400', caption: 'Beautiful Mountain Landscape' },
  { imageUrl: 'https://picsum.photos/id/1015/800/400', caption: 'Calm River Scene' },
  { imageUrl: 'https://picsum.photos/id/1025/800/400', caption: 'A Loyal Companion' },
  { imageUrl: 'https://picsum.photos/id/1040/800/400', caption: 'Misty Forest Morning' },
];


export const courseModules: Module[] = [
  {
    title: 'Module 1: Foundations',
    lessons: [
      {
        slug: 'introduction-to-blogger',
        title: 'Introduction to Blogger',
        description: 'Understand what Blogger is, its strengths, and the power of its theme system.',
        content: {
          introduction: 'Welcome to the ultimate guide to Blogger theme development! Blogger, a free platform by Google, allows for incredible customization through its XML-based theme system. This course will guide you from the very basics to advanced techniques, enabling you to build any design you can imagine.',
          sections: [
            {
              heading: 'What is a Blogger Theme?',
              content: React.createElement('p', null, 'A Blogger theme is a single XML file that defines the entire structure, layout, and styling of your blog. It uses a combination of standard HTML, CSS, JavaScript, and special Blogger-specific tags to dynamically generate pages.'),
            },
            {
              heading: 'Why Develop Themes for Blogger?',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'While other platforms exist, Blogger remains popular for its simplicity, security, and cost-effectiveness (it\'s free). A well-developed theme can provide a premium user experience on a robust platform.'),
                React.createElement('ul', { className: "list-disc list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, 'Free Hosting:'), ' Hosted by Google, offering excellent uptime and security.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Full Control:'), ' Unlike many site builders, you have 100% access to the theme code.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Monetization:'), ' Seamless integration with Google AdSense.')
                )
              )
            }
          ],
        }
      },
      {
        slug: 'setting-up-your-blog',
        title: 'Setting Up Your Test Blog',
        description: 'Create a safe sandbox environment for theme development.',
        content: {
          introduction: 'Before you write a single line of code, you need a safe place to experiment. Never develop on a live site. A dedicated test blog is an essential first step.',
          sections: [
            {
              heading: 'Creating a New Blogger Blog',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'Follow these simple steps to create your development sandbox:'),
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'Go to ', React.createElement('a', { href: "https://www.blogger.com", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:underline" }, 'Blogger.com'), ' and sign in with your Google account.'),
                  React.createElement('li', null, 'Click on "New Blog" and choose a title (e.g., "Theme Dev Lab") and a unique URL (e.g., "my-theme-dev-lab-123.blogspot.com"). The name doesn\'t matter much as it\'s just for testing.'),
                  React.createElement('li', null, 'Populate it with some content. Create at least 5-7 sample posts. Use different formatting (headings, lists, images) and assign labels (e.g., "Technology", "Tutorials") to them. This dummy content is crucial for testing your theme\'s appearance.')
                )
              )
            },
            {
              heading: 'Accessing the Theme Editor',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'The Theme Editor is where you\'ll spend most of your time.'),
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'From your Blogger dashboard, navigate to the "Theme" section.'),
                  React.createElement('li', null, 'Click the dropdown arrow next to the "Customize" button.'),
                  React.createElement('li', null, 'Select "Edit HTML". This will open the code editor where you can directly modify your theme\'s XML file.')
                )
              )
            }
          ],
          tips: ['Always keep a clean backup of a working theme. Before making significant changes, use the "Backup" option in the Theme section to download the current XML file.'],
          exercises: ['Create a new test blog and publish five sample posts with different labels.']
        }
      },
      {
        slug: 'xml-structure-and-cdata',
        title: 'XML Structure & CDATA',
        description: 'Dive into the core XML structure of a Blogger theme and learn the importance of CDATA.',
        content: {
          introduction: 'Every Blogger theme is an XML document. Understanding its structure and special rules is the first step to mastering theme development. We will also cover CDATA, a crucial concept for including CSS and JavaScript.',
          sections: [
            {
              heading: 'The Root `<html>` Element',
              content: React.createElement('p', null, 'The theme starts with an ', React.createElement('code', null, '<html>'), ' tag containing several namespace declarations (', React.createElement('code', null, 'xmlns'), '). These are essential for the Blogger renderer to understand the special ', React.createElement('code', null, 'b:'), ' and ', React.createElement('code', null, 'data:'), ' tags.'),
            },
            {
              heading: 'What is `b:skin` and `CDATA`?',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'The ', React.createElement('code', null, '<b:skin>'), ' tag holds all your CSS. To prevent the XML parser from misinterpreting CSS characters like ', React.createElement('code', null, '>'), ' or ', React.createElement('code', null, '&'), ', the styles must be wrapped in a ', React.createElement('code', null, '<![CDATA[ ... ]]>'), ' section.'),
                React.createElement('p', { className: "mt-2" }, 'CDATA stands for "Character Data" and it tells the parser to treat the content inside it as raw text, ignoring any potential XML markup. This is also essential for embedding JavaScript directly in your theme.')
              )
            }
          ],
          codeExamples: [
            {
              title: 'Basic Blogger XML Structure',
              language: 'xml',
              code: `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <title><data:blog.pageTitle/></title>
    <b:skin><![CDATA[/* CSS styles go here */]]></b:skin>
  </head>
  <body>
    <b:section class='main' id='main' showaddelement='yes'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'/>
    </b:section>
  </body>
</html>`,
              highlightLines: '6,9-11',
            }
          ],
          tips: ['Always wrap your CSS and JavaScript inside CDATA blocks to avoid frustrating parsing errors.'],
          exercises: ['In your test blog, go to "Edit HTML" and locate the `<b:skin>` tag. Try adding a simple CSS rule inside the CDATA section, like `body { background: red; }`, and save to see the effect.']
        }
      },
      {
        slug: 'core-blogger-tags',
        title: 'Core Blogger Tags',
        description: 'Learn about the essential b:tags that form the skeleton of any theme.',
        content: {
          introduction: 'Blogger uses a special set of XML tags, prefixed with `b:`, to build themes. Understanding the main structural tags is fundamental to creating layouts.',
          sections: [
            { heading: '<b:template-skin>', content: React.createElement('p', null, 'This is a newer, more structured way to handle CSS. It allows you to define CSS variables that can be customized via the Blogger Theme Designer. It also requires a CDATA block.') },
            { heading: '<b:section>', content: React.createElement('p', null, 'This is the most important tag for layout. It defines a container where users can add and arrange widgets in the Layout dashboard. We will cover this in detail in the next module.') },
            { heading: '<b:widget>', content: React.createElement('p', null, 'Represents a single widget (like "Blog Posts", "Labels", or "HTML/JavaScript") inside a section.') },
            { heading: '<b:includable>', content: React.createElement('p', null, 'A reusable snippet of code. You define it once with an `id` and can then call it from anywhere else using `<b:include name="..."/>`. This is extremely powerful for keeping your code DRY (Don\'t Repeat Yourself).') },
            { heading: '<b:include>', content: React.createElement('p', null, 'This tag is used to insert an `<b:includable>` snippet. It helps in breaking down large widgets into smaller, manageable parts.') },
          ],
          codeExamples: [
            {
              title: 'Using b:includable and b:include',
              language: 'xml',
              code: `<!-- Inside the Blog1 widget -->
<b:widget id='Blog1' type='Blog' ...>
  <b:includable id='main' var='this'>
    ...
    <!-- Instead of writing post details here, we call another includable -->
    <b:include name='postDetails' data='post' />
    ...
  </b:includable>

  <!-- Define the reusable snippet -->
  <b:includable id='postDetails' var='post'>
    <div class='post-meta'>
      <span>By <data:post.author/></span>
      <span>on <data:post.timestampISO8601/></span>
    </div>
  </b:includable>
</b:widget>`,
            },
          ],
        },
      },
    ]
  },
  {
    title: 'Module 2: The Layout Engine',
    lessons: [
      {
        slug: 'understanding-data-tags',
        title: 'Understanding Data Tags',
        description: 'Learn how to pull dynamic blog information using Blogger\'s powerful data tags.',
        content: {
          introduction: 'Data tags are the heart of a dynamic Blogger theme. They are placeholders that Blogger replaces with actual content, like your blog\'s title, post content, author names, and much more. They always start with `data:`.',
          sections: [
            {
              heading: 'Global Blog Data',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'These tags can be used anywhere in your theme to get information about the blog itself.'),
                React.createElement('ul', { className: "list-disc list-inside space-y-1 pl-4 mt-2" },
                    React.createElement('li', null, React.createElement('code', null, 'data:blog.title'), ': The title of your blog.'),
                    React.createElement('li', null, React.createElement('code', null, 'data:blog.url'), ': The main URL of your blog.'),
                    React.createElement('li', null, React.createElement('code', null, 'data:blog.pageTitle'), ': The full title for the current page (e.g., "Blog Title: Post Title").'),
                    React.createElement('li', null, React.createElement('code', null, 'data:blog.pageType'), ': The type of page being viewed (`item`, `archive`, `index`, `static_page`).')
                )
              )
            },
            {
              heading: 'View-Specific Data',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'The `data:view` object contains information about the current page view, which is very useful for conditionals.'),
                React.createElement('ul', { className: "list-disc list-inside space-y-1 pl-4 mt-2" },
                    React.createElement('li', null, React.createElement('code', null, 'data:view.isHomepage'), ': True on the homepage.'),
                    React.createElement('li', null, React.createElement('code', null, 'data:view.isPost'), ': True on a single post page.'),
                    React.createElement('li', null, React.createElement('code', null, 'data:view.isPage'), ': True on a static page.'),
                    React.createElement('li', null, React.createElement('code', null, 'data:view.isSearch'), ': True on a search results page.')
                )
              )
            },
            {
              heading: 'Data within Widgets',
              content: React.createElement('p', null, 'Inside a widget, like the main Blog widget (`<b:widget type=\'Blog\'>`), you get access to more specific data. For example, inside the post loop, you can use `data:post.title`, `data:post.body`, `data:post.author`, etc.')
            }
          ],
          codeExamples: [
            {
              title: 'Displaying the Blog Title in a Header',
              language: 'xml',
              code: `<div class='header'>
  <h1><a expr:href='data:blog.url'><data:blog.title/></a></h1>
  <p><data:blog.description/></p>
</div>`
            },
          ],
          tips: ['You can find a comprehensive list of all available data tags on the official Blogger help documentation.'],
        }
      },
      {
        slug: 'layouts-sections-widgets',
        title: 'Layouts, Sections & Widgets',
        description: 'Master the Blogger Layout system by defining sections and widgets in your theme.',
        content: {
          introduction: 'The key to a user-friendly theme is making it configurable through Blogger\'s visual Layout editor. This is achieved by defining `<b:section>` tags in your theme, which act as containers for `<b:widget>` tags.',
          sections: [
            {
              heading: 'Defining a Section (`<b:section>`)',
              content: React.createElement('p', null, 'A section is a container in your layout where users can add, remove, and reorder widgets from the dashboard. Key attributes include `id` (must be unique), `class` (for styling), and `showaddelement` (set to `yes` to allow adding widgets).')
            },
            {
              heading: 'Adding Widgets (`<b:widget>`)',
              content: React.createElement('p', null, 'You can pre-populate your sections with default widgets. Each widget needs a unique `id`, a `type` (e.g., `Header`, `Blog`, `HTML`, `Label`), and a `locked` attribute (optional, `true` or `false`). A locked widget cannot be removed by the user from the Layout editor.')
            },
            {
              heading: 'How it Connects to the Dashboard',
              content: React.createElement('p', null, 'When you define a section in your XML, it appears as a droppable area in the "Layout" section of the Blogger dashboard. Any widgets you define inside it will appear there, and users can drag them between sections or add new ones, giving them control over the blog\'s structure without touching code.')
            }
          ],
          codeExamples: [
            {
              title: 'Creating a Header and Sidebar Layout',
              language: 'xml',
              code: `<body>
  <!-- Header Section -->
  <b:section class='header' id='header' maxwidgets='1' showaddelement='no'>
    <b:widget id='Header1' locked='true' title='My Awesome Blog (Header)' type='Header'/>
  </b:section>

  <div class='content-wrapper'>
    <!-- Main Content Section -->
    <b:section class='main' id='main' showaddelement='yes'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'/>
    </b:section>

    <!-- Sidebar Section -->
    <b:section class='sidebar' id='sidebar' preferred='yes' showaddelement='yes'>
      <b:widget id='Label1' locked='false' title='Categories' type='Label'/>
      <b:widget id='HTML1' locked='false' title='About Me' type='HTML'/>
      
      <!-- Conditionally Displayed Ad Widget -->
      <b:widget id='HTML2' locked='false' title='Sidebar Ad' type='HTML'>
        <b:includable id='main'>
          <!-- Only render this widget's content on post or static pages -->
          <b:if cond='data:view.isPost or data:view.isPage'>
            <div class='widget-content'>
              <h4>Advertisement</h4>
              <!-- User's ad code will be output here -->
              <data:content/>
            </div>
          </b:if>
        </b:includable>
      </b:widget>

    </b:section>
  </div>
</body>`
            }
          ],
          tips: ['Use clear and descriptive IDs for your sections (e.g., `header`, `sidebar-right`, `footer-column-1`) to make the Layout editor intuitive for the end-user.'],
          exercises: ['Add a new section for a footer to your theme. Define it with three widget containers inside, each with a default HTML widget.']
        }
      },
      {
        slug: 'working-with-widgets',
        title: 'Working with Widgets',
        description: 'Explore the different types of widgets and how to customize them.',
        content: {
          introduction: 'Widgets are the building blocks of your blog\'s content and functionality. Blogger provides many built-in widget types, and you can create custom functionality with the HTML/JavaScript widget.',
          sections: [
            {
              heading: 'Common Widget Types',
              content: React.createElement(React.Fragment, null,
                React.createElement('ul', { className: "list-disc list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, 'Blog:'), ' The most important widget. It displays your posts.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Header:'), ' Displays your blog title and description.'),
                  React.createElement('li', null, React.createElement('strong', null, 'HTML/JavaScript:'), ' A blank slate to add any custom code, like social media feeds or ad banners.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Label:'), ' Automatically generates a list of all your labels (categories).'),
                  React.createElement('li', null, React.createElement('strong', null, 'Pages:'), ' Creates a menu from your static pages.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Profile:'), ' Displays your author profile.'),
                  React.createElement('li', null, React.createElement('strong', null, 'AdSense:'), ' For displaying Google Ads.')
                )
              )
            },
            {
              heading: 'Customizing Widget Content',
              content: React.createElement('p', null, 'The content within each widget\'s `<b:includable>` can be heavily customized. For example, in the `Blog1` widget, you can completely change the HTML structure of a post, move the title, restyle the metadata, and more.')
            },
          ],
        },
      },
    ]
  },
  {
    title: 'Module 3: Dynamic Content & Logic',
    lessons: [
      {
        slug: 'conditionals-and-expressions',
        title: 'Conditionals and Expressions',
        description: 'Control your theme\'s output with `b:if`, `b:else`, and expressions for truly dynamic layouts.',
        content: {
          introduction: 'Conditional tags and loops give you fine-grained control over what content is displayed and where. You can show specific widgets only on the homepage, change layouts for specific pages, or loop through all post labels to create a tag cloud.',
          sections: [
            {
              heading: 'Conditional Logic with `<b:if>`',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'The ', React.createElement('code', null, '<b:if>'), ' tag lets you render content only if a certain condition is true. The condition is placed in the ', React.createElement('code', null, 'cond'), ' attribute.'),
                React.createElement('p', { className: 'mt-2' }, 'Common conditions:'),
                React.createElement('ul', { className: "list-disc list-inside space-y-1 pl-4 mt-2" },
                    React.createElement('li', null, React.createElement('code', null, 'cond=\'data:view.isHomepage\''), ': True only on the main homepage.'),
                    React.createElement('li', null, React.createElement('code', null, 'cond=\'data:blog.pageType == "item"\''), ': True only on individual post pages.'),
                    React.createElement('li', null, React.createElement('code', null, 'cond=\'data:post.thumbnailUrl\''), ': True if the post has a thumbnail.')
                )
              )
            },
            {
                heading: 'Using `<b:else/>`',
                content: React.createElement('p', null, 'You can provide alternative content when a condition is false by placing an ', React.createElement('code', null, '<b:else/>'), ' tag immediately after the closing ', React.createElement('code', null, '</b:if>'), ' tag.')
            },
            {
              heading: 'Expressions with `expr:`',
              content: React.createElement('p', null, 'The `expr:` operator allows you to dynamically set an HTML attribute. For example, instead of a static `href`, you can use `expr:href="data:blog.url"` to link to the blog\'s homepage URL.')
            },
          ],
          codeExamples: [
            {
              title: 'Show a Welcome Message only on the Homepage',
              language: 'xml',
              code: `<b:if cond='data:view.isHomepage'>
  <div class='welcome-banner'>
    <h2>Welcome to our Blog!</h2>
  </div>
</b:if>`
            },
            {
              title: 'Display a post thumbnail or a placeholder',
              language: 'xml',
              code: `<b:if cond='data:post.thumbnailUrl'>
  <img expr:src='data:post.thumbnailUrl' />
<b:else/>
  <img src='https://via.placeholder.com/150' />
</b:if>`
            },
          ],
        }
      },
      {
        slug: 'looping-through-data',
        title: 'Looping Through Data',
        description: 'Learn how to iterate over lists of data like posts and labels using `<b:loop>`',
        content: {
          introduction: 'The `<b:loop>` tag is essential for displaying lists of content. The most common use is within the Blog widget to loop through all posts on a given page, but it can also be used for labels, comments, and more.',
          sections: [
            {
              heading: 'The Structure of `<b:loop>`',
              content: React.createElement('p', null, 'A ', React.createElement('code', null, '<b:loop>'), ' tag requires two main attributes: ', React.createElement('code', null, 'values'), ' (the list of data to iterate over) and ', React.createElement('code', null, 'var'), ' (a name for the variable representing one item in each iteration).')
            }
          ],
          codeExamples: [
            {
                title: 'Looping Through Post Labels to Create a Tag List',
                language: 'xml',
                code: `<b:if cond='data:post.labels'>
  <div class='post-labels'>
    <span>Tags:</span>
    <b:loop values='data:post.labels' var='label'>
      <a expr:href='data:label.url' rel='tag'><data:label.name/></a>
      <!-- Add a comma if it's not the last label -->
      <b:if cond='!data:label.isLast'>, </b:if>
    </b:loop>
  </div>
</b:if>`
            }
          ],
          tips: ['Inside a loop, you can use the `data:i.isFirst` and `data:i.isLast` (where `i` is your loop variable) booleans to add special styling to the first or last item in a list.'],
        }
      }
    ]
  },
   {
    title: 'Module 4: Building Core Components',
    lessons: [
      {
        slug: 'handling-images-thumbnails',
        title: 'Handling Images & Thumbnails',
        description: 'Learn how to work with post images and create different thumbnail sizes.',
        content: {
          introduction: 'Visuals are key to an engaging blog. Blogger provides powerful tools to manage images and thumbnails, but you need to know which data tags to use.',
          sections: [
            {
              heading: 'The Post Thumbnail',
              content: React.createElement('p', null, 'The primary data tag is `data:post.thumbnailUrl`. This gives you the URL of the first image in the post, which Blogger designates as the thumbnail. It\'s important to check if it exists with `<b:if cond=\'data:post.thumbnailUrl\'>` before trying to display it.'),
            },
            {
              heading: 'Resizing Thumbnails',
              content: React.createElement('p', null, 'You can resize thumbnails on the fly using the `resizeImage` operator. This is incredibly useful for creating different image sizes for different contexts (e.g., a small square for a sidebar, a a large rectangle for the main post).'),
            },
          ],
          codeExamples: [
            {
              title: 'Displaying a Resized Thumbnail',
              language: 'xml',
              code: `<!-- Check if a thumbnail exists -->
<b:if cond='data:post.thumbnailUrl'>
  <div class='post-thumb'>
    <a expr:href='data:post.url'>
      <!-- 
        Create a 300px wide, 200px tall, cropped thumbnail.
        Syntax: resizeImage(imageUrl, newSize, optionalRatio, optionalCrop)
      -->
      <img expr:src='resizeImage(data:post.thumbnailUrl, 300, "1:1")'/>
    </a>
  </div>
</b:if>`,
            },
          ],
          tips: ['For better performance, use the `resizeImage` operator to serve smaller images where appropriate, instead of loading a huge image and scaling it down with CSS.'],
        },
      },
      {
        slug: 'creating-navigation-menus',
        title: 'Creating Navigation Menus',
        description: 'Build static and dynamic navigation menus for your blog.',
        content: {
          introduction: 'Good navigation is crucial for user experience. Blogger themes can have menus powered by the Pages widget, the Labels widget, or a custom-built HTML menu.',
          sections: [
            {
              heading: 'Method 1: The Pages Widget',
              content: React.createElement('p', null, 'The easiest method. Simply add a Pages widget in your Layout dashboard, and it will automatically generate a list of links to your static pages.'),
            },
            {
              heading: 'Method 2: The LinkList Widget',
              content: React.createElement('p', null, 'This widget allows you to manually create a list of any links you want in the Layout dashboard. You can link to labels, external sites, or specific posts. This offers more flexibility than the Pages widget.'),
            },
            {
              heading: 'Method 3: Custom HTML Menu (Advanced)',
              content: React.createElement('p', null, 'For full control over the structure and styling, especially for dropdown/sub-menus, you can build the menu directly in your theme\'s HTML. You would typically do this inside a locked HTML/JavaScript widget.'),
            },
          ],
        },
      },
      {
        slug: 'implementing-pagination',
        title: 'Implementing Pagination',
        description: 'Learn how to add "Next/Previous" links and numbered pagination.',
        content: {
          introduction: 'Pagination allows users to navigate through older posts. Blogger has built-in data tags for simple "Next/Previous" links, which are found inside the `Blog1` widget.',
          sections: [
            {
              heading: 'Simple Next/Previous Links',
              content: React.createElement('p', null, 'Inside the `main` includable of the `Blog1` widget, you have access to `data:olderPageUrl` and `data:newerPageUrl`. You can use these to create navigation links.'),
            },
          ],
          codeExamples: [
            {
              title: 'Standard Pagination Links',
              language: 'xml',
              code: `<div class='blog-pager' id='blog-pager'>
  <b:if cond='data:olderPageUrl'>
    <a class='older-link' expr:href='data:olderPageUrl' expr:title='data:olderPageTitle'>&amp;larr; Older Posts</a>
  </b:if>

  <b:if cond='data:newerPageUrl'>
    <a class='newer-link' expr:href='data:newerPageUrl' expr:title='data:newerPageTitle'>Newer Posts &amp;rarr;</a>
  </b:if>

  <a class='home-link' expr:href='data:blog.homepageUrl'>Home</a>
</div>`,
            },
          ],
          tips: ['Numbered pagination is not supported natively by Blogger data tags. It requires a custom JavaScript solution that reads the blog\'s feed to determine the total number of posts.'],
        },
      },
      {
        slug: 'customizing-comments-section',
        title: 'Customizing the Comments Section',
        description: 'Style the built-in comment system or integrate a third-party service.',
        content: {
          introduction: 'The comments section is key for reader engagement. You can heavily style the default Blogger comments or replace it entirely.',
          sections: [
            {
              heading: 'Styling Blogger Comments',
              content: React.createElement('p', null, 'The comment form and display are rendered inside the `Blog1` widget. You can find the relevant includables (like `comments-block`) and add your own CSS classes to the elements to style them.'),
            },
            {
              heading: 'Integrating Third-Party Comments (e.g., Disqus)',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'To use a service like Disqus, you would typically hide the default Blogger comments and add the Disqus JavaScript snippet instead.'),
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'Wrap the entire Blogger comments section in a conditional tag: `<b:if cond=\'data:blog.pageType == "something-false"\'> ... </b:if>` to hide it.'),
                  React.createElement('li', null, 'Below it, add the JavaScript code provided by Disqus.'),
                  React.createElement('li', null, 'Make sure the Disqus code only loads on post pages using `<b:if cond=\'data:blog.pageType == "item"\'>`.')
                )
              ),
            },
          ],
        },
      },
      {
        slug: 'fetching-and-displaying-labels',
        title: 'Fetching and Displaying Labels',
        description: 'Show post categories by using the Label widget or looping through data.',
        content: {
          introduction: 'In Blogger, "Labels" are used as categories or tags. You can display them as a list for the whole blog or show the specific labels applied to a single post.',
          sections: [
            {
              heading: 'Method 1: The Label Widget',
              content: React.createElement('p', null, 'The simplest way. Add a Label widget from the Layout dashboard. It will automatically generate a list of all labels used on your blog, with links to the respective category pages.'),
            },
            {
              heading: 'Method 2: Looping Through Post Labels',
              content: React.createElement('p', null, 'To display the labels for a *specific post*, you need to use a loop inside the `Blog1` widget. This is very common for post meta sections.'),
            },
          ],
          codeExamples: [
            {
              title: 'Looping Through Post Labels',
              language: 'xml',
              code: `<!-- This code goes inside the post loop in the Blog1 widget -->
<b:if cond='data:post.labels'>
  <div class='post-labels'>
    <span>Posted in:</span>
    <b:loop values='data:post.labels' var='label'>
      <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='!data:label.isLast'>, </b:if>
    </b:loop>
  </div>
</b:if>`,
            },
          ],
        },
      },
      {
        slug: 'creating-a-search-feature',
        title: 'Creating a Search Feature',
        description: 'Add a search bar to your theme to help users find content.',
        content: {
          introduction: 'A search function is a vital utility for any content-rich blog. Blogger has a built-in search engine that you can easily plug into.',
          sections: [
            {
              heading: 'Using the Search Widget',
              content: React.createElement('p', null, 'The easiest method is to add the "Search" widget from the Layout dashboard. This will add a simple search form that works out of the box.'),
            },
            {
              heading: 'Creating a Custom Search Form',
              content: React.createElement('p', null, 'For more control over the look and feel, you can build your own HTML form. The form must submit to your blog\'s `/search` path, and the input field must have the name `q`.'),
            },
          ],
          codeExamples: [
            {
              title: 'Custom HTML Search Form',
              language: 'xml',
              code: `<form class='search-form' expr:action='data:blog.homepageUrl + "search"'>
  <input type='text' name='q' placeholder='Search...'/>
  <button type='submit'>Search</button>
</form>`,
            },
          ],
        },
      },
    ]
  },
  {
    title: 'Module 5: Advanced Features',
    lessons: [
       {
        slug: 'adding-styling-slider-carousel',
        title: 'Adding a Slider/Carousel',
        description: 'Implement an interactive image slider to showcase featured content.',
        content: {
          introduction: 'A slider or carousel is a great way to display multiple images or featured posts in a compact space. This is often used on homepages to grab the user\'s attention. We will build a simple, reusable slider component.',
          sections: [
            {
              heading: 'Live Example',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'Here is a live demonstration of the slider component we will be building. You can use the arrows to navigate or click the dots at the bottom.'),
                React.createElement(Slider, { slides: sampleSlides })
              )
            },
            {
              heading: 'How to Implement in Blogger',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'To implement a slider in a Blogger theme, you typically need three parts:'),
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, 'HTML Structure:'), ' The basic markup for the slides, navigation buttons, and indicators. You can use a loop (`<b:loop>`) to generate slides from posts with a specific label, like "Featured".'),
                  React.createElement('li', null, React.createElement('strong', null, 'CSS Styling:'), ' The styles to position the slides, arrows, and create the visual appearance.'),
                  React.createElement('li', null, React.createElement('strong', null, 'JavaScript Logic:'), ' The script to handle the functionality: changing slides, responding to clicks, and adding animations.')
                )
              )
            },
          ],
          codeExamples: [
            {
              title: 'Basic HTML Structure for a Blogger Slider',
              language: 'xml',
              code: `<div class='slider-container'>
  <div class='slider-slides'>
    <!-- Loop through posts with the 'Featured' label -->
    <b:loop values='data:posts where (p => p.labels any (l => l.name == "Featured"))' var='post'>
      <div class='slide'>
        <img expr:src='resizeImage(data:post.thumbnailUrl, 800, "16:9")'/>
        <div class='slide-caption'><data:post.title/></div>
      </div>
    </b:loop>
  </div>
  <button class='prev'>&#10094;</button>
  <button class='next'>&#10095;</button>
</div>`
            },
            {
                title: 'Sample JavaScript for Slider Logic',
                language: 'javascript',
                code: `// This script should be placed just before the closing </body> tag
// and wrapped in CDATA.

const slider = document.querySelector('.slider-container');
const slides = slider.querySelectorAll('.slide');
const prevButton = slider.querySelector('.prev');
const nextButton = slider.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});

// Show the first slide initially
showSlide(currentIndex);`
            }
          ],
          tips: ['For better performance, make sure to use Blogger\'s `resizeImage` operator to serve appropriately sized images for your slider.']
        }
      },
       {
        slug: 'creating-custom-404-page',
        title: 'Creating a Custom 404 Page',
        description: 'Design a helpful "Not Found" page to improve user experience.',
        content: {
          introduction: 'A default 404 error page is jarring. A custom page can guide lost users back to your content and maintain your brand\'s look and feel.',
          sections: [
            {
              heading: 'How Blogger Handles 404s',
              content: React.createElement('p', null, 'Blogger doesn\'t have a `404.xml` template file. Instead, you set up a custom 404 message in the dashboard, which is then rendered within your main theme. The key is to use conditionals to show your custom 404 design only when an error occurs.'),
            },
            {
              heading: 'Setting Up the Custom 404',
              content: React.createElement(React.Fragment, null,
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'In your Blogger dashboard, go to "Settings" -> "Errors and redirects" -> "Custom 404".'),
                  React.createElement('li', null, 'Add some simple HTML here. This content will be injected into your theme on a 404 page.'),
                  React.createElement('li', null, 'In your theme XML, you can use CSS to style the specific error page elements, or use JavaScript to detect a 404 and show a full-screen custom design.')
                )
              ),
            },
          ],
        },
      },
      {
        slug: 'building-contact-form',
        title: 'Building a Contact Form',
        description: 'Allow visitors to contact you directly from your blog.',
        content: {
          introduction: 'A contact form is essential for communication. Blogger offers a built-in widget, but you can also integrate more powerful third-party services.',
          sections: [
            {
              heading: 'Method 1: The Built-in Contact Form Widget',
              content: React.createElement('p', null, 'This is the simplest way. Go to the "Layout" dashboard, click "Add a Gadget", and select "Contact Form". This widget can be placed in a sidebar or on a static page. Submissions are sent to the blog author\'s email address.'),
            },
            {
              heading: 'Method 2: Third-Party Form Services',
              content: React.createElement('p', null, 'For more features like file uploads, auto-responders, or custom fields, you can use services like Google Forms, Formspree, or JotForm. You would create the form on their site and then embed the provided HTML/JavaScript code into a static page or an HTML/JavaScript widget on your blog.'),
            },
          ],
        },
      },
      {
        slug: 'adding-newsletter-form',
        title: 'Adding a Newsletter Form',
        description: 'Build your audience by capturing email subscribers.',
        content: {
          introduction: 'An email list is a powerful asset. You can easily add a newsletter subscription form to your Blogger theme.',
          sections: [
            {
              heading: 'Using the "Follow by Email" Widget',
              content: React.createElement('p', null, 'Blogger has a native "Follow by Email" widget powered by FeedBurner. You can add it from the Layout dashboard. When users subscribe, they will get an email every time you publish a new post. Note: FeedBurner is an older service and may have limitations.'),
            },
            {
              heading: 'Integrating with Email Marketing Services',
              content: React.createElement('p', null, 'For professional email marketing (with custom newsletters, automation, etc.), it\'s better to use a dedicated service like Mailchimp, ConvertKit, or MailerLite. These services will provide you with an HTML form that you can embed in an HTML/JavaScript widget or on a static page.'),
            },
          ],
          codeExamples: [
            {
              title: 'Example Embedded Form from Mailchimp',
              language: 'html',
              code: `<!-- This is a simplified example. Mailchimp provides the full code. -->
<div id="mc_embed_signup">
  <form action="YOUR_MAILCHIMP_ACTION_URL" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
        <h2>Subscribe to our newsletter</h2>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address</label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
        </div>
        <div id="mce-responses" class="clear">...</div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_..." tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </div>
  </form>
</div>`,
            },
          ],
        },
      },
    ]
  },
  {
    title: 'Module 6: Styling, Scripts & SEO',
    lessons: [
      {
        slug: 'adding-custom-css-js',
        title: 'Adding Custom CSS & JS',
        description: 'Learn the correct ways to include your own stylesheets and scripts.',
        content: {
          introduction: 'Custom CSS and JavaScript are what give your theme a unique design and interactive functionality. It\'s crucial to add them correctly to avoid XML errors and performance issues.',
          sections: [
            {
              heading: 'Adding CSS',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'All of your theme\'s CSS should go inside the `<b:skin>` tag, wrapped in a `<![CDATA[...]]>` block to prevent XML parsing errors.'),
                React.createElement('p', {className: 'mt-2'}, 'This centralizes your styling and allows you to use Blogger\'s CSS variables, which can be hooked up to the Theme Designer for easy customization by the user.')
              ),
            },
            {
              heading: 'Adding JavaScript',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'You have two main options for adding JavaScript:'),
                 React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, 'Inline:'), ' Place your script inside a `<script>` tag, just before the closing `</body>` tag. Like CSS, the script content must be wrapped in a `//<![CDATA[ ... //]]>` block.'),
                  React.createElement('li', null, React.createElement('strong', null, 'External:'), ' For larger scripts or libraries (like jQuery or a slider library), it is much better to host the `.js` file externally (e.g., on GitHub or a CDN) and link to it with `<script src="..."></script>`. This improves performance and keeps your main XML file cleaner.')
                )
              )
            },
          ],
          codeExamples: [
            {
              title: 'Correct Way to Add Inline JavaScript',
              language: 'xml',
              code: `...
  <script type='text/javascript'>
  //<![CDATA[
    function showAlert() {
      // The '<' character would normally break XML
      if (1 < 2) {
        alert('Hello World!');
      }
    }
    showAlert();
  //]]>
  </script>
</body>
</html>`,
            }
          ]
        },
      },
      {
        slug: 'making-templates-responsive',
        title: 'Making Templates Responsive',
        description: 'Ensure your theme looks great on all devices, from mobile phones to desktops.',
        content: {
          introduction: 'In today\'s mobile-first world, a responsive theme is non-negotiable. This is achieved using standard CSS techniques like media queries, flexible grids, and fluid images.',
          sections: [
            {
              heading: 'The Viewport Meta Tag',
              content: React.createElement('p', null, 'The first and most important step is to include the viewport meta tag in your theme\'s `<head>` section. This tells mobile browsers how to scale the page.'),
            },
            {
              heading: 'Using CSS Media Queries',
              content: React.createElement('p', null, 'Media queries are the core of responsive design. You use them to apply different CSS rules based on the screen size. For example, you might have a two-column layout on desktop that collapses to a single column on screens smaller than 768px.'),
            },
          ],
          codeExamples: [
            {
              title: 'Viewport Meta Tag',
              language: 'html',
              code: `<meta name='viewport' content='width=device-width, initial-scale=1.0'/>`,
            },
            {
              title: 'Simple Media Query Example',
              language: 'css',
              code: `/* Default styles for all screen sizes */
.container {
  width: 90%;
  margin: 0 auto;
}

.main-content {
  width: 100%;
}

.sidebar {
  width: 100%;
}

/* Styles for screens 768px and wider */
@media screen and (min-width: 768px) {
  .container {
    display: flex;
    gap: 20px;
  }
  .main-content {
    width: 70%;
  }
  .sidebar {
    width: 30%;
  }
}`,
            },
          ],
        },
      },
      {
        slug: 'seo-best-practices',
        title: 'SEO Best Practices',
        description: 'Optimize your theme for search engines to increase visibility.',
        content: {
          introduction: 'Good SEO starts with a well-structured theme. By using the right tags and data, you can help search engines understand your content better.',
          sections: [
            {
              heading: 'Use Semantic HTML',
              content: React.createElement('p', null, 'Use tags like `<header>`, `<footer>`, `<main>`, `<article>`, and `<nav>` to give structure to your page. Use an `<h1>` for the main title (blog title on homepage, post title on post pages) and `<h2>`, `<h3>` for subheadings.'),
            },
            {
              heading: 'Dynamic Meta Tags',
              content: React.createElement('p', null, 'Blogger automatically handles the `<title>` tag well with `data:blog.pageTitle`. You can also add a dynamic meta description.'),
            },
          ],
          codeExamples: [
            {
              title: 'Dynamic Meta Description',
              language: 'xml',
              code: `<b:if cond='data:view.isPost'>
  <meta expr:content='data:post.snippet' name='description'/>
<b:elseif cond='data:view.isHomepage'/>
  <meta expr:content='data:blog.description' name='description'/>
</b:if>`,
            },
          ],
          tips: ['Blogger automatically generates a `sitemap.xml` and allows you to set a custom `robots.txt` in the settings, so you don\'t need to handle those in the theme.'],
        },
      },
      {
        slug: 'accessibility-best-practices',
        title: 'Accessibility (a11y) Best Practices',
        description: 'Make your themes usable for everyone, including people with disabilities.',
        content: {
          introduction: 'Web accessibility (a11y) ensures that people with disabilities can use your website. Building accessible themes is not just good practice; it\'s essential for an inclusive web.',
          sections: [
            {
              heading: 'Key Principles',
              content: React.createElement(React.Fragment, null, 
                React.createElement('ul', { className: "list-disc list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, 'Semantic HTML:'), ' Using correct HTML tags (as mentioned in SEO) helps screen readers understand the page structure.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Image Alt Text:'), ' Always provide descriptive `alt` attributes for images. Blogger\'s post editor lets users add this easily.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Keyboard Navigation:'), ' Ensure all interactive elements like links and buttons can be accessed and used with the Tab key.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Color Contrast:'), ' Make sure your text has sufficient contrast against its background. Use online tools to check your color combinations.')
                )
              )
            },
          ],
        },
      },
    ]
  },
  {
    title: 'Module 7: Workflow & Deployment',
    lessons: [
       {
        slug: 'troubleshooting-and-debugging',
        title: 'Troubleshooting & Debugging',
        description: 'Learn how to fix common errors and debug your theme effectively.',
        content: {
          introduction: 'Things will break. Knowing how to identify and fix common issues is a crucial skill for any developer.',
          sections: [
            {
              heading: 'The Dreaded "Could not parse XML" Error',
              content: React.createElement('p', null, 'This is the most common error. It means you have a syntax mistake in your XML. Usually, it\'s caused by an unclosed tag, an illegal character (`&`, `<`) outside of a CDATA block, or a typo in a `b:` tag.'),
            },
            {
              heading: 'Debugging Tips',
              content: React.createElement(React.Fragment, null, 
                React.createElement('ul', { className: "list-disc list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, 'Check the Browser Console:'), ' Open your browser\'s developer tools (F12 or Ctrl+Shift+I) and check the Console for JavaScript errors.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Comment Out Code:'), ' If you can\'t find the error, start commenting out recent changes until the theme saves successfully. This helps you isolate the problematic code block.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Use an XML Validator:'), ' You can copy your theme code and paste it into an online XML validator, which can often point you to the exact line with the syntax error.')
                )
              )
            },
          ],
        },
      },
       {
        slug: 'uploading-maintaining-themes',
        title: 'Uploading & Maintaining Themes',
        description: 'Learn the best workflow for applying and updating your themes.',
        content: {
          introduction: 'Once your theme is ready, you need to apply it to your blog. Maintaining it over time is also important.',
          sections: [
            {
              heading: 'Uploading Your Theme',
              content: React.createElement(React.Fragment, null, 
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'In your local code editor, save your final theme as an `.xml` file.'),
                  React.createElement('li', null, 'On the Blogger "Theme" page, click the dropdown next to "Customize" and select "Restore".'),
                  React.createElement('li', null, 'Click "Upload" and select your `.xml` file. This will completely replace the existing theme.')
                )
              )
            },
            {
              heading: 'Best Practices for Maintenance',
              content: React.createElement(React.Fragment, null, 
                React.createElement('ul', { className: "list-disc list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, 'Version Control:'), ' Use a tool like Git to track changes to your theme file. This lets you roll back to previous versions if something goes wrong.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Keep a Changelog:'), ' If you plan to distribute your theme, keep a simple text file documenting the changes in each new version.')
                )
              )
            },
          ],
          tips: ['Before restoring a new theme on a live blog, always back up the current one first.'],
        },
      },
    ]
  },
  {
    title: 'Module 8: Full Projects & Beyond',
    lessons: [
      {
        slug: 'project-converting-static-html',
        title: 'Project: Converting Static HTML',
        description: 'A step-by-step guide to converting a basic static HTML/CSS template into a dynamic Blogger theme.',
        content: {
          introduction: 'This project will solidify your understanding of the fundamentals. We will take a simple, static one-page HTML template and convert it into a fully functional Blogger theme.',
          sections: [
            {
              heading: 'Step 1: The Static Template',
              content: React.createElement('p', null, 'First, we start with our basic HTML and CSS. This is what we want our blog to look like, but with static, hard-coded content.'),
            },
             {
              heading: 'Step 2: The Conversion Process',
              content: React.createElement(React.Fragment, null, 
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'Wrap the entire file in the necessary Blogger XML boilerplate (`<html>`, `<head>`, `<body>`, etc.).'),
                  React.createElement('li', null, 'Move all CSS into a `<b:skin><![CDATA[...]]></b:skin>` block.'),
                  React.createElement('li', null, 'Replace the static title with `<title><data:blog.pageTitle/></title>`.'),
                  React.createElement('li', null, 'Identify the main content area and the sidebar. Replace these with `<b:section>` tags.'),
                  React.createElement('li', null, 'Inside the sections, add the required default widgets like `<b:widget id="Blog1" type="Blog"/>`.'),
                  React.createElement('li', null, 'Go into the `Blog1` widget and replace the static post content with a `<b:loop>` that uses `data:post.title`, `data:post.body`, etc.')
                )
              )
            },
          ],
        },
      },
       {
        slug: 'project-building-news-site',
        title: 'Project: Building a News Site',
        description: 'Build a complete, feature-rich news/magazine theme from start to finish.',
        content: {
          introduction: 'In this capstone project, we will apply everything we\'ve learned to build a professional news site theme. This will involve a complex layout, multiple sections, and advanced features.',
          sections: [
            {
              heading: 'Features to Implement',
              content: React.createElement(React.Fragment, null, 
                React.createElement('ul', { className: "list-disc list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'A header with a logo and navigation menu.'),
                  React.createElement('li', null, 'A "Featured Posts" slider on the homepage.'),
                  React.createElement('li', null, 'A grid-based layout for posts on the homepage.'),
                  React.createElement('li', null, 'A sidebar with widgets for "Popular Posts", "Labels", and an ad spot.'),
                  React.createElement('li', null, 'A detailed post page with author bio, labels, and social sharing buttons.'),
                  React.createElement('li', null, 'A multi-column footer.'),
                  React.createElement('li', null, 'Full responsiveness.')
                )
              )
            },
            {
              heading: 'This lesson is a work in progress and will be expanded with detailed steps and code for each feature.',
              content: React.createElement('p', null, ''),
            }
          ],
        },
      },
      {
        slug: 'other-blogger-features',
        title: 'Other Blogger Features',
        description: 'Learn about other important platform features like custom domains and analytics.',
        content: {
          introduction: 'Beyond the theme, Blogger provides several powerful settings in the dashboard that you should be aware of.',
          sections: [
            {
              heading: 'Custom Domain',
              content: React.createElement('p', null, 'In "Settings" -> "Publishing", you can map a custom domain (e.g., `www.yourname.com`) to your blog instead of using the default `.blogspot.com` address. This is highly recommended for any professional site.'),
            },
            {
              heading: 'Google Analytics',
              content: React.createElement('p', null, 'In "Settings" -> "Basic", you can add your Google Analytics Measurement ID to track your blog\'s traffic and user behavior.'),
            },
            {
              heading: 'Multi-Author Support',
              content: React.createElement('p', null, 'In "Settings" -> "Permissions", you can invite other Google users to be authors or administrators on your blog, making it easy to run a collaborative publication.'),
            },
          ],
        },
      },
    ]
  },
  {
    title: 'Module 9: Feeds & Integration',
    lessons: [
       {
        slug: 'working-with-blogger-feeds',
        title: 'Working with Blogger Feeds (Atom & RSS)',
        description: 'Learn how to access your blog\'s content programmatically using Blogger\'s built-in Atom and RSS feeds for syndication and integration.',
        content: {
          introduction: 'Every Blogger blog has built-in feeds that provide your content in a machine-readable XML format. This is incredibly useful for content syndication (e.g., allowing people to subscribe in a feed reader like Feedly) and for integrating your blog content into other websites or applications.',
          sections: [
            {
              heading: 'The Main Post Feed: `feeds/posts/default`',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'This is the primary feed that contains the full content of your most recent posts. By default, it uses the Atom 1.0 format.'),
                React.createElement('p', { className: 'mt-2' }, 'You can access it using the following URL structure:'),
                React.createElement('ul', { className: "list-disc list-inside space-y-1 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('code', null, 'http://<your-blog-name>.blogspot.com/feeds/posts/default')),
                  React.createElement('li', null, 'For an RSS 2.0 feed, simply add the ', React.createElement('code', null, '?alt=rss'), ' parameter: ', React.createElement('code', null, '.../feeds/posts/default?alt=rss'))
                ),
                React.createElement('p', { className: 'mt-2' }, React.createElement('strong', null, 'When to use it:'), ' Use this feed when you need the complete post content, including the full body HTML, author information, comments, and labels.')
              )
            },
            {
              heading: 'The Summary Feed: `feeds/summary`',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'This feed is a lightweight alternative to the main post feed. Instead of the full post content, it provides a short summary or snippet of each post.'),
                React.createElement('p', { className: 'mt-2' }, 'The URL structure is: ', React.createElement('code', null, 'http://<your-blog-name>.blogspot.com/feeds/summary')),
                React.createElement('p', { className: 'mt-2' }, React.createElement('strong', null, 'When to use it:'), ' This feed is ideal when you only need post titles, links, and a brief description. Because it contains less data, it loads faster and is more efficient. It\'s perfect for creating a "Latest Posts" widget on another website or for applications where bandwidth is a concern.')
              )
            },
            {
              heading: 'Customizing Feeds with Parameters',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'You can customize any feed by adding query parameters to the URL to filter the results:'),
                React.createElement('ul', { className: "list-disc list-inside space-y-1 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('code', null, '?max-results=5'), ': Limits the number of posts returned to 5.'),
                  React.createElement('li', null, React.createElement('code', null, '?orderby=updated'), ': Sorts posts by their last updated time instead of the default published time.'),
                  React.createElement('li', null, 'To get posts from a specific label, use the format: ', React.createElement('code', null, '/feeds/posts/default/-/LabelName'))
                )
              )
            }
          ],
          codeExamples: [
            {
              title: 'Example Feed URLs',
              language: 'html',
              code: `<!-- Full content feed (Atom 1.0) -->
http://your-blog-name.blogspot.com/feeds/posts/default

<!-- Full content feed (RSS 2.0) -->
http://your-blog-name.blogspot.com/feeds/posts/default?alt=rss

<!-- Summary feed -->
http://your-blog-name.blogspot.com/feeds/summary

<!-- Get the 3 newest posts from the "Tutorials" label in RSS format -->
http://your-blog-name.blogspot.com/feeds/posts/default/-/Tutorials?max-results=3&alt=rss`
            }
          ],
          tips: [
            'You can control your blog\'s feed settings in the Blogger dashboard under "Settings" > "Other" > "Site Feed" to set the amount of content shared (Full, Short, or None).',
            'Most modern feed readers and services can handle both Atom and RSS formats, but Atom is generally considered more modern and robust.'
          ],
          exercises: [
            'Find the main RSS feed for your test blog and open it in your browser to inspect the XML structure.',
            'Create a new label called "Featured" on your test blog, apply it to two posts, and then construct a feed URL that shows only posts with that label.'
          ]
        }
      }
    ]
  },
  {
    title: 'Module 10: Building Dynamic Widgets',
    lessons: [
      {
        slug: 'how-to-create-dynamic-widgets',
        title: 'How to Create Dynamic Widgets',
        description: 'Learn the foundational principles of creating widgets that are customizable and context-aware.',
        content: {
          introduction: 'Dynamic widgets are the cornerstone of a professional Blogger theme. They allow users to customize their site from the Layout dashboard and display different content based on the context (e.g., showing a welcome message only on the homepage). This lesson covers the core concepts.',
          sections: [
            {
              heading: 'The Anatomy of a Dynamic Widget',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'A dynamic widget relies on three key Blogger features working together:'),
                React.createElement('ul', { className: "list-disc list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, '`<b:section>`:'), ' The container in your theme that allows users to add/move widgets in the Layout editor.'),
                  React.createElement('li', null, React.createElement('strong', null, '`<b:widget>`:'), ' The widget itself. Its settings (like the title) can be edited by the user.'),
                  React.createElement('li', null, React.createElement('strong', null, 'Conditional Tags (`<b:if>`) and Data Tags (`data:...`):'), ' The logic inside the widget that changes what is displayed based on the current page or other conditions.')
                )
              ),
            },
            {
              heading: 'Making Widgets Context-Aware',
              content: React.createElement('p', null, 'The most common way to make a widget dynamic is to wrap its content in a conditional `b:if` tag. You can check the page type, whether the user is on the homepage, or if a post has certain features.'),
            },
          ],
          codeExamples: [
            {
              title: 'Widget Showing Different Titles',
              language: 'xml',
              code: `<!-- This widget is placed in a section, e.g., the sidebar -->
<b:widget id='HTML10' type='HTML' title='Welcome'>
  <b:includable id='main'>
    <b:if cond='data:view.isHomepage'>
      <!-- On the homepage, show the user-configured widget title -->
      <h2><data:widget.title/></h2>
      <div class='widget-content'>
        Welcome to our blog! Check out our latest posts.
      </div>
    <b:elseif cond='data:view.isPost'/>
       <!-- On a post page, show a different title -->
      <h2>About this Post</h2>
       <div class='widget-content'>
        Thanks for reading! Share this post if you liked it.
      </div>
    </b:if>
  </b:includable>
</b:widget>`,
            },
          ],
          tips: ['Always give your sections and widgets clear, unique IDs. This prevents conflicts and makes your Layout editor easier for users to understand.'],
        },
      },
      {
        slug: 'how-to-fetch-all-labels',
        title: 'How to Fetch All Labels/Categories',
        description: 'Display a list of all post categories to help users navigate your blog content.',
        content: {
          introduction: 'In Blogger, Labels serve as categories. Displaying a list of all used labels is a fundamental feature for blog navigation. There are two main ways to achieve this.',
          sections: [
            {
              heading: 'Method 1: The Built-in Label Widget',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'This is the simplest approach. The `Label` widget automatically generates and displays a list of all labels used on your blog, including the number of posts for each.'),
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'In your theme, define a `<b:section>` where you want the labels to appear (e.g., a sidebar).'),
                  React.createElement('li', null, 'Go to the Blogger "Layout" dashboard and click "Add a Gadget" in that section.'),
                  React.createElement('li', null, 'Choose the "Labels" gadget, configure its settings (e.g., display as list or cloud), and save.')
                )
              ),
            },
            {
              heading: 'Method 2: Creating a Custom Label List with `b:loop`',
              content: React.createElement('p', null, 'For full control over the HTML structure and styling, you can create a custom widget that loops through the `data:labels` global variable. This allows you to create unique designs that the default widget does not support.'),
            },
          ],
          codeExamples: [
            {
              title: 'Custom HTML Widget to Loop Through All Labels',
              language: 'xml',
              code: `<b:widget id='HTML11' type='HTML' title='All Categories'>
  <b:includable id='main'>
    <div class='widget-content'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <a expr:href='data:label.url'><data:label.name/></a>
            <span>(<data:label.count/>)</span>
          </li>
        </b:loop>
      </ul>
    </div>
  </b:includable>
</b:widget>`,
            },
          ],
          tips: ['The `data:labels` variable is sorted alphabetically by default. If you need a different sorting order, you will have to use JavaScript to fetch the feed and sort it manually.'],
        },
      },
      {
        slug: 'how-to-create-search-widget',
        title: 'How to Create a Dynamic Search Widget',
        description: 'Implement a user-friendly search bar that integrates with Blogger\'s search functionality.',
        content: {
          introduction: 'A search bar is a crucial tool for blogs with a lot of content. You can either use the default widget or build a custom form for better integration with your theme\'s design.',
          sections: [
            {
              heading: 'Understanding Blogger Search',
              content: React.createElement('p', null, 'Blogger handles search via a specific URL path: `/search`. Any search query needs to be sent to this path with a query parameter named `q`. For example, searching for "theme" results in the URL: `yourblog.blogspot.com/search?q=theme`.'),
            },
            {
              heading: 'Method 1: The Built-in Search Gadget',
              content: React.createElement('p', null, 'The easiest way is to add the "Search" gadget from the Layout dashboard. It provides a simple input field and button that is already configured to work correctly.'),
            },
            {
              heading: 'Method 2: Building a Custom Search Form',
              content: React.createElement('p', null, 'To perfectly match your theme\'s design, you can create a custom HTML `<form>` inside an HTML/JavaScript widget. The key is to set the `action` attribute dynamically to point to your blog\'s search path.'),
            },
          ],
          codeExamples: [
            {
              title: 'Custom Search Form HTML',
              language: 'html',
              code: `<!-- This code goes inside an HTML/JavaScript Widget -->
<form class='custom-search-form' expr:action='data:blog.homepageUrl + "search"'>
  <input name='q' type='text' placeholder='Search this blog...'/>
  <button type='submit'>
    <!-- You can use an SVG icon here -->
    Search
  </button>
</form>`,
            },
          ],
          exercises: ['Create a custom search form in your header section and style it to match your theme.'],
        },
      },
      {
        slug: 'how-to-create-contact-form-widget',
        title: 'How to Create a Customizable Contact Form Widget',
        description: 'Allow users to get in touch by adding a simple or advanced contact form.',
        content: {
          introduction: 'A contact form is essential for user feedback and inquiries. Blogger provides a simple built-in solution, but for more complex needs, third-party services are a great option.',
          sections: [
            {
              heading: 'Method 1: Blogger\'s Contact Form Gadget',
              content: React.createElement(React.Fragment, null,
                React.createElement('p', null, 'This widget is the quickest way to add a contact form. It includes fields for Name, Email, and Message. Submissions are automatically sent to the blog administrator\'s email.'),
                React.createElement('p', {className: 'mt-2'}, 'Simply add the "Contact Form" gadget from the Layout dashboard to any section. It is often placed on its own static page titled "Contact".'),
              )
            },
            {
              heading: 'Method 2: Embedding a Third-Party Form',
              content: React.createElement('p', null, 'For advanced features like file uploads, conditional logic, or integration with other services, you can use a form builder like Google Forms, JotForm, or Tally. These services provide an HTML embed code that you can paste into an HTML/JavaScript widget.'),
            },
          ],
          tips: ['While you can style the built-in contact form with CSS, you cannot add or remove fields. If you need custom fields, a third-party service is the best choice.'],
        },
      },
      {
        slug: 'how-to-create-newsletter-widget',
        title: 'How to Create a Newsletter Subscriber Widget',
        description: 'Capture visitor emails and build an audience with an integrated newsletter subscription form.',
        content: {
          introduction: 'Building an email list is one of the most effective ways to grow your audience. You can easily add a newsletter signup form to your Blogger theme by integrating with an email marketing service.',
          sections: [
            {
              heading: 'Why Use a Third-Party Service?',
              content: React.createElement('p', null, 'While Blogger has a "Follow by Email" widget, it is based on the older FeedBurner service and offers limited functionality. Professional services like Mailchimp, ConvertKit, or MailerLite provide robust tools for managing subscribers, sending custom newsletters, and viewing analytics.'),
            },
            {
              heading: 'Implementation Steps',
              content: React.createElement(React.Fragment, null,
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'Sign up for an email marketing service of your choice (e.g., Mailchimp).'),
                  React.createElement('li', null, 'Create an audience or list for your blog subscribers.'),
                  React.createElement('li', null, 'Design a signup form and get the HTML embed code.'),
                  React.createElement('li', null, 'In your Blogger Layout dashboard, add an "HTML/JavaScript" gadget where you want the form to appear.'),
                  React.createElement('li', null, 'Paste the embed code into the widget and save.')
                )
              ),
            },
          ],
          codeExamples: [
            {
              title: 'Example Embedded Form from Mailchimp',
              language: 'html',
              code: `<!-- This is a simplified example. Your provider will give you the exact code. -->
<div id="mc_embed_signup">
  <form action="YOUR_UNIQUE_MAILCHIMP_FORM_URL" method="post" target="_blank">
      <h2>Subscribe to our newsletter</h2>
      <div class="mc-field-group">
        <label for="mce-EMAIL">Email Address</label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
      </div>
      <div class="clear">
        <input type="submit" value="Subscribe" name="subscribe" class="button">
      </div>
  </form>
</div>`,
            },
          ],
        },
      },
      {
        slug: 'how-to-make-navigation-menus-dynamic',
        title: 'How to Make Navigation Menus Dynamic',
        description: 'Create user-editable navigation menus that can be managed from the Layout dashboard.',
        content: {
          introduction: 'Hard-coding menu links in your theme is inflexible. The best practice is to use widgets that allow the blog owner to easily add, remove, and reorder links themselves without touching any code.',
          sections: [
            {
              heading: 'The Right Tools: `Pages` and `LinkList` Widgets',
              content: React.createElement(React.Fragment, null,
                React.createElement('ul', { className: "list-disc list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, React.createElement('strong', null, 'Pages Widget:'), ' Automatically generates a menu from your blog\'s static pages. It\'s simple and perfect for basic navigation (e.g., Home, About, Contact).'),
                  React.createElement('li', null, React.createElement('strong', null, 'LinkList Widget:'), ' The most flexible option. It allows the user to create a list of any links they want—links to labels, specific posts, external websites, etc. This is the preferred method for primary navigation menus.')
                )
              ),
            },
            {
              heading: 'Implementation',
              content: React.createElement('p', null, 'In your theme\'s HTML, create a dedicated `<b:section>` in your header or footer for the menu. Give it a descriptive ID like `nav-menu-section`. Then, from the Layout dashboard, the user can add a `LinkList` or `Pages` widget to that section.'),
            },
          ],
          codeExamples: [
            {
              title: 'Header Section for a Dynamic Menu',
              language: 'xml',
              code: `<header>
  <div class='logo'>...</div>
  <nav class='main-nav'>
    <!-- User will add a LinkList widget here from the dashboard -->
    <b:section id='nav-menu-section' maxwidgets='1' showaddelement='yes'>
      <b:widget id='LinkList1' type='LinkList' title='Main Menu' locked='false'/>
    </b:section>
  </nav>
</header>`,
            },
          ],
          tips: ['You can use CSS to style the `LinkList` widget to look like a professional navigation bar, including dropdown menus with some clever CSS and/or JavaScript.'],
        },
      },
      {
        slug: 'how-to-add-dynamic-advertising-widgets',
        title: 'How to Add Dynamic Advertising Widgets',
        description: 'Learn to place and control advertising widgets for monetizing your blog.',
        content: {
          introduction: 'Monetizing your theme is a common requirement. You can make ad placements dynamic by allowing users to add ad code via the Layout editor and by controlling where ads appear with conditional logic.',
          sections: [
            {
              heading: 'Method 1: The AdSense Widget',
              content: React.createElement('p', null, 'If you use Google AdSense, this is the easiest method. Add the `AdSense` gadget from the Layout dashboard. It integrates directly with your AdSense account and can automatically place responsive ads in the chosen location.'),
            },
            {
              heading: 'Method 2: Custom Ads with the HTML/JavaScript Widget',
              content: React.createElement('p', null, 'For other ad networks or custom banner ads, the user can paste the provided ad code (usually a `<script>` or `<img>` tag) into an `HTML/JavaScript` widget.'),
            },
            {
              heading: 'Conditional Ad Placement',
              content: React.createElement('p', null, 'You can create more strategic ad placements. For example, you can insert an ad slot inside your post content after a certain paragraph using JavaScript, or use `b:if` to show an ad only on specific page types.'),
            },
          ],
          codeExamples: [
            {
              title: 'Showing an Ad Widget Only on Post and Static Pages',
              language: 'xml',
              code: `<!-- This section is in your sidebar -->
<b:section id='sidebar-ads' showaddelement='yes'>
  <!-- User adds an AdSense or HTML widget here -->
  <b:widget id='AdSense1' type='AdSense' title='Advertisement'>
    <b:includable id='main'>
      <!-- Only render the ad if we are on a post or static page -->
      <b:if cond='data:view.isPost or data:view.isPage'>
        <div class='widget-content'>
          <data:content/>
        </div>
      </b:if>
    </b:includable>
  </b:widget>
</b:section>`,
            },
          ],
        },
      },
      {
        slug: 'how-to-create-featured-recent-posts-widgets',
        title: 'How to Create Dynamic Featured & Recent Posts Widgets',
        description: 'Engage readers by showcasing popular, recent, or featured content using JavaScript and Blogger\'s JSON feed.',
        content: {
          introduction: 'Widgets for "Recent Posts" or "Featured Posts" are staples of modern blogs. While Blogger doesn\'t provide a direct data tag for this outside the main post loop, we can easily create them using JavaScript and the built-in JSON feed.',
          sections: [
            {
              heading: 'The Power of the JSON Feed',
              content: React.createElement(React.Fragment, null, 
                React.createElement('p', null, 'Blogger provides a JSON version of your blog\'s feed, which is perfect for fetching post data with JavaScript. You can get recent posts or filter posts by a specific label (e.g., "Featured").'),
                React.createElement('p', {className: 'mt-2'}, 'The feed URL looks like this: ', React.createElement('code', null, '/feeds/posts/default?alt=json-in-script&max-results=5'))
              )
            },
            {
              heading: 'Step-by-Step Implementation',
              content: React.createElement(React.Fragment, null,
                React.createElement('ol', { className: "list-decimal list-inside space-y-2 pl-4 mt-2" },
                  React.createElement('li', null, 'Add an `HTML/JavaScript` widget in your Layout. Give it a container element with a unique ID, like `<div id="recent-posts-container"></div>`.'),
                  React.createElement('li', null, 'Below the container, add a `<script>` tag.'),
                  React.createElement('li', null, 'Inside the script, write a function that fetches the JSON feed URL.'),
                  React.createElement('li', null, 'The function will parse the JSON, loop through the `entry` array, and build an HTML list (`<ul>`) of post titles and links.'),
                  React.createElement('li', null, 'Finally, inject this HTML list into the container element.')
                )
              ),
            },
          ],
          codeExamples: [
            {
              title: 'JavaScript for a Recent Posts Widget',
              language: 'javascript',
              code: `// This code goes inside a <script> tag in an HTML/JavaScript widget
const container = document.getElementById('recent-posts-container');
const blogUrl = 'https://' + window.location.hostname;
const feedUrl = blogUrl + '/feeds/posts/default?alt=json-in-script&max-results=5';

fetch(feedUrl)
  .then(response => response.text())
  .then(text => {
    // The response is JSONP, so we need to parse it carefully
    const json = JSON.parse(text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1));
    const entries = json.feed.entry || [];
    
    let html = '<ul>';
    entries.forEach(entry => {
      const postTitle = entry.title.$t;
      const postLink = entry.link.find(link => link.rel === 'alternate').href;
      html += \`<li><a href="\${postLink}">\${postTitle}</a></li>\`;
    });
    html += '</ul>';
    
    container.innerHTML = html;
  })
  .catch(error => console.error('Error fetching recent posts:', error));`,
            },
          ],
          tips: ['To create a "Featured Posts" widget, simply modify the feed URL to filter by a label, like `/feeds/posts/default/-/Featured?alt=json-in-script`.'],
        },
      },
    ]
  }
];