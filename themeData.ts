
export const starterThemeXML = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>

<head>
  <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
  <title><data:blog.pageTitle/></title>
  
  <!-- Dynamic Meta Description -->
  <b:if cond='data:view.isPost or data:view.isPage'>
    <meta expr:content='data:post.snippet' name='description'/>
  <b:elseif cond='data:view.isHomepage'/>
    <meta expr:content='data:blog.description' name='description'/>
  </b:if>
  
  <b:skin><![CDATA[
    /* Basic Reset & Typography */
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      background: #f4f5f7;
      color: #172b4d;
      line-height: 1.6;
    }
    a {
      color: #0052cc;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    /* Header */
    .header-widget {
      background: #ffffff;
      padding: 20px 30px;
      margin-bottom: 30px;
      border: 1px solid #dfe1e6;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .header-widget h1.title {
      margin: 0;
      font-size: 32px;
    }
    .header-widget .description {
      margin: 5px 0 0 0;
      color: #6b778c;
    }
    
    /* Main Layout */
    .content-wrapper {
      display: flex;
      gap: 30px;
    }
    .main-content {
      flex: 3; /* Takes up ~75% of the space */
    }
    .sidebar-content {
      flex: 1; /* Takes up ~25% of the space */
    }
    
    /* Post Styles */
    .post {
      background: #ffffff;
      margin-bottom: 30px;
      border: 1px solid #dfe1e6;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      transition: box-shadow 0.2s ease-in-out;
    }
    .post:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .post-thumbnail img {
      width: 100%;
      display: block;
      border-bottom: 1px solid #dfe1e6;
    }
    .post-content {
      padding: 25px 30px;
    }
    .post-title {
      margin: 0 0 10px 0;
      font-size: 28px;
    }
    .post-title a {
      color: #172b4d;
    }
    .post-meta {
      font-size: 13px;
      color: #6b778c;
      margin-bottom: 15px;
    }
    .post-snippet {
      color: #42526e;
    }
    .read-more {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 18px;
      background: #0052cc;
      color: #ffffff;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.2s;
    }
    .read-more:hover {
      background: #0065ff;
      text-decoration: none;
    }
    
    /* Sidebar Widget Styles */
    .sidebar-content .widget {
      background: #ffffff;
      padding: 25px;
      margin-bottom: 30px;
      border: 1px solid #dfe1e6;
      border-radius: 8px;
    }
    .sidebar-content .widget h2.title {
      margin-top: 0;
      font-size: 20px;
      border-bottom: 2px solid #0052cc;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .sidebar-content .widget ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .sidebar-content .widget li {
        padding: 5px 0;
    }
    
    /* Responsive */
    @media screen and (max-width: 860px) {
      .content-wrapper {
        flex-direction: column;
      }
    }
    
  ]]></b:skin>
</head>

<body>
  <div class='container'>
  
    <!-- Header Section -->
    <b:section class='header' id='header' maxwidgets='1' showaddelement='no'>
      <b:widget id='Header1' locked='true' title='My News Blog' type='Header'>
        <b:includable id='main'>
          <div class='header-widget'>
            <h1 class='title'><a expr:href='data:blog.homepageUrl'><data:title/></a></h1>
            <p class='description'>A sample description for the blog</p>
          </div>
        </b:includable>
      </b:widget>
    </b:section>
    
    <div class='content-wrapper'>
    
      <!-- Main Content Section -->
      <div class='main-content'>
        <b:section class='main' id='main' showaddelement='no'>
          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'>
            <b:includable id='main'>
              <!-- This is a placeholder for post data. The live preview won't have real post data from Blogger. -->
              <div class='post'>
                <div class='post-content'>
                  <h2 class='post-title'><a href='#'>Your Post Title Goes Here</a></h2>
                  <div class='post-meta'>By John Doe | September 1, 2023</div>
                  <div class='post-snippet'>This is a sample post snippet. Your actual post content will be rendered here. Edit the XML on the left to see how it affects the layout and styling.</div>
                  <a href='#' class='read-more'>Read More</a>
                </div>
              </div>
              <div class='post'>
                <div class='post-thumbnail'>
                    <img src="https://picsum.photos/id/1015/720/405" alt="Sample thumbnail"/>
                </div>
                <div class='post-content'>
                  <h2 class='post-title'><a href='#'>Another Post With an Image</a></h2>
                  <div class='post-meta'>By Jane Smith | August 28, 2023</div>
                  <div class='post-snippet'>This post includes a sample thumbnail. The real theme uses Blogger's data tags to dynamically fetch post images.</div>
                  <a href='#' class='read-more'>Read More</a>
                </div>
              </div>

            </b:includable>
          </b:widget>
        </b:section>
      </div>
      
      <!-- Sidebar Section -->
      <div class='sidebar-content'>
        <b:section class='sidebar' id='sidebar' preferred='yes' showaddelement='yes'>
          <b:widget id='Label1' locked='false' title='Categories' type='Label'>
            <b:includable id='main'>
              <div class='widget'>
                <h2 class='title'><data:widget.title/></h2>
                <ul>
                  <li><a href='#'>Technology (5)</a></li>
                  <li><a href='#'>Tutorials (3)</a></li>
                  <li><a href='#'>Reviews (7)</a></li>
                </ul>
              </div>
            </b:includable>
          </b:widget>
          <b:widget id='HTML1' locked='false' title='About' type='HTML'>
            <b:includable id='main'>
              <div class='widget'>
                <h2 class='title'><data:widget.title/></h2>
                <div class='widget-content'>
                  This is a sample "About Me" widget. You can add any HTML content here.
                </div>
              </div>
            </b:includable>
          </b:widget>
        </b:section>
      </div>
      
    </div>
    
  </div>
</body>
</html>
`;
