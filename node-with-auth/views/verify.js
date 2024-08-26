export const verify = (link) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          .content {
            margin-left: auto;
            margin-right: auto;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            margin-top: 1.3rem;
            border-radius: 20px;
            background-color: #f6f8fe;
            padding: 0.5% 10% 0.5% 10%;
            font-weight: 500;
            width: 50%;
            min-width: 300px;
          }
          .er {
            direction: rtl;
          }
        </style>
  
      </head>
      <body>
        <div class="whole_wrapper">
          <div class="content">            
            <p class="en">
            Hello applicant,
            Welcome to SignalGCB!
            Click on the below verification link to access your account:
            </p>
            <a href="${link}"><div class="the_button">Verify my email</div></a>

            <p class="arr">مرحبا مقدم الطلب،
            أهلاً وسهلاً بك في موقع SignalGCB!
            إضغط على الرابط أدناه للتمكن من الدخول إلى حسابك:</p>
            <a href="${link}"><div class="the_button">تحقق من بريدي الإلكتروني</div></a>
          </div>
        </div>
      </body>
    </html>
    `;
};
