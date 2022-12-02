import './Blog.css'
import React from 'react';

const Blog = () => {
    return (
        <div className='blog-container max-w-screen-2xl mx-auto'>
            <div className='blg'>
                <h1> what is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. If the server specifies a single origin (that may dynamically change based on the requesting origin as part of an allowlist) rather than the "*" wildcard, then the server should also include Origin in the Vary response header to indicate to clients that server responses will differ based on the value of the Origin request header.</p>
            </div>
            <div className='blg'>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>In the present era, user authentication is one of the most important requirements for Android apps. It is essential to authenticate users, and it is much harder if we have to write all this code on our own. This is done very easily with the help of Firebase. Being able to authenticate our users securely, it offers a customized experience to them based on their interests and preferences. We can ensure that they have no problems accessing their private data while using our app from multiple devices. Firebase Authentication provides all the server-side stuff for authenticating the user. Firebase Authentication becomes easy with SDK. It makes API easy to use. Firebase Authentication also provides some user interface libraries which enable screens for us when we are logging it. Firebase authentication supports authentication using a password, phone numbers, popular identity provider like Google, Facebook, and Twitter, etc. We can sign in users to our app by using the FirebaseUI. It handles the UI flows for signing in user with an email address and password, phone numbers, and popular providers, including Google sign-In and Facebook Login. It can also handle cases like account recovery. It is not required to design a UI since it is already provided for us. It means we don't have to write the activities. We can also sign-in users using the Firebase Authentication SDK to integrate one or several sign-in methods into our app manually.
                </p>
            </div>
            <div className='blg'>
                <h1>How does the private route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in) Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page. In this tutorial, you are going to learn how you create protected routes in a React application.
                </p>
            </div>
            <div className='blg'><h1>
                What is Node? How does Node work?
            </h1>
                <p>
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side
                </p>
            </div>
            
        </div>
    );
};

export default Blog;