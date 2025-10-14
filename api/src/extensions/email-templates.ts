/**
 * Email template service for newsletter
 */

export default {
  getWelcomeEmailTemplate: (email: string) => {
    return {
      subject: 'Welcome to Latten Creative Newsletter! 🎨',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Latten Creative</title>
          <style>
            body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9f6f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background-color: #000000; color: #ffffff; padding: 40px 30px; text-align: center; }
            .content { padding: 40px 30px; }
            .footer { background-color: #f9f6f4; padding: 30px; text-align: center; font-size: 14px; color: #666666; }
            .button { display: inline-block; padding: 15px 30px; background-color: #ff6f61; color: #ffffff; text-decoration: none; border-radius: 4px; margin: 20px 0; }
            h1 { margin: 0; font-size: 28px; }
            h2 { color: #333333; font-size: 24px; margin-bottom: 20px; }
            p { line-height: 1.6; color: #555555; margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Latten Creative! 🎨</h1>
            </div>
            <div class="content">
              <h2>Thank you for subscribing!</h2>
              <p>We're thrilled to have you join our creative community. You'll now receive:</p>
              <ul>
                <li>💡 <strong>Latest insights</strong> on design and development</li>
                <li>📚 <strong>Industry trends</strong> and best practices</li>
                <li>🚀 <strong>Behind-the-scenes</strong> content from our projects</li>
                <li>🎯 <strong>Actionable tips</strong> to grow your business</li>
              </ul>
              <p>We promise to deliver valuable content and respect your inbox. No spam, just quality insights to help you create something amazing.</p>
              <div style="text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog" class="button">Explore Our Blog</a>
              </div>
              <p><small>If you didn't subscribe to this newsletter, you can safely ignore this email or <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/unsubscribe?email=${encodeURIComponent(email)}">unsubscribe here</a>.</small></p>
            </div>
            <div class="footer">
              <p><strong>Latten Creative</strong><br>
              Creating digital experiences that matter</p>
              <p>
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}">Website</a> |
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/contact-us">Contact</a> |
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/privacy-policy">Privacy Policy</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };
  },

  getNewsletterTemplate: (subject: string, content: string, posts: any[] = []) => {
    return {
      subject,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9f6f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background-color: #000000; color: #ffffff; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .footer { background-color: #f9f6f4; padding: 30px; text-align: center; font-size: 14px; color: #666666; }
            .post-item { border: 1px solid #eee; border-radius: 8px; margin-bottom: 20px; overflow: hidden; }
            .post-image { width: 100%; height: 200px; object-fit: cover; }
            .post-content { padding: 20px; }
            .button { display: inline-block; padding: 12px 24px; background-color: #ff6f61; color: #ffffff; text-decoration: none; border-radius: 4px; }
            h1 { margin: 0; font-size: 24px; }
            h2 { color: #333333; }
            h3 { color: #333333; margin-bottom: 10px; }
            p { line-height: 1.6; color: #555555; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Latten Creative Newsletter</h1>
            </div>
            <div class="content">
              ${content}
              
              ${posts.length > 0 ? `
                <h2>Latest Posts</h2>
                ${posts.map(post => `
                  <div class="post-item">
                    ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ''}
                    <div class="post-content">
                      <h3>${post.title}</h3>
                      <p>${post.description}</p>
                      <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${post.slug}" class="button">Read More</a>
                    </div>
                  </div>
                `).join('')}
              ` : ''}
            </div>
            <div class="footer">
              <p><strong>Latten Creative</strong><br>
              Creating digital experiences that matter</p>
              <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/unsubscribe">Unsubscribe</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    };
  },
};