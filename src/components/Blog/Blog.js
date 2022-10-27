import React from "react";

const Blog = () => {
  return (
    <div className="p-5 pb-20 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="border-4 rounded-lg bg-gray-400 p-10   lg:w-2/4 mx-auto mb-5">
        <h2 className="text=4xl font-bold pb-4">Q-1 : what is cors?</h2>
        <hr />
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>

      <div className="border-4 rounded-lg bg-gray-400 p-10 lg:w-2/4 mx-auto mb-5">
        <h2 className="text=4xl font-bold pb-4">
          Q-2 : Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <hr />
        <p>
          Google Analytics for Firebase allows to track users journey through
          realtime and custom reporting. As mentioned previously, Firebase
          supports IOS, Android, Web, and Unity products, allowing you to track
          users across a wide range of devices. <br /> Most apps have some form
          of authentication feature that is necessary to identify the user.
          Thanks to Firebase’s easy-to-use SDK, ready-made UI libraries, and
          backend services, it is possible to set up the whole authentication
          process in just a couple of minutes. Firebase allows users to
          authenticate with their phone number, email, Google, and Facebook
          accounts.
          <br />
          Single-Factor/Primary Authentication. ... <br /> Two-Factor
          Authentication (2FA) ... <br />
          Single Sign-On (SSO) ...
          <br /> Multi-Factor Authentication (MFA) ...
          <br />
          Password Authentication Protocol (PAP) ...
          <br /> Challenge Handshake Authentication Protocol (CHAP) ...
          <br /> Extensible Authentication Protocol (EAP)
        </p>
      </div>

      <div className="border-4 rounded-lg bg-gray-400 p-10 lg:w-2/4 mx-auto">
        <h2 className="text=4xl font-bold pb-4">
          Q-3 : How does the private route work?
        </h2>
        <hr />
        <p>
          Private Routes vary based on the Apps, For example, Dashboard, User
          Profile, App Settings, Home etc. In simple words, These routes can be
          accessed only after login. The constraints for Public and Private
          routes are that Public routes should not be accessed after login and
          Private routes should not be accessible before login.The private route
          component is similar to the public route, the only change is that
          redirect URL and authenticate condition. If the user is not
          authenticated he will be redirected to the login page and the user can
          only access the authenticated routes If he is authenticated (Logged
          in).
        </p>
      </div>
      <div className="border-4 rounded-lg bg-gray-400 p-10 lg:w-2/4 mx-auto">
        <h2 className="text=4xl font-bold pb-4">
          Q-3 :What is Node? How does Node work?
        </h2>
        <hr />
        <p>
          Node.js is a JavaScript runtime environment that achieves low latency
          and high throughput by taking a “non-blocking” approach to serving
          requests. In other words, Node.js wastes no time or resources on
          waiting for I/O requests to return. <br />
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
